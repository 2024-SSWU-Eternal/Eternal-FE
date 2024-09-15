import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../src/assets/sass/section/Transiton.scss'

interface RouteTransitionProps {
  location: {
    pathname: string;
  };
  children: React.ReactNode;
}

const RouteTransition = ({ location, children }: RouteTransitionProps) => {
  const pathname = location.pathname;

  return (
    <TransitionGroup className={'transition-wrapper'}>
      <CSSTransition
        key={pathname}
        timeout={400}
        classNames={'navigate-push'}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default RouteTransition;
