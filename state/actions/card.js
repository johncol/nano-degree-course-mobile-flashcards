import Storage from './../storage/storage';
import { CardActionType } from './action-types';

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

const createCard = (question, answer) => dispatch => {
  return Storage.createCard(question, answer).then(card => {
    dispatch(CardActionCreator.createCard(card));
  });
};

export const CardAction = {
  createCard
};
