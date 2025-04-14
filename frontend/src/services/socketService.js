import { io } from 'socket.io-client';

const SOCKET_URL = 'https://chat-ui-1-kjnd.onrender.com';

class SocketService {
  constructor() {
    this.socket = null;
    this.username = '';
  }

  connect() {
    this.socket = io(SOCKET_URL);
    return this.socket;
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  joinChat(username) {
    this.username = username;
    if (this.socket) {
      this.socket.emit('join', username);
    }
  }

  sendMessage(message) {
    if (this.socket) {
      this.socket.emit('message', message);
    }
  }

  getUsername() {
    return this.username;
  }
}

export default new SocketService();