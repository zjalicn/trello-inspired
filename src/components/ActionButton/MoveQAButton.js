import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { moveCardAction } from "../../actions/CardActions";

class MoveQAButton extends Component {
  
  moveQA = () => {
    const { dispatch, id, listId } = this.props;
    dispatch(moveCardAction(id, listId, 2));
    return;
  };

  render() {
    return (
      <Button
        className="card-remove-btn"
        className="button-spacing"
        onClick={() => {
          this.moveQA(this.props.id, this.props.listId);
        }}
      >
        Ready for QA
      </Button>
    );
  }
}

export default connect()(MoveQAButton);
