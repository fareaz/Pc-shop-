"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/app/Context/AuthContext"; 

export default function Navbar() {
  const pathname = usePathname(); 
  const [open, setOpen] = useState(false); 
  const [openMenu, setOpenMenu] = useState(false); 

 
  const { user, loadingAuthState, signOutUser } = useAuth();

 
  const LOCAL_FALLBACK_AVATAR = "/mnt/data/e2166d2e-5c6c-4d74-a4c1-0d1602156804.png";

  const dropdownRef = useRef(null);

  const isActive = (path) =>
    pathname === path ? "text-blue-600 font-bold" : "text-gray-700";


  const handleLogout = async () => {
    try {
      await signOutUser?.();

      if (typeof document !== "undefined") {
        document.cookie = "auth=; Max-Age=0; path=/;"; 
      }
    } catch (err) {
      console.error("Logout failed", err);
    } finally {
      setOpen(false);
      setOpenMenu(false);
    }
  };


  useEffect(() => {
    function handleDocClick(e) {
      if (open && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    function handleEsc(e) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleDocClick);
    document.addEventListener("touchstart", handleDocClick);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleDocClick);
      document.removeEventListener("touchstart", handleDocClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  return (
    <header className="sticky top-0 bg-white shadow-sm z-30 text-black">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">


        <div className="flex items-center">
          <button
            onClick={() => setOpenMenu((s) => !s)}
            className="md:hidden mr-3 p-2 rounded hover:bg-gray-100"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

  
          <Link href="/">
            <h1 className="text-xl font-bold text-blue-600">PC Shop</h1>
          </Link>
        </div>

    
        <nav className="hidden md:flex gap-6">
          <Link href="/" className={`${isActive("/")} hover:text-blue-600`}>Home</Link>
          <Link href="/Products" className={`${isActive("/Products")} hover:text-blue-600`}>Products</Link>
          <Link href="/About" className={`${isActive("/About")} hover:text-blue-600`}>About Us</Link>
          <Link href="/Profile" className={`${isActive("/Profile")} hover:text-blue-600`}>Profile</Link>
        </nav>


        <div className="relative flex items-center gap-3">
        
          {loadingAuthState ? (
            <div className="hidden md:flex items-center gap-2 px-2 py-1 rounded-full">
              <span className="h-8 w-8 rounded-full bg-gray-200 animate-pulse" />
              <span className="hidden md:inline text-sm text-gray-500">Checking...</span>
            </div>
          ) : (
            <>
      
              {!user ? (
                <div className="flex gap-2 items-center">
                  <Link href="/login" className="border px-3 py-1 rounded text-sm">Login</Link>
                  <Link href="/register" className="bg-blue-600 text-white px-4 py-1 rounded text-sm">Register</Link>
                </div>
              ) : (
                <>
               
                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setOpen((s) => !s)}
                      className="flex items-center gap-2 border px-3 py-1 rounded"
                      aria-haspopup="true"
                      aria-expanded={open}
                      type="button"
                    >
                      <span className="text-sm font-medium">
                        {user.displayName ? user.displayName : user.email}
                      </span>

                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.29l3.71-4.06a.75.75 0 111.12 1L10.53 13.28a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                 
                    {open && (
                      <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded p-2 z-50">
                        <p className="text-sm p-2 text-gray-600 border-b">
                          Signed in as <br />
                          <span className="font-medium">{user.email}</span>
                        </p>

                        <Link href="/DeshBoard/AddProduct" className="block px-3 py-2 hover:bg-gray-100 rounded">Add Product</Link>
                        <Link href="/DeshBoard/ManageProduct" className="block px-3 py-2 hover:bg-gray-100 rounded">Manage Products</Link>

                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded mt-1"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>

  
      {openMenu && (
        <div className="md:hidden bg-white border-t shadow-sm p-4 space-y-3 z-40">
          <Link href="/" className={`block px-2 py-2 rounded hover:bg-gray-100 ${isActive("/")}`}>Home</Link>
          <Link href="/Products" className={`block px-2 py-2 rounded hover:bg-gray-100 ${isActive("/Products")}`}>Products</Link>
          <Link href="/About" className={`block px-2 py-2 rounded hover:bg-gray-100 ${isActive("/About")}`}>About Us</Link>
          <Link href="/Profile" className={`block px-2 py-2 rounded hover:bg-gray-100 ${isActive("/Profile")}`}>Profile</Link>

          
        </div>
      )}
    </header>
  );
}
