import AppContainer     from './containers/AppContainer';
import React            from 'react';
import ReactDOM         from 'react-dom';
import './style.css'

ReactDOM.render(
  <AppContainer />,
  document.getElementById('todo') || document.createElement('div')
);
