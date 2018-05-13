'use strict';
require('./index.css');

var _mm     = require('util/mm.js');
// 通用页面头部
var header = {
    init : function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad : function(){
        var keyword = _mm.getUrlParam('keyword');
        // keyword存在，则回填输入框
        if(keyword){
            $('#search-input').val(keyword);
        };
    },
    bindEvent : function(){
        var _this = this;
        // 点击搜索按钮以后，做搜索提交
        $('#search-btn').click(function(){
            _this.searchSubmit();
        });
        // 输入会车后，做搜索提交
        $('#search-input').keyup(function(e){
            // 13是回车键的keyCode
            if(e.keyCode === 13){
                _this.searchSubmit();
            }
        });
    },
    // 搜索的提交
    searchSubmit : function(){
        var keyword = $.trim($('#search-input').val());
        // 如果提交的时候有keyword,正常跳转到list页
        if(keyword){
            window.location.href = './list.html?keyword=' + keyword;
        }
        // 如果keyword为空，直接返回首页
        else{
            _mm.goHome();
        }
    }
};
header.init();

$('.search-car').on('mouseover',function(){
    $('.car-shopping').css({"display":"block","box-shadow":"2px 2px 5px #ddd"});
    $('.search-car').css({"background":"#fff","box-shadow":"2px 2px 5px #ddd"});
}).on('mouseout',function(){
    $('.search-car').css({"background":"#f9f9f9","box-shadow":"none"});
    $('.car-shopping').css('display','none');
});
$('.car-shopping').on('mouseover',function (){
    $('.car-shopping').css({"display":"block","box-shadow":"2px 2px 5px #ddd"});
    $('.search-car').css({"background":"#fff","box-shadow":"2px 2px 5px #ddd"});
}).on('mouseout',function(){
    $('.search-car').css({"background":"#f9f9f9","box-shadow":"none"});
    $('.car-shopping').css('display','none');
});