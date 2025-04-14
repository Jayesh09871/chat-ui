import { useChat } from '../context/ChatContext';
import MessageInput from './MessageInput';
import MessageList from './MessageList';
import UserNameInput from './UserNameInput';

const ChatContainer = () => {
  const { messages, clearMessages, isJoined } = useChat();

  if (!isJoined) {
    return <UserNameInput />;
  }

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto p-4 bg-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Chat App</h1>
        <button
          onClick={clearMessages}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Clear Chat
        </button>
      </div>
      
      <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
        <MessageList messages={messages} />
        <MessageInput />
      </div>
    </div>
  );
};

export default ChatContainer;