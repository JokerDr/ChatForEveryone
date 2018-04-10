
define(function(){
//针对账号
// 验证邮箱格式   
    function checkEmail(str) {
    var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
    return re.test(str) ? true : false;
}
//check手机号格式
    function checkMobile(str) {
    var re = /^1\d{10}$/;
    return re.test(str) ? true : false;
}   
    //刷新验证码
    // refreshSelector: "",//验证码的选择       askCaptchaURL:"",//验证码生成文件的地址  captchaWriperSelector:"",// 存放验证码文件的容器
    function ChangeCaptcha(askCaptchaURL, captchaWriperSelector) {
            $.get(askCaptchaURL, {}, function (data) {
                $(captchaWriperSelector).html(data);
            }, 'text');
    }
    var arrFun = [checkEmail, checkMobile, ChangeCaptcha];//0-验证邮箱格式 ,1-检查手机号格式,2-刷新验证码
    return arrFun;
})