import React from "react"
import { Row, Col, Button, Spinner } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import ProfileHeader from "./ProfileHeader"
import AboutCard from "./AboutCard"
import SuggestedPages from "./SuggestedPages"
import TwitterFeed from "./TwitterFeeds"
import Posts from "./Posts"
import Posts2 from "./Posts2"
import axios from "axios"

import LatestPhotos from "./LatestPhotos"
import Suggestions from "./Suggestions"
import Polls from "./Polls"
import SliderBasic from "../../../extensions/rc-slider/SliderBasic"
import Slider from "../../../extensions/rc-slider/Slider"
import Swiper from "../../../extensions/swiper/Swiper"


import { Search, Inbox, Camera } from "react-feather"

import {
  Card,
  CardBody,
  UncontrolledTooltip,
  Input,
  Label
} from "reactstrap"

import "../../../assets/scss/pages/users-profile.scss"
 
   

class Profile extends React.Component {
  constructor(props) {
    super(props);
  
  this.state = {
    isLoading: false,
    posts: [],
    check: "mmmm"
  };
}

  toggleLoading = () => {
    this.setState({
      isLoading: true
    })

    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 2000)
  }

 
componentDidMount() {
  fetch('/indexPost')
      .then(response => response.json())
      .then(posts => this.setState({ posts: posts }));
      if ((this.state.posts)) {this.setState({check:"kkk"})}
           }



  render() {
    let inv=this.state.posts.invest;
    if (!(this.state.posts.invest))
      return "dfdf"

    let users=this.state.posts.userInfo;
    if (!(this.state.posts.userInfo))
      return "dfdf"

        

    return (
      <React.Fragment>
      
        <div id="user-profile">
         
          <div id="profile-info">
            <Row>
              <Col lg="3" md="12">
              </Col>
              <Col lg="13" md="12">
                <Posts />
              </Col>
                          </Row>
                          <Row>
              <Col lg="3" md="12">

              </Col>
              <Col lg="6" md="12">
              {inv.map((elem) => (
                    <Posts2 investName ={elem.investName} date={elem.created} comments={elem.comments} companyName={elem.userId.companyName} pic={elem.userId.pic} desc={elem.desc}/>))}
              </Col>
            </Row>
            <Row>
              <Col sm="12" className="text-center">
                <Button.Ripple
                  color="primary"
                  onClick={this.toggleLoading}
                  className={`${
                    this.state.isLoading ? "btn-loading" : ""
                  } btn-load`}
                >
                  <Spinner color="primary" />
                  Load More 
                </Button.Ripple>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Profile
