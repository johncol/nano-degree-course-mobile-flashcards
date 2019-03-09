import Storage from './../storage/storage';
import { SharedActionType } from './action-types';

const SharedActionCreator = {
  loadInitialData: (decks, cards) => ({
    type: SharedActionType.LOAD_STORAGE_DATA,
    payload: {
      decks,
      cards
    }
  })
};

const loadInitialData = () => dispatch => {
  return Storage.init().then(() => {
    return Storage.getData().then(([decks, cards]) => {
      dispatch(SharedActionCreator.loadInitialData(decks, cards));
    });
  });
};

export const SharedAction = {
  loadInitialData
};
