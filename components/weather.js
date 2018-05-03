import React from "react";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import WbSunny from "material-ui/svg-icons/image/wb-sunny";

export default class Weather extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const weatherArr = (this.props.temp.weather).map(item => item.icon)
    const weatherDes = (this.props.temp.weather).map(item => item.description)
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
        <div style={{margin:20}}>
        <div style={{textAlign:"center"}}>
        <h1>{this.props.temp.name}</h1> 
        <img src={`https://openweathermap.org/img/w/${weatherArr}.png`} width="80px" />
        <p><i>{weatherDes}</i></p>
        </div>
      
          <p>Temperature:{this.props.temp.main.temp} C</p> 
          <p>Pressure: {(this.props.temp.main.pressure)}hPa</p> 
          <p>Humidity: {this.props.temp.main.humidity}%</p> 
          <p>Wind: {this.props.temp.wind.speed}km/hr</p> 
        </div>
       
      </Drawer>
    );
  }
}

