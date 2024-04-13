import { post } from '../api/client';
import type { LogAnalyticsEvent } from './type';
import { isDev } from '@/utils/isDev';

type LogAnalyticsEventProps = LogAnalyticsEvent;

export const logAnalyticsEvent = async ({ name, params }: LogAnalyticsEventProps) => {
  const event = { name, params };

  if (isDev()) {
    console.log(`analytics event called: ${JSON.stringify(event)}`);
    return;
  }

  await post('/data', { name, params });
};
