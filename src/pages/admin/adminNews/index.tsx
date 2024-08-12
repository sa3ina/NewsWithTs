//@ts-nocheck
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

import Dashboard from "../dashboard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../../redux/store";
import { fetchNews } from "../../../redux/slices/newsSlice";
import { deleteNews } from "../../../redux/slices/newsSlice";

type Props = {};

const adminNews = (props: Props) => {
  const dispatch = useDispatch();
  const { news, loading, error } = useSelector(
    (state: RootState) => state.news
  );
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  const handleDelete = async (id) => {
    try {
      await dispatch(deleteNews(id));
    } catch (error) {
      console.error("Error deleting news:", error);
    }
  };
  return (
    <Grid container>
      <Dashboard />

      <Grid item lg={9} md={8} xs={12}>
        <Paper
          elevation={3}
          style={{
            padding: "16px",
            // width: "100%",
          }}
        >
          <TableContainer component={Paper} style={{ height: "100vh" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Author</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Delete</TableCell>
                  <TableCell>Edit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {news &&
                  news.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>{product.id}</TableCell>
                      <TableCell>{product.source.name}</TableCell>
                      <TableCell>
                        <img
                          src={product.urlToImage}
                          alt=""
                          style={{ width: "32px", height: "32px" }}
                        />
                      </TableCell>
                      <TableCell>{product.author}</TableCell>
                      <TableCell>{product.title}</TableCell>
                      <TableCell>{product.description}</TableCell>
                      <TableCell>{product.category}</TableCell>

                      <TableCell>
                        <button
                          style={{
                            backgroundColor: "#BF211E",
                            color: "white",
                            border: "none",
                            padding: "10px",
                            borderRadius: "5px",
                            cursor: "pointer",
                          }}
                          onClick={() => handleDelete(product.id)}
                        >
                          delete
                        </button>
                      </TableCell>
                      <TableCell>
                        <button
                          style={{
                            backgroundColor: "#F7BF02",
                            color: "black",
                            border: "none",
                            padding: "10px",
                            borderRadius: "5px",
                            cursor: "pointer",
                          }}
                          // onClick={() => handleOpen(product)}
                        >
                          edit
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default adminNews;
