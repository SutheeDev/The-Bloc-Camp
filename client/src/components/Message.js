import { useAppContext } from "../context/appContext";

const Message = () => {
  const { messageText, messageType } = useAppContext();
  return (
    <div className={`message message-${messageType}`}> {messageText} </div>
  );
};
export default Message;
