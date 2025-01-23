// "use client";
// import { createUser } from "@/utils/actions";
// import { useFormState, useFormStatus } from "react-dom";

// const spinerLarge = (
//   <span className="loading loading-spinner loading-sm"></span>
// );

// const SubmitButton = () => {
//   const { pending } = useFormStatus();
//   return (
//     <button type="submit" className={btnStyle}>
//       {pending ? spinerLarge : "submit"}
//     </button>
//   );
// };


// function Form() {
//   const [message, formAction] = useFormState(createUser, null);

//   return (
//     <form className={formStyle} action={formAction}>
//       {message && <p className="text-green-500 text-center">{message}</p>}
//       <h2 className="text-2xl capitalize mb-4">Create User</h2>
//       <input
//         type="text"
//         name="firstName"
//         placeholder="First Name"
//         required
//         className={inputStyle}
//       />
//       <input
//         type="text"
//         name="lastName"
//         placeholder="Last Name"
//         required
//         className={inputStyle}
//       />
//       <SubmitButton />
//     </form>
//   );
// }

// const formStyle = "max-w-lg flex flex-col gap-y-4 shadow rounded p-8";
// const inputStyle = "border shadow rounded py-2 px-3 text-gray-700";
// const btnStyle =
//   "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize";

// export default Form;
