/* eslint-disable */
// source: https://reactjs.org/docs/hooks-custom.html

// src/hooks/useFriendStatus.js
import { useState, useEffect } from 'react';
import ChatAPI from 'path/to/ChatAPI';

export default function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}

// src/components/FriendsList.jsx
import React from 'react';
import useFriendStatus from '../hooks/useFriendStatus';

export default function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}
