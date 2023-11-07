import { useGetUserInformation } from '@/hooks/api/user/useGetUserInformation';

export const useUserInformation = () => {
  const { userInformation } = useGetUserInformation();

  const isLoggedIn = Boolean(userInformation.name);

  return { isLoggedIn, userInformation };
};
