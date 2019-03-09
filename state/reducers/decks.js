import { DeckActionType, SharedActionType } from '../actions/action-types';

const deckReducer = (state = {}, action) => {
  switch (action.type) {
    case DeckActionType.CREATE_DECK:
      return createDeck(state, action);

    case DeckActionType.ADD_CARD_TO_DECK:
      return addCardToDeck(state, action);

    case DeckActionType.DELETE_DECK:
      return deleteDeck(state, action);

    case DeckActionType.UPDATE_DECK:
      return updateDeck(state, action);

    case DeckActionType.REMOVE_ALL_DECKS:
      return deleteAllDecks(state, action);

    case SharedActionType.LOAD_STORAGE_DATA:
      return loadInitialDecks(state, action);

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
  deck.decks.push(cardId);

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

const deleteAllDecks = (state, action) => {
  return {};
};

const loadInitialDecks = (state, action) => {
  const { decks } = action.payload;
  const initialState = {};
  decks.forEach(deck => (initialState[deck.id] = deck));
  return initialState;
};

export default deckReducer;
