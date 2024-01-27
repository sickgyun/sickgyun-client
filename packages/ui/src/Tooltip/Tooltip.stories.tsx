import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, Tooltip as TooltipComponent } from '.';

type Tooltip = typeof TooltipComponent;

const meta: Meta<Tooltip> = {
  argTypes: {
    content: {
      control: 'text',
    },
    placement: {
      control: 'select',
      options: [
        'top-start',
        'top-end',
        'right-start',
        'right-end',
        'bottom-start',
        'bottom-end',
        'left-start',
        'left-end',
      ],
    },
    duration: {
      control: 'number',
    },
    visible: {
      control: 'boolean',
    },
    strategy: {
      control: 'select',
      options: ['absolute', 'fixed'],
    },
    closeTrigger: {
      control: {
        type: 'select',
        options: ['icon', 'duration'],
      },
    },
    arrowOffset: {
      control: 'array',
    },
    offset: {
      control: 'array',
    },
    fallbackPlacements: {
      control: 'array',
    },
    preventOverflow: {
      control: 'boolean',
    },
    closeOnInteractOutside: {
      control: 'boolean',
    },
  },
  component: TooltipComponent,
  title: 'Components/Tooltip',
};

export default meta;

export const Default: StoryObj<Tooltip> = {
  args: {
    content: '툴팁입니다.',
    placement: 'bottom-end',
    closeTrigger: 'duration',
    offset: [0, 10],
  },
  render: (args) => {
    return (
      <Tooltip {...args}>
        {({ ref, referenceProps }) => (
          <button ref={ref} {...referenceProps}>
            버튼
          </button>
        )}
      </Tooltip>
    );
  },
};
