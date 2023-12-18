import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { fetchNews } from "../../../redux/slices/newsSlice";
import { likeDislikeNews } from "../../../redux/slices/newsSlice";

import Link from "@mui/material";
type Props = {};

function Home({}: Props) {
  const [sortedNews, setSortedNews] = useState<string[]>([]);
  const [clicked, SetClicked] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { news, loading, error } = useSelector(
    (state: RootState) => state.news
  );

  let newsData = news;
  // console.log(newsData);
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  function sortNewsByDate(newsArray) {
    return newsArray.slice().sort((a, b) => {
      return (
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    });
  }

  useEffect(() => {
    let sortedByDate = sortNewsByDate(news);
    setSortedNews(sortedByDate);
  }, [news]);

  function formatDate(dateString: string): string {
    const options = {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  }
  const trendingNews = newsData.filter((item) => item.category === "trending");

  const handleTrendingClick = () => {
    const trending = news.filter((item) => item.category === "trending");
    setSortedNews(trending);
    SetClicked(true);
    console.log(sortedNews);
  };
  const handleLatestClick = () => {
    const latest = news.filter((item) => item.category === "latest");
    setSortedNews(latest);
    SetClicked(true);
    console.log(sortedNews);
  };

  return (
    <Container maxWidth="xl">
      {" "}
      <Box
        sx={{
          flexGrow: 1,
          padding: { xl: "0 90px", md: "0 90px" },
        }}
      >
        {" "}
        <Box sx={{ display: "flex", gap: "30px", padding: "30px 0" }}>
          <Typography sx={{ fontWeight: "700" }}>Categories:</Typography>
          <Typography>
            <button
              style={{
                border: "none",
                backgroundColor: "transparent",
                fontSize: "16px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={handleLatestClick}
            >
              Latest
            </button>
          </Typography>
          <Typography>
            <button
              style={{
                border: "none",
                backgroundColor: "transparent",
                fontSize: "16px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={handleTrendingClick}
            >
              Trending
            </button>
          </Typography>
        </Box>
        <Grid container spacing={5}>
          <Grid item xs={12} md={8}>
            {sortedNews &&
              sortedNews.map((elem) => {
                return (
                  <Box
                    sx={{
                      display: { md: "flex", xs: "block" },
                      gap: "25px",
                      marginBottom: "30px",
                    }}
                  >
                    <Grid item xs={12} md={3}>
                      <Box>
                        <img
                          src={elem.urlToImage}
                          alt=""
                          style={{ width: "100%", height: "auto" }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={9}>
                      <Box>
                        <Typography
                          sx={{
                            fontWeight: "1000",
                            fontSize: "25.3px",
                            marginBottom: "10px",
                          }}
                        >
                          {" "}
                          <a
                            href={elem.url}
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            {elem.title}
                          </a>
                        </Typography>
                        <Box sx={{ display: "flex", gap: "7px" }}>
                          <Typography>BY</Typography>
                          <Typography
                            sx={{ fontSize: "17px", marginBottom: "10px" }}
                          >
                            <span
                              style={{
                                boxShadow: "inset 0 -3px 0 #F6BF00",
                                display: "inline",
                                lineHeight: "1.6",
                                fontWeight: "1000",
                                marginRight: "5px",
                              }}
                            >
                              {elem.author}
                            </span>
                          </Typography>
                          <Typography>
                            {formatDate(elem.publishedAt)}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            gap: "20px",
                            width: "40%",
                            margin: "0",
                          }}
                        >
                          <Box
                            sx={{
                              margin: "0",
                            }}
                          >
                            <button
                              style={{
                                cursor: "pointer",
                                border: "none",
                                backgroundColor: "transparent",
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faEye}
                                style={{ color: "#CCCCCC", marginRight: "5px" }}
                              />
                              <span>{elem.seen}</span>
                            </button>
                          </Box>
                          <Box
                            sx={{
                              margin: "0",
                            }}
                          >
                            <button
                              style={{
                                cursor: "pointer",
                                border: "none",
                                backgroundColor: "transparent",
                              }}
                              onClick={() => {
                                dispatch(
                                  likeDislikeNews({
                                    newsId: elem.id,
                                    action: "like",
                                  })
                                );
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faThumbsUp}
                                style={{ color: "#CCCCCC", marginRight: "5px" }}
                              />
                              <span>{elem.like}</span>
                            </button>
                          </Box>

                          <Box
                            sx={{
                              margin: "0",
                            }}
                          >
                            <button
                              style={{
                                cursor: "pointer",
                                border: "none",
                                backgroundColor: "transparent",
                              }}
                              onClick={() => {
                                dispatch(
                                  likeDislikeNews({
                                    newsId: elem.id,
                                    action: "dislike",
                                  })
                                );
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faThumbsDown}
                                style={{ color: "#CCCCCC", marginRight: "5px" }}
                              />
                              <span>{elem.dislike}</span>
                            </button>
                          </Box>
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "18px",
                          }}
                        >
                          {elem.description}
                        </Typography>
                      </Box>
                    </Grid>
                  </Box>
                );
              })}
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              sx={{
                fontWeight: "1000",
                fontSize: "25px",
                marginBottom: "30px",
              }}
            >
              TRENDING POSTS
            </Typography>
            <Box>
              {" "}
              {trendingNews &&
                trendingNews.map((elem) => {
                  return (
                    <Typography sx={{ fontSize: "17px", marginBottom: "10px" }}>
                      <span
                        style={{
                          boxShadow: "inset 0 -3px 0 #F6BF00",
                          display: "inline",
                          lineHeight: "1.6",
                          fontWeight: "1000",
                          marginRight: "5px",
                          marginBottom: "10px",
                        }}
                      >
                        <a
                          href={elem.url}
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          {elem.title}
                        </a>
                      </span>
                    </Typography>
                  );
                })}
            </Box>
          </Grid>{" "}
        </Grid>{" "}
      </Box>
    </Container>
  );
}

export default Home;
