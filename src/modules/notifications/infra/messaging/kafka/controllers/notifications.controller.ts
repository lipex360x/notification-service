import { SendNotification } from '@/modules/notifications/applications/use-cases/send-notification.usecase';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

interface SendNotificationPayload {
  content: string;
  category: string;
  recipientId: string;
}

@Controller()
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}
  @EventPattern('notifications.send-notificaition')
  async handleSendNotification(@Payload() content: SendNotificationPayload) {
    await this.sendNotification.execute(content);
  }
}
