export type User = {
  id: number;
  name: string;
  email: string;
  cardinal: number;
  hasCreatedProfile: boolean;
  isGraduated: boolean;
  profileId?: number;
  phoneNumber?: string;
  instagramId?: string;
  kakaoId?: string;
  hasNotContact: boolean;
};
