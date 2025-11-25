"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/Context/AuthContext";

export default function AddProductHook() {
  const router = useRouter();
  const { user } = useAuth(); 
  const LOCAL_FALLBACK = "/mnt/data/625edef9-44a9-4609-a518-f8cefc540d7e.png";

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      title: "",
      shortDesc: "",
      fullDesc: "",
      price: "",
      image: "",
      submitterName: "",
      submitterEmail: "",
    },
  });


  useEffect(() => {
    if (user) {
      const name = user.displayName || "";
      const email = user.email || "";
      setValue("submitterName", name);
      setValue("submitterEmail", email);
    }
  }, [user, setValue]);

  const watchedImage = watch("image");
  const [toast, setToast] = useState(null);

  async function onSubmit(values) {

    const title = values.title?.trim() || "";
    const shortDesc = values.shortDesc?.trim() || "";
    const fullDesc = values.fullDesc?.trim() || "";
    const price = Number(values.price);
    const image = values.image?.trim() || LOCAL_FALLBACK;

t
    const submitterName = values.submitterName?.trim() || user?.displayName || "";
    const submitterEmail = values.submitterEmail?.trim() || user?.email || "";


    if (!title || !shortDesc || !fullDesc || Number.isNaN(price)) {
      setToast({ type: "error", msg: "Please fill all required fields correctly." });
      setTimeout(() => setToast(null), 3500);
      return;
    }

    const payload = {
      title,
      shortDesc,
      fullDesc,
      price,
      image,
      createdAt: new Date().toISOString(),
      submitterName,
      submitterEmail,
    };

    try {
      setToast({ type: "info", msg: "Submitting..." });

    
      const res = await fetch("https://pc-store-server.vercel.app/Product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

  
      let data;
      try {
        data = await res.json();
      } catch {
        data = null;
      }

      if (!res.ok) {
        const serverMsg = (data && (data.error || data.message)) || `Server error ${res.status}`;
        throw new Error(serverMsg);
      }

      setToast({ type: "success", msg: (data && data.message) || "Product added successfully!" });


      reset({
        title: "",
        shortDesc: "",
        fullDesc: "",
        price: "",
        image: "",
        submitterName: user?.displayName || submitterName,
        submitterEmail: user?.email || submitterEmail,
      });

     
    } catch (err) {
      console.error("Add product failed:", err);
      setToast({ type: "error", msg: `Failed to add product. ${err.message || ""}` });
    } finally {
    
      setTimeout(() => setToast(null), 3500);
    }
  }

  const previewSrc = (watchedImage && watchedImage.trim()) || LOCAL_FALLBACK;

  return (
    <div className="bg-zinc-50 text-black min-h-[60vh]">
      <div className="max-w-3xl mx-auto p-6 bg-zinc-50 text-black">
        <h1 className="text-2xl font-bold mb-4">Add Product</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white border rounded-lg p-6 shadow-sm space-y-4">
          <div className="flex gap-4 items-start">
            <div className="w-36 h-24 bg-gray-100 rounded overflow-hidden border flex items-center justify-center">
              <img
                src={previewSrc}
                alt="preview"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = LOCAL_FALLBACK;
                }}
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Image URL (optional)</label>
              <input
                {...register("image", {
                  validate: (v) => {
                    if (!v) return true;
                    try {
                      new URL(v);
                      return true;
                    } catch {
                      return "Provide a valid URL or leave empty";
                    }
                  },
                })}
                className={`mt-1 block w-full rounded-md border px-3 py-2 ${errors.image ? "border-red-500" : "border-gray-300"}`}
                placeholder="https://example.com/image.jpg"
              />
              {errors.image && <p className="text-red-600 text-sm mt-1">{errors.image.message}</p>}
              <p className="text-xs text-gray-400 mt-1">Leave empty to use default fallback image.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Your name</label>
              <input
                {...register("submitterName", { required: "Name is required" })}
                className={`mt-1 block w-full rounded-md border px-3 py-2 ${errors.submitterName ? "border-red-500" : "border-gray-300"}`}
                placeholder="Your name"
              />
              {errors.submitterName && <p className="text-red-600 text-sm mt-1">{errors.submitterName.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
            
              <input
                {...register("submitterEmail", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
                })}
                className={`mt-1 block w-full rounded-md border px-3 py-2 ${errors.submitterEmail ? "border-red-500" : "border-gray-300"}`}
                placeholder="you@example.com"
                readOnly={!!user} 
              />
              {errors.submitterEmail && <p className="text-red-600 text-sm mt-1">{errors.submitterEmail.message}</p>}
            </div>
          </div>

         
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              {...register("title", { required: "Title is required", minLength: { value: 2, message: "Too short" } })}
              className={`mt-1 block w-full rounded-md border px-3 py-2 ${errors.title ? "border-red-500" : "border-gray-300"}`}
              placeholder="Product Name.."
            />
            {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Short description</label>
            <input
              {...register("shortDesc", { required: "Short description required", maxLength: { value: 120, message: "Too long" } })}
              className={`mt-1 block w-full rounded-md border px-3 py-2 ${errors.shortDesc ? "border-red-500" : "border-gray-300"}`}
              placeholder="Short description.."
            />
            {errors.shortDesc && <p className="text-red-600 text-sm mt-1">{errors.shortDesc.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Full description</label>
            <textarea
              {...register("fullDesc", { required: "Full description required", minLength: { value: 10, message: "Write more details" } })}
              rows={5}
              className={`mt-1 block w-full rounded-md border px-3 py-2 ${errors.fullDesc ? "border-red-500" : "border-gray-300"}`}
              placeholder="Full description..."
            />
            {errors.fullDesc && <p className="text-red-600 text-sm mt-1">{errors.fullDesc.message}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Price (USD)</label>
              <input
                {...register("price", {
                  required: "Price is required",
                  validate: (v) => {
                    const n = Number(v);
                    if (isNaN(n) || n < 0) return "Enter a valid positive number";
                    return true;
                  },
                })}
                className={`mt-1 block w-full rounded-md border px-3 py-2 ${errors.price ? "border-red-500" : "border-gray-300"}`}
                placeholder="..."
              />
              {errors.price && <p className="text-red-600 text-sm mt-1">{errors.price.message}</p>}
            </div>

            <div className="text-right">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-60"
              >
                {isSubmitting ? "Adding..." : "Submit"}
              </button>
            </div>
          </div>
        </form>

        {toast && (
          <div
            className={`fixed right-5 bottom-5 px-4 py-3 rounded shadow-lg text-white ${
              toast.type === "success" ? "bg-green-600" : toast.type === "info" ? "bg-blue-600" : "bg-red-600"
            }`}
          >
            {toast.msg}
          </div>
        )}
      </div>
    </div>
  );
}
