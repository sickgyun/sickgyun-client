import { BUTTON_STYLE_KEYS, Button as ButtonComponent } from '@sickgyun/ui';
import type { Meta, StoryObj } from '@storybook/react';

type Button = typeof ButtonComponent;

const meta: Meta<Button> = {
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    styleType: {
      control: 'select',
      options: [...Object.values(BUTTON_STYLE_KEYS)],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  component: ButtonComponent,
  title: 'Components/Button',
};

export default meta;

export const Default: StoryObj<Button> = {
  args: {
    children: '버튼',
    style: {
      width: '300px',
    },
  },
  render: (args) => <ButtonComponent {...args} />,
};
