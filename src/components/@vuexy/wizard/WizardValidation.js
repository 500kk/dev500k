import React from "react"
import Wizard from "./WizardComponent"
import { AvInput, AvGroup, AvFeedback, AvField, AvForm } from "availity-reactstrap-validation"
import {
  Label,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardHeader
} from "reactstrap"
import Checkbox from "../checkbox/CheckboxesVuexy"
import { Check } from "react-feather"
class WizardValidation extends React.Component {
  constructor(props) {
    super(props);
  
  this.state = {
    username: "",
    fullName: "",
    password: "" 
  }
  this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }


  render() {
    let step= [
      {
        title: "1",
        content: <Row>
          <Col md="6" sm="12">
            <AvGroup>
              <Label> שם מלא </Label>
              <AvInput name="fullName" type="text" value={this.state.fullName} onChange={this.handleChange} required />
              <AvFeedback>שדה חובה</AvFeedback>
            </AvGroup>
            <AvGroup>
              <Label> אימייל </Label>
              <AvInput name="username" type="email" value={this.state.username} onChange={this.handleChange} required />
              <AvFeedback>כתובת מייל אינה תקינה</AvFeedback>
            </AvGroup>
             <AvGroup>
              <Label> סיסמא </Label>
              <AvInput name="password" type="password" value={this.state.password} onChange={this.handleChange} required />
              <AvFeedback>שדה חובה</AvFeedback>
            </AvGroup>
            <AvGroup>
              <Label> אימות סיסמא </Label>
              <AvInput name="password" type="password" required />
              <AvFeedback>שדה חובה</AvFeedback>
            </AvGroup>
          </Col>
        </Row>
      },
      {
        title: "2",
        content: <Row>
          <Col md="6" sm="12">
            <AvGroup>
              <Label> נייד </Label>
              <AvInput name="Proposal-Title" type="text" />
            </AvGroup>
            </Col>
             <Col md="6" sm="12">
            <AvGroup>
              <Label></Label>
              <AvField type="select" name="prefix" required>
                <option defaultValue>052</option>
                <option>050</option>
                <option>054</option>
                <option>058</option>
                <option>053</option>
              </AvField>
              <AvFeedback>בחר קידומת</AvFeedback>
            </AvGroup>
            </Col>
            <Col md="6" sm="12">
            <AvGroup>
              <Label>שם החברה</Label>
              <AvInput name="companyName" type="text" required />
              <AvFeedback>שדה חובה</AvFeedback>
            </AvGroup>
            <AvGroup>
              <Label> תיאור החברה </Label>
              <AvInput name="description" type="textarea" rows="5" required />
              <AvFeedback>Please enter valid Description</AvFeedback>
            </AvGroup>
          </Col>
        </Row>
      },
      {
        title: 3,
        content: <Row>
          <Col md="6" sm="12">
            <AvGroup>
              <Label> Event Name </Label>
              <AvInput name="Event-Name" type="text" required />
              <AvFeedback>Event Name</AvFeedback>
            </AvGroup>
          </Col>
          <Col md="6" sm="12">
            <AvGroup>
              <AvField type="select" name="city-name" label="City Name" required>
                <option defaultValue>Select City</option>
                <option>New York</option>
                <option>Chicago</option>
                <option>San Francisco</option>
                <option>Boston</option>
              </AvField>
            </AvGroup>
          </Col>
          <Col md="6" sm="12">
            <AvGroup>
              <AvField type="select" name="status" label="Event Status" required>
                <option>Planning</option>
                <option>In Process</option>
                <option>Finished</option>
              </AvField>
            </AvGroup>
          </Col>
          <Col md="6" sm="12">
            <AvGroup>
              <Label> Event Status </Label>
              <Label className="mr-2">Requirements :</Label>
              <div className="stacked-checkbox">
                <div className="d-inline-block mr-2">
                  <Checkbox
                    color="primary"
                    icon={<Check className="vx-icon" size={16} />}
                    label="Staffing"
                    defaultChecked={false}
                  />
                </div>
                <div className="d-inline-block">
                  <Checkbox
                    color="primary"
                    icon={<Check className="vx-icon" size={16} />}
                    label="Catering"
                    defaultChecked={false}
                  />
                </div>
              </div>
            </AvGroup>
          </Col>
        </Row>
      }
    ];
    const steps  = step;
    return (
      <Card>
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>
        <CardBody>
          <Wizard
            validate
            steps={steps}
          />
        </CardBody>
      </Card>
    )
  }
}

export default WizardValidation
