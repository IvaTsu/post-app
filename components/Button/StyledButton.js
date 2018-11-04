import styled from 'styled-components';

const Text = styled.Text`
  color: ${props => (props.isActive ? props.theme.active_green : props.theme.light_grey)};
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
`;

export default Text;
