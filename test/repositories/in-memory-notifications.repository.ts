import { Notification } from '../../src/modules/notifications/applications/entities/notification';
import { NotificationsRepository } from '../../src/modules/notifications/applications/repositories/notifications.repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
