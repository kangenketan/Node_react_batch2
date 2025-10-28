import axios from "axios";
import { useEffect, useState } from "react";
import "../CRUDaxios.css";
function CRUDaxios() {
  const [data, setData] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [id, setId] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetchData();
    fetchDataCategory();
  }, [page]);

  const fetchData = () => {
    axios
      .get(`http://localhost:3000/api/movie?page=` + page)
      .then((result) => {
        setData(result.data.info.movies);
        setCount(result.data.info.total);
      })
      .catch((e) => {
        console.log(e);
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
      let txtSimpan = "Apakah Anda Yakin menyimpan data??";
      let txtUpdate = "Apakah Anda Yakin Memperbahuri Data??";
      if (id) {
        if (confirm(txtUpdate)) {
          await axios.put(`http://localhost:3000/api/movie/${id}`, {
            title: title,
            year: Number(year),
            categoryId: Number(categoryId),
          });
          setTitle("");
          setYear("");
          setCategoryId("");
          fetchData();
          fetchDataCategory();
          hapusData();
        }
      } else {
        if (confirm(txtSimpan)) {
          await axios.post("http://localhost:3000/api/movie", {
            title: title,
            year: Number(year),
            categoryId: Number(dataCategory[0]?.id || categoryId),
          });

          fetchData();
          fetchDataCategory();
        }
      }
    } catch (err) {
      alert(err);
    }
  };
  const handleDelete = async (id) => {
    try {
      let text = "Apakah Anda yakin menghapus data ini??";
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
  const hapusData = () => {
    setTitle("");
    setYear("");
    setCategoryId("");
    setId("");
  };
  const handleEdit = async (id) => {
    try {
      axios.get(`http://localhost:3000/api/movie/${id}`).then((response) => {
        let result = response.data.info;
        console.log(result);
        setTitle(result.title);
        setYear(result.year);
        // setCategoryId(result.categoryId);
        setId(result.id);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>MOVIES</h1>
      <div className="flex justify-center gap-20">
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
            className="input input-primary"
            type="text"
            id="year"
            name="year"
            onChange={handleYearChange}
            value={year}
            placeholder="Release Year"
          />
          <label for="category">Category</label>
          <select
            value={categoryId}
            id="category"
            name="category"
            onChange={handleCategoryIdChange}
          >
            {dataCategory.map((item, index) => (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <input type="submit" value="Submit" class="btn btn-secondary" />
        </form>

        <div className="overflow-x-auto">
          <table className="table table-zebra">
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
                    <td>{(page - 1) * 5 + index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.year}</td>
                    <td>{item.category?.name}</td>
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-error"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="join">
          {Array.from({ length: Math.ceil(count / 3) }, (_, i) => (
            <button
              className="join-item btn btn-xl"
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
export default CRUDaxios;
