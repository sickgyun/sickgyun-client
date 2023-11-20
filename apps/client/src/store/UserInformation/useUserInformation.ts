import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isLoginState } from './isLoginState';
import { userInformationState } from './userInformationState';
import { LOCAL_STORAGE_KEY } from '@/constants/storage';
import { useGetUserInformation } from '@/hooks/api/user/useGetUserInformation';
import { LocalStorage } from '@/libs/localStorage';

export const useUserInformation = () => {
  const [userInformation, setUserInformation] = useRecoilState(userInformationState);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  const { userInformationData } = useGetUserInformation();

  useEffect(() => {
    const accessToken = LocalStorage.getItem(LOCAL_STORAGE_KEY.accessToken);

    // 로그인 상태 저장
    setIsLogin(Boolean(accessToken));

    // 유저 정보 저장
    if (userInformationData) {
      setUserInformation(userInformationData);
    }
  }, [setIsLogin, setUserInformation, userInformationData]);

  return { isLogin, userInformation };
};
