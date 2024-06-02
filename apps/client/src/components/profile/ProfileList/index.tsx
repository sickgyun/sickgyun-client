import styled from '@emotion/styled';
import { Text } from '@sickgyun/ui';
import { isEmpty } from 'lodash';
import { useSearchParams } from 'next/navigation';
import ProfileCard from '../ProfileCard';
import { BUMAWIKI_PROFILE_ID_LIST, SICKGYUN_PROFILE_ID_LIST } from '@/constants/profile';
import { withSuspense } from '@/hocs/withSuspense';
import type { GetProfileListParams } from '@/hooks/api/profile/useGetProfileList';
import { useGetProfileList } from '@/hooks/api/profile/useGetProfileList';
import type { Promotion } from '@/types/profile';

type ProfileListProps = GetProfileListParams;

const ProfileList = ({ major, isRecruited, cardinal }: ProfileListProps) => {
  const params = useSearchParams();
  const { profileList } = useGetProfileList({ major, isRecruited, cardinal });
  const promotion = params.get('promotion') as Promotion;

  const filteredProfileList = profileList.filter((profile) => {
    switch (promotion) {
      case 'BUMAWIKI':
        return BUMAWIKI_PROFILE_ID_LIST.includes(profile.id);
      case 'SICKGYUN':
        return SICKGYUN_PROFILE_ID_LIST.includes(profile.id);
      default:
        return true;
    }
  });

  if (isEmpty(filteredProfileList)) {
    return <Text fontType="h4">앗! 해당 분야의 학생이 없어요...</Text>;
  }

  return (
    <StyledProfileList>
      {filteredProfileList.map((profile) => (
        <ProfileCard
          key={profile.id}
          name={profile.name}
          imageUrl={profile.imageUrl}
          cardinal={profile.cardinal}
          major={profile.major}
          profileId={profile.id}
          userId={profile.userId}
          company={profile.company}
          introduction={profile.introduction}
          portfolioUrl={profile.portfolioUrl}
          githubId={profile.githubId}
          resumeUrl={profile.resumeUrl}
        />
      ))}
    </StyledProfileList>
  );
};

export default withSuspense(ProfileList);

const StyledProfileList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`;
