import type { ReactNode } from 'react';
import { useLogAnalyticsEvent } from '@/hooks/common/useLogAnalyticsEvent';
import type { LogAnalyticsEvent } from '@/libs/logging/type';

type LogClickEventProps = {
  children: ReactNode;
} & LogAnalyticsEvent;

const LogClickEvent = ({ children, name, params }: LogClickEventProps) => {
  const { logClickEvent } = useLogAnalyticsEvent();

  const handleLogClickEvent = () => {
    logClickEvent({
      name,
      params,
    });
  };

  return <div onClick={handleLogClickEvent}>{children}</div>;
};

export default LogClickEvent;
