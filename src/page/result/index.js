'use strict';

require('./index.css');
require('page/common/nav-simple/index.js');
require('page/common/footer-simple/index.js');
var _mm = require('util/mm.js');

$(function () {
    var type = _mm.getUrlParam('type') || 'default',
    $element = $('.'+ type +'-success');
    $element.show();
});