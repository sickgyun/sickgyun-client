import styled from '@emotion/styled';
import { Stack } from '@sickgyun/ui';
import DirectProfileCard from '../DirectProfileCard';
import FullHeightSpinner from '@/components/common/FullHeightSpinner';
import { DIRECT_PROFILE_LIST } from '@/constants/profile';
import { withSuspense } from '@/hocs/withSuspense';

const DirectProfileList = () => {
  return (
    <StyledDirectProfileList direction="horizontal" align="center" spacing={20}>
      {DIRECT_PROFILE_LIST.map((directProfile) => (
        <DirectProfileCard
          profileId={directProfile.profileId}
          userId={directProfile.userId}
          introduction={directProfile.introduction}
        />
      ))}
    </StyledDirectProfileList>
  );
};

export default withSuspense(DirectProfileList, FullHeightSpinner);

const StyledDirectProfileList = styled(Stack)`
  width: 100%;
  height: 100%;
`;
