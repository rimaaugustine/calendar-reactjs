import React from "react";
import AppBar from "material-ui/AppBar";


class MenuBar extends React.Component {
constructor(props){
    super(props);   
}

render(){
    return(
        <AppBar
        title="ReDI Calender"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        style={{backgroundColor:"purple"}}
      />

    )
    }
}

export default MenuBar