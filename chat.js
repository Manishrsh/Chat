import React, { useState } from 'react';

const ChatApp = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = ['User1', 'User2', 'User3']; // List of all users

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="app-container">
      <div className="left-sidebar">
        <h2>All Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user} onClick={() => handleUserClick(user)}>
              {user}
            </li>
          ))}
        </ul>
      </div>
      <div className="right-chat">
        <h2>Chat</h2>
        {selectedUser ? (
          <div>
            {/* Display chat for the selected user */}
            Chat with {selectedUser}
          </div>
        ) : (
          <div>
            {/* Default message when no user is selected */}
            Select a user to start chatting
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatApp;
