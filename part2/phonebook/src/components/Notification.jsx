const Notification = ({ message, type }) => {
  if (message === null) return null;
  return (
    <div
      className={
        type === "ERROR" ? "notification error" : "notification success"
      }
    >
      {message}
    </div>
  );
};

export default Notification;
