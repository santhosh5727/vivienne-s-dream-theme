import { useState } from "react";

interface ToastProps {
  message: string;
  visible: boolean;
}

const Toast = ({ message, visible }: ToastProps) => {
  return (
    <div
      className={`fixed bottom-[85px] left-1/2 -translate-x-1/2 bg-foreground text-primary-foreground rounded-xl px-6 py-3 text-sm font-bold z-[200] whitespace-nowrap border-[2.5px] border-foreground transition-all duration-300 pointer-events-none font-display tracking-wider ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {message}
    </div>
  );
};

export default Toast;

export function useToast() {
  const [toast, setToast] = useState({ message: "", visible: false });

  const showToast = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), 2400);
  };

  return { toast, showToast };
}
