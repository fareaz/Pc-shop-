"use client";

import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Banner({
  className = "",
  slides = [
    { src: "/banner1.jpg", alt: "Banner 1" },
    { src: "/banner2.webp", alt: "Banner 2" },
    { src: "/banner3.webp", alt: "Banner 3" },
  ],
  headline = "Build Your Dream PC",
  subtitle = "Latest components, honest prices — shipped fast.",
  ctaLabel = "Shop Now",
  ctaHref = "/products",
}) {
  return (
    <section className={`relative w-full ${className}`} aria-label="Hero banner">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        interval={4500}
        transitionTime={600}
        emulateTouch
        swipeable
        stopOnHover
        dynamicHeight={false}
        ariaLabel="PC Shop banners"
      >
        {slides.map((s, i) => (
          <div key={i} className="w-full">
            <div className="relative w-full h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[78vh]">
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                style={{ objectFit: "cover" }}
                priority={i === 0}
              />
            </div>
          </div>
        ))}
      </Carousel>

     
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="max-w-3xl text-center px-6 pointer-events-auto">
    
          <div className="inline-block bg-gradient-to-r from-black/40 via-black/25 to-transparent backdrop-blur-sm rounded-2xl p-6 md:p-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-md">
              {headline}
            </h1>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto">
              {subtitle}
            </p>

            <div className="mt-6 flex items-center justify-center gap-4">
              <Link
                href="/Products"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
              >
                {ctaLabel}
              </Link>

            </div>
          </div>
        </div>
      </div>


      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/90 via-transparent" />
    </section>
  );
}
