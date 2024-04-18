import { useMemo } from 'react';
import { useUser } from '@/hooks/common/useUser';
import { type LogAnalyticsEvent, logAnalyticsEvent } from '@/libs/logging';

export const useLogAnalyticsEvent = () => {
  const { user } = useUser();

  const { logShowEvent, logClickEvent } = useMemo(() => {
    return {
      logShowEvent(event: LogAnalyticsEvent) {
        logAnalyticsEvent({
          ...event,
          params: {
            userId: user.id,
            ...event?.params,
          },
        });
      },
      logClickEvent(event: LogAnalyticsEvent) {
        logAnalyticsEvent({
          ...event,
          params: {
            userId: user.id,
            ...event?.params,
          },
        });
      },
    };
  }, [user.id]);

  return { logShowEvent, logClickEvent };
};
