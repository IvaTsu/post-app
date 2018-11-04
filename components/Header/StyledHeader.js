import { Platform } from 'react-native';
import styled from 'styled-components';

const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => props.theme.top_background}
  padding-top: ${Platform.OS === 'ios' ? 45 : 25};
  padding-left: 15;
  padding-right: 15;
  padding-bottom: 8;
  border-bottom-width: 2;
  border-bottom-color: grey;
`;

export default Header;
