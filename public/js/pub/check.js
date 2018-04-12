
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
    // 验证密码
    function checkPwd(str){
        // console.log(str);
        // console.log(str.length);
        var re = /^[a-zA-Z_0-9]+$/;//6-16个英文数字或者子母或者_
        if (str.length < 6 || str.length > 16){
            return false;
        }else{
            return re.test(str) ? true : false;
        }  
    }
    // 校验姓名   
    function checkName(str){
        var re = /^[\w\_]{1,12}$/;//12个汉字，大小写英文字母，下划线
        return re.test(str) ? true : false;
    }   
    // 校验身高
    function checkHeight(str){
        var re = /^[0-9.{1,4}$]/
        return re.test(str) ? true : false;//1.85m
    }
     //0-验证邮箱格式 ,1-检查手机号格式,2-刷新验证码,3-检查密码格式,4-检查名字,5-检查身高
    var arrFun = [checkEmail, checkMobile, ChangeCaptcha, checkPwd, checkName,checkHeight];
    return arrFun;
})