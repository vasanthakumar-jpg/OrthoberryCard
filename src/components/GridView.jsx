import { useNavigate } from 'react-router-dom';
import Card from './Card';

const GridView = ({ data }) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/article/${id}`);
  };

  return (
    <div className="mt-8 columns-1 sm:columns-2 md:columns-3 gap-4  ">
      {data.map((item) => (
        <div key={item.id} onClick={() => handleCardClick(item.id)}>
          <Card item={item} isGridView={true} />
        </div>
      ))}
    </div>
  );
};

export default GridView;
