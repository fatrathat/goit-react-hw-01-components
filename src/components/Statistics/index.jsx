import propTypes from 'prop-types';

import styles from './style.module.scss';

export const Statistics = stats => (
  <section className={styles.statistics}>
    {stats.title && <h2 className={styles.title}>Upload stats</h2>}

    <ul className={styles.statList}>
      {stats.stats.map(stat => (
        <li className={styles.statListItem} key={stat.id}>
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    })
  ),
};
