// import React from "react";

// const Card = ({ item, isGridView }) => {
//   return (
//     <div
//       className={`relative overflow-hidden rounded-xl border shadow-lg ${
//         isGridView
//           ? 'break-inside-avoid my-5' // Grid View: Avoid breaking inside columns
//           : 'flex gap-4 items-center  p-4' // List View: Flex row layout
//       }`}
//     >
//       {/* Image */}
//       <img
//         src={item.image}
//         alt={item.title}
//         className={`object-cover rounded-xl ${
//           isGridView
//             ? 'w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 transition-transform duration-300 ease-in-out transform hover:scale-105' // Grid View: Full width image
//             : 'w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32' // List View: Fixed size image
//         }`}
//         onError={(e) => {
//           e.target.src = 'https://via.placeholder.com/300x200.png?text=Image+Not+Available';
//         }}
//       />

//       {/* Content */}
//       <div className={`flex-1 ${
//           isGridView
//             ? 'absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 flex flex-col justify-end text-white' // Grid View: Overlay text
//             : 'p-2 text-left' // List View: Normal text
//         }`}
//       >
//         <h2 className={`text-lg font-semibold ${ isGridView ? 'truncate text-white' : 'text-gray-900'  }`} >
//           {item.title}
//         </h2>
//         <p className={`text-sm ${ isGridView ? 'line-clamp-2 text-white' : 'text-gray-700 line-clamp-3' }`} >
//           {item.details}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Card;




import React from "react";
import { motion } from "framer-motion";

const Card = ({ item, isGridView }) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl border shadow-lg ${
        isGridView
          ? "break-inside-avoid my-5" // Grid View: Avoid breaking inside columns
          : "flex gap-4 items-center p-4" // List View: Flex row layout
      }`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={isGridView ? { scale: 1.03 } : { y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <motion.img
        src={item.image}
        alt={item.title}
        className={`object-cover rounded-xl ${
          isGridView
            ? "w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 transition-transform duration-300 ease-in-out transform"
            : "w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32"
        }`}
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/300x200.png?text=Image+Not+Available";
        }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div
        className={`flex-1 ${
          isGridView
            ? "absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 flex flex-col justify-end text-white"
            : "p-2 text-left"
        }`}
      >
        <motion.h2
          className={`text-lg font-semibold ${
            isGridView ? "truncate text-white" : "text-gray-900"
          }`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {item.title}
        </motion.h2>
        <motion.p
          className={`text-sm ${
            isGridView
              ? "line-clamp-2 text-white"
              : "text-gray-700 line-clamp-3"
          }`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {item.details}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Card;
