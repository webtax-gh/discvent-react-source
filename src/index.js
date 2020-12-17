import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Discvent from './Discvent';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
  shadows: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  palette: {
    type: 'dark',
    primary: {
      main: '#00b0ff',
    },
    secondary: {
      main: '#3f51b5',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <Discvent />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
