import './App.css';
import ChatContainer from './components/ChatContainer';
import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <ChatProvider>
      <ChatContainer />
    </ChatProvider>
  );
}

export default App
