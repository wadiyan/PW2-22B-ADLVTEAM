import { SubmitButton } from "@/components/form/ButtonLoading";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import { createProfileAction } from "@/utils/server";
import { currentUser } from "@clerk/nextjs/server";

function CreateProfilePage() {

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white border p-8 rounded-md shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-semibold mb-8 capitalize text-center">
          New User
        </h1>
        <FormContainer action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput type="text" name="firstName" label="First Name" />
            <FormInput type="text" name="lastName" label="Last Name" />
            <FormInput type="text" name="username" label="Username" />
          </div>
          <SubmitButton
            text="Create Profile"
            className="mt-8 w-full"
            size="lg"
          />
        </FormContainer>
      </div>
    </section>
  );
}

export default CreateProfilePage;
