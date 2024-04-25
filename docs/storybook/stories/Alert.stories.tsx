import { Alert as AlertComponent } from '@sickgyun/ui';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

type Alert = typeof AlertComponent;

const meta: Meta<Alert> = {
  component: AlertComponent,
  title: 'Components/Alert',
};

export default meta;

export const Default: StoryObj<Alert> = {
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
        <AlertComponent
          {...args}
          isOpen={isOpen}
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
