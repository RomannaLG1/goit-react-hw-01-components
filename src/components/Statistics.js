import PropTypes from 'prop-types';

export default function Statistics(props) {
  const { title = 'Upload stats', stats = [] } = props;

  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul class="stat-list">
        {stats.map(stat => (
          <li key={stat.id}>
            <span class="label">{stat.label} </span>
            <span class="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })),
};
