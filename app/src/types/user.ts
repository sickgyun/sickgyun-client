export type User = {
  id: number;
  name: string;
  email: string;
  cardinal: number;
  hasCreatedProfile: boolean;
  isGraduated: boolean;
  profileId?: number;
};
