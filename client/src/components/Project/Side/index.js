import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;

  flex-basis: 240px;
  margin-left: 14px;

  border-radius: 4px;
  border: 1px solid ${props => props.theme.border};
  background-color: ${props => props.theme.foreground};

  @media (max-width: 768px) {
    display: none;
  }
`;

const ProjectSide = () => (
  <Wrapper>
    Categories: <br />a catregory jkl
  </Wrapper>
);

export default ProjectSide;
