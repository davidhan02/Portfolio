import styled from 'styled-components/macro';
import Button from './Button';

const OutlineButton = styled(Button)`
  width: 100%;
  text-align: center;
  padding: 10px 20px;

  background-color: transparent;
  color: ${props => props.theme.mutedText};
  border: 1px solid ${props => props.theme.mutedText};

  :hover {
    border: 1px solid ${props => props.theme.accent};
  }
`;

export default OutlineButton;
