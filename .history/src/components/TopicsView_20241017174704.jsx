import React from 'react';

const TopicsView = ({ selectedTopics, toggleTopic, topics }) => {
  return (
    <div className="w-1/2 p-4 border border-gray-300 rounded-lg bg-white shadow-lg mt-12">
      <h2 className="text-lg font-semibold mb-2 text-left">Topics</h2>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic, index) => (
          <span
            key={index}
            className={`cursor-pointer border rounded-full px-3 py-1 text-sm ${
              selectedTopics.includes(topic)
                ? 'bg-black text-white'
                : 'border-gray-300 hover:bg-gray-100'
            }`}
            onClick={() => toggleTopic(topic)}
          >
            {selectedTopics.includes(topic) ? '−' : '+'} {topic}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TopicsView;
