import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  Image,
  Name,
  DescriptionText,
  StatList,
  StatItem,
  StatText,
} from './Profile.styled';
import { AiFillLike } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';

export default function Profile(props) {
  const { username, tag, location, avatar, stats } = props;
  return (
    <ProfileCard>
      <Description>
        <Image src={avatar} alt={username} />
        <Name>{username}</Name>
        <DescriptionText>{tag}</DescriptionText>
        <DescriptionText>{location}</DescriptionText>
      </Description>
      <StatList>

        <StatItem>
          <StatText>Followers</StatText>
          <FaUserFriends />
          <StatText>{stats.followers}</StatText>
        </StatItem>

        <StatItem>
          <StatText>Views</StatText>
          <BsEye />
          <StatText>{stats.views}</StatText>
        </StatItem>

        <StatItem>
          <StatText>Likes</StatText>
          <AiFillLike />
          <StatText>{stats.likes}</StatText>
        </StatItem>

      </StatList>
    </ProfileCard>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
