import Profile from './Profile';
import user from '../data-json/user.json';
import Statistics from './Statistics';
import data from '../data-json/data';
import FriendList from './FriendList';
import friends from '../data-json/friends';
import TransactionHistory from './TransactionHistory';
import transactions from '../data-json/transactions';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '50vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101'
    // }}
    >
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
    </div>
  );
};
