import { Module } from '@nestjs/common';

import { KafkaConsumeService } from './kafka/kafka-consumer.service';

@Module({
  providers: [KafkaConsumeService],
})
export class MessagingModule {}
