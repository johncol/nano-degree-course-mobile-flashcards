import { CardActionType } from '../actions/action-types';

const cardReducer = (state = {}, action) => {
  switch (action.type) {
    case CardActionType.CREATE_CARD:
      return createCard(state, action);

    case CardActionType.DELETE_CARD:
      return deleteCard(state, action);

    case CardActionType.UPDATE_CARD:
      return updateCard(state, action);

    default:
      return state;
  }
};

const createCard = (state, action) => {
  const { card } = action.payload;
  return {
    ...state,
    [card.id]: card
  };
};

const deleteCard = (state, action) => {
  const { cardId } = action.payload;

  const newState = { ...state };
  newState[cardId] = undefined;
  delete newState[cardId];

  return newState;
};

const updateCard = (state, action) => {
  const { cardId, question, answer } = action.payload;
  const updatedCard = {
    ...state[cardId],
    question,
    answer
  };

  return {
    ...state,
    [cardId]: updatedCard
  };
};

export default cardReducer;
