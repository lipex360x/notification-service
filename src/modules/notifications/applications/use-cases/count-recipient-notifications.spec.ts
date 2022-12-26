import { makeNotification } from '@/../test/factories/notification.factory';
import { InMemoryNotificationsRepository } from '@/../test/repositories/in-memory-notifications.repository';

import { CountRecipientNotifications } from './count-recipient-notifications.usecase';

describe('Count Notification', () => {
  it('should be able to count notifications by recipient Id', async () => {
    // arrange
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );

    // act
    const { count } = await countRecipientNotification.execute({
      recipientId: 'recipient-1',
    });

    // assert
    expect(count).toEqual(2);
  });
});
