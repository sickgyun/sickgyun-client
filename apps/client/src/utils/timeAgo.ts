export const timeAgo = (createdTime: string) => {
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - new Date(createdTime).getTime();

  const seconds: number = Math.floor(timeDifference / 1000);
  const minutes: number = Math.floor(seconds / 60);
  const hours: number = Math.floor(minutes / 60);
  const days: number = Math.floor(hours / 24);

  if (days > 7) {
    return Math.floor(days / 7) + '주 전';
  } else if (days > 0) {
    return days + '일 전';
  } else if (hours > 0) {
    return hours + '시간 전';
  } else if (minutes > 0) {
    return minutes + '분 전';
  } else {
    return '방금 전';
  }
};
