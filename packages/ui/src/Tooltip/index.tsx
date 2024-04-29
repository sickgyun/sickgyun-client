import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  FloatingArrow,
  type Padding,
  type Placement,
  type Strategy,
  arrow,
  flip,
  offset as offsetFn,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import type {
  ComponentType,
  Dispatch,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
  SetStateAction,
} from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import type { CSSTransitionProps } from 'react-transition-group/CSSTransition';
import { Text } from '../Text';

type TooltipChildrenProps = {
  ref: (arg0: Element | null) => void | null;
  onOpen?: MouseEventHandler<Element> | VoidFunction;
  referenceProps: Record<string, unknown>;
};

type TooltipProps = {
  onClose?: VoidFunction;
  children: (children: TooltipChildrenProps) => ReactNode;
  content: string | ReactNode;
  placement: Placement;
  duration?: number;
  visible?: boolean;
  strategy?: Strategy;
  closeTrigger?: 'icon' | 'duration';
  arrowOffset?: Padding;
  offset?: [number | null | undefined, number | null | undefined];
  fallbackPlacements?: [Placement];
  preventOverflow?: boolean;
  closeOnInteractOutside?: boolean;
};

const TRANSITION_MS = 200;

export const Tooltip = ({
  onClose,
  children,
  content,
  placement,
  duration = 3000,
  visible = false,
  strategy = 'absolute',
  closeTrigger = 'duration',
  arrowOffset,
  offset,
  fallbackPlacements,
  preventOverflow = true,
  closeOnInteractOutside = false,
}: TooltipProps) => {
  const [isOpen, setIsOpen, openTooltip, closeTooltip] = useTooltipState({ onClose });
  const arrowRef = useRef(null);
  const transitionRef = useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    strategy,
    placement,
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offsetFn({ crossAxis: offset?.[0] ?? 0, mainAxis: offset?.[1] ?? 0 }),
      flip({ fallbackPlacements, mainAxis: false, crossAxis: false }),
      shift({ mainAxis: preventOverflow, crossAxis: false, padding: 16 }),
      arrow({ element: arrowRef, padding: arrowOffset }),
    ],
  });

  const focus = useFocus(context);
  const hover = useHover(context, { move: false });
  const dismiss = useDismiss(context, { enabled: closeOnInteractOutside });
  const role = useRole(context, { role: 'tooltip' });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    dismiss,
    role,
    hover,
    focus,
  ]);

  useForceUpdate({ status: visible, fn: setIsOpen });
  useTimeoutTransition({
    possible: isOpen && closeTrigger === 'duration',
    duration,
    callback: closeTooltip,
  });

  return (
    <>
      <PositionWrapper strategy={strategy}>
        {children({
          ref: refs.setReference,
          onOpen: openTooltip,
          referenceProps: getReferenceProps(),
        })}
      </PositionWrapper>
      <StyledCSSTransition
        nodeRef={transitionRef}
        in={isOpen}
        timeout={TRANSITION_MS}
        unmountOnExit
      >
        <StyledTooltipItemWrapper ref={transitionRef}>
          <StyledTooltipItem
            role="tooltip"
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            {typeof content === 'string' ? (
              <Text fontType="body3" color="white">
                {content}
              </Text>
            ) : (
              content
            )}
            <StyledArrow ref={arrowRef} context={context} />
          </StyledTooltipItem>
        </StyledTooltipItemWrapper>
      </StyledCSSTransition>
    </>
  );
};

export default Tooltip;

const useTooltipState = ({ onClose }: { onClose?: VoidFunction }) => {
  const onCloseRef = useRef<VoidFunction>();
  const [isOpen, setIsOpen] = useState(false);
  const openTooltip = useCallback((e?: MouseEvent<Element, MouseEvent>) => {
    e?.stopPropagation();
    setIsOpen(true);
  }, []);
  const closeTooltip = useCallback((e?: MouseEvent<Element, MouseEvent>) => {
    e?.stopPropagation();
    setIsOpen(false);
    onCloseRef.current?.();
  }, []);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  return [isOpen, setIsOpen, openTooltip, closeTooltip] as const;
};

const useForceUpdate = <T,>({
  status,
  fn,
}: {
  status: T;
  fn: Dispatch<SetStateAction<T>>;
}) => {
  useEffect(() => {
    fn(status);
  }, [status, fn]);
};

const useTimeoutTransition = ({
  possible,
  duration,
  callback,
}: {
  possible?: boolean;
  duration?: number;
  callback: (e?: MouseEvent<Element, MouseEvent>) => void;
}) => {
  useEffect(() => {
    if (possible && duration !== undefined) {
      const clearId = setTimeout(callback, duration);
      return () => {
        callback();
        clearTimeout(clearId);
      };
    }
  }, [possible, duration, callback]);
};

const PositionWrapper = ({
  children,
  strategy,
}: {
  strategy?: Strategy;
  children: ReactNode;
}) => {
  if (strategy === 'fixed') {
    return <>{children}</>;
  }
  return <StyledRelativePositionWrapper>{children}</StyledRelativePositionWrapper>;
};

const StyledRelativePositionWrapper = styled.div`
  position: relative;
`;

const StyledCSSTransition = styled(
  CSSTransition as ComponentType<CSSTransitionProps<HTMLElement>>
)`
  &.enter {
    opacity: 0;
  }

  &.enter-active {
    opacity: 1;
    transition: 'opacity ${TRANSITION_MS}ms';
  }

  &.exit {
    opacity: 1;
  }

  &.exit-active {
    opacity: 0;
    transition: 'opacity ${TRANSITION_MS}ms';
  }
`;

const StyledTooltipItemWrapper = styled.div`
  z-index: ${({ theme }) => theme.zIndex.page1};
`;

const StyledTooltipItem = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body2}
    background-color: ${theme.colors.gray900};
    color: ${theme.colors.white};
    z-index: ${theme.zIndex.page1};
  `}
  display: flex;
  align-items: flex-start;
  width: max-content;
  max-width: calc(100vw - 32px);
  padding: 8px 12px;
  border-radius: 8px;
`;

const StyledArrow = styled(FloatingArrow)`
  position: absolute;
  width: 8px;
  height: 8px;
  fill: ${({ theme }) => theme.colors.gray900};
`;
