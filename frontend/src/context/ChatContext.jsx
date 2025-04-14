import { createContext, useContext, useEffect, useState } from 'react';
import socketService from '../services/socketService';

const ChatContext = createContext();

export const useChat = () => {
  return useContext(ChatContext);
};

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  const [isJoined, setIsJoined] = useState(false);

  useEffect(() => {
    const socket = socketService.connect();

    socket.on('message', (message) => {
      setMessages((prev) => [...prev, {
        id: Date.now(),
        content: message.text,
        timestamp: message.timestamp,
        sender: message.username
      }]);
    });

    socket.on('userJoined', (data) => {
      setMessages((prev) => [...prev, {
        id: Date.now(),
        content: data.message,
        timestamp: new Date().toISOString(),
        sender: 'system'
      }]);
    });

    socket.on('userLeft', (data) => {
      setMessages((prev) => [...prev, {
        id: Date.now(),
        content: data.message,
        timestamp: new Date().toISOString(),
        sender: 'system'
      }]);
    });

    return () => {
      socketService.disconnect();
    };
  }, []);

  const joinChat = (name) => {
    if (name.trim()) {
      setUsername(name);
      socketService.joinChat(name);
      setIsJoined(true);
    }
  };

  const sendMessage = (content) => {
    if (content.trim() && isJoined) {
      socketService.sendMessage(content);
    }
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return (
    <ChatContext.Provider value={{ 
      messages, 
      sendMessage, 
      clearMessages, 
      username,
      isJoined,
      joinChat
    }}>
      {children}
    </ChatContext.Provider>
  );
};