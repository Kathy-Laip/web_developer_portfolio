import React from 'react';
import ReactDOM from 'react-dom/client';
import Community from './components/Community';
import Companies from './components/Companies';
import Header from './components/Header';
import Main from './components/Main'
import Sites from './components/Sites';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header/>
    <Main/>
    {/* <Companies/>
    <Sites/>
    <Community/> */}
  </>
);
