import { Input as InputComponent } from '@sickgyun/ui';
import type { Meta, StoryObj } from '@storybook/react';

type Input = typeof InputComponent;

const meta: Meta<Input> = {
  argTypes: {
    hasError: {
      control: 'boolean',
    },
  },
  component: InputComponent,
  title: 'Components/Input',
};

export default meta;

export const Default: StoryObj<Input> = {
  args: {
    label: '인풋 라벨',
    bottomText: '바텀 텍스트',
    placeholder: '플레이스 홀더',
    width: '358px',
  },
  render: (args) => <InputComponent {...args} />,
};
