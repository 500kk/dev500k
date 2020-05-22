import React from "react"
import {
  Card,
  CardBody,
  UncontrolledTooltip,
  Input,
  Label,
  Button
} from "reactstrap"
import { Heart, MessageSquare, Bookmark, Share2, Star } from "react-feather"
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
import SliderBasic from "../../../extensions/rc-slider/SliderBasic"
import Slider from "../../../extensions/rc-slider/Slider"
import { Search, Inbox, Camera } from "react-feather"
import { Row, Col } from "reactstrap"
import Swiper from "../../../extensions/swiper/Swiper"
import ButtonBlock from "../../../components/reactstrap/buttons/ButtonBlock"




class Posts extends React.Component {

  render() {

    return (
      <React.Fragment>
       
        <Card>
          <CardBody>
            <div className="d-flex justify-content-start align-items-center mb-1">
              <div className="avatar mr-1">
                <img
                  src="https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-1/p240x240/46675543_10216063367529403_364556751070035968_n.jpg?_nc_cat=111&_nc_sid=dbb9e7&_nc_oc=AQlfYMm7zj9UZ7w-Sr7zjDkvBhJggng7wUSSe9t4rH7oLCyPnwlyqdhPy9VH5ZFrzzo&_nc_ht=scontent.fsdv2-1.fna&_nc_tp=6&oh=5fe98ecd17eca9275cec23db8b6a2a38&oe=5ED9F728"
                  alt="avtar img holder"
                  height="45"
                  width="45"
                />
              </div>
              <div className="user-page-info">
                <p className="mb-0">{this.props.investName}</p>
                <span className="font-small-2">{this.props.companyName}</span>
              </div>
              <div className="ml-auto user-like">
               <Star /><Star /><Star /><Star /><Star /><a href=""><Share2 /></a><a href=""><Bookmark /></a>
              </div>
            </div>
            <p>
              {this.props.desc}
            </p>
            <iframe
              className="embed-responsive-item w-100 height-250 mb-1"
              src="https://www.youtube.com/embed/xUesKDDcLoQ"
              allowFullScreen
              title="post"
              frameBorder="0"
            />

<div className="d-flex justify-content-start align-items-center mb-1">
              <div className="d-flex align-items-center">
            <Button.Ripple color="dark">מעניין אותי</Button.Ripple>
            </div>



        <p className="ml-auto">
                <Star size={16} className="mr-50" />
        352 ש"ח              
        </p>  
          </div>

          <div className="d-flex justify-content-start align-items-center mb-1">
              <div className="d-flex align-items-center">
                <a href=""><Heart size={16} className="mr-50" /></a>
                269
              </div>
              <div className="ml-2">
                <ul className="list-unstyled users-list m-0 d-flex">
                  <li className="avatar pull-up">
                    <img
                      src={person1}
                      alt="avatar"
                      height="30"
                      width="30"
                      id="avatar013"
                    />
                    <UncontrolledTooltip placement="bottom" target="avatar013">
                      Lai Lewandowski
                    </UncontrolledTooltip>
                  </li>
                  <li className="avatar pull-up">
                    <img
                      src={person2}
                      alt="avatar"
                      height="30"
                      width="30"
                      id="avatar014"
                    />
                    <UncontrolledTooltip placement="bottom" target="avatar014">
                      Elicia Rieske
                    </UncontrolledTooltip>
                  </li>
                  <li className="avatar pull-up">
                    <img
                      src={person3}
                      alt="avatar"
                      height="30"
                      width="30"
                      id="avatar015"
                    />
                    <UncontrolledTooltip placement="bottom" target="avatar015">
                      Alberto Glotzbach
                    </UncontrolledTooltip>
                  </li>
                  <li className="avatar pull-up">
                    <img
                      src={person4}
                      alt="avatar"
                      height="30"
                      width="30"
                      id="avatar016"
                    />
                    <UncontrolledTooltip placement="bottom" target="avatar016">
                      George Nordic
                    </UncontrolledTooltip>
                  </li>
                  <li className="avatar pull-up">
                    <img
                      src={person5}
                      alt="avatar"
                      height="30"
                      width="30"
                      id="avatar017"
                    />
                    <UncontrolledTooltip placement="bottom" target="avatar017">
                      Vinnie Mostowy
                    </UncontrolledTooltip>
                  </li>
                  <li className="d-flex align-items-center pl-50">
                    <span className="align-middle">+264 עוד</span>
                  </li>
                </ul>
              </div>
              <p className="ml-auto">
                <MessageSquare size={16} className="mr-50" />
                98
              </p>
            </div>
                        {this.props.comments.map(elem=>

            <div className="d-flex justify-content-start align-items-center mb-1">
              <div className="avatar mr-50">
                <img src={person6} alt="Avatar" height="30" width="30" />
              </div>
              <div className="user-page-info">
                <h6 className="mb-0">{elem.userId.companyName}</h6>
                <span className="font-small-2">
                 {elem.comment}
                </span>
              </div>
              <div className="ml-auto cursor-pointer">
                <Heart className="mr-50" size={15} />
                <MessageSquare className="mr-50" size={15} />
              </div>

            </div>
            )}
            <div className="d-flex justify-content-start align-items-center mb-2">
              <div className="avatar mr-50">
                <img src={person7} alt="Avatar" height="30" width="30" />
              </div>
             
              <div className="user-page-info">
                <h6 className="mb-0">Jeanie Bulgrin</h6>
                <span className="font-small-2">
                  Wafer I love brownie jelly bonbon tart apple pie
                </span>
              </div>
              <div className="ml-auto cursor-pointer">
                <Heart className="mr-50" size={15} />
                <MessageSquare className="mr-50" size={15} />
              </div>
            </div>
            <fieldset className="form-label-group mb-50">
              <Input
                type="textarea"
                rows="3"
                placeholder="הוסף תגובה"
                id="add-comment"
              />
              <Label for="add-comment">Add Comment</Label>
            </fieldset>
            <Button.Ripple size="sm" color="primary">
              שלח תגובה
            </Button.Ripple>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default Posts
