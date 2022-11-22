import { Container } from './App.styled';
import Profile from '../components/Profile/Profile';
import user from '../data-json/user.json';
import Statistics from '../components/Statistics/Statistics';
import data from '../data-json/data';
import FriendList from '../components/FriendList/FriendList';
import friends from '../data-json/friends';
import TransactionHistory from '../components/TransactionHistory/TransactionHistory';
import transactions from '../data-json/transactions';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Container>
  );
};
