import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button, Flex, Stack, Text } from '@sickgyun/ui';
import { useOverlay } from '@toss/use-overlay';
import CoffeechatAcceptConfirm from '../CoffeechatAcceptConfirm';
import CoffeechatContactMessageModal from '../CoffeechatContactMessageModal';
import CoffeechatRejectConfirm from '../CoffeechatRejectConfirm';
import { CoffeechatStateEnum } from '@/types/coffeechat';
import type { CoffeechatState, Contact } from '@/types/coffeechat';
import type { User } from '@/types/user';

type CoffeechatReceiveCardProps = {
  fromUser: User;
  coffeechatId: number;
  state: CoffeechatState;
  contact: Contact;
  message?: string;
};

const CoffeechatReceiveCard = ({
  fromUser,
  coffeechatId,
  state,
  contact,
  message,
}: CoffeechatReceiveCardProps) => {
  const overlay = useOverlay();
  const isPending = state === 'PENDING';
  const isAccept = state === 'ACCEPT';

  const openCoffeechatAcceptConfirm = () => {
    overlay.open(({ isOpen, close }) => (
      <CoffeechatAcceptConfirm
        isOpen={isOpen}
        onClose={close}
        coffeechatId={coffeechatId}
      />
    ));
  };

  const openCoffeechatRejectConfirm = () => {
    overlay.open(({ isOpen, close }) => (
      <CoffeechatRejectConfirm
        isOpen={isOpen}
        onClose={close}
        coffeechatId={coffeechatId}
      />
    ));
  };

  const openCoffeechatContactMessageModal = () => {
    overlay.open(({ isOpen, close }) => (
      <CoffeechatContactMessageModal
        isOpen={isOpen}
        onClose={close}
        message={message}
        contact={contact}
      />
    ));
  };

  const openCoffeechatMessageModal = () => {
    overlay.open(({ isOpen, close }) => (
      <CoffeechatContactMessageModal isOpen={isOpen} onClose={close} message={message} />
    ));
  };

  return (
    <StyledCoffeechatReceiveCard direction="vertical" spacing={24}>
      {isPending ? (
        <Stack direction="vertical" spacing={6}>
          <Text fontType="body1">{fromUser.name}님이 커피챗 신청을 보냈어요!</Text>
          <Stack direction="horizontal" spacing={12}>
            <Text fontType="body2" color="gray600">
              {fromUser.cardinal}기 {fromUser.isGraduated ? '졸업생' : '재학생'}
            </Text>
            <ViewMessageButton
              onClick={openCoffeechatMessageModal}
              fontType="body2"
              color="primary"
            >
              메세지 보기
            </ViewMessageButton>
          </Stack>
        </Stack>
      ) : (
        <Flex justify="space-between" align="center">
          <Stack direction="vertical" spacing={6}>
            <Text fontType="body1">{fromUser.name}님이 커피챗 신청을 보냈었어요.</Text>
            <Stack direction="horizontal" spacing={12}>
              <Text fontType="body2" color="gray600">
                {fromUser.cardinal}기 {fromUser.isGraduated ? '졸업생' : '재학생'}
              </Text>
              {isAccept && (
                <ViewContactMessageButton
                  onClick={openCoffeechatContactMessageModal}
                  fontType="body2"
                  color="primary"
                >
                  메세지와 연락처 보기
                </ViewContactMessageButton>
              )}
            </Stack>
          </Stack>
          <StyledCoffeechatStatus state={state}>
            {CoffeechatStateEnum[state]} 완료
          </StyledCoffeechatStatus>
        </Flex>
      )}
      {isPending && (
        <Stack direction="horizontal" align="center" spacing={12}>
          <Button
            onClick={openCoffeechatRejectConfirm}
            styleType="secondary"
            size="small"
            width="120px"
          >
            거절하기
          </Button>
          <Button onClick={openCoffeechatAcceptConfirm} size="small">
            수락하기
          </Button>
        </Stack>
      )}
    </StyledCoffeechatReceiveCard>
  );
};

export default CoffeechatReceiveCard;

const StyledCoffeechatReceiveCard = styled(Stack)`
  width: 100%;
  margin-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  padding-bottom: 16px;
`;

const StyledCoffeechatStatus = styled.div<{ state: CoffeechatState }>`
  ${({ theme, state }) => css`
    ${theme.fonts.body2}
    color: ${state === 'REJECT' ? theme.colors.red : theme.colors.primary};
  `}
`;

const ViewMessageButton = styled(Text)`
  cursor: pointer;
`;

const ViewContactMessageButton = styled(Text)`
  cursor: pointer;
`;
