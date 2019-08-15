import React from "react";
import TrelloCard from "../TrelloCard/TrelloCard";
import { Container, Col } from "react-bootstrap";
import ActionButton from "../ActionButton/ActionButton";

const TrelloList = ({ title, cards = [], id }) => {
  return (
    <Col lg={4}>
      <Container style={styles.container}>
        <h4>{title}</h4>
        {cards.map((card, index) => (
          <TrelloCard
            key={card.id}
            listId={id}
            id={card.id}
            text={card.text}
            index={index}
          />
        ))}
        <ActionButton key={id} listId={id} />
      </Container>
    </Col>
  );
};

const styles = {
  container: {
    backgroundColor: "#ccc",
    borderRadius: 3,
    width: 300,
    padding: 4,
    marginBottom: 20
  }
};

export default TrelloList;
