import Storage from './../storage/storage';
import { CardActionType } from './action-types';
import { DeckAction } from './deck';

const CardActionCreator = {
  createCard: card => ({
    type: CardActionType.CREATE_CARD,
    payload: {
      card
    }
  }),

  deleteCard: cardId => ({
    type: CardActionType.DELETE_CARD,
    payload: {
      cardId
    }
  }),

  updateCard: (cardId, question, answer) => ({
    type: CardActionType.UPDATE_CARD,
    payload: {
      cardId,
      question,
      answer
    }
  }),

  deleteAllCards: () => ({
    type: CardActionType.REMOVE_ALL_CARDS
  })
};

const createCard = (deck, question, answer) => dispatch => {
  if (!question.endsWith('?')) {
    question = question + '?';
  }
  return Storage.createCard(question, answer).then(card => {
    dispatch(CardActionCreator.createCard(card));
    dispatch(DeckAction.addCardToDeck(deck.id, card.id));
  });
};

const deleteAllCards = () => dispatch => {
  return Storage.deleteAllCards().then(() => {
    dispatch(CardActionCreator.deleteAllCards());
  });
};

export const CardAction = {
  createCard,
  deleteAllCards
};
