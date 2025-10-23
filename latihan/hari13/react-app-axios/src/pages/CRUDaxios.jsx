import axios from "axios";

import { useEffect, useState } from "react";

function CRUDaxios() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/api/movie")
      .then((response) => {
        setData(response.data.info);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>CRUD AXIOS</h1>
      <table>
        <thead>
          <tr>
            <th>Nomor</th>
            <th>Judul</th>
            <th>Tahun</th>
            <th>Kategori</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.year}</td>
                <td>{item.categoryId}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default CRUDaxios;
