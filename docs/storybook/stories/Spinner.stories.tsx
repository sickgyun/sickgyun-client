import { colors } from '@sickgyun/design-token';
import { Spinner as SpinnerComponent } from '@sickgyun/ui';
import type { Meta, StoryObj } from '@storybook/react';

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
    color: `${colors.primary}`,
  },
  render: (args) => <SpinnerComponent {...args} />,
};
