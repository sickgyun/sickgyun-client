import { getUserProfileImage } from './getUserProfileImage';

describe('getUserProfileImage', () => {
  it(`인자가 제공되었을 떄 'profileUrl'을 반환해야 합니다.`, () => {
    const profileUrl = 'https://auth.bssm.kro.kr/resource/user/profile/61.png';

    const result = getUserProfileImage(profileUrl);

    expect(result).toEqual(profileUrl);
  });

  it(`인자가 제공되지 않았을 떄 'defaultProfileUrl'을 반환해야 합니다.`, () => {
    const defaultProfileUrl = '/assets/default_profile.jpeg';

    const result = getUserProfileImage();

    expect(result).toEqual(defaultProfileUrl);
  });
});
