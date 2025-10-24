import axios from "axios";
import { useEffect, useState } from "react";
function CRUDaxios() {
  const [data, setData] = useState([]);
  const [dataCatagory, setDataCategory] = useState([]);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    fetchData();
    fetchDataCategory();
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
  const fetchDataCategory = async () => {
    const response = await axios
      .get("http://localhost:3000/api/category")
      .then((response) => {
        setDataCategory(response.data.info);
        console.log(response.data.info);
      })
      .catch((err) => {
        console.error("There was an error fetching the data!", err);
      });
  };
  const handleTitleChange = async (event) => {
    try {
      await setTitle(event.target.value);
      console.log(title);
    } catch (err) {
      console.log(err);
    }
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
    console.log(year);
  };
  const handleCategoryIdChange = (event) => {
    setCategoryId(event.target.value);
    console.log(categoryId);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let text = "Apakah Anda Yakin menyimpan data??";
      if (confirm(text)) {
        await axios.post("http://localhost:3000/api/movie", {
          title: title,
          year: Number(year),
          categoryId: Number(categoryId),
        });
        fetchData();
        fetchDataCategory;
      } else {
        alert("Data Batal Disimpan");
      }
    } catch (err) {
      alert(err);
    }
  };
  const handleDelete = async (id) => {
    try {
      let text = "Apakah Anda Yakin menghapus data ini??";
      if (confirm(text)) {
        await axios.delete(`http://localhost:3000/api/movie/${id}`);
        fetchData();
        fetchDataCategory();
      } else {
        alert("Data Tidak jadi Dihapus");
      }
    } catch (err) {
      alert(err);
    }
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label for="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleTitleChange}
            value={title}
            placeholder="Title's Movies"
          />

          <label for="year">Year</label>
          <input
            type="text"
            id="year"
            name="year"
            onChange={handleYearChange}
            value={year}
            placeholder="Release Year"
          />

          <label for="category">Category</label>
          <select
            id="category"
            name="category"
            onChange={handleCategoryIdChange}
          >
            {dataCatagory.map((item, index) => (
              <option key={index} value={item.id}>
                {item.name}
              </option>
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
              <th>Aksi</th>
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
                  <td>
                    <button>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </td>
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
