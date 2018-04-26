import React from "react";
import Head from "next/head";
//material ui
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
//components
import MenuBar from "../components/menuBar";
import { Tile } from "../components/tile";
import inherits from "babel-runtime/helpers/inherits";
import moment from "moment";

class Index extends React.Component {
  constructor() {
    super();
    const today = new Date();
    this.state = {
      year: today.getFullYear(),
      month: today.getMonth()
    };
  }

  createClickHandler = idx => e => {
    const { day } = this.state;
  };

  render() {
    const { year, month } = this.state;
    const date = moment([year, month]);
    console.log("year", year, "month", month, "date", date);
    const weekdays = moment.weekdays();
    console.log("weekdays", weekdays);
    const lastDate = new Date(year, month + 1, 0).getDate(); //30
    console.log(lastDate);
    const offset = date.weekday(); // num of weekday
    console.log(offset);
    //index = 0 .. 41
    const dateNum = index => {
      if (offset <= index && index < offset + lastDate) {
        return index - offset + 1;
      }
    };

    return (
      <div>
        <Head>
          <title>ReDI Calender</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
        </Head>
        <style jsx>{`
          h1 {
            text-align: center;
          }
          .tile-day {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            height: 100vmin;
            max-height: 400px;
            box-sizing: border-box;
          }
        `}</style>
        <MuiThemeProvider>
          <MenuBar />
          <Card style={{ height: 800 }}>
            <br />

            <div className="tile-day">
              {/* {day.map((tile, idx) => <Tile value={tile} onClick={this.createClickHandler(idx)} index={idx}  key={idx} />)} */}
              {weekdays.map((name, idx) => <Tile value={name} key={idx} />)}
              {[...Array(42).keys()].map((_, idx) => (
                <Tile value={dateNum(idx)} key={idx} />
              ))}
            </div>
            <CardActions>
              <RaisedButton
                label="Prev"
                onClick={() => {
                  this.setState({
                    year: this.state.month
                      ? this.state.year
                      : this.state.year - 1, 
                      month : (this.state.month + 11 ) % 12
                  });
                }}
              />
              <RaisedButton label="Next" 
              onClick={() => {
                this.setState({
                  year: this.state.month
                    ? this.state.year
                    : this.state.year - 1, 
                    month : (this.state.month + 11 ) % 12
                });
              }}/>
            </CardActions>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default Index;
