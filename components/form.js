import React, { Component } from "react";
import TextField from "material-ui/TextField";
import TimePicker from "material-ui/TimePicker";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import FlatButton from "material-ui/FlatButton";
import { purple50 } from "material-ui/styles/colors";
import { deepPurple500 } from "material-ui/styles/colors";

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      startTime: "",
      endTime: "",
      category: "",
      date: "",
      expanded: false
    };
  }

  onTextChange = e => {
    
    let value = e.target.value;
    let name = e.target.name;
    console.log(name);
    this.setState({
      [name]: value

      // instead of fname: value,
      //let newState[name] = value
      //this.setState(newState)
    });
    //console.log([name])
  };
  handleExpandChange = expanded => {
    this.setState({ expanded: expanded });
  };

  handleExpand = () => {
    this.setState({ expanded: true });
  };

  handleReduce = () => {
    this.setState({ expanded: false });
  };

  render() {
    const formIndex = this.props.index + 1;
    return (
      <div>
        <Card
          style={{ backgroundColor: purple50 }}
          expanded={this.state.expanded}
          onExpandChange={this.handleExpandChange}
        >
          <CardHeader
            subtitle={"Event-" + formIndex}
            actAsExpander={true}
            showExpandableButton={true}
            style={{ paddingBottom: 0, marginBottom: 0 }}
          />
          <CardText style={{ paddingTop: 0, marginTop: 0 }} expandable={true}>
            <div style={{ display: "Flex", flexWrap: "wrap" }}>
              <div style={{ marginRight: 8 }}>
                <TextField
                  floatingLabelText="Name"
                  name="name"
                  onChange={this.onTextChange}
                  value={this.state.name}
                />
              </div>
              <div>
                <TextField floatingLabelText="Location" 
                name="location"
                onChange={this.onTextChange}
                value={this.state.location}
                />
              </div>
            </div>
            <div style={{ display: "Flex", flexWrap: "wrap" }}>
              <div style={{ marginRight: 8 }}>
                <TimePicker floatingLabelText="Start Time" 
                 name="start-time"
                 onChange={this.onTextChange}
                 value={this.state.startTime}
                />
              </div>  
              <div>
                <TimePicker floatingLabelText="End Time" 
                  name="end-time"
                  onChange={this.onTextChange}
                  value={this.state.endTime}
                  />
              </div>
            </div>

            <SelectField floatingLabelText="Category" autoWidth={true}>
              <MenuItem value={1} primaryText="Work" />
              <MenuItem value={2} primaryText="School" />
              <MenuItem value={3} primaryText="Fun" />
              <MenuItem value={4} primaryText="Family" />
            </SelectField>
          </CardText>
          <CardActions>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <FlatButton
                style={{ marginRight: 5 }}
                label="Close"
                backgroundColor={purple50}
                onClick={this.handleReduce}
              />
              <FlatButton
                label="Submit"
                backgroundColor="violet"
                onClick={e => {
                  this.props.addNewEvent({
                    ...this.state,
                    date: this.props.date
                  });
                  console.log(e);
                }}
              />
            </div>
          </CardActions>
        </Card>
      </div>
    );
  }
}
