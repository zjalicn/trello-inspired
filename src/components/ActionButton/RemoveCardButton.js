import React, { Component } from "react";
import { Card } from "@material-ui/core";
import { Container, Button } from "react-bootstrap";
import TextArea from "react-textarea-autosize";
import { connect } from "react-redux";
import { removeCardAction } from "../../actions/CardActions";

class RemoveCardButton extends Component {
  
  removeCard = () => {
    const { dispatch } = this.props;
    const { id } = this.props;
    const { listId } = this.props;
    dispatch(removeCardAction(id, listId));
    return;
  };

  render() {
    return (
      <Button
        className="card-remove-btn"
        className="button-spacing"
        onClick={() => {
          this.removeCard(this.props.id, this.props.listId);
        }}
      >
        Remove
      </Button>
    );
  }
}

export default connect()(RemoveCardButton);
