requirejs.config({
    path: {
        jquery: '../jquery.min',
        check: '../pub/check'
    }
})

define(['jquery','check'], function ($,arrFun) {
    function checkInp(settings){
        this.defaultSettings={
            selectors: [],//账号，验证码，密码，确认密码，昵称的选择器
            regWaySelector: [],//手机注册/邮箱注册选择器radio/checkbox
            errorShow:[],
            accept:''
        }
        $.extend(this.defaultSettings,settings);
    }
    //检查账号
    checkInp.prototype.checkAccount=function () {
        var that = this.defaultSettings;
        var flag;
        $(that.selectors[0]).focus(function(){//得到焦点
            if ($(that.selectors[0]).val() == "") {//如果账号为空                       
                 $(that.errorShow[1]).css('display', 'inline-block').text('请填写常用手机号码');
            }
        }).keyup(function (event) {//每一步输入都要进行判定
            if ($(that.regWaySelector[0]).is(':checked')) {//手机注册的情况下             
                    if (arrFun[1]($(that.selectors[0]).val()) == false) {//如果手机号格式错误
                     // $(that.errorShow[1]+that.errorShow[0]).css({ 'display': 'block', 'background': 'url("../image/icon.gif") -21px -46px'});
                        $(that.errorShow[1]).css('display', 'inline-block').text('手机格式错误，重新填写');
                        flag = false;
                    }else{
                    // $(that.errorShow[1]+that.errorShow[0]).css({ 'display': 'block', 'background': 'url("../image/icon.gif") -21px -46px'});
                        flag = true;
                }           
            } else {//使用邮箱注册
                if (arrFun[0]($(that.selectors[0]).val()) == false) {//如果邮箱格式错误
                    // $(that.errorShow[1]+that.errorShow[0]).css({ 'display': 'block', 'background': 'url("../image/icon.gif") -21px -46px'});
                    $(that.errorShow[1]).css('display', 'inline-block').text('邮箱格式错误，重新填写');
                    flag = false;
                } else {
                    // $(that.errorShow[1]+that.errorShow[0]).css({ 'display': 'block', 'background': 'url("../image/icon.gif") -21px -46px'});
                    flag = true;
                }
            }
        }).blur(function(){//失焦后
            if ($(that.selectors[0]).val() !== ""){
                if (flag == true){
                    $.get(that.accept,{
                        account: $(that.selectors[0]).val()
                        },function(data){//与后端约定
                            var $data = $.trim(data);
                            switch ($data) {
                                case 'account already exist': //存在此账号
                                    $(that.errorShow[1]).css('display', 'inline-block').text('此手机号已被使用,请点击右上角登录');
                                    break;
                                default://不存在此账号
                                    $(that.errorShow[1]).css('display', 'inline-block').text('此手机号可使用');
                                    break;
                            }
                            },'text');
                    // $(that.errorShow[1]+that.errorShow[0]).css({ 'display': 'block', 'background': 'url("../image/icon.gif") -21px -46px'});
                }                     
            }
        });      
    }
    return checkInp;
})