import { useParams } from 'react-router-dom';
import dummyData from './DummyData';
import { FaShareSquare } from 'react-icons/fa';
import sourceIcon from '../assets/images/go-to-source.svg';

const Article = () => {
  const { id } = useParams();
  const article = dummyData.articles.find((item) => item.id === Number(id));

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-2xl w-full mx-4 mt-36">
        <div className="image-section">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-auto"
          />
        </div>
        <div className="share-container">
          <div className="share-icon">
            <FaShareSquare />
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">{article.title}</h2>
          <p className="text-gray-700 mb-3">{article.description}</p>
          <p className="text-gray-700">{article.shortDescription}</p>

          <div className="mt-4">
            <span className="text-blue-600">Tags: </span>
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className="text-blue-600 text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <a
              href={article.sourceLink}
              className="bg-white-600 text-black font-medium py-2 px-4 rounded hover:bg-gray-200 transition-colors duration-200 flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={sourceIcon}
                alt="Source Icon"
                className="w-5 h-5"
              />
              Go to Source
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Article;
