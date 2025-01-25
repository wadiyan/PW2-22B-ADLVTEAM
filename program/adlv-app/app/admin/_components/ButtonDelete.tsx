"use client"; // Pastikan komponen ini dijalankan di client-side

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MdDelete } from "react-icons/md";
import { deleteProperty } from "@/utils/server"; // Pastikan path sesuai
import Swal from "sweetalert2"; // Impor SweetAlert2

interface ButtonDeleteItemProps {
  id: string;
  UserId: string;
  className: string;
  children: React.ReactNode; // Menambahkan children untuk menerima elemen apa pun di dalamnya
}

const ButtonDeleteItem = ({
  id,
  UserId,
  className,
  children,
}: ButtonDeleteItemProps) => {
  const [loading, setLoading] = useState(false);

  // Fungsi untuk menangani penghapusan properti
  const handleDelete = async () => {
    setLoading(true);

    try {
      // Panggil fungsi deleteProperty untuk menghapus properti berdasarkan ID dan UserId
      const response = await deleteProperty({ id, userId: UserId });

      if (response.success) {
        // Tampilkan SweetAlert saat penghapusan berhasil
        Swal.fire({
          icon: "success",
          title: "item deleted successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        // Tampilkan SweetAlert saat penghapusan gagal
        Swal.fire({
          icon: "error",
          title: "Failed to delete item.",
          text: "Please try again later.",
        });
      }
    } catch (error: unknown) {
      // Tampilkan SweetAlert jika terjadi error
      if (error instanceof Error) {
        // Memastikan error memiliki message
        Swal.fire({
          icon: "error",
          title: "Error deleting item",
          text: error.message || "An unexpected error occurred.", // Pastikan error.message adalah string
        });
      } else {
        // Jika error bukan instance of Error
        Swal.fire({
          icon: "error",
          title: "Error deleting item",
          text: "An unexpected error occurred.", // fallback error message
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      className={className}
      onClick={handleDelete}
      disabled={loading} // Nonaktifkan tombol saat loading
    >
      {children} {/* Render children di dalam tombol */}
    </Button>
  );
};

export default ButtonDeleteItem;
