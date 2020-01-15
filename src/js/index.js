const jQuery = require('jquery');

const { initMenu } = require('./menu');
const { initMaket } = require('./maket');
const { initList } = require('./list');

window.$ = window.jQuery = jQuery;


initMenu();
initMaket();
initList();