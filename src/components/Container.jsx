import { useState } from 'react';
import { FaThList } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { IoFilter } from 'react-icons/io5';
import InfiniteScroll from 'react-infinite-scroll-component';
import ListView from './ListView';
import GridView from './GridView';
import TopicsView from './TopicsView';
import dummyData from './Dummy';

const Container = () => {
    const [isGridView, setIsGridView] = useState(true);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedTopics, setSelectedTopics] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(6);

    const toggleTopic = (topic) => {
        setSelectedTopics((prev) =>
            prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
        );
    };

    const fetchMoreData = () => {
        setTimeout(() => {
            setItemsToShow((prev) => prev + 6);
        }, 1500);
    };

    const filteredData = dummyData.articles.filter(
        (item) => selectedTopics.length === 0 || selectedTopics.includes(item.topic)
    );

    return (
        <div className='outer-container'>
            <div className="flex justify-end gap-4 mt-6 mr-44 text-gray-500">
                <IoFilter
                    className="text-2xl cursor-pointer hover:text-gray-600"
                    onClick={() => setIsFilterOpen((prev) => !prev)}
                />
                <BsGridFill
                    className={`text-2xl cursor-pointer ${isGridView ? 'text-black' : 'text-gray-500 hover:text-gray-600'}`}
                    onClick={() => setIsGridView(true)}
                />
                <FaThList
                    className={`text-2xl cursor-pointer ${!isGridView ? 'text-black' : 'text-gray-500 hover:text-gray-600'}`}
                    onClick={() => setIsGridView(false)}
                />
            </div>

            <div className="flex justify-end gap-4">
                <div className={`w-full ${isFilterOpen ? 'w-6/12' : 'w-full'} p-4`}>
                    <InfiniteScroll
                        dataLength={itemsToShow}
                        next={fetchMoreData}
                        hasMore={itemsToShow < filteredData.length}
                        loader={<h4>Loading...</h4>}
                    >
                        {isGridView ? (
                            <GridView data={filteredData.slice(0, itemsToShow)} />
                        ) : (
                            <ListView data={filteredData.slice(0, itemsToShow)} itemsPerPage={3} />
                        )}
                    </InfiniteScroll>
                </div>

                {isFilterOpen && (
                    <TopicsView
                        selectedTopics={selectedTopics}
                        toggleTopic={toggleTopic}
                        topics={dummyData.topics}
                    />
                )}
            </div>
        </div>
    );
};

export default Container;
