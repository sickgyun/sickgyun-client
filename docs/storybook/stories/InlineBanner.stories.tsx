import {
  INLINE_BANNER_STYLE_KEYS,
  InlineBanner as InlineBannerComponent,
} from '@sickgyun/ui';
import type { Meta, StoryObj } from '@storybook/react';

type InlineBanner = typeof InlineBannerComponent;

const meta: Meta<InlineBanner> = {
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    styleType: {
      control: 'select',
      options: [...Object.values(INLINE_BANNER_STYLE_KEYS)],
    },
  },
  component: InlineBannerComponent,
  title: 'Components/InlineBanner',
};

export default meta;

export const Default: StoryObj<InlineBanner> = {
  args: {
    children: '인라인 배너입니다.',
  },
  render: (args) => <InlineBannerComponent {...args} />,
};
