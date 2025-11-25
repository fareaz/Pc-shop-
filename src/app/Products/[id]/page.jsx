import Link from "next/link";


export default async function productDetails({ params }) {
  
    const { id } = await params;
    const res = await fetch(`http://localhost:5000/Product/${id}`);
  const products = await res.json();
  const product = products.
result
  console.log("SERVER DATA:", products.
result,id
);
 const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    setLoading(true);
    fetch(
      `http://localhost:5000/Product/search?search=${search_text}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      });
  };

    return  <main className="min-h-screen bg-zinc-50 text-black p-6">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow overflow-hidden">
          <div className="md:flex">
         
            <div className="md:w-1/2 bg-gray-100 flex items-center justify-center">
              <img
                src={product.
image}
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
                  <button className="px-4 py-2 border rounded-md">Back to products</button>
                </Link>
              </div>

              <div className="text-xs text-gray-400 mt-4">
                Created: {product.createdAt ? new Date(product.createdAt).toLocaleString() : "—"}
              </div>
            </div>
          </div>
        </div>;
</main>}