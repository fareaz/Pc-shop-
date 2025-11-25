"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/app/FireBase/config";
import { useAuth } from "@/app/Context/AuthContext";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { signInWithGoogle } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      
      const userCred = await createUserWithEmailAndPassword(auth, email, password);

    
      const profileUpdate = {};
      if (name.trim()) profileUpdate.displayName = name.trim();
      if (photoURL && photoURL.trim()) profileUpdate.photoURL = photoURL.trim();

     
      if (Object.keys(profileUpdate).length > 0) {
        await updateProfile(userCred.user, profileUpdate);
      }

      toast.success("Account created successfully!");
      router.push("/dashboard");
    } catch (err) {
      console.error("Register error:", err);
      toast.error(err?.message || "Failed to create account");
    }

    setLoading(false);
  };

  const handleGoogle = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
      toast.success("Signed in with Google!");
      router.push("/Products");
    } catch (err) {
      console.error("Google sign-in error:", err);
      toast.error(err?.message || "Google sign-in failed");
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 text-black">
      <div className="p-8 bg-white rounded shadow max-w-md w-full mx-3">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

        
          <input
            type="text"
            placeholder="Photo URL (optional) "
            className="w-full p-3 border rounded"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password (min 6 chars)"
            className="w-full p-3 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

         

          <button
            disabled={loading}
            className="w-full p-3 bg-blue-600 text-white rounded disabled:opacity-60"
          >
            {loading ? "Creating..." : "Register"}
          </button>
        </form>

        <p className="text-center mt-4 text-gray-500">or</p>

        <button
          onClick={handleGoogle}
          disabled={loading}
          className="w-full border p-3 mt-3 flex items-center justify-center gap-2 rounded hover:bg-gray-100 disabled:opacity-60"
        >
          <FcGoogle className="text-xl" />
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
}
