import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/notifications/infra/database/database.module';
import { HttpModule } from './modules/notifications/infra/http/http.module';

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}
