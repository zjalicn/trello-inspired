import { CONSTANTS } from "../actions/actions";
import axios from "axios";

const initialState = [
  {
    title: "To Do",
    id: 0,
    cards: [
      {
        id: 0,
        text: "Trello style planning board created with React"
      },
      {
        id: 1,
        text: "React-Bootstrap"
      },
      {
        id: 4,
        text: "Redux"
      }
    ]
  },
  {
    title: "In Progress",
    id: 1,
    cards: [
      {
        id: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
      },
      {
        id: 5,
        text: "Nam cursus pulvinar tellus ac convallis."
      }
    ]
  },
  {
    title: "Ready for QA",
    id: 2,
    cards: [
      {
        id: 3,
        text: "In hac habitasse platea dictumst. Aenean malesuada massa a velit lobortis rutrum."
      }
    ]
  }
];

const getInitialState = () => {
  return initialState;
};

let cardId = 6;

const ListsReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case CONSTANTS.ADD_CARD: {
      const newCard = {
        id: cardId,
        text: action.payload.text
      };
      cardId++;

      const newState = state.map(list => {
        if (list.id === action.payload.listId) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      });
      return newState;
    }
    case CONSTANTS.REMOVE_CARD: {
      const newList = state.map(list => {
        if (list.id == action.payload.listId) {
          console.log(list.cards.filter(c => c.id != action.payload.id));
          return {
            ...list,
            cards: list.cards.filter(c => c.id != action.payload.id)
          };
        } else {
          return list;
        }
      });
      return newList;
    }
    case CONSTANTS.MOVE_CARD: {
      let { listId, id, newListId } = action.payload;
      let moveCard = state[listId].cards.filter(c => c.id == id);

      const newList = state.map(list => {
        if (list.id == newListId) {
          return {
            ...list,
            cards: [...list.cards, moveCard[0]]
          };
        }
        if (list.id == action.payload.listId) {
          return {
            ...list,
            cards: list.cards.filter(c => c.id != action.payload.id)
          };
        } else {
          return list;
        }
      });
      return newList;
      }
        
    default:
      return state;
  }
};

export default ListsReducer;
