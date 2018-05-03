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
      category: 1,
      date: "",
      expanded: false
    };
  }
  handleChange = (event, index, category) => this.setState({category});

  handleChangeStartTime = (event, date) => {
    const dateString = date.toString()
    const splitDate = dateString.split(" ");
    const time = splitDate[4]
    console.log(time)
    this.setState({startTime: time});
   
  };

  handleChangeEndTime = (event, time) => {
    console.log(event)
    this.setState({endTime: time});
  };

  onTextChange = e => {
    let value = e.target.value;
    let name = e.target.name;
    console.log(name);
    this.setState({
      [name]: value
     
    });
 
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
                format="24hr"
               
                 value={this.state.startTime}
                 onChange={this.handleChangeStartTime} 
                />
              </div>  
              <div>
                <TimePicker floatingLabelText="End Time" 
                format="24hr"
                  name="end-time"
                  value={this.state.endTime}
                  onChange={this.handleChangeEndTime}
                  />
              </div>
            </div>

            <SelectField floatingLabelText="Category" autoWidth={true} value={this.state.category} onChange={this.handleChange}>
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
                label="Remove"
                backgroundColor={purple50}
                onClick={this.props.onClickRemove}
              />
              <FlatButton
                label="Submit"
                backgroundColor="violet"
                onClick={e => {
                  this.props.addNewEvent({
                    ...this.state,
                    date: this.props.date,
                  });
                  this.props.onClickRemove(this.props.index)
                }}
              />
            </div>
          </CardActions>
        </Card>
      </div>
    );
  }
}
