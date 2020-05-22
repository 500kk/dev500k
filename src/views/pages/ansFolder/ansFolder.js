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
import CarouselCaptions from "../../../components/reactstrap/carousel/CarouselCaptions"
import ButtonBlockFoldAgain from "../../../components/reactstrap/buttons/ButtonBlockFoldAgain"

import { Search, Inbox, Camera } from "react-feather"
import { Row, Col, CardTitle } from "reactstrap"



class Posts extends React.Component {
constructor(props) {
    super(props);


   this.state = {
    isLoading: false,
    first: null,
    second: null,
    third: null,
    posts: [],
    budget: null,
    divider: null,
    check: "mmmm"
  };
}

componentDidMount() {
  var data={divider: 3, budget: 300000};
  var rand1;
  var rand2;
  var rand3;
  fetch('/buildFolder', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data)},)
      .then(response => response.json())
      .then(posts => this.setState({ posts: posts.posts, first: posts.first, second: posts.second, third: posts.third }));
               this.setState({budget: data.budget}); 
               this.setState({divider: data.divider}); 
                 }

  findMore = (id, chooser) => {
    if (chooser=="1") {
      var rand = Math.floor(Math.random() * this.state.posts.length);
      while(this.state.posts[rand]._id.toString()==id.toString()||this.state.posts[rand]._id.toString()==this.state.second._id.toString()||this.state.posts[rand]._id.toString()==this.state.third._id.toString()||parseInt(this.state.posts[rand].price)+parseInt(this.state.second.price)+parseInt(this.state.third.price)>this.state.budget) {rand = Math.floor(Math.random() * this.state.posts.length);}
      this.setState({first: this.state.posts[rand]});
    }
    if (chooser=="2") {
      var rand = Math.floor(Math.random() * this.state.posts.length);
      while(this.state.posts[rand]._id.toString()==id.toString()||this.state.posts[rand]._id.toString()==this.state.first._id.toString()||this.state.posts[rand]._id.toString()==this.state.third._id.toString()||parseInt(this.state.posts[rand].price)+parseInt(this.state.first.price)+parseInt(this.state.third.price)>this.state.budget) {rand = Math.floor(Math.random() * this.state.posts.length);}
      this.setState({second: this.state.posts[rand]});
      }
    
    if (chooser=="3") {
     var rand = Math.floor(Math.random() * this.state.posts.length);
      while(this.state.posts[rand]._id.toString()==id.toString()||this.state.posts[rand]._id.toString()==this.state.first._id.toString()||this.state.posts[rand]._id.toString()==this.state.second._id.toString()||parseInt(this.state.posts[rand].price)+parseInt(this.state.first.price)+parseInt(this.state.second.price)>this.state.budget) {rand = Math.floor(Math.random() * this.state.posts.length);}
      this.setState({third: this.state.posts[rand]});
      }
    }


  render() {
    let total=0;
    if (!(this.state.posts))
      return "dfdf";
      if (this.state.first) {total+=parseInt(this.state.first.price)}
      if (this.state.second) {total+=parseInt(this.state.second.price)}
      if (this.state.third) {total+=parseInt(this.state.third.price)}
      let choosen=[];
    if (this.state.first){choosen.push({data: this.state.first, num: "1"});}
    if (this.state.second) {choosen.push({data: this.state.second, num: "2"});}
    if (this.state.third) {choosen.push({data: this.state.third, num: "3"});}

    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <CardTitle>הבחירה שלך: <br/>
                סכום: {this.state.budget} שקל .        אפיקי השקעה: 3</CardTitle>
            <p>
            <Row>
            {choosen.map(elem=> <Col md="4" sm="12">
            <CarouselCaptions invest={elem} another={()=>this.findMore(elem.data._id, elem.num)} />
            </Col>)}
            </Row>
            סכום ההשקעות: 
            {total}
          שקל, 
            עודף: 
            {this.state.budget-total}
            שקל   
            <Col md="6" sm="12">
            <ButtonBlockFoldAgain />
            </Col>
            <Row>
            </Row>
            </p>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default Posts
