
import { useState, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaThList } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { IoFilter } from "react-icons/io5";
import InfiniteScroll from "react-infinite-scroll-component";
import { toggleTopic } from "../redux/slices/articlesSlice";
import { toggleView, toggleFilter } from "../redux/slices/uiSlice";
import { throttle } from "lodash";
import { motion, AnimatePresence } from "framer-motion";

// Lazy Load Components
const ListView = lazy(() => import("./ListView"));
const GridView = lazy(() => import("./GridView"));
const TopicsView = lazy(() => import("./TopicsView"));

const Container = () => {
  const dispatch = useDispatch();

  const { articles, selectedTopics } = useSelector((state) => state.articles);
  const { isGridView, isFilterOpen } = useSelector((state) => state.ui);

  const [itemsToShow, setItemsToShow] = useState(6);

  // Throttle Topic Selection
  const throttledToggleTopic = throttle((topic) => {
    dispatch(toggleTopic(topic));
  }, 500);

  // Fetch More Data for Infinite Scrolling
  const fetchMoreData = () => {
    setTimeout(() => {
      setItemsToShow((prev) => prev + 6);
    }, 1500);
  };

  // Filter Articles Based on Selected Topics
  const filteredData = articles.filter(
    (item) => selectedTopics.length === 0 || selectedTopics.includes(item.topic)
  );

  return (
    <motion.div
      className="outer-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Toggle Buttons */}
      <div className="flex justify-end gap-4 m-5 text-gray-500">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <IoFilter
            className="text-2xl cursor-pointer hover:text-gray-600"
            onClick={() => dispatch(toggleFilter())}
          />
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <BsGridFill
            className={`text-2xl cursor-pointer ${
              isGridView ? "text-black" : "text-gray-500 hover:text-gray-600"
            }`}
            onClick={() => dispatch(toggleView())}
          />
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <FaThList
            className={`text-2xl cursor-pointer ${
              !isGridView ? "text-black" : "text-gray-500 hover:text-gray-600"
            }`}
            onClick={() => dispatch(toggleView())}
          />
        </motion.div>
      </div>

      {/* Content & Topics Sidebar */}
      <div className="flex justify-end gap-2 lg:gap-4 flex-col-reverse lg:flex-row">
        <motion.div
          className={`w-full ${isFilterOpen ? "w-6/12" : "w-full"} px-4`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <InfiniteScroll
            dataLength={itemsToShow}
            next={fetchMoreData}
            hasMore={itemsToShow < filteredData.length}
            loader={
              <motion.h4
                className="text-center font-semibold text-xl"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                Loading...
              </motion.h4>
            }
          >
            <Suspense fallback={<p className="text-center">Loading View...</p>}>
              <AnimatePresence mode="wait">
                {isGridView ? (
                  <motion.div
                    key="grid"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <GridView data={filteredData.slice(0, itemsToShow)} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="list"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ListView
                      data={filteredData.slice(0, itemsToShow)}
                      itemsPerPage={3}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </Suspense>
          </InfiniteScroll>
        </motion.div>

        {/* Topics Filter */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              key="topics"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Suspense fallback={<p className="text-center">Loading Topics...</p>}>
                <TopicsView
                  selectedTopics={selectedTopics}
                  toggleTopic={throttledToggleTopic}
                  topics={["Cancer", "COVID-19", "AI", "Diabetes", "Malaria", "Robotics"]}
                />
              </Suspense>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Container;
