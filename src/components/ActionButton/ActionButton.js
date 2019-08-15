import React, { Component } from "react";
import { Card } from "@material-ui/core";
import { Container, Button } from "react-bootstrap";
import Icon from "@material-ui/core/Icon";
import TextArea from "react-textarea-autosize";
import { connect } from 'react-redux';
import { addCard } from "../../actions/CardActions";

class ActionButton extends Component {
  state = { //give it its own state because this info isnt relevant to parent
    formOpen: false,
    text: "",
  };

  handleInputChange = e => {
    this.setState({
        text: e.target.value
    });
  };

  addNewCard = () => {
    const { dispatch } = this.props;
    const { text } = this.state;
    const { listId } = this.props;
    if (text){
        dispatch(addCard(text, listId));
    }
    return;
  }

  renderAddButton = () => {
    return (
      <a
        onClick={() => {
          this.setState({
            formOpen: !this.state.formOpen
          });
        }}
      >
        <Container style={{ margin: "10px 0" }}>
          <Card style={{ paddingTop: "10px" }}>
            <Icon>add</Icon>
            <p>Add a new task</p>
          </Card>
        </Container>
      </a>
    );
  };

  renderForm = () => {
    return (
      <Container style={{ margin: "10px 0" }}>
        <Card style={{ padding: "10px 0" }}>
          <TextArea
            placeholder="Enter Card title"
            autoFocus
            onChange={this.handleInputChange}
            style={{
              minHeight: "4em",
              overflow: "hidden",
              resize: "none"
            }}
          />
          <hr />
          <Button
            variant="success"
            className="button-spacing"
            onClick={() => {
              this.addNewCard(this.props.text, this.props.listId);
              this.setState({
                formOpen: !this.state.formOpen
              });
            }}
          >
            Add to list
          </Button>
          <Button
            variant="warning"
            className="button-spacing"
            onClick={() => {
              this.setState({
                formOpen: !this.state.formOpen
              });
            }}
          >
            Cancel
          </Button>
        </Card>
      </Container>
    );
  };

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

export default connect()(ActionButton);
