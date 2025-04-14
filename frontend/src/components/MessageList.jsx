import { useEffect, useRef } from 'react';
import { useChat } from '../context/ChatContext';

const MessageList = ({ messages }) => {
  const messagesEndRef = useRef(null);
  const { username } = useChat();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => {
        if (message.sender === 'system') {
          return (
            <div key={message.id} className="flex justify-center">
              <div className="bg-gray-100 text-gray-600 rounded-full px-4 py-2 text-sm">
                {message.content}
              </div>
            </div>
          );
        }

        const isOwnMessage = message.sender === username;

        return (
          <div
            key={message.id}
            className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] md:max-w-[70%] rounded-lg p-3 ${
                isOwnMessage
                  ? 'bg-blue-500 text-white rounded-br-none'
                  : 'bg-gray-200 text-gray-800 rounded-bl-none'
              }`}
            >
              {!isOwnMessage && (
                <span className="text-sm font-medium text-gray-600 block mb-1">
                  {message.sender}
                </span>
              )}
              <p className="break-words">{message.content}</p>
              <span
                className={`text-xs ${
                  isOwnMessage ? 'text-blue-100' : 'text-gray-500'
                } block mt-1`}
              >
                {formatTime(message.timestamp)}
              </span>
            </div>
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;