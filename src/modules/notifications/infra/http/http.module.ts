import { Module } from '@nestjs/common';

import { CancelNotification } from '../../applications/use-cases/cancel-notifications.usecase';
import { CountRecipientNotifications } from '../../applications/use-cases/count-recipient-notifications.usecase';
import { GetRecipientNotifications } from '../../applications/use-cases/get-recipient-notifications';
import { ReadNotification } from '../../applications/use-cases/read-notifications.usecase';
import { SendNotification } from '../../applications/use-cases/send-notification.usecase';
import { UnreadNotification } from '../../applications/use-cases/unread-notifications.usecase';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
