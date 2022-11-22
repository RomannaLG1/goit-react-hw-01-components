import PropTypes from 'prop-types';
import { StatisticsContainer, Title, StatList, StatItem, StatText } from './Statistics.styled';

export default function Statistics(props) {
  const { title = 'Upload stats', stats = [] } = props;

  return (
    <StatisticsContainer>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(stat => (
          <StatItem key={stat.id}>
            <StatText>{stat.label} </StatText>
            <StatText>{stat.percentage}%</StatText>
          </StatItem>
        ))}
      </StatList>
    </StatisticsContainer>
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
