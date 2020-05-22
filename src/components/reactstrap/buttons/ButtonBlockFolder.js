import React from "react"
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap"
import classnames from "classnames"
import { Eye, Code } from "react-feather"
import { buttonBlock } from "./ButtonsSourceCode"

class ButtonBlock extends React.Component {
  state = {
    activeTab: "1"
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }
  render() {
    return (
      <React.Fragment>
            <CardTitle></CardTitle>
            <div className="views">
              </div>        
            <p>
              
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row >
                    <Col lg={9} md={12}>
                    <a href="ansFolder">
                    <Button.Ripple
                      block
                      outline
                      className="btn-block"
                      color="primary"
                      size="lg"
                    >
                       בוא נראה מה יש לנו
                    </Button.Ripple>
                    </a>
                  </Col>
                </Row>
                </TabPane>
                </TabContent>
      </React.Fragment>
    )
  }
}
export default ButtonBlock
