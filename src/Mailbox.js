import React from "react";

function Mailbox(props) {
  const { unreadMessages } = props;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread</h2>
      )}
    </div>
  );
}

export default Mailbox;
