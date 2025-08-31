import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

type NotificationProps = {
  message: string;
  duration?: number; // ms
  onClose: () => void;
};

const Notification: React.FC<NotificationProps> = ({
  message,
  duration = 3000,
  onClose,
}) => {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClosing(true);
      setTimeout(onClose, 500); // дождёмся анимации закрытия
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`${styles.notification} ${closing ? styles.hide : ""}`}>
      {message}
    </div>
  );
};

export default Notification;
