import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications.repository';

import { SendNotification } from './send-notification.usecase';

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    // arrange
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    // act
    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'this is a notification',
      recipientId: 'example-id',
    });

    // assert
    expect(notification).toBeTruthy();
    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
