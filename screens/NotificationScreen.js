import React, {useState} from 'react';





const NotificationScreen = ({ notifications, onClose }) => {
  return (
    <div className="notification-screen">
      <div className="notification-header">
        <h3>Notifications</h3>
        <button className="close-button" onClick={onClose}>
          <i className="fa fa-times"></i>
        </button>
      </div>
      <ul className="notification-list">
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
};