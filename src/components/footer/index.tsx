//@ts-nocheck
import React from "react";
import { Grid, Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        padding: { md: "0 90px" },
      }}
    >
      <Box sx={{ py: 4 }}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <Link to="/">
                <img
                  src="https://i0.wp.com/therealnews.com/wp-content/uploads/2022/08/lockup-duochrome-bright-1.png?resize=1536%2C305&ssl=1"
                  alt="Logo"
                  style={{
                    maxWidth: "150px",
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Link>
            </Grid>
            <Grid item md={6} xs={12}>
              <div>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <li style={{ listStyleType: "none" }}>
                    <Link to={"https://www.facebook.com/"}>
                      <FontAwesomeIcon
                        icon={faFacebookSquare}
                        style={{ color: "white", listStyleType: "none" }}
                      />
                    </Link>
                  </li>
                  <li style={{ listStyleType: "none" }}>
                    <Link to={"https://twitter.com/"}>
                      {" "}
                      <FontAwesomeIcon
                        icon={faTwitter}
                        style={{ color: "white" }}
                      />
                    </Link>
                  </li>
                  <li style={{ listStyleType: "none" }}>
                    <Link to={"https://www.instagram.com/"}>
                      {" "}
                      <FontAwesomeIcon
                        icon={faInstagram}
                        style={{ color: "white" }}
                      />
                    </Link>
                  </li>
                  <li style={{ listStyleType: "none" }}>
                    <Link to={"https://www.youtube.com/"}>
                      <FontAwesomeIcon
                        icon={faYoutube}
                        style={{ color: "white" }}
                      />
                    </Link>
                  </li>
                  <li style={{ listStyleType: "none" }}>
                    <Link to={"https://www.telegram.com/"}>
                      <FontAwesomeIcon
                        icon={faTelegram}
                        style={{ color: "white" }}
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "20px",
                textAlign: "left",
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Collection
                </Typography>
                <ul
                  style={{
                    listStyle: "none",

                    padding: 0,
                  }}
                >
                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "700",
                        fontSize: "23px",
                      }}
                      to="/"
                    >
                      TRNN
                    </Link>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <Link
                      to="/"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "400",
                        fontSize: "17px",
                      }}
                    >
                      About The Real News Netw.
                    </Link>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <Link
                      to="/"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "400",
                        fontSize: "17px",
                      }}
                    >
                      Our Team
                    </Link>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <Link
                      to="/"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "400",
                        fontSize: "17px",
                      }}
                    >
                      Baltimore Studios
                    </Link>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <Link
                      to="/"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "400",
                        fontSize: "17px",
                      }}
                    >
                      Latest News
                    </Link>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <Link
                      to="/"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "400",
                        fontSize: "17px",
                      }}
                    >
                      In the Media
                    </Link>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <Link
                      to="/"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "400",
                        fontSize: "17px",
                      }}
                    >
                      The Upsurge
                    </Link>
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "20px",
                textAlign: "left",
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Collection
                </Typography>
                <ul
                  style={{
                    listStyle: "none",

                    padding: 0,
                  }}
                >
                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "700",
                        fontSize: "23px",
                      }}
                      to="/"
                    >
                      SECTIONS
                    </Link>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <Link
                      to="/"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "400",
                        fontSize: "17px",
                      }}
                    >
                      Climate Crisis
                    </Link>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <Link
                      to="/"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "400",
                        fontSize: "17px",
                      }}
                    >
                      Economy and Inequality
                    </Link>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <Link
                      to="/"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "400",
                        fontSize: "17px",
                      }}
                    >
                      Movements and Politics: Int.
                    </Link>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <Link
                      to="/"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "400",
                        fontSize: "17px",
                      }}
                    >
                      Movements and Politics: US
                    </Link>
                  </li>

                  <li style={{ marginBottom: "10px" }}>
                    <Link
                      to="/"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "400",
                        fontSize: "17px",
                      }}
                    >
                      Racial Justice
                    </Link>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <Link
                      to="/"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "400",
                        fontSize: "17px",
                      }}
                    >
                      Baltimore
                    </Link>
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "20px",
                textAlign: "left",
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Collection
                </Typography>
                <ul
                  style={{
                    listStyle: "none",

                    padding: 0,
                  }}
                >
                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "700",
                        fontSize: "23px",
                      }}
                      to="/"
                    >
                      SHOWS & SERIES
                    </Link>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <Link
                      to="/"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "400",
                        fontSize: "17px",
                      }}
                    >
                      The Chris Hedges Report
                    </Link>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <Link
                      to="/"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "400",
                        fontSize: "17px",
                      }}
                    >
                      Edge of Sports with Dave
                    </Link>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <Link
                      to="/"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "400",
                        fontSize: "17px",
                      }}
                    >
                      The Marc Steiner Show
                    </Link>
                  </li>

                  <li style={{ marginBottom: "10px" }}>
                    <Link
                      to="/"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "400",
                        fontSize: "17px",
                      }}
                    >
                      Rattling The Bars
                    </Link>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <Link
                      to="/"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "400",
                        fontSize: "17px",
                      }}
                    >
                      Tax Broke
                    </Link>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <Link
                      to="/"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "400",
                        fontSize: "17px",
                      }}
                    >
                      The Upsurge
                    </Link>
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "20px",
                textAlign: "left",
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Collection
                </Typography>
                <ul
                  style={{
                    listStyle: "none",

                    padding: 0,
                  }}
                >
                  <li style={{ marginBottom: "20px" }}>
                    <Link
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "700",
                        fontSize: "23px",
                      }}
                      to="/"
                    >
                      CONTACT US
                    </Link>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <Link
                      to="/"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "400",
                        fontSize: "17px",
                      }}
                    >
                      IWT - The Real News Netw.
                    </Link>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <Link
                      to="/"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "400",
                        fontSize: "17px",
                      }}
                    >
                      231 N. Holliday St.
                    </Link>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <Link
                      to="/"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "400",
                        fontSize: "17px",
                      }}
                    >
                      Baltimore, MD 21202
                    </Link>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <Link
                      to="/"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "400",
                        fontSize: "17px",
                      }}
                    >
                      USA
                    </Link>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <Link
                      to="/"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "400",
                        fontSize: "17px",
                      }}
                    >
                      (410) 800-4295
                    </Link>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <Link
                      to="/"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "400",
                        fontSize: "17px",
                      }}
                    >
                      contact@therealnews.com
                    </Link>
                  </li>
                </ul>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
