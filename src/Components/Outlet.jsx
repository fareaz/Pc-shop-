
"use client";

import React from "react";

export default function Outlet() {
  const outlets = [
    {
      id: "jamuna",
      name: "Jamuna Future Park",
      address: "Level 2, Jamuna Future Park, Pragati Sharani, Dhaka",
      phone: "+880 1234 567890",
      hours: "10:00 AM – 9:00 PM",
      shop: "Shop #A12",
    },
    {
      id: "maltiplan",
      name: "Maltiplan (Main Branch)",
      address: "Maltiplan Tower, 10th Floor, Gulshan, Dhaka",
      phone: "+880 1987 654321",
      hours: "9:00 AM – 10:00 PM",
      shop: "Main Shop #1",
    },
    {
      id: "icb",
      name: "ICB Bhobon",
      address: "ICB Bhaban, Motijheel, Dhaka",
      phone: "+880 1122 334455",
      hours: "10:00 AM – 8:00 PM",
      shop: "Shop #B7",
    },
  ];

  return (
    <div className=" py-10 bg-zinc-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Outlets</h2>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
         
          <OutletCard
            data={outlets[0]}
            variant="side"
          />

       
          <OutletCard
            data={outlets[1]}
            variant="main"
          />

        
          <OutletCard
            data={outlets[2]}
            variant="side"
          />
        </div>
      </div>
    </div>
  );
}

function OutletCard({ data, variant = "side" }) {
  const isMain = variant === "main";

  return (
    <article
      className={`
        relative flex flex-col gap-4 p-6 rounded-2xl
        bg-white shadow-sm
        transform transition-all duration-300
        hover:shadow-lg hover:-translate-y-1
        ${isMain ? "md:scale-105 md:shadow-xl md:col-span-1" : ""}
        ${!isMain ? "md:py-5" : ""}
      `}
      aria-labelledby={`title-${data.id}`}
    >
     
      <header className="flex items-center justify-between gap-4">
        <h3 id={`title-${data.id}`} className={`text-lg font-semibold ${isMain ? "md:text-2xl" : "text-base"}`}>
          {data.name}
        </h3>

        <span
          className={`text-xs font-medium px-2 py-1 rounded-full border
            ${isMain ? "bg-zinc-100 border-zinc-200" : "bg-zinc-50 border-zinc-100"}`}
        >
          {isMain ? "Main Branch" : "Outlet"}
        </span>
      </header>

   
      <div className={`text-sm text-zinc-600 ${isMain ? "md:text-base" : ""}`}>
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 shrink-0 text-zinc-400" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.314-2.686-6-6-6z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div>{data.address}</div>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <svg className="w-5 h-5 text-zinc-400" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M22 16.92V21a1 1 0 0 1-1.11 1 19.86 19.86 0 0 1-8.63-3.12 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2 3.11 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .75c.12.66.32 1.3.58 1.9a1 1 0 0 1-.24 1.05L8.5 7.5a16 16 0 0 0 8 8l1.8-1.9a1 1 0 0 1 1.05-.24c.6.26 1.24.46 1.9.58a1 1 0 0 1 .75 1V21z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <a href={`tel:${data.phone.replace(/\s+/g, "")}`} className="hover:underline text-zinc-700">{data.phone}</a>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <svg className="w-5 h-5 text-zinc-400" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M21 12.79A9 9 0 1 1 11.21 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 2v6h-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div>{data.hours}</div>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <svg className="w-5 h-5 text-zinc-400" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M8 10h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          <div>Shop: <span className="font-medium text-zinc-800">{data.shop}</span></div>
        </div>
      </div>


     
      {isMain && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs bg-amber-400 text-white font-semibold shadow">
          Featured
        </div>
      )}
    </article>
  );
}
