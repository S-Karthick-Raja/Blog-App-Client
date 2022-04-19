import { useContext, useState } from "react";
import axios from "axios";
import "./Write.css";
import { Context } from "./../../context/Context";
import { useHistory } from "react-router-dom";

function Write() {
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      username: user.username,
      categories,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const res = await axios.post("/posts", newPost);

      history.push("/post/" + res.data._id);
    } catch (error) {
    }
  };

  console.log(user);

  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}

      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label for="fileInput">
            <i className="writeIcon fa-solid fa-folder-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeInputCat">
          <label>
            Automobile
            <input
              name="category"
              type="radio"
              placeholder="Title"
              value="Automobile"
              className="writeInputCatlist"
              onChange={(e) => setCategories(e.target.value)}
            />
          </label>
          <label>
            Life
            <input
              name="category"
              type="radio"
              placeholder="Title"
              value="Life"
              className="writeInputCatlist"
              onChange={(e) => setCategories(e.target.value)}
            />
          </label>
          <label>
            Movie
            <input
              name="category"
              type="radio"
              placeholder="Title"
              value="Movie"
              className="writeInputCatlist"
              onChange={(e) => setCategories(e.target.value)}
            />
          </label>
          <label>
            {" "}
            Music
            <input
              name="category"
              type="radio"
              placeholder="Title"
              value="Music"
              className="writeInputCatlist"
              onChange={(e) => setCategories(e.target.value)}
            />
          </label>
          <label>
            {" "}
            Sports
            <input
              name="category"
              type="radio"
              placeholder="Title"
              value="Sports"
              className="writeInputCatlist"
              onChange={(e) => setCategories(e.target.value)}
            />
          </label>
          <label>
            {" "}
            Tech
            <input
              name="category"
              type="radio"
              placeholder="Title"
              value="Tech"
              className="writeInputCatlist"
              onChange={(e) => setCategories(e.target.value)}
            />
          </label>
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story...........!"
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}

export default Write;
