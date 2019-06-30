import styled from 'styled-components/macro';

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 24px;
  ${props => props.search && 'margin-bottom: 0; display: flex; align-items: center'};
`;

export default InputWrapper;
