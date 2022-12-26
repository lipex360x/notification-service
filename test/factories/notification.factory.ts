import { Content } from '@/modules/notifications/applications/entities/content';
import {
  Notification,
  NotificationProps,
} from '@/modules/notifications/applications/entities/notification';

type OverrideProps = Partial<NotificationProps>;

export const makeNotification = (override: OverrideProps = {}) => {
  return new Notification({
    content: new Content('Nova solicitação de amizade'),
    category: 'social',
    recipientId: 'recipient-2',
    ...override,
  });
};
