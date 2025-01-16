import React from "react";
import BlogImage from "../assets/image.jpg";

const HeroSection = () => {
  return (
    <section className="relative mt-5 bg-cover bg-center text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Content Container */}
      <div className="relative mt-14 sm:mt-16 container mx-auto flex flex-col items-center justify-center h-full px-4  sm:flex-row">
        {/* Left Content */}
        <div className="flex-1 mt-12">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">
            Discover Inspiring Stories
          </h1>
          <p className="text-sm sm:text-lg mb-6">
            Dive into engaging articles, insightful tutorials, and life-changing
            stories crafted just for you.
          </p>
          {/* Call-to-Actions */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md transition">
              Start Reading
            </button>
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-md transition">
              Explore More
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 mt-12 flex justify-center items-center relative">
          {/* Main Image */}
          <img
            src={BlogImage}
            alt="Blogs"
            className="w-60 h-60 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full shadow-lg"
          />

          {/* Floating Icons */}
          <div className="absolute -top-6 -left-6 bg-orange-500 p-2 rounded-full shadow-lg animate-pulse hidden md:block">
            <i className="fas fa-pen text-white text-base sm:text-xl"></i>
          </div>
          <div className="absolute -top-6 -right-6 bg-teal-500 p-2 rounded-full shadow-lg animate-bounce hidden md:block">
            <i className="fas fa-lightbulb text-white text-base sm:text-xl"></i>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-blue-500 p-2 rounded-full shadow-lg animate-spin hidden md:block">
            <i className="fas fa-heart text-white text-base sm:text-xl"></i>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-purple-500 p-2 rounded-full shadow-lg animate-ping hidden md:block">
            <i className="fas fa-star text-white text-base sm:text-xl"></i>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-4 transform text-center">
        <p className="mb-4 text-md sm:text-sm text-gray-200 text-center">
          💡 Join <strong>50k+</strong> readers and discover trending topics today!
        </p>
        <button className="mb-8 justify-center bg-gray-700 hover:bg-gray-800 text-white py-2 px-3 rounded-md transition">
          Explore Articles
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
