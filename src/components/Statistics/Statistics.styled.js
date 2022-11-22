import styled from 'styled-components';

const StatisticsContainer = styled.section`
  padding: ${p => p.theme.space[4]}px;
  width: 368px;
  text-align: center;
  border-radius: ${p => p.theme.radii.normal};
  background: ${p => p.theme.colors.primary};
  background: linear-gradient(
    90deg,
    rgba(229, 190, 255, 1) 0%,
    rgba(255, 197, 197, 1) 50%,
    rgba(255, 206, 138, 1) 100%
  );
`;

const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes[5]}px;
  font-weight: ${p => p.theme.fontWeights.body};
`;

const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
`;

const setRGB = () => {
  const red = Math.round(Math.random(0, 1) * 255);
  const green = Math.round(Math.random(0, 1) * 255);
  const blue = Math.round(Math.random(0, 1) * 255);

  return `rgba(${red},${green},${blue}, 0.4)`;
};

const StatItem = styled.li`
  width: 80px;
  display: grid;
  justify-items: center;
  cursor: pointer;
  border-radius: ${p => p.theme.radii.normal};
  &:hover {
    background-color: ${setRGB};
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
      0px 2px 1px rgb(0 0 0 / 20%);
  }
`;

const StatText = styled.span`
  font-size: ${p => p.theme.fontSizes[3]}px;
`;

export { StatisticsContainer, Title, StatList, StatItem, StatText };
