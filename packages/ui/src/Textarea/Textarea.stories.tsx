import type { Meta, StoryObj } from '@storybook/react';
import { Textarea as TextareaComponent } from '.';

type Textarea = typeof TextareaComponent;

const meta: Meta<Textarea> = {
  argTypes: {
    isAutoHeight: {
      control: { type: 'boolean' },
    },
    minHeight: {
      control: { type: 'text' },
    },
  },
  component: TextareaComponent,
  title: 'Components/Textarea',
};

export default meta;

export const Default: StoryObj<Textarea> = {
  args: {
    label: '라벨임',
    placeholder: '플레이스 홀더임',
    width: '358px',
    isAutoHeight: false,
  },
  render: (args) => <TextareaComponent {...args} />,
};
