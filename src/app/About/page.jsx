import Image from "next/image";

export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 text-black p-6">
      <div className="max-w-3xl text-center space-y-4">
        <h1 className="text-4xl font-bold">About PC Shop</h1>
        <p className="text-lg leading-relaxed">
          Welcome to <span className="font-semibold">PC Shop</span> — your trusted destination for high‑quality
          computer parts, accessories, and custom PC solutions. We aim to provide
          the best products at the best prices, ensuring that every customer can
          build or upgrade their dream setup.
        </p>
        <p className="text-base leading-relaxed">
          From processors, graphics cards, and RAM to monitors, keyboards, and
          gaming peripherals — we offer a wide collection suitable for gamers,
          students, and professionals alike. Our team is dedicated to helping you
          choose the right components with expert guidance and reliable support.
        </p>
        <p className="text-base leading-relaxed font-medium">
          Thank you for choosing PC Shop. Your satisfaction is our priority.
        </p>
      </div>
    </div>
  );
}
