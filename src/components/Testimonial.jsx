import React from "react";

const Testimonial = ({ name, title, image, review }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto">
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full shadow-md mb-4 object-cover scale-110 transition-transform duration-300"
        />
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
      <p className="text-gray-700 mt-4 text-center">{review}</p>
    </div>
  );
};

export default Testimonial;
