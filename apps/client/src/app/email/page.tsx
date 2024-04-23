import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useUser } from '@/hooks/common/useUser';
import { useLogAnalyticsEvent } from '@/libs/logging';

const EmailPage = () => {
  const router = useRouter();
  const { logShowEvent } = useLogAnalyticsEvent();
  const { user } = useUser();

  useEffect(() => {
    logShowEvent({ name: 'show_email_entry_site' });

    if (user.isLogin) {
      router.replace('/notification');
    } else {
      router.replace('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default EmailPage;
