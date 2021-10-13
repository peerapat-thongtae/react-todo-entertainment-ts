import { toast } from 'react-toastify';

const ToastHelper = (id: any, payload: any) => {
  const { response, title, isLoading, autoClose } = payload;
  return toast.update(id, {
    render: title || 'Toast',
    type: response.success ? 'success' : 'error',
    autoClose: autoClose || 2000,
    isLoading: isLoading || false,
  });
};

export default ToastHelper;
