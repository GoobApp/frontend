import './App.css';
import ChatInput from './components/ChatInput';
import ChatSendButton from './components/ChatSendButton';
import ChatWindow from './components/ChatWindow';
import SwitcherPanel from './components/SwitcherPanel';

function App() {
  // const [inputValue, setInputValue] = useState('');

  return (
    <div className='wrapper'>
      <ChatWindow></ChatWindow>
      <ChatInput></ChatInput>
      <ChatSendButton></ChatSendButton>
      <SwitcherPanel></SwitcherPanel>
    </div>
  );
}

export default App;
