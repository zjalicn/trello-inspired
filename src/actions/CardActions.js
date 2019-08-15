import { CONSTANTS } from "../actions/actions";

export const addCard = (text,  listId) => {
    return ({
        type: CONSTANTS.ADD_CARD,
        payload: { text, listId }
    })
};

export const removeCardAction = (id, listId,) => {
    return ({
        type: CONSTANTS.REMOVE_CARD,
        payload: {id, listId}
    });
};

export const moveCardAction = (id, listId, newListId) => {
    return ({
        type: CONSTANTS.MOVE_CARD,
        payload: {id, listId, newListId}
    });
};