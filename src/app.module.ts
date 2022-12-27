import { Module } from '@nestjs/common';

import { DatabaseModule } from './modules/notifications/infra/database/database.module';
import { HttpModule } from './modules/notifications/infra/http/http.module';
import { MessagingModule } from './modules/notifications/infra/messaging/messaging.module';

@Module({
  imports: [HttpModule, DatabaseModule, MessagingModule],
})
export class AppModule {}
