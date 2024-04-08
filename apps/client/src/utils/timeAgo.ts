import { match, P } from 'ts-pattern';
import dayjs from 'dayjs';

export const timeAgo = (createdTime: string) => {
  const currentTime = dayjs();
  const timeDifference = currentTime.diff(dayjs(createdTime), 'second');

  const seconds = timeDifference;
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  return match({ days, hours, minutes })
    .with({ days: P.when((d) => d >= 7) }, ({ days }) => `${Math.floor(days / 7)}주 전`)
    .with({ days: P.when((d) => d >= 1) }, ({ days }) => `${days}일 전`)
    .with({ hours: P.when((d) => d >= 1) }, ({ hours }) => `${hours}시간 전`)
    .with({ minutes: P.when((d) => d >= 1) }, ({ minutes }) => `${minutes}분 전`)
    .otherwise(() => '방금 전');
};
