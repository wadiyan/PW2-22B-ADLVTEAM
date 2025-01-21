// import { fetchUsers } from "@/utils/actions";
// import DeleteButton from "./DeleteButton";

// async function UsersList() {
//   const users = await fetchUsers();

//   return (
//     <div>
//       <h3 className="text-xl mt-4">UsersList</h3>
//       {users.length ? (
//         <div className="max-w-lg">
//           {users.map((user) => {
//             return (
//               <h4 key={user.id} className="capitalize text-lg flex justify-between items-center mt-4">
//                 {user.firstName} {user.lastName}
//                 <DeleteButton id={user.id} />
//               </h4>
//             );
//           })}
//         </div>
//       ) : (
//         <p>Not Users Found</p>
//       )}
//     </div>
//   );
// }

// export default UsersList;
