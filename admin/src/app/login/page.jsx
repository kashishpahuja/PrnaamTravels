"use client";

import { useState } from "react";
import API from "@/lib/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await API.post("/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);
    window.location.href = "/dashboard";
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="p-6 border rounded w-80">
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <button onClick={login} className="bg-black text-white p-2 w-full">
          Login
        </button>
      </div>
    </div>
  );
}