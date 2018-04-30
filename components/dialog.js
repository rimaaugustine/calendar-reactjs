import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import Devider from "material-ui/Divider"
import Form from "./form";


class DialogEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    //this.addForm = this.addForm.bind(this)
    this.handleClose = this.handleClose.bind(this);
  }

  addForm = object => {
    let arr = this.state.data;
    arr.push(object);
    this.setState({ data: arr });
    // let arrString = JSON.stringify(arr);
    // localStorage.setItem("data", arrString);
    // console.log("click");
  };

  handleClose(e) {
    this.props.onHandleClose(e);
    console.log();
  }

  render() {
    const actions = [
      <FlatButton label="Cancel" secondary={true} onClick={this.handleClose} />
    ];
    console.log(this.props.date);
    return (
      <Dialog
        title={this.props.date}
        actions={actions}
        modal={true}
        open={this.props.open}
        autoScrollBodyContent={true}
        titleStyle={{margin:0, paddingBottom:0}}
      >
      <div style={{display:"flex", justifyContent:"flex-end"}}>
        <FloatingActionButton
          mini={true}
          secondary={true}
          onClick={this.addForm.bind()}
          style={{ margin: 2 }}
        >
          <ContentAdd />
        </FloatingActionButton>
        </div>
        {this.state.data.map((item, i) => (
          <Form key={i} index={i} addNewEvent={this.props.addNewEvent}>
            {item}
          </Form>
        ))}
        <Devider/>
        <h4>List Events</h4>
        <ul>
          {this.props.events
            .filter(item => {
              console.log(item.date, this.props.date);
              return item.date === this.props.date; //more than one line
            })
            .map((item, index) => <li key={index}>{item.name} </li>)}
        </ul>
      </Dialog>
    );
  }
}

export default DialogEvent;
