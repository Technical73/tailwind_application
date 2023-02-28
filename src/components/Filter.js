import React, { useState } from "react";

const Filter = () => {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <div className="my-10 py-3 w-2/3  md:w-4/6 mx-auto  flex flex-col md:flex-row justify-center ">
        <button
          onClick={() => setSelected(1)}
          className={`btnStyle ${
            selected === 1 ? "bg-green-500 text-white" : "text-slate-500"
          }`}
        >
          Best Seller
        </button>
        <button
          className={`btnStyle ${
            selected === 2 ? "bg-green-500 text-white" : "text-slate-500"
          }`}
          onClick={() => setSelected(2)}
        >
          Quality Products
        </button>
        <button
          className={`btnStyle ${
            selected === 3 ? "bg-green-500 text-white" : "text-slate-500"
          }`}
          onClick={() => setSelected(3)}
        >
          Special Products
        </button>
      </div>
    </>
  );
};

export default Filter;
