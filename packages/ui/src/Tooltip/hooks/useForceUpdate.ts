import { useEffect } from 'react';

type UseForceUpdateProps<T> = {
  status: T;
  fn: React.Dispatch<React.SetStateAction<T>>;
};

export const useForceUpdate = <T>({ status, fn }: UseForceUpdateProps<T>) => {
  useEffect(() => {
    fn(status);
  }, [status, fn]);
};
