import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router";
import MainLayout from "../layout/mainLayout";
import CRUDaxios from "../pages/CRUDaxios";
import { useEffect, useState } from "react";
import axios from "axios";
import Category from "../pages/categories";

export default function MainRoutes() {
  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<CRUDaxios />} />
            <Route path="/Category" element={<Category />} />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            {/* <Route path="*" element={<NoMatch />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

  // function Home() {
  //   return (
  //     <div>
  //       <h2>Home</h2>
  //     </div>
  //   );
  // }

  // function About() {
  //   return (
  //     <div>
  //       <h2>About</h2>
  //     </div>
  //   );
  // }

  //   function Category() {
  //     const [dataCategory, setDataCategory] = useState([]);
  //     useEffect(() => {
  //       axios
  //         .get("http://localhost:3000/api/category")
  //         .then((response) => {
  //           setDataCategory(response.data.info);
  //           console.log(response.data.info);
  //         })
  //         .catch((err) => {
  //           console.error("There was an error fetching the data!", err);
  //         });
  //       fetchDataCategory();
  //     }, []);
  //   }
  //   return (
  //     <div>
  //       <h2>Categories</h2>
  //       <table>
  //         <tr>
  //           <th>id</th>
  //           <th>name</th>
  //         </tr>
  //       </table>
  //       <tbody>
  //         {dataCategory.map((item, index) => (
  //           <option key={index} value={item.id}>
  //             <tr>
  //               <td>{index + 1}</td>
  //               <td>{item.name}</td>
  //             </tr>
  //           </option>
  //         ))}
  //       </tbody>
  //     </div>
  //   );
  // }

  // function NoMatch() {
  //   return (
  //     <div>
  //       <h2>Nothing to see here!</h2>
  //       <p>
  //         <Link to="/">Go to the home page</Link>
  //       </p>
  //     </div>
  //   );
}
