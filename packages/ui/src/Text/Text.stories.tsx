import { colors, fonts } from '@sickgyun/design-token';
import type { Meta, StoryObj } from '@storybook/react';
import { Text as TextComponent } from '.';

type Text = typeof TextComponent;

const meta: Meta<Text> = {
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    styleType: {
      control: { type: 'select' },
      options: [...Object.keys(fonts)],
    },
    tag: {
      control: { type: 'radio' },
      options: ['p', 'span'],
    },
    color: {
      control: 'select',
      options: [...Object.keys(colors)],
    },
  },
  component: TextComponent,
  title: 'Components/Text',
};

export default meta;

export const Default: StoryObj<Text> = {
  args: {
    children: '안녕하세요, 해당 서비스의 이름은 식견입니다.',
    color: 'white',
    styleType: 'p1',
  },
  render: (args) => <TextComponent {...args} />,
};
