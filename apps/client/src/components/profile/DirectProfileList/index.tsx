import styled from '@emotion/styled';
import { Stack } from '@sickgyun/ui';
import DirectProfileCard from '../DirectProfileCard';
import FullHeightSpinner from '@/components/common/FullHeightSpinner';
import { withSuspense } from '@/hocs/withSuspense';

const DirectProfileList = () => {
  return (
    <StyledDirectProfileList direction="horizontal" align="center" spacing={20}>
      <DirectProfileCard
        profileId={5}
        userId={4}
        introduction={`- 부마위키, 식견의 백엔드 팀장이에요.\n- 트레이드 오프에 관한 토론을 좋아해요.`}
      />
      <DirectProfileCard
        profileId={15}
        userId={1}
        introduction={`- 당근 인턴 경험이 있어요.\n- 마루와 식견의 프론트엔드 팀장이에요.\n- 오픈소스에 기여하는 것을 좋아해요.`}
      />
      <DirectProfileCard
        profileId={13}
        userId={9}
        introduction={`- 부마위키에서 PM 및 프론트엔드 팀장을\n담당했어요.\n- 클린 코드와 기술 동향에 대해 관심이\n있어요.`}
      />
      <DirectProfileCard
        profileId={3}
        userId={3}
        introduction={`- 마루, 식견의 디자인을 맡았어요.\n- 디자인과 디자이너 취업 등에 대해 이야기\n해드릴 수 있어요.`}
      />
    </StyledDirectProfileList>
  );
};

export default withSuspense(DirectProfileList, FullHeightSpinner);

const StyledDirectProfileList = styled(Stack)`
  width: 100%;
  height: 100%;
`;
