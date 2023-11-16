type StrictPropsWithChildren<P = unknown> = P & {
  children: ReactNode;
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
};
