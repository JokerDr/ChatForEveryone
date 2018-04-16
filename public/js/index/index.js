requirejs.config({
    paths: {
        jquery: '../jquery.min',
        dataShow:'./pubu/dataShow',
        sub:'../login/sub',
        check:'../pub/check'
        // placeholder: '../pub/placeholder',
        // sub: '../login/sub',
        // inputJudge: '../login/inputJudge',
        // check: '../pub/check'
    }
}); 
//个人相册
require(["jquery", "carousel"], function ($, Carousel) {
    var settings1 = {
        selector: ".my-photo",
        imgArr: ["public/image/carousel/1.jpg", "public/image/carousel/2.jpg", 'public/image/carousel/3.jpg','public/image/carousel/4.jpg'],
        speed: 2000,
        btnStyle: "circle",
        arrowPos: "center"
    };
    var carousel1 = new Carousel(settings1);
    carousel1.init();
});
// 
require(['jquery', 'dataShow'], function ($, ShowMessage){
    var settings1 = {
        wriper:'#pubuliu',
        len: '12',
        url: 'welcome/find12'
    }
    var showMessage1 = new ShowMessage(settings1);
    showMessage1.init();
})
// 首页登录
require(["jquery", "sub"], function ($, Sub) {
    var settings1 = {
        inpSelector: ["#txtLoginEMail", "#txtLoginPwd", ".inpCap"],//账号输入选择器,密码输入选择器,验证码输入框选择器
        captchaSessionURL: ["user/check_login", "welcome/index_logined"],// 后端文件接收地址，登录成功后跳转的地址
        subSelector: ".btn",//提交按钮
        errorShow: "#txtLoginEMail_e",// 验证码错误显示
        autoload: "#chkRememberMe",//自动登录选择器
        // captchaSelector: "#captcha",//验证码的id
        // askCaptchaURL: "change_code",//验证码生成文件的地址  写，引入该js的页面的所属控制器下的方法
        // captchaWriperSelector: ".showCaptcha",// 存放验证码文件的容器
    }
    var sub1 = new Sub(settings1);
    sub1.submit();
})
require(["jquery"], function ($) {
    
    $('.setting').mouseenter(function(){
        $('.select').show();
    }).mouseleave(function(){
        $('.select').hide();
    });
    
})