import React, { useEffect, useState, useContext } from "react";
import "./Home.css";
import {
  Button,
  InputLabel,
  Grid,
  FormControl,
  CircularProgress,
  TextField,
} from "@material-ui/core";
import Fade from "react-reveal/Fade";

import LoginSplash from "../assets/log-in-splash.jpg";
import SignUpSplash from "../assets/sign-up-splash.jpg";
import Logo from "../assets/logo.png";
import { Done } from "@material-ui/icons";
import GetData from "../AuthMethod/loginFetch";
import { useHistory, useLocation } from "react-router-dom";
import MyContext from "../AuthMethod/Context";

const arr = [
  "Instant updates on new listings from your saved searches!",
  "Instantly see your saved searches without any effort!",
  "No need to search all the sites for hours each night to look up your search items!",
  "Stay on top of any price drops on your saved search on particular listings!",
  "Get an email alert of any updates each and every day!",
];
const Auth = ({ user }) => {
  const [loading, setloading] = useState(false);
  const context = useContext(MyContext);
  const history = useHistory();
  const [msg, setMsg] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const getCookie = (cname) => {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  useEffect(() => {
    // let user = getCookie("user")
    // if (user) {
    //   user = JSON.parse(user);
    //   history.push('/')
    // }
  }, []);


  const handlechange = (e) => {
    setInput({
      ...input,
      [e.target.name || e.target.id]: e.target.value,
    });
    setMsg("");
  };

  const submit = (e) => {
    e.preventDefault();
    setMsg('')
    if (input.email.trim().length &&
      input.password.trim().length) {
      let req = {
        email: input.email,
        password: input.password,
      };
      GetData(
        isSignUp
          ? "https://garage-recon.herokuapp.com/api/user/signup"
          : "https://garage-recon.herokuapp.com/api/user/login",
        isSignUp ? 201 : 200,
        req,
        isSignUp ? postsignup : postLogin
      )
      setloading(true);
    } else {
      setMsg('please enter fields')
    }
  };

  const postsignup = (res) => {
    if (res?.error == true) {
      setMsg(res.msg);
    } else {

      if (res.msg == "Successfully created") {
        setIsSignUp(false);
        setMsg(msg);
      } else if (res.msg == "Email already exsists") {
        setMsg("Email Already Exists");
      }
    };
    setloading(false);
  }


  const postLogin = res => {
    console.log(res)
    if (res?.error == true) {
      setMsg(res.msg);
    } else {
      if (res.success == true) {
        setloading(false);
        let user = {
          email: res.data.email,
          token: res.data.token,
          id: res.data.id,
        };
        context.setState({ user });
        context.setSession(user);
        history.push("/", { from: "/auth" });
      }
      else {
        setMsg(res.msg)
      }
    }
    setloading(false);
  };

  return (
    <Grid
      container
      className='auth_container'>
      <Grid item md={5} sm={12} xs={12}>
        <img
          src={isSignUp ? SignUpSplash : LoginSplash}
          className="logo"
          alt=""
        />
      </Grid>
      <Grid item md={7} sm={12} xs={12} className="grid_center">
        <img src={Logo} />
        <h1 className="log_heading">
          {isSignUp ? "Create an Account" : "Log In"}
        </h1>
        <div className="div_center_one"></div>
        <div className="new_div">
          <p>
            {!isSignUp ? "New to Garage Recon ?" : "Already have an account?"}{" "}
          </p>
          <div onClick={() => {
            setIsSignUp(!isSignUp);
            setMsg('')
          }}>
            <p className="login_p">
              {!isSignUp ? "Create an Account" : "Log In"}
            </p>
          </div>
        </div>
        <InputLabel style={{ marginTop: "10px" }}>
          What's your email?
        </InputLabel>
        <FormControl fullWidth margin="dense" size="medium" variant="outlined">
          <TextField
            name="email"
            placeholder="Type Email..."
            id="email"
            type="email"
            value={input.email}
            variant="outlined"
            onChange={handlechange}
          />
        </FormControl>
        <InputLabel style={{ marginTop: "10px" }}>Password</InputLabel>
        <FormControl fullWidth margin="dense" size="medium" variant="outlined">
          <TextField
            name="password"
            placeholder="Type password..."
            id="password"
            type="password"
            value={input.password}
            variant="outlined"
            onChange={handlechange}
          />
        </FormControl>
        <Fade bottom collapse when={msg}>
          <div className='err_msg'>
            {msg}
          </div>
        </Fade>

        {loading ? (
          <div className='progress'          >
            <CircularProgress
              color="primary"
              size={30}
            />
          </div>
        ) : (
          <Button
            className="signup_login_btn"
            onClick={submit}
            type="button"
            fullWidth
          >
            {isSignUp ? " Sign Up" : "Login"}
          </Button>
        )}
        <div className="points_main">
          <h2 className="sign_up_heading">
            SIGN UP... AND LET US DO THE WORK FOR YOU!
          </h2>
          <div>
            {arr.map((v, i) => (
              <div className="points" key={i}>
                <Done className="done_icon" />
                <p> {v}</p>
              </div>
            ))}
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Auth;
