import styled from 'styled-components';

const ProfileCard = styled.div`
  padding: ${p => p.theme.space[4]}px;
  width: 250px;

  text-align: center;
  border-radius: ${p => p.theme.radii.normal};
  background: ${p => p.theme.colors.primary};
  background: linear-gradient(
    90deg,
    rgba(229, 190, 255, 1) 0%,
    rgba(255, 197, 197, 1) 50%,
    rgba(255, 206, 138, 1) 100%
  );
  transition: 250ms linear;
  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
      0px 2px 1px rgb(0 0 0 / 20%);
  }
`;

const Description = styled.div`
 
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

const Image = styled.img`
  width: 250px;
  margin-bottom: ${p => p.theme.space[3]}px;
  object-fit: cover;
  border-radius: ${p => p.theme.radii.round};
  background-color: rgba(255, 197, 197, 1);
`;

const Name = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
  text-transform: uppercase;
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes[4]}px;
`;

const DescriptionText = styled.p`
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

const StatList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(3, 80px);
  gap: ${p => p.theme.space[3]}px;
  justify-content: center;
  align-items: center;
`;

const StatItem = styled.li`
  display: grid;
  justify-items: center;
  align-items: center;
  border-radius: ${p => p.theme.radii.normal};
  &:hover {
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
      0px 2px 1px rgb(0 0 0 / 20%);
  }
`;

const StatText = styled.span`
font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.heading};
`
export {
  ProfileCard,
  Description,
  Image,
  Name,
  DescriptionText,
  StatList,
  StatItem,
  StatText
};
