import styled from '@emotion/styled';
import { Stack, Text } from '@sickgyun/ui';
import { getUserProfileImage } from '@sickgyun/utils';
import Image from 'next/image';

type StudentProfileCardProps = {
  onClick: VoidFunction;
  name: string;
  profileUrl?: string;
  cardinal: number;
  position: string;
  bio?: string;
  company?: string;
};

const StudentProfileCard = ({
  onClick,
  name,
  cardinal,
  profileUrl,
  position,
  bio,
  company,
}: StudentProfileCardProps) => {
  const profileImage = getUserProfileImage(profileUrl);

  return (
    <StyledStudentProfileCard onClick={onClick}>
      <Stack
        direction="horizontal"
        align="flex-start"
        spacing={24}
        style={{ height: '100%' }}
      >
        <StyledProfileImage
          src={profileImage}
          width={88}
          height={88}
          alt="Student Profile"
        />
        <Stack spacing={4}>
          <Stack direction="horizontal" align="center" spacing={6}>
            <Text styleType="h4">{name}</Text>
            <Text styleType="body3" color="gray600">
              {cardinal}기 • {position}
            </Text>
          </Stack>
          {bio && (
            <Text
              styleType="body2"
              color="gray600"
              style={{
                maxWidth: '95%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {bio}
            </Text>
          )}
          <Stack direction="horizontal" spacing={6} align="center">
            <Image src="/assets/company.svg" width={16} height={16} alt="Company" />
            <Text styleType="body2" color="gray600">
              {company ? company : '부산소프트웨어마이스터고등학교'}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </StyledStudentProfileCard>
  );
};

export default StudentProfileCard;

const StyledStudentProfileCard = styled.div`
  transition: all 0.25s ease;
  padding: 16px;
  border-radius: 8px;
  height: 120px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray50};
    cursor: pointer;
  }
`;

const StyledProfileImage = styled(Image)`
  border-radius: 8px;
  height: 100%;
`;
