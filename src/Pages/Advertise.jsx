import React, { useState, useContext } from "react";
import { Button, createMuiTheme, FormControl } from "@material-ui/core";
import Footer from "../Components/New/Footer";
import LayoutHeader from "../Components/New/Header";
import MyContext from "../AuthMethod/Context";

const Advertise = ({ user }) => {
  const context = useContext(MyContext);
  return (
    <div className="relative_div">
      <LayoutHeader context={context} user={user} />
      <div
        style={{
          padding: "10% 20% 0 20%",
          backgroundColor: "#F0F2F5",
        }}
      >
        <h3 className="ad_headings"> Advertise </h3>
        <p className="p_italic">
          Does your business offer anything that Car Enthusiasts need or want?
        </p>
        <p style={{ lineHeight: "1.5" }}>
          Garage Recon is the ideal venue for advertising and promoting your
          PRODUCTS and SERVICES. No matter how big or small your business, we
          have an AFFORDABLE and EFFECTIVE option that will be tailored to your
          specific goals.
        </p>
        <h3 className="ad_headings"> Banner Advertising </h3>
        <p>
          Promote your business, or specific products and services with
          precisely positioned banner ads.
        </p>
        <ul className="ad_ul">
          <li>Company branding </li>
          <li>Product promotion</li>
          <li>Drive people to your storefront or your company website</li>
          <li> Target specific users</li>
          <li>
            Custom options including category or page sponsorships, headline
            banners and much more
          </li>
        </ul>
        <h3 className="ad_headings">Additional Opportunities</h3>
        <ul className="ad_ul">
          <li>New product announcements </li>
          <li>Newsletter advertising</li>
          <li> Newsletter advertising</li>
        </ul>
        <p className="ad_ul_p">
          Expand your customer base and brand yourself with Garage Recon. We
          have cost-effective packages available for all businesses.
        </p>
        <h3 className="ad_headings">For more information and rates</h3>
        <div className="advertise_contact">
          <h6 className="p_or"> Call 877-877-5999</h6>
          <p className="p_or">OR</p>
          <FormControl margin="normal" style={{ width: "50%" }}>
            <Button variant="contained" className="get_in_touch_btn">
              GET IN TOUCH
            </Button>
          </FormControl>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Advertise;
