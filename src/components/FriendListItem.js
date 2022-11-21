import PropTypes from 'prop-types';
import { FriendStatus, FriendImg, FriendText } from './FriendListItem.styled';
export default function FriendListItem(props) {
  const { avatar, name, isOnline } = props;
  return (
    <>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendImg src={avatar} alt={name} />
      <FriendText>{name}</FriendText>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
