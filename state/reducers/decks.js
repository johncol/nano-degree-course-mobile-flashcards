import { DeckActionType } from '../actions/action-types';

const deckReducer = (state = {}, action) => {
  switch (action.type) {
    case DeckActionType.CREATE_DECK:
      return createDeck(state, actionType);

    case DeckActionType.ADD_CARD_TO_DECK:
      return addCardToDeck(state, actionType);

    case DeckActionType.DELETE_DECK:
      return deleteDeck(state, actionType);

    case DeckActionType.UPDATE_DECK:
      return updateDeck(state, actionType);

    default:
      return state;
  }
};

const createDeck = (state, action) => {
  const { deck } = action.payload;
  return {
    ...state,
    [deck.id]: deck
  };
};

const addCardToDeck = (state, action) => {
  const { deckId, cardId } = action.payload;
  const deck = { ...state[deckId] };
  deck.cards.push(cardId);

  return {
    ...state,
    [deck.id]: deck
  };
};

const deleteDeck = (state, action) => {
  const { deckId } = action.payload;

  const newState = { ...state };
  newState[deckId] = undefined;
  delete newState[deckId];

  return newState;
};

const updateDeck = (state, action) => {
  const { deckId, name } = action.payload;
  const updatedDeck = {
    ...state[deckId],
    name
  };

  return {
    ...state,
    [deckId]: updatedDeck
  };
};

export default deckReducer;
