"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    setMessage("Creating account...");

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    await supabase.from("users").insert([
      {
        id: data.user?.id,
        email,
        role,
      },
    ]);

    setMessage("Account created successfully ✅");
    setTimeout(() => router.push("/signin"), 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">Sign Up</h1>

      <input
        type="email"
        placeholder="Email"
        className="border p-2 rounded w-64"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-2 rounded w-64"
        onChange={(e) => setPassword(e.target.value)}
      />

      <select
        className="border p-2 rounded w-64"
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
        <option value="admin">Admin</option>
      </select>

      <button
        onClick={handleSignup}
        className="bg-blue-500 text-white px-6 py-2 rounded"
      >
        Create Account
      </button>

      <p className="text-sm text-gray-600">{message}</p>
    </div>
  );
}