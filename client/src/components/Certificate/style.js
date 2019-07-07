import styled from 'styled-components/macro';
import { AuthLink } from '../shared/AuthLink';

export const CertLink = styled(AuthLink)`
  color: ${props => props.theme.mutedText};
`;
