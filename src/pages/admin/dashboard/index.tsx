import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Grid item xs={12} md={4} lg={3} style={{ height: "100%" }}>
      <Paper style={{ backgroundColor: "#fff", height: "100%", width: "100%" }}>
        <div style={{ padding: "16px" }}>
          <div
            style={{
              marginBottom: "16px",
            }}
          >
            <i className="bi bi-bootstrap-fill fs-4"></i>
            <Typography
              variant="h6"
              className="brand-name fs-4"
              style={{ fontSize: "30px", marginLeft: "8px" }}
            >
              Admin Panel
            </Typography>
          </div>
          <hr className="text-dark" />
          <List component="nav">
            <ListItem>
              <i className="bi bi-speedometer2 fs-5 me-3"></i>
              <Typography variant="subtitle1">
                <Link
                  to="/admin"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "600",
                  }}
                >
                  Dashboard
                </Link>
              </Typography>
            </ListItem>
            <ListItem>
              <i className="bi bi-house fs-5 me-3"></i>
              <Typography variant="subtitle1">
                <Link
                  to="/admin/adminNews"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "600",
                  }}
                >
                  {" "}
                  News
                </Link>
              </Typography>
            </ListItem>
            <ListItem>
              <i className="bi bi-house fs-5 me-3"></i>
              <Typography variant="subtitle1">
                <Link
                  to="/admin/addNews"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "600",
                  }}
                >
                  Add News
                </Link>
              </Typography>
            </ListItem>
          </List>
        </div>
      </Paper>
    </Grid>
  );
};

export default Dashboard;
