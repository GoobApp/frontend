import { forwardRef, useRef } from "react";
import "../../App.css";
import ChatInputRef from "../../types/ChatInputRef";
import ChatMessageObject from "../../types/ChatMessageObject";
import ChatInput from "./Input";
import Messages from "./Messages";
import UserProfile from "../../types/UserProfileObject";

type ChatWindowProps = {
  messages: ChatMessageObject[];
  sendMessage: (contentText: string) => void;
  clientProfile: UserProfile;
};

type MessagesRef = {
  scrollToBottom: () => void;
};

const ChatWindow = forwardRef<MessagesRef, ChatWindowProps>((props, ref) => {
  // Wrap the component with forwardRef so the parent can pass a ref;  useImperativeHandle exposes methods to that ref
  const chatInputRef = useRef<ChatInputRef>(null);
  const messagesRef = useRef<MessagesRef>(null);

  const handleSent = () => {
    if (!chatInputRef) return;
    const value = chatInputRef.current?.getInputValueToSend();
    messagesRef.current?.scrollToBottom();
    if (value) props.sendMessage(value);
  };

  return (
    <div id="chatWindow" className="chat-window">
      <Messages
        messages={props.messages}
        sendMessage={props.sendMessage}
        clientProfile={props.clientProfile}
        ref={messagesRef}
      ></Messages>
      <ChatInput onSend={handleSent} ref={chatInputRef}></ChatInput>
    </div>
  );
});

export default ChatWindow;
