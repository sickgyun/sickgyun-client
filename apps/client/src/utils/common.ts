export const isProd = (env: string): boolean => env === 'production';

export const getUserProfileImage = (profileUrl?: string): string => {
  if (!profileUrl) {
    return '/assets/default_profile.jpeg';
  }

  return profileUrl;
};
