import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { moveCardAction } from "../../actions/CardActions";

class MoveToDoButton extends Component {
  
  moveToDo = () => {
    const { dispatch, id, listId, newListId } = this.props;
    dispatch(moveCardAction(id, listId, 0));
    return;
  };

  render() {
    return (
      <Button
        className="card-remove-btn"
        className="button-spacing"
        onClick={() => {
          this.moveToDo(this.props.id, this.props.listId);
        }}
      >
        To Do
      </Button>
    );
  }
}

export default connect()(MoveToDoButton);
