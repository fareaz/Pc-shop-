"use client";

import { useEffect, useState } from "react";

export default function Latest() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/Product")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 6); 

        setProducts(sorted);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="py-10 ">
      <h2 className="text-2xl font-bold text-center mb-6">Latest Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-10">
        {products.map((item) => (
          <div
            key={item._id}
            className="shadow-lg rounded-xl bg-white p-4 hover:scale-105 transition duration-200"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-md"
            />

            <h3 className="text-lg font-semibold mt-3">{item.title}</h3>

            <p className="text-sm text-gray-600 mb-2">{item.shortDesc}</p>

            <p className="font-bold text-lime-600">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
