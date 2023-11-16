import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { useGetSeniorProfile } from '@/hooks/api/senior/useGetSeniorProfile';
import { getUserProfileImage } from '@/utils/user';

type SeniorDetailModalProps = {
  userCode: number;
} & ModalProps;

const SeniorDetailModal = ({ isOpen, onClose, userCode }: SeniorDetailModalProps) => {
  const { seniorProfile } = useGetSeniorProfile(userCode);

  const profileImage = getUserProfileImage(seniorProfile.profileUrl);

  const handleGoSeniorGithub = (githubId?: string) => {
    window.open(`https://github.com/${githubId}`);
  };

  const handleGoSeniorEmail = (email?: string) => {
    window.open(`mailto: ${email}`);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          프로필 정보
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <Flex flexDirection="column" gap="24px">
            <Flex gap="24px" alignItems="flex-start" height="94px">
              <Image
                src={profileImage}
                borderRadius="8px"
                height="100%"
                alt="Senior Profile"
              />
              <Flex flexDirection="column" gap="4px">
                <Flex alignItems="center" gap="6px">
                  <Text fontSize="20px" fontWeight="semibold">
                    {seniorProfile.name}
                  </Text>
                  <Text fontSize="14px" color="gray.600" fontWeight="medium">
                    {seniorProfile.cardinal} • {seniorProfile.position}
                  </Text>
                </Flex>
                {seniorProfile.bio && (
                  <Text
                    maxWidth="95%"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                    color="gray.600"
                    fontSize="14px"
                  >
                    {seniorProfile.bio}
                  </Text>
                )}
                {seniorProfile.company && (
                  <Flex gap="6px" alignItems="center">
                    <Image src="/assets/company.svg" height="16px" alt="Company" />
                    <Text fontSize="14px" color="gray.600">
                      토스
                    </Text>
                  </Flex>
                )}
              </Flex>
            </Flex>
            <Flex flexDirection="column" gap="16px">
              {/* 깃허브 */}
              {seniorProfile.githubId && (
                <Box
                  onClick={() => handleGoSeniorGithub(seniorProfile.githubId)}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  padding="0px 24px"
                  backgroundColor="gray.50"
                  borderRadius="8px"
                  _hover={{ cursor: 'pointer' }}
                  width="100%"
                  height="56px"
                >
                  <Text fontSize="14px" fontWeight="semibold">
                    👀 선배들의 깃허브는 어떻게 되어 있을까요?
                  </Text>
                  <Flex alignItems="center">
                    <Text fontSize="12px" color="gray.700">
                      깃허브 바로가기
                    </Text>
                    <ChevronRightIcon color="gray.700" />
                  </Flex>
                </Box>
              )}
              {/* 이메일 */}
              {seniorProfile.email && (
                <Box
                  onClick={() => handleGoSeniorEmail(seniorProfile.email)}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  padding="0px 24px"
                  backgroundColor="gray.50"
                  borderRadius="8px"
                  _hover={{ cursor: 'pointer' }}
                  width="100%"
                  height="56px"
                >
                  <Text fontSize="14px" fontWeight="semibold">
                    📨 커피챗, 코드리뷰, 조언 요청하러가기
                  </Text>
                  <Flex alignItems="center">
                    <Text fontSize="12px" color="gray.700">
                      이메일 바로가기
                    </Text>
                    <ChevronRightIcon color="gray.700" />
                  </Flex>
                </Box>
              )}
            </Flex>
          </Flex>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
};

export default SeniorDetailModal;
