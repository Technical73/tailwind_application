import React from "react";
import { useState } from "react";
import Cards from "./Cards";

const Data = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/1053914/pexels-photo-1053914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Green Grapes",
      price: 100,
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Pomegranate",
      price: 200,
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/1903337/pexels-photo-1903337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Black Grapes",
      price: 250,
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Grape Fruit",
      price: 300,
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/1676914/pexels-photo-1676914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Berry",
      price: 250,
    },
    {
      id: 6,
      image:
        "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "lemon",
      price: 150,
    },
  ]);
  return (
    <>
      <section className="my-10 py-10 w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
        {items.map((fruits) => {
          return (
            <>
              <Cards key={fruits.id} fruits={fruits} />
            </>
          );
        })}
      </section>
    </>
  );
};

export default Data;
