import React from "react";
import { Outlet } from "react-router-dom";
type Props = {};

const AdminRoot = (props: Props) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default AdminRoot;
// import React from "react";
// // import AdminNavbar from "../../../layout/AdminNavbar";
// import { Outlet } from "react-router-dom";

// function AdminRoot() {
//   return (
//     <div>
//       <Outlet />
//     </div>
//   );
// }

// export default AdminRoot;
