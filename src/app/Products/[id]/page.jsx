
import Link from "next/link";


export async function generateStaticParams() {
  try {
    const res = await fetch(
      "https://pc-store-server-exno7bzzc-fareazs-projects.vercel.app/Product",
      { next: { revalidate: 60 } }
    );

    if (!res.ok) return [];

    const products = await res.json();
   
    const list = Array.isArray(products) ? products : products.result || [];

    return list.map((p) => ({ id: String(p._id) }));
  } catch (err) {
    console.error("generateStaticParams error:", err);
    return [];
  }
}

export default async function ProductDetails({ params }) {
  const { id } = params;

 
  const res = await fetch(
    `https://pc-store-server-exno7bzzc-fareazs-projects.vercel.app/Product/${id}`,
    { next: { revalidate: 60 } } 
  );

  if (!res.ok) {
    return (
      <main className="min-h-screen bg-zinc-50 text-black p-6">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-6">
          <h1 className="text-xl font-semibold">Product not found</h1>
          <p className="text-gray-600 mt-2">This product doesn't exist or couldn't be fetched.</p>
          <Link href="/Products">
            <button className="mt-4 px-4 py-2 border rounded-md">Back to products</button>
          </Link>
        </div>
      </main>
    );
  }

  const json = await res.json();
 
  const product = json.result ? json.result : json;

  if (!product) {
    return (
      <main className="min-h-screen bg-zinc-50 text-black p-6">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-6">
          <h1 className="text-xl font-semibold">Product not found</h1>
          <Link href="/Products">
            <button className="mt-4 px-4 py-2 border rounded-md">Back to products</button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-50 text-black p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 bg-gray-100 flex items-center justify-center">
            <img
              src={product.image || "/fallback.png"}
              alt={product.title}
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="md:w-1/2 p-6 flex flex-col">
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>

            <p className="text-sm text-gray-500 mb-4">{product.shortDesc}</p>

            <div className="text-2xl font-extrabold text-blue-600 mb-4">
              ${product.price}
            </div>

            <div className="text-gray-700 leading-relaxed mb-6">
              {product.fullDesc}
            </div>

            <div className="mt-auto flex items-center gap-3">
              <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
                Add to Cart
              </button>

              <Link href="/Products">
                <button className="px-4 py-2 border rounded-md">
                  Back to products
                </button>
              </Link>
            </div>

            <div className="text-xs text-gray-400 mt-4">
              Created:{" "}
              {product.createdAt ? new Date(product.createdAt).toLocaleString() : "—"}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
