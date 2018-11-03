import { Platform } from 'react-native';
import styled from 'styled-components';

const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${Platform.OS === 'ios' ? 45 : 25};
  border-bottom-width: 2px;
  border-bottom-color: grey;
`;

export default Header;
