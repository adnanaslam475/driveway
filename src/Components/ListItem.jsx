import React, { useState, useEffect, useContext, useRef } from "react";

import { Row, Col, Card, Button } from "antd";
import { useHistory } from "react-router-dom";
import { UpCircleFilled, HeartOutlined } from "@ant-design/icons";
import PostData from "../AuthMethod/postData";
import no_image from "../assets/no_image.png";

const ListItem = ({ data, setopen, user, user_likes, set_user_likes }) => {
  const history = useHistory();
  const cardref = useRef()
  const [car_id, set_car_id] = useState('')



  const response_cb = res => {
    if (res.success == true) {
      cardref.current.classList.add('active')
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
    <Col xs={24} sm={12} md={12} lg={8} xl={8}>
      <Card
        hoverable
        onClick={() => history.push(`/details/${data.data_id}`,
          { id: data.data_id })}
        bordered={true}
        cover={<img alt="example" src={data.image_url || no_image} />}
      >
        <span
          ref={cardref}
          onClick={(e) => {
            e.stopPropagation();
            likeHandler(data.data_id);
            set_car_id(data.data_id);
          }}
          className={
            "like-btn right-16 " +
            (user_likes?.filter((v) => v.id === data.data_id)[0] && "active")
          }
        >
          <HeartOutlined className="heartsvg" />
        </span>
        <Row>
          <Col>
            <h5>{data.price}</h5>
            <h2>{data.name}</h2>
            <p className="classificaiton">Premium</p>
          </Col>
        </Row>
        <Row justify="space-between" align="bottom">
          <Col xs={24} sm={8} md={8} lg={8} xl={8}>
            <p className="mileage">{data.odometer} miles</p>
          </Col>
          <Col xs={24} sm={24} md={16} lg={16} xl={16} className="text-right">
            <h3>Est. $376/Month*</h3>
            <h6>{data.location}</h6>
            <p className="price">Price: {data.price}</p>
          </Col>
        </Row>
        <Row className="bordr-btm" justify="end">
          <Col>
            <Button className="button-text">
              <UpCircleFilled />
              Payment
            </Button>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default ListItem;
