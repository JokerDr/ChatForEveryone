requirejs.config({
    paths: {
        jquery: '../jquery.min'
    }
}); 
//调用兼容placeholder模块
require(["jquery","../pub/placeholder"], function ($) {   
});
//禁止选中文字 IE6-9
require([""], function () {
    document.body.onselectstart = document.body.ondrag = function () {
        returnfalse;
    }
});
//校检账号
require(["jquery", "inputJudge"], function ($, InputJudge){
    var settings1 = {
        accountIdSelector: "txtLoginEMail",
        pwdIdSelector: "txtLoginPwd",
        showErrorSelector:"txtLoginEMail_e"
    };
    var inputJudge1 = new InputJudge(settings1);
    inputJudge1.init();
})
//更换/校检验证码
require(["jquery", "../pub/changeCaptcha"], function ($, ChangeCaptcha){
    var settings1 = {
        captchaSelector: "#captcha",//验证码的id
        askCaptchaURL: "change_code",//验证码生成文件的地址  写，引入该js的页面的所属控制器下的方法
        captchaWriperSelector: ".showCaptcha",// 存放验证码文件的容器
        inpSelector: ".inpCap",//验证码输入框选择器
        captchaSessionURL: "getimgsession",// 验证码session地址
        subSelector: ".btn"//提交按钮
    }
    var ChangeCaptcha1 = new ChangeCaptcha(settings1);
    ChangeCaptcha1.changeCode();
    ChangeCaptcha1.checkCaptcha();
    

})

