import styled from 'styled-components';

const List = styled.ul`
display: flex;
justify-content: center;
align-items: center;
padding:${p => p.theme.space[4]}px;
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


const Item = styled.li`
display: grid;
justify-items: center;
width: 80px;
cursor: pointer;
  &:hover {
  
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
      0px 2px 1px rgb(0 0 0 / 20%);
  }

`;

export {List, Item}