import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { RootState } from "../../redux/store";
import { fetchNews } from "../../redux/slices/newsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function ResponsiveAppBar() {
  const [search, setSearch] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const dispatch = useDispatch();
  const { news, loading, error } = useSelector(
    (state: RootState) => state.news
  );
  let newsData = news;
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  console.log(newsData);

  const filteredNews = newsData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filteredNews);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "black",
        borderBottom: { xs: "none", md: "20px solid #CCCCCC" },
        marginBottom: "30px",
        padding: { xl: "0 90px", md: "0 90px" },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Box
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              flexGrow: 1,
            }}
          >
            <Box style={{ marginLeft: 0 }}>
              <Link to="/">
                <img
                  src="https://i0.wp.com/therealnews.com/wp-content/uploads/2022/08/lockup-duochrome-bright-1.png?resize=1536%2C305&ssl=1"
                  alt="Logo"
                  style={{ maxWidth: "150px", width: "100%", height: "auto" }}
                />
              </Link>
            </Box>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Latest</Typography>
              </MenuItem>
              {/* <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">TRENDING</Typography>
              </MenuItem> */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">About</Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">NewsLetter</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontWeight: "900",
                "&:hover": {
                  color: "#CCCCCC",
                },
              }}
            >
              LATEST
            </Button>
            {/* <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontWeight: "900",
                "&:hover": {
                  color: "#CCCCCC",
                },
              }}
            >
              TRENDING
            </Button> */}
            <Link to="/about">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontWeight: "900",
                  "&:hover": {
                    color: "#CCCCCC",
                  },
                }}
              >
                ABOUT
              </Button>
            </Link>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "black",
                display: "block",
                fontWeight: "700",
                backgroundColor: "#F7BF02",
                "&:hover": {
                  backgroundColor: "#C09214",
                },
              }}
            >
              NEWSLETTER
            </Button>
            <IconButton
              size="large"
              aria-label="search"
              color="inherit"
              sx={{ position: "relative" }}
            >
              <input
                type="text"
                onChange={(e) => {
                  setSearch(e.target.value);
                  setShowResults(!!e.target.value);
                }}
              />{" "}
              <SearchIcon />
            </IconButton>

            <div
              style={{
                position: "absolute",
                top: "40px",
                left: "0",
                width: "100%",
                background: "white",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                zIndex: "4556",
                color: "black",
                marginTop: "30px",
                display: showResults ? "block" : "none",
              }}
            >
              <ul>
                {filteredNews.map((result, index) => (
                  <a
                    href={result.url}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <li
                      style={{ listStyleType: "none", padding: "3px" }}
                      key={index}
                    >
                      {" "}
                      <SearchIcon style={{ height: "20px" }} />
                      {result.title}
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          </Box>
          <Box
            style={{ position: "absolute", top: "70px", right: "15px" }}
            sx={{ display: { xs: "none", md: "flex", sm: "none" } }}
          >
            <ul
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
              }}
            >
              <li style={{ listStyleType: "none" }}>
                <Link to={"https://www.facebook.com/"}>
                  <FontAwesomeIcon
                    icon={faFacebookSquare}
                    style={{ color: "black", listStyleType: "none" }}
                  />
                </Link>
              </li>
              <li style={{ listStyleType: "none" }}>
                <Link to={"https://twitter.com/"}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faTwitter}
                    style={{ color: "black" }}
                  />
                </Link>
              </li>
              <li style={{ listStyleType: "none" }}>
                <Link to={"https://www.instagram.com/"}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ color: "black" }}
                  />
                </Link>
              </li>
              <li style={{ listStyleType: "none" }}>
                <Link to={"https://www.youtube.com/"}>
                  <FontAwesomeIcon
                    icon={faYoutube}
                    style={{ color: "black" }}
                  />
                </Link>
              </li>
              <li style={{ listStyleType: "none" }}>
                <Link to={"https://www.telegram.com/"}>
                  <FontAwesomeIcon
                    icon={faTelegram}
                    style={{ color: "black" }}
                  />
                </Link>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
