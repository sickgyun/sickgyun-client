import { InfoBox as InfoBoxComponent } from '@sickgyun/ui';
import type { Meta, StoryObj } from '@storybook/react';

type InfoBox = typeof InfoBoxComponent;

const meta: Meta<InfoBox> = {
  component: InfoBoxComponent,
  title: 'Components/InfoBox',
};

export default meta;

export const Default: StoryObj<InfoBox> = {
  args: {
    label: '정보',
    children: '김석진은 멋지다.',
    style: {
      width: '300px',
    },
  },
  render: (args) => <InfoBoxComponent {...args} />,
};
