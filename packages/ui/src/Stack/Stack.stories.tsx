import type { Meta, StoryObj } from '@storybook/react';
import { Stack as StackComponent } from '.';

type Stack = typeof StackComponent;

const meta: Meta<Stack> = {
  argTypes: {
    spacing: {
      control: 'number',
    },
    align: {
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    },
    justify: {
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
    },
    direction: {
      control: 'select',
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
    },
  },
  component: StackComponent,
  title: 'Components/Stack',
};

export default meta;

export const Default: StoryObj<Stack> = {
  render: (args) => (
    <StackComponent {...args}>
      <div style={{ width: '80px', height: '80px', backgroundColor: 'red' }} />
      <div style={{ width: '80px', height: '80px', backgroundColor: 'green' }} />
      <div style={{ width: '80px', height: '80px', backgroundColor: 'blue' }} />
    </StackComponent>
  ),
};
