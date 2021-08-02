import React, { useContext } from "react";
import "./Home.css";
import { Grid } from "@material-ui/core";
import Footer from "../Components/New/Footer";
import LayoutHeader from "../Components/New/Header";
import MyContext from "../AuthMethod/Context";

const About = ({ user }) => {
  const context = useContext(MyContext);

  return (
    <div className="relative_div">
      <LayoutHeader context={context} user={user} />
      <Grid container className="about_grid">
        <h2 className="ad_headings">About Garage Recon</h2>
        <p className="about_p">
          We are car enthusiasts, who probably just like you, have been
          searching and buying cars online since the dawn of the Internet.
          Looking at many different websites for the car of your dreams is
          daunting and very time consuming. We built Garage Recon to do all the
          work for you. Finally a site truly built for the end user, with real
          time alerts, no longer do you have to spend countless hours searching
          multiple sites wondering what you are missing!
        </p>
      </Grid>
        <Footer />
    </div>
  );
};

export default About;
