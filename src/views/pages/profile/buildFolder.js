import React from "react"
import {
  Card,
  CardBody,
  UncontrolledTooltip,
  Input,
  Label,
  Button
} from "reactstrap"
import { Heart, MessageSquare } from "react-feather"
import profileImg from "../../../assets/img/profile/user-uploads/user-01.jpg"
import postImg1 from "../../../assets/img/profile/post-media/2.jpg"
import postImg2 from "../../../assets/img/profile/post-media/25.jpg"
import person1 from "../../../assets/img/portrait/small/avatar-s-1.jpg"
import person2 from "../../../assets/img/portrait/small/avatar-s-2.jpg"
import person3 from "../../../assets/img/portrait/small/avatar-s-3.jpg"
import person4 from "../../../assets/img/portrait/small/avatar-s-4.jpg"
import person5 from "../../../assets/img/portrait/small/avatar-s-5.jpg"
import person6 from "../../../assets/img/portrait/small/avatar-s-6.jpg"
import person7 from "../../../assets/img/portrait/small/avatar-s-7.jpg"
import sliderFolder from "../../../extensions/rc-slider/sliderFolder"
import Slider from "../../../extensions/rc-slider/Slider"
import { Search, Inbox, Camera } from "react-feather"
import { Row, Col } from "reactstrap"
import ButtonBlock from "../../../components/reactstrap/buttons/ButtonBlock"




class Posts extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <p>
              <sliderFolder/>
            </p>
          </CardBody>
        </Card>


       
       
      </React.Fragment>
    )
  }
}
export default Posts
