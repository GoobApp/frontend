import { forwardRef, useEffect, useLayoutEffect, useRef } from "react";
import "../../App.css";
import ChatInputRef from "../../types/ChatInputRef";
import ChatMessageObject from "../../types/ChatMessageObject";
import ChatInput from "./Input";
import MessageDisplay from "./Message";
import Messages from "./Messages";

type ChatWindowProps = {
  messages: ChatMessageObject[];
  sendMessage: (contentText: string) => void;
  clientUserUUID: string;
};

type ChatWindowRef = {
  scrollToBottom: () => void;
};

const MiniWindow = forwardRef<ChatWindowRef, ChatWindowProps>((props, ref) => {
  // Wrap the component with forwardRef so the parent can pass a ref;  useImperativeHandle exposes methods to that ref
  const chatInputRef = useRef<ChatInputRef>(null);
  const handleSent = () => {
    if (!chatInputRef) return;
    const value = chatInputRef.current?.getInputValueToSend();
    if (value) props.sendMessage(value);
  };

  return (
    <div id="chatUsersPanelContainer" className="chat-mini-window">
      <Messages messages={props.messages}
                sendMessage={props.sendMessage}
                clientUserUUID={props.clientUserUUID}
                ref={}
                ></Messages>
      <ChatInput onSend={handleSent} ref={chatInputRef}></ChatInput>
    </div>
  );
});

export default MiniWindow;
