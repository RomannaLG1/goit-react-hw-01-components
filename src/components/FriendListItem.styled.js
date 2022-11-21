import styled from 'styled-components';

const FriendStatus = styled.span`
width: 15px;
height: 15px;
margin-bottom: ${p => p.theme.space[3]}px;
background-color: rgba(200, 70, 190, 0.5);
border-radius: ${p => p.theme.radii.round};
background-color: ${({isOnline}) => isOnline && 'rgba(50, 170, 140, 0.5)'};
`;

const FriendImg = styled.img`
  display: block;
  width: 30px;
  height: 30px;
`;

const FriendText = styled.span`
  font-size: ${p => p.theme.fontSizes[2]}px;
  text-transform: uppercase;
`;



export { FriendStatus, FriendImg, FriendText };
