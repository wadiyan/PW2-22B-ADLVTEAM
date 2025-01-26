"use client";

import Swal from "sweetalert2";
import { useEffect } from "react";
import { actionFunction } from "@/utils/types";
import { useActionState } from "react";
import { revalidatePath } from "next/cache";

const initialState = {
  message: "",
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useActionState(action, initialState);

  // Menampilkan SweetAlert saat `state.message` berubah
  useEffect(() => {
    if (state.message) {
      Swal.fire({
        icon: "success",
        title: "Notification",
        text: state.message,
      });
    } else if (state.message) {
      Swal.fire({
        icon: "error",
        title: "Notification",
        text: state.message,
      });
    }
  }, [state.message]); // Pastikan hanya dipanggil saat message berubah

  return <form action={formAction}>{children}</form>;
}

export default FormContainer;
