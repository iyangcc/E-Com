//通用工具封装
'use strict';

var Hogan = require('hogan.js');
var conf = {
    serverHost : ''
};
var _mm = {
    //网络请求
    request : function (param) {
        var _this = this;
        $.ajax({
            type : param.method || 'get',
            url : param.url || '',
            dataType : param.type || 'json',
            data : param.data || '',
            success : function(res){
                //请求成功
                if(0 === res.status){
                    typeof param.success === 'function' && param.success(res.data,res.msg);
                }
                //请求数据错误
                else if(1 === res.status){
                    typeof param.error === 'function' && param.error(res.msg);
                }
                //没有登录状态，需要强制登录
                else if(10 === res.status){
                    _this.doLogin();
                }
            },
            error : function(err){
                typeof param.error === 'function' && param.error(err.statusText);
            }
        });
    },
    //统一登录处理
    doLogin : function(){
        //encodeURIComponent编码隐藏敏感信息
        window.location.href = './user-login.html?redirect=' + encodeURIComponent(window.location.href);
    },
    //返回主页处理
    goHome : function(){
        window.location.href = './index.html';
    },
    //获取服务器地址
    getServerUrl : function (path) {
        return conf.serverHost + path;
    },
    //获取URL参数
    getUrlParam : function (name) {
        var reg = new RegExp('(^|&)'+name+'=([^&]*)(&|$)');
        var result = window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    },
    //渲染HTML模板 htmlTemplate渲染所需模板 data渲染所需数据
    renderHtml : function (htmlTemplate,data) {
            //编译
        var template = Hogan.compile(htmlTemplate);
            //渲染
        var result = template.render(data);
        return result;
    },
    //成功提示
    successTips : function (msg) {
        alert(msg || '操作成功！');
    },
    //错误提示
    errorTips : function (msg) {
        alert(msg || '似乎出现了点错误...');
    },
    //字段的验证，支持是否为空、手机、邮箱
    validate : function (value,type) {
        var value = $.trim(value);
        // 非空验证
        if('require' === type){
            return !!value;
        }
        // 手机号验证
        if('phone' === type){
            return /^1\d{10}$/.test(value);
        }
        // 邮箱格式验证
        if('email' === type){
            return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
        }
    }
};

module.exports = _mm;