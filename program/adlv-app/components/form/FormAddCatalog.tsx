"use client";

import { SubmitButton } from "@/components/form/ButtonLoading";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import { createPropertyAction } from "@/utils/server";
import TextAreaInput from "./TextAreaInput";
import { ImageInput } from "./ImageInput";

export default function FormAddCatalog() {
  return (
    <FormContainer action={createPropertyAction}>
      <div className="flex flex-col mb-4">
        <FormInput name="name" type="text" label="Name (20 limit )" />
        <TextAreaInput
          name="description"
          labelText="Description (10 - 1000 kata)"
        />
        <FormInput name="price" type="text" label="price (30 limit)" />
        <FormInput name="category" type="text" label="category (30 limit)" />

        <div className="">
          <ImageInput />
        </div>
        <SubmitButton size="lg" text="create item" className="mt-12" />
      </div>
    </FormContainer>
  );
}
