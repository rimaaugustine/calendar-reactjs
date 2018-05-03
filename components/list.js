import React from "react";
import Delete from "material-ui/svg-icons/action/delete";
import ModeEdit from "material-ui/svg-icons/editor/mode-edit";

const List = ({events, date, deleteEvent}) => {
  return (
    <div>
      <h4>List Events</h4>
      <ul>
        {events.filter(item => {
                console.log("DATE EVENTS", item.date, "DATE", date);
                return item.date === date; //more than one line
              })
          .map((item, index) => <li key={index}>{item.name} 
          <ModeEdit />
          <Delete style={{color:"grey"}} onClick={(e) => { deleteEvent(index)}} /> </li>
        )}
      </ul>
  
    </div>
  );
};

export default List;
    