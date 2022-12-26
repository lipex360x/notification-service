import { NotificationsRepository } from '@//modules/notifications/applications/repositories/notifications.repository';
import { Notification } from '@/modules/notifications/applications/entities/notification';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
