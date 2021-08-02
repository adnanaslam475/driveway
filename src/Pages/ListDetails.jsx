import React, { useState, useRef, useContext, useEffect } from "react";
import { Layout, Row, Col, Button, Space } from "antd";
import LayoutHeader from "../Components/New/Header";
import LayoutFooter from "../Components/New/Footer";
import { CircularProgress } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { HeartOutlined, LeftCircleFilled } from "@ant-design/icons";
import { useHistory, useLocation } from "react-router-dom";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import CustomModal from "./CustomModal";

import SwiperCore, { Pagination, Navigation, Thumbs } from "swiper/core";
import MyContext from "../AuthMethod/Context";
import GetData from "../AuthMethod/GetData1";
import PostData from "../AuthMethod/postData";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Thumbs]);

const { Content } = Layout;

const ListDetails = ({ user }) => {
  const { state } = useLocation();
  const cardref = useRef();
  const history = useHistory();
  const [open, setopen] = useState(false);
  const context = useContext(MyContext);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [cardetails, setcarDetails] = useState(null);
  const [msg, setmsg] = useState("");
  const [user_like, set_user_like] = useState({});

  const listinghandler = (res) => {
    if (res.error == true) {
      setmsg(res.msg);
    } else {
      setcarDetails(res.data);
    }
  };

  const all_likes_handler = (res) => {
    set_user_like(res.data?.filter((v, i) => v.id == state.id)[0]);
  };

  useEffect(() => {
    GetData(
      `https://garage-recon.herokuapp.com/api/listing/${state?.id}`,
      200,
      "",
      listinghandler
    );
    context.user.token &&
      GetData(
        `https://garage-recon.herokuapp.com/api/favourite`,
        200,
        context.user.token,
        all_likes_handler
      );
  }, [context.user]);

  const response_cb = (res) => {
    if (res.msg.includes("Added")) {
      cardref.current.classList.add("active");
    } else {
      cardref.current.classList.remove("active");
    }
  };

  const likeHandler = (id) => {
    const req = {
      listingId: id,
    };
    if (user.id) {
      PostData(
        "https://garage-recon.herokuapp.com/api/favourite",
        201,
        req,
        user.token,
        response_cb
      );
    } else {
      setopen(true);
    }
  };

  return (
    <Layout>
      <LayoutHeader context={context} user={user} />
      <CustomModal open={open} setopen={setopen} />
      <Content className="inner-details">
        {cardetails ? <div className="container">
          <Row>
            <Col>
              <a
                className="back-search"
                href="#"
                onClick={() => history.push("/")}
                title="Back to Search"
              >
                <LeftCircleFilled /> Back to Search
              </a>
            </Col>
          </Row>
          <Row gutter={30}>
            <Col xs={24} sm={24} md={16}
              lg={16} xl={16} className="relative">
              <span
                ref={cardref}
                onClick={(e) => {
                  likeHandler(cardetails?.id)
                }}
                className="like-btn right-15"
              >
                <HeartOutlined className='heartsvg' />
              </span>
              <Swiper
                pagination={{
                  type: "fraction",
                }}
                keyboard
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                className="mySwiper2">
                {cardetails?.images.map((v, i) => (
                  <SwiperSlide key={i} >
                    <img src={v}
                      style={{ maxHeight: '50vh' }} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView="auto"
                freeMode={true}
                slideToClickedSlide
                touchRatio={3}
                mousewheel
                watchSlidesVisibility={true}
                watchSlidesProgress={true}
                className="mySwiper"
                keyboard={true}
              >
                {cardetails?.images.map((v, i) => (
                  <SwiperSlide key={i} style={{
                    maxHeight: '10vh'
                  }}>
                    <img src={v} alt=""
                      style={{ maxHeight: '9.5vh' }} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
            <Col xs={24} sm={24} md={8}
         className='details_div'
              lg={8} xl={8}>
              <h4>{cardetails?.year}</h4>
              <h1>{cardetails?.name}</h1>
              <p className="edition">Limited Edition</p>
              <Row>
                <Col span={24}>
                  <h3>{cardetails?.price}</h3>
                  <h6>{cardetails?.miles} Mileage</h6>
                </Col>
              </Row>
              <Row>
                <Col><p > {cardetails.description?.substring(0, 300)
                  .replace(/<\/?[^>]+(>|$)/g, "").replace(/((&nbsp;))*/gmi, '')}</p>
                </Col>
                <Col span={24} className="three_btns">
                  <Space direction="vertical" className="w-100">
                    <Button block onClick={(e) => {
                      likeHandler(cardetails.id)
                    }} type="primary">
                      Save To Favorites
                    </Button>
                    <Button onClick={() => history.push(`/`, { name: cardetails.name })}
                      block type="primary">
                      View All {cardetails?.category}
                    </Button>
                    <Button block type="primary">
                      View Full Listing to Contact Seller
                    </Button>
                  </Space>
                </Col>
              </Row>
            </Col>
          </Row>
        </div> : <div className='try_reload'>
          <div>
            {msg ? <div className='loader_err'>
              <span className='err_msg1'>{msg} Try reloading the page</span>
            </div> :
              <CircularProgress className='loader' />}
          </div>
        </div>
        }
      </Content>
      <div style={{ marginTop: "10%" }}>
        <LayoutFooter />
      </div>
    </Layout>
  );
};

export default ListDetails;
