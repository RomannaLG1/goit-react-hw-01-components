import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

export default function FriendList(props) {
  const { friends = [] } = props;
  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
