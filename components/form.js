import React, { Component } from "react";
import TextField from "material-ui/TextField";
import TimePicker from 'material-ui/TimePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class Form extends Component {
  render() {
    return (
      <div>
        <TextField floatingLabelText="Name" secondary/>
        <br />
        <TextField floatingLabelText="Description" fullWidth={true}/>
        <br />
        <TextField floatingLabelText="Location" />
        <br />
        <div style={{display:"Flex", flexWrap: "wrap"}}>
        <div style={{marginRight:8}}>
        <TimePicker floatingLabelText="Start Time" />
        </div> 
        <div >
        <TimePicker floatingLabelText="End Time" />
        </div>
        </div>
        <br />
        <SelectField
          floatingLabelText="Category"
          autoWidth={true}
        >
          <MenuItem value={1} primaryText="Work" />
          <MenuItem value={2} primaryText="School" />
          <MenuItem value={3} primaryText="Fun" />
          <MenuItem value={4} primaryText="Family" />
        </SelectField>
        <br />
      </div>
    );
  }
}
