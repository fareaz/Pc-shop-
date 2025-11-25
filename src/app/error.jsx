
"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Unhandled error:", error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-50">
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Something went wrong</h1>
        <p className="text-gray-600 mb-4">An unexpected error occurred. Try refreshing the page.</p>
        <div className="flex gap-2 justify-center">
          <button onClick={() => reset()} className="px-4 py-2 bg-blue-600 text-white rounded">Try again</button>
          <Link href="/" className="px-4 py-2 border rounded">Go home</Link>
        </div>
      </div>
    </main>
  );
}
