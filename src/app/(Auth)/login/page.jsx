"use client";

import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { useAuth } from "@/app/Context/AuthContext";

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

 
  const { signIn, signInWithGoogle } = useAuth();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      
      await signIn(data.email, data.password);
      toast.success("Signed in successfully");
  
      router.push("/");
    } catch (err) {
      console.error("Login error:", err);
 
      toast.error(err?.message || "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
      toast.success("Signed in with Google");
      router.push("/Products");
    } catch (err) {
      console.error("Google login error:", err);
      toast.error(err?.message || "Google sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center text-black bg-zinc-50">
      <div className="p-8 mx-3 bg-white rounded shadow w-full max-w-md">
        <h2 className="text-2xl mb-6 text-center font-semibold">Sign in</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-2 border rounded"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block mb-1 text-sm">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 chars" },
              })}
              className="w-full p-2 border rounded"
              placeholder="Your password"
            />
            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-2 rounded disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign in with Email"}
          </button>
        </form>

        <div className="my-4 text-center text-sm text-gray-500">or</div>

        <button
          onClick={handleGoogle}
          disabled={loading}
          className="w-full mt-4 border p-3 rounded flex items-center justify-center gap-2 hover:bg-gray-100 transition disabled:opacity-60"
        >
          <FcGoogle className="text-xl" />
          <span className="font-medium">Continue with Google</span>
        </button>

        <p className="mt-4 text-sm text-center">
          No account? <Link href="/register" className="text-blue-600">Register</Link>
        </p>
      </div>
    </div>
  );
}
