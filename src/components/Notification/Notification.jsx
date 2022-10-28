import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <div>{message && <p>{message}</p>}</div>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
