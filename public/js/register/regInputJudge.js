requirejs.config({
    path: {
        jquery: '../jquery.min',
        check: '../pub/check'
    }
})

define(['jquery', 'check'], function ($, arrFun) {
    function checkInp(settings){
        this.defaultSettings={
            selectors: [],//账号，验证码，密码，确认密码，昵称的input选择器
            regWaySelector: [],//手机注册/邮箱注册选择器radio/checkbox
            errorShow: [],//报错文字信息的选择器.账号，验证码
            errorPic: [],
            accept:[],
            captchaAndRefresh: [],//验证码图片的选择器，刷新按钮的选择器
        }
        $.extend(this.defaultSettings,settings);
    }
    
    //检查账号
    var test = [];
    checkInp.prototype.checkAccount=function () {
        var that = this.defaultSettings;
        var flag;
        $(that.selectors[0]).focus(function(){//得到焦点
            if ($(that.regWaySelector[0]).is(':checked')) {
                 if ($(that.selectors[0]).val() == "") {//如果账号为空    
                     $(that.errorShow[0]).css('display', 'inline-block').text('请填写常用手机号码');
                 }
            }else{
                if ($(that.selectors[0]).val() == "") {//如果账号为空    
                     $(that.errorShow[0]).css('display', 'inline-block').text('请填写常用邮箱号码');
                 }
            }
        }).keyup(function (event) {//每一步输入都要进行判定
            if ($(that.regWaySelector[0]).is(':checked')) {//手机注册的情况下  
                    if ($(that.selectors[0]).val() == "") {//如果账号为空    
                        $(that.errorShow[0]).css('display', 'inline-block').text('账号不能为空');
                    }else if (arrFun[1]($(that.selectors[0]).val()) == false) {//如果手机号格式错误
                        $(that.errorPic[0]).css('display', 'inline-block');                   
                        $(that.errorShow[0]).css('display', 'inline-block').text('手机格式错误，重新填写');
                        flag = false;
                    }else{
                        $(that.errorPic[0]).css({ 'display': 'inline-block', 'background-position': '-21px -46px'});
                        $(that.errorShow[0]).css('display', 'none')
                        flag = true;
                }           
            } else {//使用邮箱注册
                if ($(that.selectors[0]).val() == "") {//如果账号为空    
                    $(that.errorShow[0]).css('display', 'inline-block').text('账号不能为空');
                } else if (arrFun[0]($(that.selectors[0]).val()) == false) {//如果邮箱格式错误
                    $(that.errorPic[0]).css('display', 'inline-block');    
                    $(that.errorShow[0]).css('display', 'inline-block').text('邮箱格式错误，重新填写');
                    flag = false;
                } else {
                    $(that.errorPic[0]).css({ 'display': 'inline-block', 'background-position': '-21px -46px' });
                    $(that.errorShow[0]).css('display', 'none')
                    flag = true;
                }
            }
        }).blur(function(){//失焦后
            // $(that.errorShow[0]).css('display', 'none');
            if ($(that.selectors[0]).val() !== ""){
                if (flag == true){
                    $.get(that.accept[0],{
                        account: $(that.selectors[0]).val()
                        },function(data){//与后端约定
                            var $data = $.trim(data);
                            switch ($data) {
                                case 'account already exist': //存在此账号
                                     test[0] = false;
                                    $(that.errorPic[0]).css('background-position', '-39px -46px');
                                    if ($(that.regWaySelector[0]).is(':checked')) {
                                         $(that.errorShow[0]).css('display', 'inline-block').text('此手机号已被使用,请点击右上角登录');
                                    } else{
                                        $(that.errorShow[0]).css('display', 'inline-block').text('此邮箱号已被使用,请点击右上角登录');
                                    }                 
                                    break;
                                default://数据库不存在此账号，即可用
                                    test[0] = true;
                                    if ($(that.regWaySelector[0]).is(':checked')) {
                                        $(that.errorShow[0]).css('display', 'inline-block').text('此手机号可使用');
                                    } else {
                                        $(that.errorShow[0]).css('display', 'inline-block').text('此邮箱可使用');
                                    }  
                                    break;
                            }
                            // console.log(test);
                            },'text');
                    // $(that.errorShow[1]+that.errorShow[0]).css({ 'display': 'block', 'background': 'url("../image/icon.gif") -21px -46px'});
                }                     
            }else{
                $(that.errorPic[0]).css('display', 'none');  
                $(that.errorShow[0]).css('display', 'none');
            }
        });      
    }
    // 检查验证码
    checkInp.prototype.checkCaptcha=function(){
        var that = this.defaultSettings;
        
        //点击刷新按钮验证码刷新
        $(that.captchaAndRefresh[1]).on('click', function () {
            arrFun[2](that.accept[1], that.captchaAndRefresh[2]);
        })
        // 验证码输入框失去焦点后
        $(that.selectors[1]).blur(function(){
              if($(that.selectors[1]).val()==""){
                 $(that.errorShow[1]).css('display','none')
              }else{
                $.get(that.accept[2],{
                            captchaVal: $(that.selectors[1]).val()
                        },function(data){
                            var $data = $.trim(data);
                            if($data=='right'){//如果校验正确
                                $(that.errorShow[1]).css('display', 'none');
                                test[1] = true;
                            }else{
                                $(that.errorShow[1]).css('display', 'inline-block');
                                test[1] = false;
                            }
                        },'text')
                 }
        })    
    }
    //密码验证
    checkInp.prototype.checkPwdConfirm=function(){
       var that = this.defaultSettings;
       var pwd =  $(that.selectors[2]).val();
       var pwdConfirm = $(that.selectors[3]).val();
       //console.log(11);
       $(that.selectors[2]).focus(function(){
           $(that.errorShow[2]).css('display','inline-block').text('6-16位英文字母或者数字');
        }).blur(function(){
            $(that.errorShow[2]).css('display', 'inline-block').text('格式不正确');
       }          
        )
    }
    return checkInp;
})