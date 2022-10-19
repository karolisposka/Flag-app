import React from "react";
import PropTypes from "prop-types";
import * as S from "./Notification.styles";

const Notification = ({ children }) => {
  return <S.Notifcation>{children}</S.Notifcation>;
};

Notification.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Notification;
