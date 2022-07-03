import propTypes from 'prop-types';

import styles from './style.module.scss';

export const FriendListItem = ({ friend }) => {
  const statusClass = friend.isOnline ? styles.online : styles.offline;
  return (
    <li className={styles.item}>
      <span className={statusClass}></span>
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{friend.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: propTypes.shape({
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
  }),
};
