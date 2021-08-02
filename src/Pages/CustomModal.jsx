import React from "react";
import {
  Dialog,
  Paper,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@material-ui/core";
import { Button } from "antd";
import { CloseOutlined } from "@material-ui/icons";

import Modalimage from "../assets/modalimage.png";
import { useHistory } from "react-router-dom";

const CustomModal = ({ open, setopen }) => {
  const history = useHistory();


  return (
    <Dialog
      onClose={() => setopen(false)}
      fullWidth
      PaperComponent={Paper}
      onBackdropClick={() => setopen(false)}
      className="modal_main"
      open={open}
    >
      <DialogTitle className="modal_title" onClose={() => setopen(false)}>
        <h1> ACCOUNT NEEDED</h1>
      </DialogTitle>
      <IconButton onClick={() => setopen(false)} className="modal_close">
        <CloseOutlined fontSize="small" />
      </IconButton>
      <DialogContent style={{ padding: "0 25px 0 25px" }}>
        <div className="modal_img_div">
          <img src={Modalimage} alt="" style={{ width: "50%" }} />
        </div>
        <h1 className="taste_p">You've got great taste!</h1>
        <p style={{ textAlign: "left" }}>
          Log in or create an account to save your favorites and view them on
          any device.
        </p>
        <Button
          type="primary"
          className="signup_login_btn2"
          onClick={() => history.push("/auth")}
        >
          Sign Up
        </Button>
        <br />
        <p className="already_p">
          already have an account
          <span className="login_p2">Log In</span>
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
