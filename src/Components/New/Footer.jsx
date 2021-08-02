import React, { useState, useEffect } from "react";
import * as dummy from '../../Pages/dummyfields'
import { Layout, Row } from "antd";
import { useHistory } from "react-router-dom";
const { Footer } = Layout;

const LayoutFooter = () => {
  const [userData, setUserData] = useState({})
  const history = useHistory();
  const push = name => {
    history.push(`/${name}`, name === 'auth' ? { isSignUp: true } : null)
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
  useEffect(() => {
    let user = getCookie("user")
    setUserData(user);
  }, []);
  return (
    <Footer>
      <div className="container">
        <Row >
          <ul className='col_footer'>
            {dummy.footerlist.map((v, i) => <li key={i} >
              <a onClick={() => push(v.route)} title={v.name}>
                {userData.token && v.name === 'My Account' ? null : v.name}
              </a></li>)}
          </ul>
        </Row>
      </div>
    </Footer>
  );
};

export default LayoutFooter;
