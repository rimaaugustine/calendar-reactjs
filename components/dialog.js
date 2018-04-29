import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Form from './form'


class DialogEvent extends React.Component{
constructor(props){
    super(props)
    this.handleClose = this.handleClose.bind(this)
}

handleClose (e) {
    this.props.onHanldeClose(e)
}

    render(){
        const actions = [
            <FlatButton
              label="Cancel"
              secondary={true}
              onClick={this.handleClose}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              disabled={true}
              onClick={this.handleClose}
            />,
          ];
        return(
          <Dialog
          title="New Event"
          actions={actions}
          modal={true}
          open={this.props.open}
          autoScrollBodyContent={true}
        >
        <Form />
          
        </Dialog>)
    }
}


export default DialogEvent