import React from "react"
import ExtensionsHeader from "../extensionsHeader"
import { Row, Col } from "reactstrap"
import DefaultSwiper from "./Default"
import NavigationSwiper from "./Navigation"
import PaginationSwiper from "./Pagination"
import ProgressSwiper from "./Progress"
import MultiSlides from "./MultiSlides"
import RowLayout from "./RowLayout"
import FadeEffect from "./FadeEffect"
import ThreeDEffect from "./3DEffect"
import Coverflow from "./Coverflow"
import Autoplay from "./Autoplay"
import Gallery from "./Gallery"
import Parallax from "./Parallax"
import Lazyloading from "./Lazyloading"
import CenteredStyle1 from "./CenteredSlidesStyle1"
import CenteredStyle2 from "./CenteredSlidesStyle2"
import ResponsiveBreakpoints from "./ResponsiveBreakpoints"
import "swiper/css/swiper.css"
import "../../assets/scss/plugins/extensions/swiper.scss"
class Slider extends React.Component {
  render() {
    return (
      <React.Fragment>
      <center>
        <ExtensionsHeader
          title=""
          subTitle=""
        />
        </center>
        <Row>
          <Col sm="12">
            <CenteredStyle1 />
          </Col>
          
        </Row>
      </React.Fragment>
    )
  }
}

export default Slider
