import { SendNotification } from './send-notification.usecase';

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'this is a notification',
      recipientId: 'example-id',
    });

    expect(notification).toBeTruthy();
  });
});
