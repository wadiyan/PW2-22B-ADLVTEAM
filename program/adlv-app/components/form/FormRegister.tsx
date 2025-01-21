"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";

const FormRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah refresh halaman

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password dan konfirmasi password tidak cocok!",
      });
      return;
    }

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Pendaftaran berhasil!",
      }).then(() => {
        router.replace("/login"); // Redirect ke halaman login
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: data.error || "Pendaftaran gagal!",
      });
    }
  };

  return (
    <div className="hero min-h-screen fixed inset-0 flex flex-col items-center justify-center z-20">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Nama Lengkap</span>
            </label>
            <input
              type="text"
              placeholder="Nama lengkap"
              className="input input-bordered"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
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
              placeholder="Password"
              className="input input-bordered"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Konfirmasi Password</span>
            </label>
            <input
              type="password"
              placeholder="Masukkan ulang password"
              className="input input-bordered"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              required
            />
          </div>
          <div className="form-control mt-2">
            <button
              type="submit"
              className="btn bg-gray-900 text-white hover:bg-gray-600"
            >
              Daftar
            </button>
          </div>
          <label className="label">
            <Link
              href="/login"
              className="label-text-alt w-full text-center link link-hover"
            >
              Sudah Punya Akun? Masuk
            </Link>
          </label>
        </form>
        <Link href="/">
          <button className="bg-gray-900 w-full text-white py-2 px-4 rounded-b-xl hover:bg-gray-600">
            Kembali ke Halaman Utama
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FormRegister;
