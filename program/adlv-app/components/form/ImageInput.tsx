import React from "react";
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
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (onChange) onChange(file);
  };

  return (
    <div className="mb-2">
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
    </div>
  );
}
