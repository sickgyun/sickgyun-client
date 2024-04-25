import { Toaster as SickgyunToaster } from 'sonner';

const Toaster = () => {
  return (
    <SickgyunToaster
      position="top-right"
      richColors={true}
      toastOptions={{
        style: {
          gap: '10px',
          padding: '16px',
          fontSize: '14px',
        },
      }}
    />
  );
};

export default Toaster;
