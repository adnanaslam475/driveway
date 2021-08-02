
import React, { useEffect, useState } from 'react';
import { withWidth } from '@material-ui/core';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import PropTypes from "prop-types";
import Auth from './Pages/Auth';
import About from './Pages/About';
import Advertise from './Pages/Advertise';
import MyContext from './AuthMethod/Context'
import Listing from './Pages/Listing';
import ListDetails from './Pages/ListDetails'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import { createBrowserHistory } from 'history';
import 'antd/dist/antd.css';
import './App.css';
const baseurl = 'https://garage-recon.herokuapp.com/'


function App(props) {
  const [redirect, setredirect] = useState(false)
  const [loading, setloading] = useState(false);
  const history = createBrowserHistory();
  const [user, setuser] = useState({})
  const [user_likes, setuser_likes] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0);
    let user = getCookie("user")
    if (user) {
      user = JSON.parse(user);
      setuser(user);
      setloading(false)
      if (window.location.pathname === '/auth') {
        if (user.token) {
          setredirect(true)
        }
      }
    }
    else {
      setloading(false)
    }
  }, [])

  const setCookie = (cname, cvalue, exdays = 1) => {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }


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
  const setSession = user => {
    setuser(user)
    setCookie('user', JSON.stringify(user))
  }

  const logOut = () => {
    let curr_user = {};
    setuser(curr_user)
    setCookie('user', JSON.stringify(curr_user))
  }


  const setstate = obj => {
    setuser(obj)
  }
  const user_likes_handler = res => {
    setuser_likes(res)
  }

  return (
    <Router >
      <MyContext.Provider value={{
        history: history,
        baseurl,
        user: user,
        user_likes: user_likes,
        setState: setstate,
        setSession,
        logOut: logOut,
      }}>
        <Route path="/" exact render={() => <Listing {...props} user={user} />} />
        <Route path='/auth'
          render={() => <Auth {...props} user={user} />} />
        {redirect && <Redirect to='/' />}
        <Route path="/details/:id" exact
          render={() => <ListDetails {...props} user={user} />} />
        <Route path="/about" exact
          render={() => <About {...props} user={user} />} />
        <Route path="/advertise" exact
          render={() => <Advertise {...props} user={user} />} />
        <Route path="/privacy_policy" exact
          render={() => <PrivacyPolicy {...props} user={user} />} />
      </MyContext.Provider>
    </Router>
  );
}

App.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};
export default withWidth()(App);