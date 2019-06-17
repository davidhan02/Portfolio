import React from 'react';
import { ErrorWrapper, ErrorDisplayMessage } from './style';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const className = 'message';

const ErrorDisplay = ({ error }) => {
  return (
    <TransitionGroup component={null}>
      {error && (
        <CSSTransition classNames={className} timeout={300}>
          <ErrorWrapper>
            <ErrorDisplayMessage>{error.message || error}</ErrorDisplayMessage>
          </ErrorWrapper>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

export default ErrorDisplay;
