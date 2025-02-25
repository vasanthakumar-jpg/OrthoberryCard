import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTopic } from "../redux/slices/articlesSlice";
import { motion } from "framer-motion";

const TopicsView = () => {
  const dispatch = useDispatch();
  const { selectedTopics } = useSelector((state) => state.articles);
  const topics = ["Cancer", "COVID-19", "AI", "Diabetes", "Malaria", "Robotics"];

  return (
    <motion.div
      className=" lg:h-[85%] p-4 border border-gray-300 rounded-lg bg-white shadow-lg m-5"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-lg font-semibold mb-2 text-left">Topics</h2>
      <motion.div className="flex flex-wrap gap-2">
        {topics.map((topic, index) => (
          <motion.span
            key={index}
            className={`cursor-pointer border rounded-full px-3 py-1 text-sm ${
              selectedTopics.includes(topic)
                ? "bg-black text-white"
                : "border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => dispatch(toggleTopic(topic))}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {selectedTopics.includes(topic) ? "−" : "+"} {topic}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TopicsView;
