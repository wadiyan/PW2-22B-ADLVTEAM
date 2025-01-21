"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah reload halaman

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      Swal.fire({
      icon: "success",
      title: "Berhasil!",
      text: `Login berhasil sebagai ${
        data.user.isAdmin ? "Admin" : "User"
      }!`,
    }).then(() => {
        router.replace("/"); // Redirect ke halaman utama
      });
    } else {
    const errorData = await response.json();
    Swal.fire({
      icon: "error",
      title: "Gagal!",
      text: errorData.error || "Login gagal!",
    });
    }
  };

  return (
    <div className="hero min-h-screen fixed inset-0 flex flex-col items-center justify-center z-20">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <label className="label">
              <Link href="#" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-2">
            <button
              type="submit"
              className="btn bg-gray-900 text-white hover:bg-gray-600"
            >
              Login
            </button>
          </div>
        </form>
        <div className="form-control">
          <label className="label">
            <Link
              href="/register"
              className="label-text-alt w-full text-center link link-hover"
            >
              Sudah Punya Akun? Daftar
            </Link>
          </label>
          <Link href="/">
            <button className="bg-gray-900 w-full text-white py-2 px-4 rounded-b-xl hover:bg-gray-600">
              Kembali ke Halaman Utama
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
