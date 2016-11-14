import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* Configure firebase when page first loads */
import firebase from 'firebase';

//load CSS
import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css';

var config = {
    apiKey: "AIzaSyDelgo7NswHus5zEpA3AvRhnlmrPZh1QzM",
    authDomain: "chirper-oflann.firebaseapp.com",
    databaseURL: "https://chirper-oflann.firebaseio.com",
    storageBucket: "chirper-oflann.appspot.com",
    messagingSenderId: "287107293902"
  };
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

//extraneous method call to produce error for non-configured app
firebase.auth(); 