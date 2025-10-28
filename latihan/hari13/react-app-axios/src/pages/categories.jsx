import axios from "axios";
import { useEffect, useState } from "react";
import "../CRUDaxios.css";
function Category() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [dataCategory, setDataCategory] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    fetchDataCategory();
  }, []);

  const fetchDataCategory = async () => {
    axios
      .get("http://localhost:3000/api/category")
      .then((response) => {
        setDataCategory(response.data.info || []);
        console.log(response.data.info);
      })
      .catch((err) => {
        console.error("There was an error fetching the data!", err);
      });
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCategoryIdChange = (event) => {
    setCategoryId(event.target.value);
  };

  const hapusData = () => {
    setName("");
    setCategoryId("");
    setId("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const txtSimpan = "Apakah Anda yakin menyimpan data??";
      const txtUpdate = "Apakah Anda yakin memperbahuri Data??";
      if (id) {
        if (window.confirm(txtUpdate)) {
          await axios.put(`http://localhost:3000/api/category/${id}`, {
            name: name,
            categoryId: Number(categoryId),
          });
          hapusData();
          fetchDataCategory();
        }
      } else {
        if (window.confirm(txtSimpan)) {
          await axios.post("http://localhost:3000/api/category", {
            name: name,
            categoryId: Number(categoryId),
          });
          hapusData();
          fetchDataCategory();
        }
      }
    } catch (err) {
      alert(err);
    }
  };

  const handleEdit = async (editId) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/category/${editId}`
      );
      const result = response.data.info;
      if (result) {
        console.log(result);
        setName(result.name || "");
        setCategoryId(
          result.categoryId !== undefined ? String(result.categoryId) : ""
        );
        setId(result.id);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (deleteId) => {
    try {
      const text = "Apakah Anda Yakin menghapus data ini??";
      if (window.confirm(text)) {
        await axios.delete(`http://localhost:3000/api/category/${deleteId}`);
        fetchDataCategory();
      } else {
        // cancelled
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <h1>Categories</h1>
      <div className="flex justify-center gap-20">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleNameChange}
            value={name}
            placeholder="Name's Categories"
          />
          <input type="submit" value="Submit" className="btn btn-secondary" />
        </form>
        <div className="overflow-x-auto">
          <h2>Ini Tabel Categories Movies Gaes, silahkan dicek</h2>
          <table className="table table-xs table-pin-rows table-pin-cols">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataCategory.map((item, index) => {
                return (
                  <tr key={item.id ?? index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
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
      </div>
    </>
  );
}

export default Category;
