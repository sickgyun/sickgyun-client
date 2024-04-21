import { useMemo } from 'react';
import { useUser } from '@/hooks/common/useUser';
import { type LogAnalyticsEvent, logAnalyticsEvent } from '@/libs/logging';
import { getDate } from '@/utils/getDate';
import { getTime } from '@/utils/getTime';

export const useLogAnalyticsEvent = () => {
  const { user } = useUser();

  const { logShowEvent, logClickEvent } = useMemo(() => {
    return {
      logShowEvent(event: LogAnalyticsEvent) {
        const date = getDate();
        const time = getTime();

        logAnalyticsEvent({
          ...event,
          params: {
            userId: user.id,
            date,
            time,
            ...event?.params,
          },
        });
      },
      logClickEvent(event: LogAnalyticsEvent) {
        const date = getDate();
        const time = getTime();

        logAnalyticsEvent({
          ...event,
          params: {
            userId: user.id,
            date,
            time,
            ...event?.params,
          },
        });
      },
    };
  }, [user.id]);

  return { logShowEvent, logClickEvent };
};
