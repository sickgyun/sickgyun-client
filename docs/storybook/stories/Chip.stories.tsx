import { Chip as ChipComponent } from '@sickgyun/ui';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

type Chip = typeof ChipComponent;

const meta: Meta<Chip> = {
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
  component: ChipComponent,
  title: 'Components/Chip',
};

export default meta;

export const Default: StoryObj<Chip> = {
  args: {
    children: '#식견',
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isSelected, setIsSelected] = useState(false);

    return (
      <ChipComponent
        {...args}
        onClick={() => setIsSelected((prev) => !prev)}
        isSelected={isSelected}
      />
    );
  },
};
