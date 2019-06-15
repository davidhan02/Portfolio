import styled from 'styled-components/macro';

const SelectWrapper = styled.div`
  position: relative;
  ${props => props.flex && 'flex: 1'};

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: 8px;
    height: 8px;
    pointer-events: none;
    border-right: 2px solid ${props => props.theme.accent};
    border-bottom: 2px solid ${props => props.theme.accent};
    transform: translate(-150%, calc(-50% - 2px)) rotate(45deg);
  }
`;

export default SelectWrapper;
