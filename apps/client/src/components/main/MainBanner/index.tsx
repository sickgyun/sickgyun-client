import styled from '@emotion/styled';
import {
  IconChevronLeftFill,
  IconChevronRightFill,
  IconPauseFill,
  IconPlayFill,
} from '@seed-design/icon';
import { Stack, Text } from '@sickgyun/ui';
import { type ReactNode, useRef, useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperClass } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';

type MainBannerProps = {
  banners: ReactNode[];
};

const MainBanner = ({ banners }: MainBannerProps) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [swiperIndex, setSwiperIndex] = useState(1);

  const handleSwiperIndex = (swiper: SwiperClass) => {
    setSwiperIndex(swiper.realIndex + 1);
  };

  const handleAutoPlayStop = () => {
    swiperRef.current?.autoplay.stop();
    setIsAutoPlay(false);
  };

  const handleAutoPlayStart = () => {
    swiperRef.current?.autoplay.start();
    setIsAutoPlay(true);
  };

  const handleSlideNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleSlidePrevious = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <StyledMainBanner>
      <StyledSwiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSwiperIndex}
        pagination={{
          clickable: true,
        }}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        {banners.map((banner, index) => (
          <StyledSwiperSlide key={index}>{banner}</StyledSwiperSlide>
        ))}
      </StyledSwiper>
      <StyledSwiperController>
        <Text fontType="p2">
          {swiperIndex}/{banners.length}
        </Text>
        <Stack direction="horizontal" spacing={12}>
          <IconChevronLeftFill
            onClick={handleSlidePrevious}
            width={14}
            height={14}
            cursor="pointer"
          />
          {isAutoPlay ? (
            <IconPauseFill
              onClick={handleAutoPlayStop}
              width={14}
              height={14}
              cursor="pointer"
            />
          ) : (
            <IconPlayFill
              onClick={handleAutoPlayStart}
              width={14}
              height={14}
              cursor="pointer"
            />
          )}
          <IconChevronRightFill
            onClick={handleSlideNext}
            width={14}
            height={14}
            cursor="pointer"
          />
        </Stack>
      </StyledSwiperController>
    </StyledMainBanner>
  );
};

export default MainBanner;

const StyledMainBanner = styled.div`
  position: relative;
  height: 250px;
  width: calc(100% - 400px);
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;

const StyledSwiperController = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.gray200};
  position: absolute;
  bottom: -45px;
  display: flex;
  align-items: center;
  width: 135px;
  height: 36px;
  padding: 12px;
  border-radius: 20px;
`;
