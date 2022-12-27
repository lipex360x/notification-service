import { Module } from '@nestjs/common';

import { SendNotification } from '../../applications/use-cases/send-notification.usecase';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './kafka/controllers/notifications.controller';
import { KafkaConsumeService } from './kafka/kafka-consumer.service';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [KafkaConsumeService, SendNotification],
})
export class MessagingModule {}
