import React, { Component } from "react";
import TrelloList from "./components/TrelloList/TrelloList";
import { Container, Row, Col } from "react-bootstrap";
import { connect, Provider } from "react-redux";
import "./App.css";

const mapStateToProps = state => {
  return {
    lists: state.ListsReducer || []
  }
};

class App extends Component {
  
  dragCard = () => {
    return "dragCard";
  }

  render() {
    let { lists } = this.props;  
    return (
      <div className="App">
        <Container>
          <h2>Trello Board</h2>
          <hr />
          <Row className="show-grid">
            {
              lists.map(list => (
                <TrelloList 
                key={list.id}
                title={list.title} 
                cards={list.cards} 
                id={list.id}/>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
