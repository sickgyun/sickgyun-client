import { useEffect } from 'react';
import { SessionStorage } from '@/libs/api/storage';
import { useLogAnalyticsEvent } from '@/libs/logging';
import { getDate } from '@/utils/getDate';
import { getTime } from '@/utils/getTime';

const LogUserAccessTime = () => {
  const { logShowEvent } = useLogAnalyticsEvent();

  useEffect(() => {
    const userAccessTime = SessionStorage.getItem('siuat');

    if (!userAccessTime) {
      const date = getDate();
      const time = getTime();

      SessionStorage.setItem('siuat', `${date}:${time}`);
      logShowEvent({
        name: 'show_user_access_time',
        params: {
          date,
          time,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default LogUserAccessTime;
