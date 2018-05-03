import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import Devider from "material-ui/Divider";
import Form from "./form";
import List from "./list";

class DialogEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: []
    };
    this.removeForm = this.removeForm.bind(this)
    this.handleClose = this.handleClose.bind(this);
  }

  addForm = object => {
    let arr = this.state.board;
    arr.push(object);
    this.setState({ board: arr });
    // let arrString = JSON.stringify(arr);
    // localStorage.setItem("data", arrString);
    // console.log("click");
  };

  removeForm = object => {
    let arr = this.state.board;
    arr.splice(object, 1)
    this.setState({board: arr })
  }

  handleClose(e) {
    this.props.onHandleClose(e);
    console.log();
  }

  render() {
    const actions = [
      <FlatButton label="Cancel" secondary={true} onClick={this.handleClose} />
    ];
    console.log("DATE ", this.props.date);
    return (
      <Dialog
        title={this.props.date}
        actions={actions}
        modal={true}
        open={this.props.open}
        autoScrollBodyContent={true}
        titleStyle={{ margin: 0, paddingBottom: 0 }}
      >
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <FloatingActionButton
            mini={true}
            secondary={true}
            onClick={this.addForm.bind()}
            style={{ margin: 2 }}
          >
            <ContentAdd />
          </FloatingActionButton>
        </div>
        {this.state.board.map((item, i) => (
          <Form key={i} index={i} addNewEvent={this.props.addNewEvent} date={this.props.date} onClickRemove={this.removeForm}>
            {item}
          </Form>
        ))}
        <Devider />
        <List events={this.props.events} date={this.props.date} deleteEvent={this.props.deleteEvent} editEvent={this.props.editEvent}/>
      </Dialog>
    );
  }
}

export default DialogEvent;
