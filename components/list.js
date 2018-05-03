import React from "react";
import Delete from "material-ui/svg-icons/action/delete";
import ModeEdit from "material-ui/svg-icons/editor/mode-edit";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import MediaQuery from 'react-responsive';

const List = ({events, date, deleteEvent, editEvent}) => {
  return (
    <div>
      <h4>List Events</h4>
      <MediaQuery query="(min-device-width: 876px)">
      <Table >
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
        <TableHeaderColumn>Event</TableHeaderColumn>
        <TableHeaderColumn>Location</TableHeaderColumn>
        <TableHeaderColumn>Time</TableHeaderColumn>
        <TableHeaderColumn>Category</TableHeaderColumn>
        <TableHeaderColumn>Delete</TableHeaderColumn>
      </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
        {events.filter(item => { console.log("DATE EVENTS", item.date, "DATE", date);
                return item.date === date; //more than one line
              })
          .map((item, index) => 
        <TableRow>
        <TableRowColumn>{item.name}</TableRowColumn>
        <TableRowColumn>{item.location}</TableRowColumn>
        <TableRowColumn>{ item.startTime }</TableRowColumn>
        <TableRowColumn>EndTime</TableRowColumn>
        <TableRowColumn> <Delete style={{color:"red", marginLeft:20, paddingBottom:0}} onClick={(e) => { deleteEvent(item.id)}} /> </TableRowColumn>
      </TableRow>
      )}
      </TableBody>
      </Table>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 876px)">
      <ul>
        {events.filter(item => {
                console.log("DATE EVENTS", item.date, "DATE", date);
                return item.date === date; //more than one line
              })
          .map((item, index) => <li key={index}><p>Event: {item.name}, location: {item.location}, Start time: {item.startTime} </p> 
          {/* <ModeEdit onClick={(e) => { editEvent(item)}} /> */}
          <Delete style={{color:"red", marginLeft:20, paddingBottom:0}} onClick={(e) => { deleteEvent(item.id)}} /> </li>
        )}
      </ul>
    </MediaQuery>
    </div>
  );
};

export default List;
    