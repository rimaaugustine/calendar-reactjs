import React from "react";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import WbSunny from "material-ui/svg-icons/image/wb-sunny";
//component
import Weather from "./weather";

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { drawerOpen: false };

    this.switchDrawer = this.switchDrawer.bind(this)
  }

  handleClick = () => {
    this.setState({ drawerOpen: !this.state.open })
  };

  switchDrawer() {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    })
  }
  
  render() {
    return (
      <div>
        <AppBar
          title="ReDI Calendar"
          iconElementRight={
            <FlatButton
              label="Weather"
              icon={<WbSunny />}
              onClick={this.handleClick}
            />
          }
          style={{ backgroundColor: "purple" }}
        />
        <Weather open={this.state.drawerOpen} switchDrawer={this.switchDrawer}/>
      </div>
    );
  }
}

export default MenuBar;
