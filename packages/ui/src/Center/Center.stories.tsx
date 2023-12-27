import type { Meta, StoryObj } from '@storybook/react';
import { Center as CenterComponent } from '.';

type Center = typeof CenterComponent;

const meta: Meta<Center> = {
  argTypes: {
    tag: {
      control: 'text',
    },
    width: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
  },
  component: CenterComponent,
  title: 'Components/Center',
};

export default meta;

export const Default: StoryObj<Center> = {
  render: (args) => (
    <CenterComponent {...args}>
      <div style={{ width: '80px', height: '80px', backgroundColor: 'pink' }} />
    </CenterComponent>
  ),
};
