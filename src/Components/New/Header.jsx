import React, { useState, useEffect, useContext } from "react";
import { Layout, Drawer, Row, Col, Menu, Button } from "antd";
import Logo from "../../assets/logo.png";
import { useHistory } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { AccountCircle } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import MyContext from "../../AuthMethod/Context";
const { Header } = Layout;

const LayoutHeader = ({ user }) => {
  // console.log("user in header", user.email);
  const history = useHistory();
  const context = useContext(MyContext);
  const [open, setopen] = useState(false);
  const [email, setemail] = useState("");

  useEffect(() => {
    let userdata = context.user;
    if (userdata) {
      setemail(context.user.email);
    } else {
      setemail(user.email);
    }
    setemail(user.email);
  }, [user]);


  return (
    <Header>
      <div className="container">
        <Row justify="space-around" align="middle">
          <Col>
            <MenuOutlined
              className="custom_menu"
              onClick={() => setopen(!open)}
            />
            <Drawer
              placement="left"
              closable={false}
              onClose={() => setopen(false)}
              visible={open}
              key="left"
            >
              <CloseOutlined
                style={{
                  position: "absolute",
                  right: "20px",
                  top: "20px",
                }}
                size={90}
                onClick={() => setopen(false)}
              />
              <div className="drawer_items">
                <h1 onClick={() => history.push("/")}>Listings</h1>
                {!email && (
                  <h3 onClick={() => history.push("/auth")}>
                    My Account
                  </h3>
                )}
                <h3 onClick={() => history.push("/advertise")}>Advertise</h3>
                <h3 onClick={() => history.push("/about")}>About Us</h3>

                {email ? (
                  <div >
                    <AccountCircle className=' acc_icon' />
                    <p
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      {email}
                    </p>
                  </div>
                ) : (
                  <Button
                    type="primary"
                    onClick={() => history.push("/auth")}
                    className="pull-right"
                  >
                    Sign Up
                  </Button>
                )}
              </div>
            </Drawer>
          </Col>
          <Col flex="210px">
            <a className="brand" href="/" title="Garage Recon">
              <img src={Logo} alt="Garage Recon" />
            </a>
          </Col>
          <Col flex="auto" className="header_btns">
            <Menu className="pull-right">
              <Menu.Item onClick={() => history.push("/")}>Listings</Menu.Item>
              {!email && (
                <Menu.Item
                  onClick={() => history.push("/auth", { isSignUp: true })}
                >
                  My Account
                </Menu.Item>
              )}
              <Menu.Item onClick={() => history.push("/advertise")}>
                Advertise
              </Menu.Item>
              <Menu.Item onClick={() => history.push("/about")}>
                About Us
              </Menu.Item>
            </Menu>
            {email && <Button
              type="primary"
              onClick={() => context.logOut()}
              className="pull-right"
            >Logout</Button>}
            {email ? (
              <div
                className='account_icon'              >
                <AccountCircle
                  className='acc_icon'
                />
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {email}
                </p>
              </div>
            ) : (
              <Button
                type="primary"
                onClick={() => history.push("/auth")}
                className="pull-right"
              >
                Sign Up
              </Button>
            )}
          </Col>
        </Row>
      </div>
    </Header>
  );
};

export default LayoutHeader;
