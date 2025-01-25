"use client";

import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

type ImageInputProps = {
  id?: string;
  name?: string;
  label?: string;
  accept?: string;
  onChange?: (file: File | null) => void;
};

export function ImageInput({
  id = "image",
  name = "image",
  label = "Image",
  accept = "image/*",
  onChange,
}: ImageInputProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;

    if (file) {
      // Generate preview URL
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string); // Set preview as base64 string
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null); // Clear preview if no file
    }

    if (onChange) onChange(file);
  };

  return (
    <div className="mb-4">
      <Label htmlFor={id} className="capitalize">
        {label}
      </Label>
      <Input
        id={id}
        name={name}
        type="file"
        accept={accept}
        required
        className="max-w-xs"
        onChange={handleFileChange}
      />
      {preview && (
        <div className="mt-4">
          <img
            src={preview}
            alt="Preview"
            className="w-32 h-32 object-cover rounded-md"
          />
        </div>
      )}
    </div>
  );
}
