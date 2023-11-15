export const isProd = (env: string): boolean => env === 'production';

export const getUserProfileImage = (profileUrl?: string): string => {
  if (profileUrl === undefined) {
    return '/assets/default_profile.jpeg';
  }

  return profileUrl;
};
