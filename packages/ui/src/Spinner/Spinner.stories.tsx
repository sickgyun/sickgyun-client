import { colors } from '@sickgyun/design-token';
import type { Meta, StoryObj } from '@storybook/react';
import { Spinner as SpinnerComponent } from '.';

type Spinner = typeof SpinnerComponent;

const meta: Meta<Spinner> = {
  argTypes: {
    size: {
      control: { type: 'number' },
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
    size: 60,
    color: `${colors.primary}`,
  },
  render: (args) => <SpinnerComponent {...args} />,
};
