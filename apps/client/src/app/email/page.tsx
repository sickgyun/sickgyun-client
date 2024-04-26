'use client';

import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';
import { LocalStorage } from '@/libs/api/storage';
import { useLogAnalyticsEvent } from '@/libs/logging';

const EmailPage = () => {
  const router = useRouter();
  const { logShowEvent } = useLogAnalyticsEvent();

  useLayoutEffect(() => {
    const isLogin = Boolean(LocalStorage.getItem('siac'));

    logShowEvent({ name: 'show_email_entry_site' });

    if (isLogin) {
      router.replace('/notification');
    } else {
      router.replace('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default EmailPage;
