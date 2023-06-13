import { useAppContext } from "../context/appContext";
import { FiX } from "react-icons/fi";
import { BiCheck } from "react-icons/bi";

const Message = () => {
  const { messageText, messageType } = useAppContext();
  return (
    <div className={`message message-${messageType}`}>
      <div className="message-icon">
        {messageType === "error" ? <FiX /> : <BiCheck />}
      </div>
      {messageText}
    </div>
  );
};
export default Message;
