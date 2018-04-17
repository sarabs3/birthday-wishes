import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const random = () => Math.floor(Math.random() * 10);

ReactDOM.render(<App number={random()} />, document.getElementById('root'));
