import React from 'react';
import Card from './Card';

const ListView = ({ data }) => {
  return (
    <div className="space-y-4">
      {data.map((item) => (
        <Card key={item.id} item={item} isGridView={false} />
      ))}
    </div>
  );
};

export default ListView;
