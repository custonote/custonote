import React from 'react';
import ReactDOM from 'react-dom';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);

//uikit css is included in index.scss
import './scss/index.scss';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('app'));
