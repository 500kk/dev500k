import React from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
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
import { modalBasic } from "./ModalSourceCode"
import WizardValidation from "../../@vuexy/wizard/WizardValidation"


class ModalBasic extends React.Component {
  state = {
    activeTab: "1",
    modal: false
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render() {
    return (
      <React.Fragment>
        
                
                <a href="#" onClick={this.toggleModal}>הרשמה</a>
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggleModal}
                  className={this.props.className}
                >
                  <ModalHeader toggle={this.toggleModal}>
                  <center>
                    הרשמה
                    </center>
                  </ModalHeader>
                  <ModalBody>
                    <h5></h5>
                    <WizardValidation/>
                  </ModalBody>
                  <ModalFooter>
                  </ModalFooter>
                </Modal>
             
            
      </React.Fragment>
    )
  }
}
export default ModalBasic
