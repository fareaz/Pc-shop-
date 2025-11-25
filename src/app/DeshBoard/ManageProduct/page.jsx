"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "@/app/Context/AuthContext"; //

const LOCAL_FALLBACK = "/mnt/data/625edef9-44a9-4609-a518-f8cefc540d7e.png";

export default function ManageProduct() {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState(null);

  async function fetchProducts() {
    if (!user || !user.email) {
      setProducts([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `https://pc-store-server.vercel.app/product?email=${user.email}`
      );
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || `Server error ${res.status}`);
      }
      const data = await res.json();
      setProducts(data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError(err.message || "Error");
      toast.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  async function handleDelete(id) {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This product will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) {
      return Swal.fire("Cancelled");
    }

    try {
      setDeletingId(id);

      const res = await fetch(
        `https://pc-store-server-exno7bzzc-fareazs-projects.vercel.app/product/${id}`,
        {
          method: "DELETE",
        }
      );

      const json = await res.json();

      if (!res.ok) {
        setDeletingId(null);
        Swal.fire({
          icon: "error",
          title: "Cannot delete!",
          text: json.message || "Delete failed.",
        });
        return;
      }

      setProducts((p) => p.filter((x) => String(x._id) !== String(id)));
      setDeletingId(null);

      Swal.fire("Deleted!", "The product has been removed.", "success");
    } catch (err) {
      console.error(err);
      setDeletingId(null);
      Swal.fire("Error", "Something went wrong!", "error");
    }
  }

  return (
    <div className="bg-zinc-50 text-black min-h-screen">
      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Manage Products</h1>

        {!user && (
          <div className="p-6 bg-white rounded shadow text-gray-700">
            You are not logged in. Please{" "}
            <a className="text-blue-600" href="/login">
              login
            </a>{" "}
            to see your products.
          </div>
        )}

        {user && (
          <>
            {loading && (
              <div className="text-center py-16 text-gray-600">
                Loading products…
              </div>
            )}

            {error && <div className="text-red-600">Error: {error}</div>}

            {!loading && products.length === 0 && !error && (
              <div className="text-gray-600">
                You haven.t added any products yet.
              </div>
            )}

            {products.length > 0 && (
              <div className="hidden md:block overflow-x-auto rounded shadow bg-white border mt-4">
                <table className="min-w-full table-fixed divide-y">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="w-12 px-3 py-2 text-left text-sm font-medium text-gray-600">
                        #
                      </th>
                      <th className="w-64 px-3 py-2 text-left text-sm font-medium text-gray-600">
                        Title
                      </th>
                      <th className="w-28 px-3 py-2 text-left text-sm font-medium text-gray-600">
                        Price
                      </th>
                      <th className="w-40 px-3 py-2 text-left text-sm font-medium text-gray-600">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y">
                    {products.map((p, idx) => (
                      <tr key={p._id} className="hover:bg-gray-50">
                        <td className="px-3 py-2 text-sm">{idx + 1}</td>
                        <td
                          className="px-3 py-2 text-sm truncate max-w-[220px]"
                          title={p.title}
                        >
                          {p.title}
                        </td>
                        <td className="px-3 py-2 text-sm">${p.price}</td>
                        <td className="px-3 py-2 text-sm">
                          <div className="flex gap-2">
                            <button
                              onClick={() => setSelected(p)}
                              className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
                            >
                              View
                            </button>
                            <button
                              onClick={() => handleDelete(p._id)}
                              disabled={String(deletingId) === String(p._id)}
                              className="px-3 py-1 bg-red-600 text-white rounded text-sm disabled:opacity-60"
                            >
                              {String(deletingId) === String(p._id)
                                ? "Deleting…"
                                : "Delete"}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className="md:hidden space-y-3 mt-4">
              {products.map((p, idx) => (
                <div
                  key={p._id}
                  className="bg-white rounded border p-3 flex items-start justify-between shadow-sm"
                >
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-500">#{idx + 1}</div>
                    <div
                      className="font-medium text-gray-900 truncate"
                      title={p.title}
                    >
                      {p.title}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">${p.price}</div>
                  </div>

                  <div className="flex-shrink-0 ml-3 flex flex-col gap-2">
                    <button
                      onClick={() => setSelected(p)}
                      className="px-3 py-1 text-xs bg-blue-600 text-white rounded"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleDelete(p._id)}
                      disabled={String(deletingId) === String(p._id)}
                      className="px-3 py-1 text-xs bg-red-600 text-white rounded disabled:opacity-60"
                    >
                      {String(deletingId) === String(p._id)
                        ? "Deleting…"
                        : "Delete"}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {selected && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-lg w-full max-w-2xl overflow-hidden shadow-lg">
                  <div className="flex justify-between items-start p-4 border-b">
                    <h3 className="text-xl font-semibold">{selected.title}</h3>
                  </div>

                  <div className="p-4 space-y-4">
                    <img
                      src={selected.image || LOCAL_FALLBACK}
                      className="w-full h-64 object-cover rounded"
                    />
                    <p className="text-gray-700">{selected.fullDesc}</p>
                    <div className="text-sm text-gray-500">
                      <p>Price: ${selected.price}</p>
                      <p>
                        Submitted by: {selected.submitter?.name || "Unknown"}
                      </p>
                      <p>Email: {selected.submitter?.email || "-"}</p>
                      <p>
                        Created:{" "}
                        {selected.createdAt
                          ? new Date(selected.createdAt).toLocaleString()
                          : "-"}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelected(null)}
                      className="px-4 py-2 border rounded hover:bg-gray-100 cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <ToastContainer position="top-right" theme="colored" autoClose={3000} />
    </div>
  );
}
