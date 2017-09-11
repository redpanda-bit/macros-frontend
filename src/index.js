import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-react'


// const Clarifai = require('clarifai')

// const app = new Clarifai.App({

// })


ReactDOM.render(<Router><App/></Router>, document.getElementById('root'));
registerServiceWorker();