import { Modal as ModalComponent } from '@sickgyun/ui';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

type Modal = typeof ModalComponent;

const meta: Meta<Modal> = {
  component: ModalComponent,
  title: 'Components/Modal',
};

export default meta;

export const Default: StoryObj<Modal> = {
  args: {
    isOpen: false,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <ModalComponent {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          김석진은 멋지다.
        </ModalComponent>
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
