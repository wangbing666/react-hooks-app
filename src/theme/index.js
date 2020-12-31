import React from 'react';
const ThemeContext = React.createContext();

const lightTheme = {
  black: '#000000',
  fontWeight: '800',
  white: '#ffffff',
  transparent: 'transparent',
  backgroundColor: '#F7F6F4',
};

export { ThemeContext, lightTheme };
