import React, { useState } from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { Scroller } from 'react-scroll';

const FloatingActionButton = () => {
  const [isFloating, setIsFloating] = useState(true);

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <MyFloatingActionButton />
        </Toolbar>
      </AppBar>
      <Scroller
        ignore={() => isFloating}
        scrollTo={() => setIsFloating(!isFloating)}
      >
        {children}
      </Scroller>
    </div>
  );
};

const MyFloatingActionButton = ({ children }) => {
  return (
    <button
      type="button"
      className="mui-floating-action-button mui-material-button mui-button--raised mui-button--primary"
    >
      <i className="material-icons">add</i>
    </button>
  );
};

export default FloatingActionButton;
