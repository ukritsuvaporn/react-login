import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const showSuccessToast = (message: string) => {
  toast.success(message, {
    position: "top-right",
  });
};

const showErrorToast = (message: string) => {
  toast.error(message, {
    position: "top-right",
  });
};

export const showToast = (type: string, message: string) => {
  switch (type) {
    case "success": {
      showSuccessToast(message);
      break;
    }
    case "error": {
      showErrorToast(message);
      break;
    }
    default: {
      break;
    }
  }
};
