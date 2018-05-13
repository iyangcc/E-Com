'use strict';

require('./index.css');

$('.fl').on('mouseover',function(){
    $('.nav-send').css('background','#fff');
}).on('mouseout',function(){
    $('.nav-send').css('background','#eee');
});;