// import { useSelector } from 'react-redux';
// import { useParams } from "react-router-dom";
// import { FaShareSquare } from 'react-icons/fa';
// import sourceIcon from '../assets/images/go-to-source.svg';

// const Article = () => {
//   const { id } = useParams();
//   const articles = useSelector(state => state.articles.articles);
//   const article = articles.find(item => item.id === Number(id));

//   if (!article) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gray-100">
//         <p className="text-xl font-semibold text-gray-700">Article not found</p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-2xl w-full mx-4 mt-10">
//         <img src={article.image || "default-image.jpg"} alt={article.title || "No Title"} className="w-full h-auto" />
//         <div className="p-6">
//           <h2 className="text-2xl font-semibold mb-4">{article.title}</h2>
//           <p className="text-gray-700 mb-3">{article.description || "No Description Available"}</p>
//           <p className="text-gray-700">{article.shortDescription || ""}</p>
//           <div className="mt-4">
//             <span className="text-blue-600">Tags: </span>
//             {article.tags?.map((tag, index) => (
//               <span key={index} className="text-blue-600 text-sm font-medium">{tag}</span>
//             ))}
//           </div>
//           <div className="mt-6 flex justify-center">
//             <a href={article.sourceLink || "#"} className="bg-white-600 text-black font-medium py-2 px-4 rounded hover:bg-gray-200 transition-colors duration-200 flex items-center gap-2" target="_blank" rel="noopener noreferrer">
//               <img src={sourceIcon} alt="Source Icon" className="w-5 h-5" />
//               Go to Source
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Article;


import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { FaShareSquare } from 'react-icons/fa';
import sourceIcon from '../assets/images/go-to-source.svg';

const Article = () => {
  const { id } = useParams();
  const articles = useSelector(state => state.articles.articles);
  const article = articles.find(item => item.id === Number(id));

  if (!article) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-xl font-semibold text-gray-700">Article not found</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
        {/* Responsive Image */}
        <img 
          src={article.image || "default-image.jpg"} 
          alt={article.title || "No Title"} 
          className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover"
        />

        {/* Article Content */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">{article.title}</h2>
          <p className="text-gray-700 mb-3">{article.description || "No Description Available"}</p>
          <p className="text-gray-700">{article.shortDescription || ""}</p>

          {/* Tags Section */}
          {article.tags?.length > 0 && (
            <div className="mt-4">
              <span className="text-blue-600 font-semibold">Tags: </span>
              {article.tags.map((tag, index) => (
                <span key={index} className="text-blue-600 text-sm font-medium mx-1">{tag}</span>
              ))}
            </div>
          )}

          {/* Source Button */}
          <div className="mt-6 flex justify-center">
            <a 
              href={article.sourceLink || "#"} 
              className="bg-gray-200 text-black font-medium py-2 px-4 rounded-md hover:bg-gray-300 transition duration-200 flex items-center gap-2"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src={sourceIcon} alt="Source Icon" className="w-5 h-5" />
              Go to Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
