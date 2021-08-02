import React, { useState } from "react";
import "./Home.css";
import {
  Button,
  createMuiTheme,
  Typography,
  Grid,
  FormControl,
  ThemeProvider,
  Divider,
  Card,
  makeStyles,
  TextField,
  IconButton,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ArrowBackIos, Search, ArrowForwardIos } from "@material-ui/icons";
import { cards } from "./dummyfields";
import { usePagination } from "@material-ui/lab/Pagination";
import Footer from "../Components/Footer";

const theme = createMuiTheme({
  props: {
    MuiButton: {
      style: {
        backgroundColor: "white",
      },
    },
  },
  palette: {
    primary: {
      main: "#027DB6",
    },
  },
});

const useStyle = makeStyles({
  ul: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
  },
});

const Home = ({ width }) => {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const classes = useStyle();
  const { items } = usePagination({
    count: 10,
  });
  return (
    <ThemeProvider theme={theme}>
      <Grid container justify="center" alignItems="center">
        <Grid item md={2} sm={12} xs={12}></Grid>
        <Grid
          item
          md={8}
          sm={11}
          xs={10}
          style={{
            display: "flex",
            alignSelf: "center",
            flexDirection: "column",
          }}
        >
          <FormControl
            fullWidth
            margin="normal"
            size="medium"
            variant="outlined"
          >
            <TextField
              name="search"
              id="search"
              placeholder="Search the top automotive classifieds..."
              variant="outlined"
              value={search}
              InputProps={{
                style: {
                  borderTopRightRadius: "0px",
                  borderBottomRightRadius: "0px",
                },
              }}
              onChange={(e) => setSearch(e.target.value)}
            />
          </FormControl>
          <FormControl size="medium" margin="normal">
            <Button
              color="primary"
              variant="contained"
              size="large"
              style={{
                borderTopLeftRadius: "0px",
                minHeight: "56px",
                borderBottomLeftRadius: "0px",
              }}
            >
              <Search fontSize="large" color="white" />
            </Button>
          </FormControl>
          <Grid container spacing={1}>
            {cards.map((v, i) => (
              <Grid item md={4} sm={6} xs={12} key={i}>
                <Card
                  raised
                  onClick={() =>
                    history.push(`/details/${v.name}`, { details: v })
                  }
                  style={{
                    borderRadius: "10px",
                    cursor: "pointer",
                    position: "relative",
                    padding: "10px 10px 30px 20px",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <button
                      className="like-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.currentTarget.classList.toggle("liked");
                      }}
                    ></button>
                    <img
                      src={v.img[0]}
                      style={{
                        width: "100%",
                        borderBottom: "1px solid lightgray",
                      }}
                    />
                  </div>
                  <Typography variant="h6" style={{ fontWeight: "bold" }}>
                    2017
                  </Typography>
                  <Typography
                    variant="h5"
                    style={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                    paragraph
                  >
                    {v.name}
                  </Typography>
                  <Typography
                    variant="h5"
                    color="primary"
                    paragraph
                    align="right"
                  >
                    $ {v.price}
                  </Typography>
                  <Divider orientation="horizontal" />
                </Card>
              </Grid>
            ))}
            <Grid
              container
              alignItems="center"
              justify="center"
              style={{ padding: "50px" }}
            >
              <ul className={classes.ul}>
                {items.map(({ page, type, selected, ...item }, index) => {
                  let children = null;
                  if (type === "start-ellipsis" || type === "end-ellipsis") {
                    children = <p style={{ margin: "10px" }}>...</p>;
                  } else if (type === "page") {
                    children = (
                      <Button
                        type="button"
                        variant="outlined"
                        className="pagenumber"
                        style={{
                          fontWeight: selected ? "bold" : undefined,
                          minHeight: "50px",
                          fontSize: "20px",
                        }}
                        {...item}
                      >
                        {page}
                      </Button>
                    );
                  } else {
                    children = (
                      <div className="btn_div">
                        {type == "previous" && (
                          <IconButton>
                            <ArrowBackIos fontSize="small" color="primary" />
                          </IconButton>
                        )}{" "}
                        <Button
                          style={{
                            backgroundColor: "transparent",
                            color: "#027DB6",
                            fontWeight: "bold",
                            minHeight: "40px",
                          }}
                          color="primary"
                          disableRipple
                          variant="text"
                          {...item}
                        >
                          {type}
                        </Button>
                        {type == "next" && (
                          <IconButton>
                            <ArrowForwardIos color="primary" fontSize="small" />
                          </IconButton>
                        )}
                      </div>
                    );
                  }
                  return <li key={index}>{children}</li>;
                })}
              </ul>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={2} sm={12} xs={12}></Grid>
      </Grid>
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
