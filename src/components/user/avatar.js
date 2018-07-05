import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  IconSeparator
} from 'react-md';


const UserAvatar = ({
  user,
  onClick
}) => user ? (
  <IconSeparator
    iconBefore
    className='adept-user-avatar'
    component="li"
    label={user.name || 'user-avatar'}
    onClick={onClick}
  >
    <Avatar src={user.picture} role="presentation" />
  </IconSeparator>
) : null;

UserAvatar.propTypes = {
  onClick: PropTypes.func,
  user: PropTypes.shape({
    name: PropTypes.string,
    picture: PropTypes.string
  })
};

UserAvatar.defaultProps = {
  onClick: () => {},
  user: null
};

export default UserAvatar;
