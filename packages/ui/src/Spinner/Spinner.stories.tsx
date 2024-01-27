import type { Meta, StoryObj } from '@storybook/react';
import { Spinner as SpinnerComponent } from '.';
import { colors } from '@sickgyun/design-token';

type Spinner = typeof SpinnerComponent;

const meta: Meta<Spinner> = {
  argTypes: {
    width: {
      control: { type: 'text' },
    },
    height: {
      control: { type: 'text' },
    },
    color: {
      control: { type: 'text' },
    },
  },
  component: SpinnerComponent,
  title: 'Components/Spinner',
};

export default meta;

export const Default: StoryObj<Spinner> = {
  args: {
    width: '60px',
    height: '60px',
    color: `${colors.primary}`,
  },
  render: (args) => <SpinnerComponent {...args} />,
};
