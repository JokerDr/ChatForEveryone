requirejs.config({
    paths: {
        jquery: '../jquery.min',
        dispicker:'../pub/distpicker',
        dispickerData:'../pub/distpicker.data',
        regWay:'./regWay',
        birSelect:'../pub/birSelect',
        regInputJudge:'./regInputJudge',
        check: '../pub/check',
    }
    
}); 
//载入地区插件,生日插件
require(['jquery', 'dispicker', 'dispickerData','birSelect'],function($){
    $("#date").selectDate()
    $("#days").focusout(function () {
        var year = $("#year option:selected").html()
        var month = $("#month option:selected").html()
        var day = $("#days option:selected").html()
        // console.log(year + month + day)
    })
});
// 选择方式切换
require(['jquery', 'regWay'], function ($, ChangeWay) {
    var settings1 = {
        regWaySelector: ['.phone','.email'],//手机注册/邮箱注册选择器radio/checkbox
        clickArea: ['#phoneReg','#emailReg'],//单击区域，
        phoneInp: '#phoneInp'//邮箱注册时显示手机号的输框
    } 
    var ChangeWay1 = new ChangeWay(settings1);
    ChangeWay1.change();
});
// 页面特效
require(['jquery', ''], function ($ ) {
    var settings1 = {
        changeSex: [] //changesex
    }
  
});
// 单击刷新验证码
require(['jquery', ''], function ($ ) {
    var settings1 = {
        changeSex: [] //changesex
    }
 
});
// 提交数据
require(['jquery', ''], function ($ ) {
    var settings1 = {
        changeSex: [] //changesex
    }

});
// 数据校验
require(['jquery', 'regInputJudge'], function ($, checkInp) {
    var settings1 = {
        selectors: ['.account', '.captcha', '.pwd', '.pwdConfirm', '.uname','.uheight'],//账号，验证码，密码，确认密码，昵称，身高
        regWaySelector: ['.phone', '.email'],//手机注册/邮箱注册选择器radio/checkbox
        errorShow: ['#account_msg', '#captcha_msg', '#pwd_msg','#pwdConfirm_msg'],//报错文字信息的选择器.账号，验证码
        errorPic: ['.error1','.error2','.error3','.error4'],
        accept: ['searchAccount', 'change_code', 'checkCaptcha'],//php
        captchaAndRefresh: ['#captcha', '.refresh','.showCaptcha']//验证码图片id，刷新按钮id,存放验证码的容器
    }
    var checkInp1 = new checkInp(settings1);
    checkInp1.checkAccount();
    checkInp1.checkCaptcha();
    checkInp1.checkPwdConfirm();
});