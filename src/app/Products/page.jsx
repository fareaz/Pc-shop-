"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const API = "https://pc-store-server.vercel.app";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingId, setLoadingId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = async () => {
    setLoading(true);
    const res = await fetch(`${API}/product`);
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const text = e.target.search.value.trim();

    if (!text) return loadAllProducts();

    setLoading(true);

    const res = await fetch(`${API}/search?search=${text}`);
    const data = await res.json();

    setProducts(data);
    setLoading(false);
  };

  const handleView = (id) => {
    setLoadingId(id);
    setTimeout(() => router.push(`/Products/${id}`), 500);
  };

  return (
    <div className="min-h-screen p-6 bg-zinc-50 text-black">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6"> All Products</h1>

        <form onSubmit={handleSearch} className="flex gap-2 mb-6">
          <input
            type="text"
            name="search"
            placeholder="Search products..."
            className="w-full border p-2 rounded"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            Search
          </button>
        </form>

        {loading && <p className="text-center">Loading...</p>}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((p) => (
            <div
              key={p._id}
              className="border rounded p-3 bg-white shadow-sm flex flex-col"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-40 w-full object-cover rounded"
              />

              <h2 className="font-semibold mt-2 line-clamp-1">{p.title}</h2>

              <p className="text-blue-600 font-bold mt-2">${p.price}</p>

              <button
                onClick={() => handleView(p._id)}
                className="mt-3 bg-blue-600 text-white p-2 rounded text-sm"
              >
                {loadingId === p._id ? "Loading..." : "View"}
              </button>
            </div>
          ))}
        </div>

        {!loading && products.length === 0 && (
          <p className="text-center mt-10 text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
}
