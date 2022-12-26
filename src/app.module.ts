import { Module } from '@nestjs/common';
import { AppController } from './modules/notifications/infra/app.controller';
import { AppService } from './app.service';
import { PrismaService } from './modules/notifications/infra/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
