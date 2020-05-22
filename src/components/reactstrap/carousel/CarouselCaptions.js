import React from "react"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap"
import classnames from "classnames"
import { Eye, Code } from "react-feather"
import { carouselCaptions } from "./CarouselSourceCode"
import sliderImage1 from "../../../assets/img/slider/03.jpg"
import sliderImage2 from "../../../assets/img/slider/04.jpg"
import sliderImage3 from "../../../assets/img/slider/05.jpg"

const images = [
  {
  }
]

class CarouselCaptions extends React.Component {
   constructor(props) {
    super(props);

  this.state = {
    activeTab: "1",
    activeIndex: 0,
    
  }
}

  onExiting = () => {
    this.animating = true
  }

 

  onExited = () => {
    this.animating = false
  }

  next = () => {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === images.length - 1
        ? 0
        : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous = () => {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === 0
        ? images.length - 1
        : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex = newIndex => {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  render() {
    const { activeIndex } = this.state

    const slides = images.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <img src={this.props.invest.data.pic} className="img-fluid" alt={item.id} width="200" height="200" />
          <CarouselCaption
            captionText={this.props.invest.data.desc}
            captionHeader={this.props.invest.data.investName}
          />
        </CarouselItem>
      )
    })
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <CardTitle>{this.props.invest.data.investName}</CardTitle>
            <div className="views">
                      </div>
          </CardHeader>
          <CardBody>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Carousel
                  activeIndex={activeIndex}
                  next={this.next}
                  previous={this.previous}
                >
                  <CarouselIndicators
                    items={images}
                    activeIndex={activeIndex}
                    onClickHandler={this.goToIndex}
                  />
                  {slides}
                  <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={this.previous}
                  />
                  <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={this.props.another}
                  />
                </Carousel>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {carouselCaptions}
              </TabPane>
            </TabContent>
            סכום: 
            {this.props.invest.data.price}
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default CarouselCaptions
