import React from 'react';
import Card from './Card';

const GridView = ({ data }) => {
  return (
    <div className="mt-8 columns-1 sm:columns-2 md:columns-3 gap-4">
      {data.map((item) => (
        <Card key={item.id} item={item} isGridView={true} />
      ))}
    </div>
  );
};

export default GridView;
