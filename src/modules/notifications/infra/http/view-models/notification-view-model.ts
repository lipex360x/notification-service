import { Notification } from '@/modules/notifications/applications/entities/notification';

export class NOtificationViewModel {
  static toHTTP(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
    };
  }
}
