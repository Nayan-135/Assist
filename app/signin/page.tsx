"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "next/navigation";
import { getUserRole } from "../../lib/auth";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSignin = async () => {
    setMessage("Logging in...");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    const userId = data.user.id;
    const role = await getUserRole(userId);

    if (role === "student") router.push("/dashboard/student");
    else if (role === "teacher") router.push("/dashboard/teacher");
    else if (role === "admin") router.push("/dashboard/admin");
    else router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">Sign In</h1>

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

      <button
        onClick={handleSignin}
        className="bg-blue-500 text-white px-6 py-2 rounded"
      >
        Login
      </button>

      <p className="text-sm text-gray-600">{message}</p>
    </div>
  );
}