import React from 'react';
import ReactDOM from 'react-dom/client';
import Companies from './components/Companies';
import Header from './components/Header';
import Main from './components/Main'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header/>
    <Main/>
    <Companies/>
  </>
);
