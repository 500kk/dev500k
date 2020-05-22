import React from "react"
import { Card, CardHeader, CardBody, CardTitle, Button } from "reactstrap"
import Tooltip from "rc-tooltip"
import Slider from "rc-slider"
import { Search, Inbox, Camera } from "react-feather"
import { Row, Col, Spinner } from "reactstrap"


const createSliderWithTooltip = Slider.createSliderWithTooltip
const Range = createSliderWithTooltip(Slider.Range)
const Handle = Slider.Handle

const handle = props => {
  const { value, dragging, index, ...restProps } = props
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  )
}

class SliderBasic extends React.Component {
  state = {
    value: 20
  }

  onSliderChange = value => {
    this.setState({ value })
  }

  resetSlider = () => {
    this.setState({ value: null })
  }

  render() {
    return (
      <Card>
        <CardHeader>
        <center>
          <CardTitle>בחר סכום</CardTitle>
          </center>
        </CardHeader>
        <CardBody>
        <Row> 
        <Col sm="9">
          <Range
            min={1}
            max={500}
            defaultValue={[100, 300]}
            tipFormatter={value => `${value}%`}
            reverse={this.props.rtl === "rtl"}
          />
          </Col>
          <Col>
          <Button.Ripple className="mr-1 mb-1" outline color="primary">
              <Search size={20} />
              </Button.Ripple>
              </Col>
              </Row>
        </CardBody>
      </Card>
    )
  }
}

export default SliderBasic
