import axios from "axios";

import { useEffect, useState } from "react";

function CRUDaxios() {
  const [data, setData] = useState([]);
  const [categoryId, setCategoryId] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() =>{
    fetchCategoryId();}, []);
  

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
  const fetchCategoryId = async () => {
      const response = await axios.get("http://localhost:3000/api/category")
      .then((response) => {
        setCategoryId(response.data.info);
        console.log(response.data.info);
      })
      .catch((err) => {
        console.error("There was an error fetching the data!", error);
      });
  };
  return (
    <>
    <div>
      <form>
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title's Movies"
        />

        <label for="year">Year</label>
        <input
          type="text"
          id="year"
          name="year"
          placeholder="Release Year"
        />

        <label for="category">Category</label>
        <select id="category" name="category">
          {categoryId.map((categoryId, index) =>(<option key = {index} value={categoryId.id}>{categoryId.name}</option>
        ))}
        </select>

        <input type="submit" value="Submit" />
      </form>
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
    </>
  );
}
export default CRUDaxios;
