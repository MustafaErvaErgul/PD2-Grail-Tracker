import "./Notification.css"
import { useState, useEffect } from "react";

import successicon from "./icons/successIcon.png"
import infoIcon from "./icons/infoIcon.png"
import erroricon from "./icons/errorIcon.png"

const Notification = () => {

  const [notificationDetails, setNotificationDetails] = useState({
    type: "?",
    title: "?",
    message: "?"
  })

  const notificationHandler = (event, notificationDetails) => {
    setNotificationDetails(notificationDetails)
  }

  useEffect(() => {
    window.api.handleNotification(notificationHandler)
  }, [])


  return (
    <div className="notification">
      <div className="notification-title">{notificationDetails.title}</div>

      <hr className="notification-separator"></hr>

      <div className="notification-content">
        {notificationDetails.type === "success" ?
          <img className="notification-icon" src={successicon} />
          :
          notificationDetails.type === "info" ?
            <img className="notification-icon" src={infoIcon} />
            :
            <img className="notification-icon" src={erroricon} />
        }
        <div className="notification-message">{notificationDetails.message}</div>
      </div>
    </div>
  );
};

export default Notification;
