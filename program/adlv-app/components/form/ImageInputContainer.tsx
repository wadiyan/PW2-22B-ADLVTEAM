"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import FormContainer from "./FormContainer";
import { ImageInput } from "./ImageInput";
import { SubmitButton } from "./ButtonLoading";
import { type actionFunction } from "@/utils/types";
import { LuUser } from "react-icons/lu";

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

function ImageInputContainer(props: ImageInputContainerProps) {
  const { image, name, action, text, children } = props;
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false); // Perbaikan typo

  const userIcon = (
    <LuUser className="w-24 h-24 bg-primary rounded text-white mb-4" />
  );

  return (
    <div>
      {/* Tampilkan gambar atau ikon user */}
      {image ? (
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          priority
          className="rounded object-cover mb-4 w-24 h-24"
        />
      ) : (
        userIcon
      )}

      {/* Tombol untuk menampilkan form update */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>

      {/* Tampilkan Form jika state isUpdateFormVisible adalah true */}
      {isUpdateFormVisible && (
        <div className="max-w-lg mt-4">
          <FormContainer action={action}>
            {props.children}
            <ImageInput />
            <SubmitButton size="sm" />
          </FormContainer>
        </div>
      )}
    </div>
  );
}

export default ImageInputContainer;
