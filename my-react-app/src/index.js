import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Hi(){
  return<div className='blue'>Hello World!</div>;
}

//coded by @laila-afzaal on github

ReactDOM.render(<Hi/>, document.querySelector('#root'));
