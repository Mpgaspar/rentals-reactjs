import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppDesktop from './desktop/App';
import 'leaflet/dist/leaflet.css';

const root = document.getElementById('root');
const rootMobile = document.getElementById('root-mobile');
const cssFrame = document.getElementById('css-frame');

window.onload = function getDevice() {
  if(window.innerWidth < 800) {
    ReactDOM.render(<App />, rootMobile);
  } else {
    cssFrame.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'
    ReactDOM.render(<AppDesktop />, root);
  }
  console.log(window.innerWidth);
}
