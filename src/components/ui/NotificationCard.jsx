import { useState, useEffect } from "react";
import { CheckCircle, XCircle, X } from "lucide-react";

function NotificationCard({
  message,
  type = "success",
  duration = 5000,
  onClose,
}) {
  const [isVisible, setIsVisible] = useState(true);

  // Auto-close the notification after duration
  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      setTimeout(onClose, 300);
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`
        fixed top-6 right-6 z-50 flex items-center gap-3 p-4 rounded-lg shadow-lg
        transform transition-all duration-300 ease-in-out
        ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }
        ${
          type === "success"
            ? "bg-green-50 border-l-4 border-green-500"
            : "bg-red-50 border-l-4 border-red-500"
        }
        max-w-md
      `}
    >
      {/* Icon */}
      {type === "success" ? (
        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
      ) : (
        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
      )}

      {/* Message */}
      <div className="flex-grow">
        <p
          className={`text-sm font-medium ${
            type === "success" ? "text-green-800" : "text-red-800"
          }`}
        >
          {message}
        </p>
      </div>

      {/* Close button */}
      <button
        onClick={handleClose}
        className="flex-shrink-0 ml-2"
        aria-label="Close notification"
      >
        <X
          className={`h-5 w-5 ${
            type === "success" ? "text-green-500" : "text-red-500"
          } hover:opacity-75 transition-opacity`}
        />
      </button>
    </div>
  );
}

export default NotificationCard;
