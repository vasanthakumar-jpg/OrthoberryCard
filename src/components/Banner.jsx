import bannerImage from '../assets/images/banner-image.svg';

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gray-100">
      
      {/* Text Section (Bottom on Mobile, Left on Desktop) */}
      <div className="text-center md:text-left md:w-1/2 mt-6 md:mt-0">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Smarter without <br className="hidden md:inline" /> distractions
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4">
          Newsfeed for ortho experts
        </p>
      </div>

      {/* Image Section (Top on Mobile, Right on Desktop) */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={bannerImage}
          alt="Example"
          className=" h-auto"
        />
      </div>
      
    </div>
  );
};

export default Banner;
