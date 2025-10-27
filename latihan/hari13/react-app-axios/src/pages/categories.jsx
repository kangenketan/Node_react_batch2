import axios from "axios";
import { useEffect, useState } from "react";
import "../CRUDaxios.css";
function Category() {
  const [dataCategory, setDataCategory] = useState([]);
  const fetchDataCategory = async () => {
    axios
      .get("http://localhost:3000/api/category")
      .then((response) => {
        setDataCategory(response.data.info);
        console.log(response.data.info);
      })
      .catch((err) => {
        console.error("There was an error fetching the data!", err);
      });
  };
  useEffect(() => {
    fetchDataCategory();
  }, []);

  return (
    <>
      <div className="overflow-x-auto">
        <h2>Ini Tabel Categories Movies Gaes, silahkan dicek</h2>
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
            {dataCategory.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Category;
