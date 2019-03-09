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
  })
};

const createCard = (deck, question, answer) => dispatch => {
  return Storage.createCard(question, answer).then(card => {
    dispatch(CardActionCreator.createCard(card));
    dispatch(DeckAction.addCardToDeck(deck.id, card.id));
  });
};

export const CardAction = {
  createCard
};
