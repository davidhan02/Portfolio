import React from 'react';
import styled from 'styled-components/macro';
import LoadingSpinner from './Spinner';

const LoadingBox = styled.div`
  width: 72px;
  height: 72px;
  position: relative;
  margin: 48px auto 0;
  border-radius: 2px;
  border: 1px solid ${props => props.theme.border};
  background-color: ${props => props.theme.foreground};
`;

const Loading = () => (
  <LoadingBox>
    <LoadingSpinner />
  </LoadingBox>
);

export default Loading;
