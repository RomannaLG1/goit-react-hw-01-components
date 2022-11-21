import styled from 'styled-components';

const Table = styled.table`
  padding: ${p => p.theme.space[2]}px;
  width: 400px;

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

const Thead = styled.thead`
  background: rgba(190, 160, 250, 1);
    background: linear-gradient(
    90deg,
    rgba(200, 160, 200, 1) 0%,
    rgba(240, 157, 164, 1) 50%,
    rgba(250, 219, 150, 1) 100%)
`;

const Tr = styled.tr`
  border: 1px solid rgba(260, 260, 260, 1);
  border-radius: 8px;
  transition: 250ms linear;
  &:nth-child(even) {
    background: rgba(190, 160, 250, 1);
    background: linear-gradient(
    90deg,
    rgba(200, 160, 200, 1) 0%,
    rgba(240, 157, 164, 1) 50%,
    rgba(250, 219, 150, 1) 100%
  );
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0px 3px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
      0px 2px 1px rgb(0 0 0 / 20%);
  }
`;

const Th = styled.th`
  vertical-align: middle;
  padding: ${p => p.theme.space[2]}px;
`;

const Tbody = styled.tbody``;
const Td = styled.td``;

export { Table, Thead, Tr, Th, Tbody, Td };
