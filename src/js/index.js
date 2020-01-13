const jQuery = require('jquery');

const { initMenu } = require('./menu');

window.$ = window.jQuery = jQuery;

initMenu();