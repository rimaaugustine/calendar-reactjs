import React from "react";

const List = ({events, date}) => {
  return (
    <div>
      <h4>List Events</h4>
      <ul>
        {events.filter(item => {
                console.log(item.date, date);
                return item.date === date; //more than one line
              })
          .map((item, index) => <li key={index}>{item.name} </li>)}
      </ul>
  
    </div>
  );
};

export default List;
