export const getGoogleAccessToken = () => {
  const params = new URLSearchParams(window.location.hash.substring(1));
  const accessToken = params.get('access_token');

  return accessToken;
};
