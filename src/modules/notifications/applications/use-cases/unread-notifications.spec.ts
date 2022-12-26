import { makeNotification } from '@test/factories/notification.factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications.repository';

import { NotificationNotFound } from './errors/notification-not-found';
import { UnreadNotification } from './unread-notifications.usecase';

describe('Unread Notification', () => {
  it('should be able to unread a notification', async () => {
    // arrange
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    const notification = makeNotification({ readAt: new Date() });

    await notificationsRepository.create(notification);

    // act
    await unreadNotification.execute({ notificationId: notification.id });

    // assert
    expect(notificationsRepository.notifications[0].readAt).toBeNull();
  });

  it('should not be able to unread a non existing notification', async () => {
    // arrange
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    // assert
    expect(() => {
      return unreadNotification.execute({ notificationId: 'fake-id' });
    }).rejects.toThrow(NotificationNotFound);
  });
});
