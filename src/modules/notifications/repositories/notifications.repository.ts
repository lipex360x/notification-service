import { Notification } from '../applications/entities/notification';

export abstract class NotificationRepository {
  abstract create(Notification: Notification): Promise<void>;
}
