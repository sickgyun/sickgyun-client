import { Confirm as ConfirmComponent } from '@sickgyun/ui';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

type Confirm = typeof ConfirmComponent;

const meta: Meta<Confirm> = {
  component: ConfirmComponent,
  title: 'Components/Confirm',
};

export default meta;

export const Default: StoryObj<Confirm> = {
  args: {
    title: '제목입니다.',
    description: '설명입니다.',
    isOpen: false,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <ConfirmComponent
          {...args}
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          onConfirm={() => {
            setIsOpen(false);
          }}
        />
        <button
          type="button"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Open!
        </button>
      </>
    );
  },
};
