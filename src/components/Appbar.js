import { useState } from "react";

const Appbar = () => {
  const navigations = ["Fruits", "Vegetables", "More", "Cart"];
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState("");
  const menuHandle = () => {
    setOpen((prev) => !prev);
  };
  const handleNav = (item) => {
    setCheck(item);
  };
  return (
    <>
      <nav className="mt-5">
        <div className="md:flex justify-between w-5/6 md:max-w-7xl mx-auto">
          <div className="flex justify-between">
            <div>
              <span className="text-green-500 font-bold text-4xl">Fruit </span>
              <span className="text-slate-500 font-thin text-3xl">Shop</span>
            </div>
            <div className="mt-2 md:hidden">
              <button onClick={menuHandle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`flex my-2 md:block justify-center ${
              open ? "block" : "hidden"
            }`}
          >
            <ul className="md:flex md:space-x-8 space-y-8 md:space-y-0">
              {navigations.map((item, index) => {
                return (
                  <li
                    key={item}
                    className={`menu ${check === item ? "border-b-4" : ""}`}
                    onClick={() => handleNav(item)}
                  >
                    <a href={item} className="font-body">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Appbar;
