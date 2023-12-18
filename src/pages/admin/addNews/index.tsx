import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Dashboard from "../dashboard";
import { addNews } from "../../../redux/slices/newsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
type Props = {};

const AddNews = (props: Props) => {
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const dispatch = useDispatch();
  const handleAddNews = (e) => {
    e.preventDefault();
    const newsObj = {
      source: {
        id: "business-insider",
        name: name,
      },
      author: author,
      title: title,
      description: "News Description",
      url: "News URL",
      urlToImage: "Image URL",
      publishedAt: new Date(),
      category: category,
      content: "News Content",
      id: uuidv4,
      like: 100,
      dislike: 50,
      seen: 2000,
    };

    dispatch(addNews(newsObj)); // Dispatch the action to add news
    // Clear the form after submission
    setName("");
    setCategory("");
    setAuthor("");
    setTitle("");
  };
  return (
    <Grid container>
      <Dashboard />
      <Grid>
        <form action="" onSubmit={handleAddNews}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "20px",
              height: "100vh",
            }}
          >
            <label htmlFor="">Name</label>
            <input
              value={name}
              type="text"
              style={{
                height: "30px",
                fontSize: "22px",
                color: "black",
                width: "500px",
              }}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">Category</label>
            <input
              value={category}
              type="text"
              style={{
                height: "30px",
                fontSize: "22px",
                color: "black",
                width: "500px",
              }}
              onChange={(e) => setCategory(e.target.value)}
            />
            <label htmlFor="">Author</label>
            <input
              value={author}
              type="text"
              style={{
                height: "30px",
                fontSize: "22px",
                color: "black",
                width: "500px",
              }}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <label htmlFor="">Title</label>
            <input
              value={title}
              type="text"
              style={{
                height: "30px",
                fontSize: "22px",
                color: "black",
                width: "500px",
              }}
              onChange={(e) => setTitle(e.target.value)}
            />

            <button
              style={{
                backgroundColor: "#F7BF02",
                color: "black ",
                padding: "10px",
                border: "none",
                cursor: "pointer",
                borderRadius: "3px",
              }}
              type="submit"
            >
              Add News
            </button>
          </div>
        </form>
      </Grid>
    </Grid>
  );
};
export default AddNews;
