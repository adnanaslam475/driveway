import React, { useRef, useState, useEffect, useContext } from "react";
import { Layout, Row, Col, Input, Button, Pagination } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import LayoutHeader from "../Components/New/Header";
import LayoutFooter from "../Components/New/Footer";
import CustomModal from "./CustomModal";
import ListItem from "../Components/ListItem";
import MyContext from "../AuthMethod/Context";
import GetData from "../AuthMethod/GetData1";
import { CircularProgress } from '@material-ui/core';
import { useLocation } from "react-router-dom";

const { Search } = Input;
const { Content } = Layout;

const Listing = ({ user }) => {
  const [search, setSearch] = useState('');
  const [email, setemail] = useState('');
  const [open, setopen] = useState(false);
  const context = useContext(MyContext);
  const [listing, setListing] = useState([])
  const [page, setpage] = useState(1);
  const [pagetrue, settrue] = useState(false);
  const [limit, setlimit] = useState(30)
  const location = useLocation();
  const [params, setparams] = useState('')
  const [msg, setmsg] = useState('')
  const [loading, setloading] = useState(true)
  const [total, settotal] = useState(0);
  const [user_likes, set_user_likes] = useState([])

  const listinghandler = res => {
    if (res?.error == true) {
      setmsg(res.msg)
      setloading(false)
    }
    else {
      setListing(res.data);
      settotal(res.total);
      setloading(false);
      settrue(false)
      res.data.length == 0 && setmsg('No Records found')
    }
    search.trim()?.length && res.data?.length == 0 && setmsg('No records found')
  }
  const all_likes_handler = res => {
    set_user_likes(res.data)
  }


  useEffect(() => {
    GetData(
      `https://garage-recon.herokuapp.com/api/listing?page=${page}&limit=${limit}&name=${params}`,
      200,
      '',
      listinghandler
    )
    context.user.token && GetData(
      `https://garage-recon.herokuapp.com/api/favourite`,
      200,
      context.user.token,
      all_likes_handler
    )

  }, [context.user, location])

  useEffect(() => {
    if (search.trim().length || (page && pagetrue)) {
      setloading(true)
      let gopage = null;
      if (search.trim.length || page > 1) {
        setparams('')
        gopage = 1
      }
      else { gopage = page }
      GetData(
        `https://garage-recon.herokuapp.com/api/listing?page=${gopage}&limit=${limit}&name=${search || params}`,
        200,
        '',
        listinghandler
      )
    }
  }, [search, page])


  return (
    <Layout>
      <LayoutHeader context={context} user={user} />
      <CustomModal open={open} setopen={setopen} />
      <Content >
        <div className='container' >
          <Row>
            <Col span={24}>
              <Search
                placeholder="Search makes, models, keywords"
                enterButton
                onClick={() => console.log('click')}
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </Col>
          </Row>
          {<Row>
            <Col style={{ marginTop: '1rem' }} span={10}>
              <Search
                placeholder='subscribe to get emails'
                enterButton
                value={email}
                onChange={e => setemail(e.target.value)}
              />
            </Col>
          </Row>}
          <Row>
            <Col>
              <h2>18,858 Used Cars For Sale</h2>
              <p>
                Find a car, truck, or SUV you love and get a great deal. <br />
                Then we’ll deliver the vehicle right to your door.
              </p>
            </Col>
          </Row>
        </div>
        {listing.length ? <div className="container"
          style={{
            minHeight: '70vh'
          }}>
          <Row gutter={[20, 20]} >
            {loading ? <div className='container' style={{
              display: 'flex',
              justifyContent: 'center'
            }} >
              <CircularProgress className='loader'
              />
            </div> : listing.map((v, i) => {
              return (
                <ListItem
                  data={v}
                  key={i}
                  user_likes={user_likes}
                  user={user}
                  setopen={setopen}
                />
              )
            })}
          </Row>
        </div> : <div className='try_reload'>
          <div>
            {msg ? <div className='loader_err'>
              <span className='err_msg1'>{msg}</span></div> :
              <CircularProgress className='loader' />}
          </div>
        </div>}
        <Row justify="center" align="middle">
          <Col >
            <Pagination
              defaultCurrent={1}
              total={50}
              onChange={p => { setpage(p); settrue(true) }}
              itemRender={(last, type, originalElement) => {
                return (<div>
                  {
                    type === "prev" && <a style={{ pointerEvents: page == 1 && 'none' }} className="a_prev_next">
                      <LeftOutlined />
                      <span className="hide"> Previous</span>
                    </a>
                  }
                  {type === "next" && <a style={{
                    pointerEvents: (page === last ||
                      page == total) ? 'none' : null
                  }}
                    className="a_prev_next">
                    <span className="hide"> Next </span>
                    <RightOutlined />
                  </a>}
                  {originalElement}
                </div>)
              }}
            />
            <p className='page_p' >cars {listing ? (limit * page) > total ? total : (limit * page) : 0} - {total}</p>
          </Col>
        </Row>
      </Content>
      <LayoutFooter />
    </Layout>
  );
};
export default Listing;