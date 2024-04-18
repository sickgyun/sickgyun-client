import type { ReactNode } from 'react';
import type { LogAnalyticsEvent } from '@/libs/logging/type';
import { useLogAnalyticsEvent } from '@/libs/logging';

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
