type StrictPropsWithChildren<P = unknown> = P & {
  children: ReactNode;
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
