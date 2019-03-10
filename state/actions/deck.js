import Storage from './../storage/storage';
import { DeckActionType } from './action-types';

const DeckActionCreator = {
  createDeck: deck => ({
    type: DeckActionType.CREATE_DECK,
    payload: {
      deck
    }
  }),

  addCardToDeck: (deckId, cardId) => ({
    type: DeckActionType.ADD_CARD_TO_DECK,
    payload: {
      deckId,
      cardId
    }
  }),

  deleteDeck: deckId => ({
    type: DeckActionType.DELETE_DECK,
    payload: {
      deckId
    }
  }),

  updateDeck: deck => ({
    type: DeckActionType.UPDATE_DECK,
    payload: {
      deck
    }
  }),

  deleteAllDecks: () => ({
    type: DeckActionType.REMOVE_ALL_DECKS
  })
};

const createDeck = name => dispatch => {
  return Storage.createDeck(name).then(deck => {
    dispatch(DeckActionCreator.createDeck(deck));
  });
};

const addCardToDeck = (deckId, cardId) => dispatch => {
  return Storage.addCardToDeck(deckId, cardId).then(() => {
    dispatch(DeckActionCreator.addCardToDeck(deckId, cardId));
  });
};

const deleteAllDecks = () => dispatch => {
  return Storage.deleteAllDecks().then(() => {
    dispatch(DeckActionCreator.deleteAllDecks());
  });
};

const updateLastQuizDate = deckId => dispatch => {
  return Storage.updateLastQuizDate(deckId).then(deck => {
    dispatch(DeckActionCreator.updateDeck(deck));
  });
};

export const DeckAction = {
  createDeck,
  addCardToDeck,
  deleteAllDecks,
  updateLastQuizDate
};
