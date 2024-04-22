import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button, Stack, Text } from '@sickgyun/ui';
import type { ChangeEventHandler, DragEventHandler } from 'react';
import { useEffect, useRef, useState } from 'react';
import type { UseFormSetValue } from 'react-hook-form';
import { useUploadImage } from '@/hooks/api/image/useUploadImage';
import type { ProfileFormType } from '@/types/profile';

type ProfileImageUploaderProps = {
  value: string;
  defaultValue: string;
  setValue: UseFormSetValue<ProfileFormType>;
};

const ProfileImageUploader = ({
  value,
  defaultValue,
  setValue,
}: ProfileImageUploaderProps) => {
  const imageFileRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const { mutate: uploadImageMutate } = useUploadImage({
    onSuccess: (data) => {
      const { url } = data;
      setValue('imageUrl', url);
    },
  });
  const hasImageUrl = Boolean(value ?? defaultValue);

  useEffect(() => {
    if (defaultValue) {
      setValue('imageUrl', defaultValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFileSelectButtonClick = () => {
    imageFileRef.current?.click();
  };

  const handleImageFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    uploadImageMutate(formData);
  };

  const handleDragEnter: DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave: DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragOver: DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files) {
      setIsDragging(true);
    }
  };

  const handleDrop: DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    const formData = new FormData();
    formData.append('file', file);
    uploadImageMutate(formData);
    setIsDragging(false);
  };

  return (
    <StyledProfileImageUploaderContainer>
      <Text color="gray600" fontType="p3" style={{ marginBottom: '8px' }}>
        프로필 사진
      </Text>
      <StyledProfileImageUploader
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        isDragging={isDragging}
        imageUrl={value ?? defaultValue}
      >
        {hasImageUrl ? (
          <StyledFileUpdateButton onClick={handleFileSelectButtonClick} size="small">
            수정하기
          </StyledFileUpdateButton>
        ) : (
          <Stack direction="vertical" align="center" spacing={12}>
            <StyledFileSelectButton onClick={handleFileSelectButtonClick} size="small">
              파일 선택
            </StyledFileSelectButton>
            <Text fontType="p1" color="gray500">
              또는
            </Text>
            <Text fontType="p1" color="gray500">
              여기로 사진을 끌어오세요
            </Text>
          </Stack>
        )}
        <input
          type="file"
          ref={imageFileRef}
          accept=".png, .jpg, .jpeg"
          onChange={handleImageFileChange}
          hidden
        />
      </StyledProfileImageUploader>
    </StyledProfileImageUploaderContainer>
  );
};

export default ProfileImageUploader;

const StyledProfileImageUploaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledProfileImageUploader = styled.div<{ isDragging: boolean; imageUrl: string }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  width: 100%;
  height: 180px;
  ${({ theme, isDragging, imageUrl }) => css`
    border: 1px solid ${isDragging ? theme.colors.primary : theme.colors.gray400};
    ${Boolean(imageUrl) &&
    css`
      background-image: url(${imageUrl});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    `}
  `}
`;

const StyledFileSelectButton = styled(Button)`
  width: 92px;
`;

const StyledFileUpdateButton = styled(Button)`
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 92px;
`;
