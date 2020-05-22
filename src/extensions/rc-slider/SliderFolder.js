import React from "react"
import { Card, CardHeader, CardBody, CardTitle, Button } from "reactstrap"
import Tooltip from "rc-tooltip"
import Slider from "rc-slider"
import ButtonBlockFolder from "../../components/reactstrap/buttons/ButtonBlockFolder"


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
        </CardHeader>
        <CardBody>
          <h5 className="my-1">בחר סכום</h5>
          <Slider
            min={0}
            max={20}
            defaultValue={3}
            handle={handle}
            reverse={this.props.rtl === "rtl"}
            tipProps={{
              prefixCls: "rc-slider-tooltip"
            }}
          />

          <h5 className="mt-3">לכמה אפיקי השקעה לחלק</h5>
          <Slider
            min={20}
            defaultValue={20}
            marks={{ 20: 20, 40: 40, 60: 60, 100: 100 }}
            step={null}
            reverse={this.props.rtl === "rtl"}
          />
          <br/><br/>
          <ButtonBlockFolder />
        </CardBody>
      </Card>
    )
  }
}

export default SliderBasic
