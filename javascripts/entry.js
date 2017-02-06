require('../less/main.less');

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

import Routes from '../UI/routes'

ReactDOM.render(<Routes />, document.getElementById('content'));
