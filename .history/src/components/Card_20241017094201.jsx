
const Card = ({ item, isGridView }) => {
  return (
    <div className={`relative overflow-hidden mb-4 rounded-xl shadow-lg ${isGridView ? 'break-inside-avoid' : 'flex gap-4 items-center'}`}>
      <img
        src={item.image}
        alt={item.title}
        className={`object-cover rounded-xl ${isGridView ? 'w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-102' : 'w-40 h-24 object-cover'}`}
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300x200.png?text=Image+Not+Available';
        }}
      />
      <div className={`flex-1 ${isGridView ? 'absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 flex flex-col justify-end text-white' : 'p-4 text-left'}`}>
        <h2 className={`text-lg font-medium ${isGridView ? 'mb-2 truncate text-left text-white' : 'text-gray-900'}`}>{item.title}</h2>
        <p className={`text-sm ${isGridView ? 'text-left line-clamp-2 text-white' : 'text-gray-700 line-clamp-3'}`}>{item.details}</p>
      </div>
    </div>
  );
};

export default Card;
