import Link from "next/link";


export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-50">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-2">404 — Page not found</h1>
        <p className="text-gray-600 mb-6">We could ot find the page you are looking for.</p>
        <Link href="/" className="inline-block px-4 py-2 bg-blue-600 text-white rounded">Go home</Link>
      </div>
    </main>
  );
}
