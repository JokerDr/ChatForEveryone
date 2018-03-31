

requirejs.config({
    paths: {
        jquery: '../jquery.min'
    }
}); 
//调用兼容placeholder模块
require(["placeholder"], function ($) {   
});

//禁止选中文字 IE6-9
require([""], function () {
    document.body.onselectstart = document.body.ondrag = function () {
        returnfalse;
    }
});


