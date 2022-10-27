import React from 'react';

const Notification = ({ message }) => {
  return <div>{message && <p>{message}</p>}</div>;
};

export default Notification;
