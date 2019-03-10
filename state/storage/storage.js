import { AsyncStorage } from 'react-native';

const DECKS_KEY = 'NANO_DEGREE_FLASHCARDS_DECKS';
const CARDS_KEY = 'NANO_DEGREE_FLASHCARDS_CARDS';

const initEntityListIfRequired = storageKey => {
  return AsyncStorage.getItem(storageKey).then(data => {
    if (data === null) {
      data = JSON.stringify([]);
      AsyncStorage.setItem(storageKey, data);
    }
    return data;
  });
};

const deleteAllItems = storageKey => {
  return AsyncStorage.setItem(storageKey, JSON.stringify([]));
};

const save = (storageKey, entity) => {
  return AsyncStorage.getItem(storageKey)
    .then(JSON.parse)
    .then(entities => {
      entities.push(entity);
      AsyncStorage.setItem(storageKey, JSON.stringify(entities));
      return entity;
    });
};

const findDeck = (decks, deckId) => {
  const filteredDecks = decks.filter(deck => deck.id === deckId);
  if (filteredDecks.length !== 1) {
    throw new Error('Expected to find just one deck but found: ' + decks);
  }
  return filteredDecks[0];
};

const updateDeck = (deckId, operationOnDeck) => {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(JSON.parse)
    .then(decks => {
      const deck = findDeck(decks, deckId);
      operationOnDeck(deck);
      AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks));
      return deck;
    });
};

const today = () => {
  return new Date().toLocaleDateString();
};

const Storage = {
  init: () => {
    return Promise.all([
      initEntityListIfRequired(DECKS_KEY),
      initEntityListIfRequired(CARDS_KEY)
    ]);
  },

  getData: () => {
    const decks = AsyncStorage.getItem(DECKS_KEY).then(JSON.parse);
    const cards = AsyncStorage.getItem(CARDS_KEY).then(JSON.parse);
    return Promise.all([decks, cards]);
  },

  createDeck: name => {
    const deck = {
      id: Date.now(),
      creationDate: today(),
      lastQuizDate: null,
      cards: [],
      name
    };
    return save(DECKS_KEY, deck);
  },

  createCard: (question, answer) => {
    const card = {
      id: Date.now(),
      question,
      answer
    };
    return save(CARDS_KEY, card);
  },

  addCardToDeck: (deckId, cardId) => {
    return updateDeck(deckId, deck => deck.cards.push(cardId));
  },

  updateLastQuizDate: deckId => {
    return updateDeck(deckId, deck => (deck.lastQuizDate = today()));
  },

  deleteAllDecks: () => {
    return deleteAllItems(DECKS_KEY);
  },

  deleteAllCards: () => {
    return deleteAllItems(CARDS_KEY);
  }
};

export default Storage;
