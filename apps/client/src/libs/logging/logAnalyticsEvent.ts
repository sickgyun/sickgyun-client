import axios from 'axios';
import type { LogAnalyticsEvent } from './type';
import { isDev } from '@/utils/isDev';

type LogAnalyticsEventProps = LogAnalyticsEvent;

export const logAnalyticsEvent = async (event: LogAnalyticsEventProps) => {
  if (isDev()) {
    console.log(`analytics event called: ${JSON.stringify(event)}`);
    return;
  }

  await axios.post(`${process.env.NEXT_PUBLIC_LOGGING_BASE_URL}/data`, event);
};
