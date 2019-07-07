import styled from 'styled-components/macro';
import Label from '../../shared/form/Label';
import { AuthLink } from '../../shared/AuthLink';

export const LabelWrapper = styled(Label)`
  font-size: 16px;
  &:not(:first-child) {
    margin-top: 8px;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const LabelLink = styled(AuthLink)`
  margin-left: 10px;
`;
