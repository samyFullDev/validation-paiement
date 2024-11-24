// import React, { useEffect, useState } from "react";
// import "./user.css";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import toast from "react-hot-toast";

// const User = () => {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:8000/api/users");
//         setUsers(response.data);
//       } catch (error) {
//         console.log("Error while fetching data", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const deleteUser = async (userId) => {
//     await axios
//       .delete(`http://localhost:8000/api/delete/user/${userId}`)
//       .then((response) => {
//         setUsers((prevUser) => prevUser.filter((user) => user._id !== userId));
//         toast.success(response.data.message, { position: "top-right" });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="userTable">
//       <Link to="/add" type="button" class="btn btn-primary">
//         Add User <i class="fa-solid fa-user-plus"></i>
//       </Link>

//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th scope="col">S.No.</th>
//             <th scope="col">Name</th>
//             <th scope="col">Email</th>
//             <th scope="col">Address</th>
//             <th scope="col">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user, index) => {
//             return (
//               <tr>
//                 <td>{index + 1}</td>
//                 <td>{user.name}</td>
//                 <td>{user.email} </td>
//                 <td>{user.address}</td>
//                 <td className="actionButtons">
//                   <Link
//                     to={`/update/` + user._id}
//                     type="button"
//                     class="btn btn-info"
//                   >
//                     <i class="fa-solid fa-pen-to-square"></i>
//                   </Link>

//                   <button
//                     onClick={() => deleteUser(user._id)}
//                     type="button"
//                     class="btn btn-danger"
//                   >
//                     <i class="fa-solid fa-trash"></i>
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default User;

import React from 'react';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-400">
      <div className="bg-blue-100 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">
          Sélectionnez votre mode de paiement
        </h1>
        <div className="space-y-4">
          <a href='/add' className="w-full flex justify-center py-2 text-white bg-orange-500 rounded hover:bg-orange-600">
            Orange Money
          </a>
          <button className="w-full py-2 text-white bg-yellow-500 rounded hover:bg-yellow-600">
            TMoney
          </button>
          <button className="w-full py-2 text-white bg-green-600 rounded hover:bg-green-700">
            Moov Money
          </button>
          <button className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
            Wave Money
          </button>
          <button className="w-full py-2 text-white bg-red-600 rounded hover:bg-red-700">
            Airtel Money
          </button>
        </div>
      </div>
    </div>
  );
}