import { makeNotification } from '@test/factories/notification.factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications.repository';

import { NotificationNotFound } from './errors/notification-not-found';
import { ReadNotification } from './read-notifications.usecase';

describe('Read Notification', () => {
  it('should be able to read a notification', async () => {
    // arrange
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    const notification = makeNotification();
    await notificationsRepository.create(notification);

    // act
    await readNotification.execute({ notificationId: notification.id });

    // assert
    expect(notificationsRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to read a non existing notification', async () => {
    // arrange
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    // assert
    expect(() => {
      return readNotification.execute({ notificationId: 'fake-id' });
    }).rejects.toThrow(NotificationNotFound);
  });
});
