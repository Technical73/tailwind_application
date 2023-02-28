import React, { useState } from "react";

const Cards = ({ fruits }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <>
      <div
        className=" rounded-2xl overflow-hidden shadow-lg transform hover:scale-110 duration-100"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {hover && (
          <div className=" absolute top-0 right-0  py-1 px-2 transform hover:scale-110 duration-100  bg-green-500 text-white rounded-full">
            <button>Add to cart</button>
          </div>
        )}
        <img
          src={`${fruits.image}`}
          alt={fruits.image}
          className="w-full h-52 object-cover"
        />
        <div className="flex flex-col   items-center ">
          <span className="text-slate-500">{fruits.name}</span>
          <span className="text-slate-500">{fruits.price}</span>
        </div>
      </div>
    </>
  );
};

export default Cards;
