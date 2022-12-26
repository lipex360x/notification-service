import { Notification } from '../../src/modules/notifications/applications/entities/notification';
import { NotificationRepository } from '../../src/modules/notifications/repositories/notifications.repository';

export class InMemoryNotificationsRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
