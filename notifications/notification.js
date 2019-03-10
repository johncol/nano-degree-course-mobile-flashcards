import { AsyncStorage } from 'react-native';
import { Permissions, Notifications } from 'expo';

const NOTIFICATION_STORAGE_KEY = 'nano-degree-mobile-flashcards';
const EIGHT_PM = 20;
const THIRTY_MINUTES = 30;

export const scheduleNextNotification = () => {
  Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
    if (status === 'granted') {
      Notifications.cancelAllScheduledNotificationsAsync();
      scheduleNotificationForTomorrowNight();
      AsyncStorage.setItem(NOTIFICATION_STORAGE_KEY, JSON.stringify(true));
    }
  });
};

export const scheduleNotificationIfThereIsNotOneYet = () => {
  AsyncStorage.getItem(NOTIFICATION_STORAGE_KEY)
    .then(JSON.parse)
    .then(data => {
      const thereIsNotAnyNotificationScheduled = data === null;
      if (thereIsNotAnyNotificationScheduled) {
        scheduleNextNotification();
      }
    });
};

export const cancelCurrentNotification = () => {
  return AsyncStorage.removeItem(NOTIFICATION_STORAGE_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
};

const createNotification = () => ({
  title: 'Take a quiz!',
  body: 'Do not forget your daily quiz!',
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: false
  }
});

const scheduleNotificationForTomorrowNight = () => {
  const notification = createNotification();
  const tomorrowNight = getTomorrowNightDate();
  Notifications.scheduleLocalNotificationAsync(notification, {
    time: tomorrowNight,
    repeat: 'day'
  });
};

const getTomorrowNightDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  date.setHours(EIGHT_PM);
  date.setMinutes(THIRTY_MINUTES);
  return date;
};
