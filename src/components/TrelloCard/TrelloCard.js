import React from "react";
import { Card, Typography } from "@material-ui/core";
import { Container, Button } from "react-bootstrap";
import RemoveCardButton from '../ActionButton/RemoveCardButton';
import MoveToDoButton from '../ActionButton/MoveToDoButton';
import MoveInProgressButton from '../ActionButton/MoveInProgressButton';
import MoveQAButton from '../ActionButton/MoveQAButton';

const loadButtons = (id, listId, index) => {
  return (
    <div className="card-status-buttons">
      <RemoveCardButton
        id={id}
        listId={listId}
      />
      {listId !== 0 ? (
        <MoveToDoButton
          id={id}
          listId={listId}
        />
      ) : (
        ""
      )}
      {listId !== 1 ? (
        <MoveInProgressButton
          id={id}
          listId={listId}
        />
      ) : (
        ""
      )}
      {listId !== 2 ? (
        <MoveQAButton
          id={id}
          listId={listId}
        />
      ) : (
        ""
      )}
    </div>
  );
};

const TrelloCard = ({ text, id, index, listId }) => {
  return (
    <Container style={{ margin: "10px 0" }}>
      <Card>
        <Typography color="textSecondary" gutterBottom>
          {text}
        </Typography>
        {loadButtons(id, listId)}
      </Card>
    </Container>
  );
};

export default TrelloCard;
