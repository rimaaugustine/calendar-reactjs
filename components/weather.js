import React from "react";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import WbSunny from "material-ui/svg-icons/image/wb-sunny";

export default class Weather extends React.Component {
  render() {
    return (
      <Drawer
        width={200}
        openSecondary={true}
        open={this.props.open}
        docked={false}
        onRequestChange={this.props.switchDrawer}
      >
        <AppBar
          title="Weather"
          iconElementLeft={<WbSunny />}
          style={{ backgroundColor: "violet" }}
        />
      </Drawer>
    );
  }
}
