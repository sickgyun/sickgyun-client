import { Select as SelectComponent } from '@sickgyun/ui';
import type { Meta, StoryObj } from '@storybook/react';

type Select = typeof SelectComponent;

const meta: Meta<Select> = {
  component: SelectComponent,
  title: 'Components/Select',
};

export default meta;

export const Default: StoryObj<Select> = {
  args: {
    label: '라벨',
    placeholder: '플레이스 홀더',
  },
  render: (args) => (
    <SelectComponent {...args}>
      <option value="test1">test1</option>
      <option value="test2">test2</option>
      <option value="test3">test3</option>
      <option value="test4">test4</option>
    </SelectComponent>
  ),
};
