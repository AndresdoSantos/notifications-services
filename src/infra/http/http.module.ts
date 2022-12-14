import { Module } from '@nestjs/common';

import { SendNotification } from '../../app/useCases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  providers: [SendNotification],
  controllers: [NotificationsController],
})
export class HttpModule {}