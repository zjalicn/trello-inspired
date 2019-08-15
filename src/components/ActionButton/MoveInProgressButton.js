import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { moveCardAction } from "../../actions/CardActions";

class MoveInProgressButton extends Component {
  
  moveInProgress = () => {
    const { dispatch, id, listId } = this.props;
    dispatch(moveCardAction(id, listId, 1));
    return;
  };

  render() {
    return (
      <Button
        className="card-remove-btn"
        className="button-spacing"
        onClick={() => {
          this.moveInProgress(this.props.id, this.props.listId);
        }}
      >
        In Progress
      </Button>
    );
  }
}

export default connect()(MoveInProgressButton);
