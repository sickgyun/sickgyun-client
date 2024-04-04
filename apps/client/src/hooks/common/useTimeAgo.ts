import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

export const useTimeAgo = (createTime: string) => {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const calculateTimeAgo = () => {
      const currentDate = dayjs();
      const createTimeObj = dayjs(createTime);
      const currentTime = currentDate.diff(createTimeObj, 'minutes');

      let newTimeAgo: string;
      if (currentTime < 1440) {
        newTimeAgo =
          currentTime < 60
            ? `${Math.floor(currentTime)}분 전`
            : `${Math.floor(currentTime / 60)}시간 전`;
      } else {
        newTimeAgo = `${Math.floor(currentTime / 1440)}일 전`;
      }

      setTimeAgo(newTimeAgo);
    };

    calculateTimeAgo();
  }, [createTime]);

  return timeAgo;
};
