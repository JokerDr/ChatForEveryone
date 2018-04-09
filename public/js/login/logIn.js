requirejs.config({
    paths: {
        jquery: '../jquery.min',
        placeholder: '../pub/placeholder',
        changeCaptcha: '../pub/changeCaptcha',
        sub: '../login/sub',
        inputJudge: '../login/inputJudge',
        check: '../pub/check'
    }
}); 
//调用兼容placeholder模块
require(["jquery","placeholder"], function ($) {   
});
//禁止选中文字 IE6-9
require([""], function () {
    document.body.onselectstart = document.body.ondrag = function () {
        return false;
    }
});
//更换/校检验证码
require(["jquery", "changeCaptcha"], function ($, ChangeCaptcha){
    var settings1 = {
        captchaSelector: "#captcha",//验证码的id
        askCaptchaURL: "change_code",//验证码生成文件的地址  写，引入该js的页面的所属控制器下的方法
        captchaWriperSelector: ".showCaptcha",// 存放验证码文件的容器
    }
    var ChangeCaptcha1 = new ChangeCaptcha(settings1);
    ChangeCaptcha1.changeCode();    

})
// 提交以及校检
require(["jquery", "sub","check"], function ($, Sub) {
    var settings1 = {
        inpSelector: ["#txtLoginEMail", "#txtLoginPwd",".inpCap"],//账号输入选择器,密码输入选择器,验证码输入框选择器
        captchaSessionURL: ["check_login", "Welcome/index_logined"],// 后端文件接收地址，登录成功后跳转的地址
        subSelector: ".btn",//提交按钮
        errorShow: "#txtLoginEMail_e",// 验证码错误显示
        autoload:"#chkRememberMe"//自动登录选择器
        // captchaSelector: "#captcha",//验证码的id
        // askCaptchaURL: "change_code",//验证码生成文件的地址  写，引入该js的页面的所属控制器下的方法
        // captchaWriperSelector: ".showCaptcha",// 存放验证码文件的容器
    }
    var sub1 = new Sub(settings1);
    sub1.submit();
})
// 校检账号
require(["jquery", "inputJudge","check"], function ($, InputJudge){
    var settings1 = {
        accountIdSelector: "txtLoginEMail",
        pwdIdSelector: "txtLoginPwd",
        showErrorSelector:"txtLoginEMail_e"
    };
    var inputJudge1 = new InputJudge(settings1);
    inputJudge1.init();
})
