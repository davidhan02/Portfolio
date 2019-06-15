import styled from 'styled-components/macro';
import Button from './Button';

const OAuthButton = styled(Button)`
  width: 100%;
  text-align: center;
  padding: 12px 30px;
  margin-bottom: 20px;

  background-color: transparent;
  color: ${props => props.theme.mutedText};
  border: 1px solid ${props => props.theme.mutedText};

  :hover {
    border: 1px solid ${props => props.theme.accent};
  }
`;

export default OAuthButton;
