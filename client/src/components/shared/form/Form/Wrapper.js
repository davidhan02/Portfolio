import styled from 'styled-components/macro';

const FormWrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 auto;

  padding: 24px;
  border-radius: 2px;

  border: 1px solid ${props => props.theme.border};
  background-color: ${props => props.theme.foreground};
  max-width: ${props => (props.wide ? '600px' : '375px')};

  @media (max-width: 768px) {
    padding: 16px;
  }
  @media (max-width: ${props => (props.wide ? '600px' : '375px')}) {
    border-radius: 0;
    border-left: none;
    border-right: none;
  }
`;

export default FormWrapper;
