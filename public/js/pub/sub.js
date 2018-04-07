requirejs.config({
    path: {
        jquery: '../jquery.min',
        changeCaptcha:'./changeCaptcha.js'
    }
})
define(["jquery","changeCaptcha"], function ($) {
    function Sub(settings){
        this.defaultSettings = {  
            inpSelector: [],//账号输入选择器,密码输入选择器,验证码输入框选择器
            captchaSessionURL: [],// 后端文件接收地址，登录成功后跳转的地址
            subSelector: "",//提交按钮
            errorShow: "",// 验证码错误显示    
            autoload: ""//自动登录选择器    
            // captchaSelector: "",//验证码的选择器
            // askCaptchaURL: "",//验证码生成文件的地址
            // captchaWriperSelector: "",// 存放验证码文件的容器
        }
        $.extend(this.defaultSettings,settings);
    }
    Sub.prototype.submit = function () {
            var that = this.defaultSettings;
            // var changecode1 = new ChangeCaptcha({
            //     captchaSelector: this.defaultSettings.captchaSelector,
            //     askCaptchaURL: this.defaultSettings.captchaSelector,
            //     captchaWriperSelector: this.defaultSettings.captchaSelector
            // });
            $(that.subSelector).on('click', function () {
                var emailAndPhone = $(that.inpSelector[0]).val();
                var pwd = $(that.inpSelector[1]).val();
                var autoload = $(that.autoload).is(":checked");
                // var captcha = unStr($(that.inpSelector[2]).val(), true);
                // var pattern1 = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_]");
                // if (pattern1.test(captcha)){
                //     console.log(1);
                // }else{
                //     console.log(2);
                // }          
                if (judge(that.inpSelector, that.errorShow) == true){
                    return false;
                }else{
                     $.post(that.captchaSessionURL[0],{
                        account: emailAndPhone,
                        pwd: pwd,
                        autoload:autoload
                        // captcha: captcha
                    },function(data){//要求后端返返回的信息来进行判定        
                        var $data = $.trim(data);
                        console.log(data);
                        switch ($data) {
                            // case 'captcha error':
                            //     $(that.errorShow).css({ "color": "red", "display": "block" }).text("验证码错误");
                            //     // changecode1.changeCode();
                            //     break;
                            case 'email or phone not exist':
                                $(that.errorShow).css({ "color": "red", "display": "block" }).text("账号不存在");
                                // changecode1.changeCode();
                                break;
                            case 'success':
                                        
                                    location.href = that.captchaSessionURL[1];//跳转到控制器下的方法（登录主页）                             
                                 break;
                            case 'password error':
                                $(that.errorShow).css({ "color": "red", "display": "block" }).text("密码错误");
                                // changecode1.changeCode();
                                break;
                            default:
                                console.log("callback is "+ data +"  but i don't want it");
                                break;  
                        }
                    },'text')
                }                     
            });
            //针对所有的输入框
            //非空过滤
            function judge(inpSelecotr,errorSelector){
               
                if ($(inpSelecotr[0]).val() == ''){
                    $(errorSelector).css({ "color": "red", "display": "block" }).text("账号不能为空");
                    return true;
                } else if ($(inpSelecotr[1]).val() == ''){
                    $(errorSelector).css({ "color": "red", "display": "block" }).text("密码不能为空");
                    return true;
                } else if ($(inpSelecotr[2]).val() == ''){
                    $(errorSelector).css({ "color": "red", "display": "block" }).text("验证码不能为空");
                    return true;
                }else{
                    return false;
                }
            }
            
            // 非法过滤 `~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？
            // function unStr(str,tf){//true,完全过滤，包括@，false，不完全过滤，不包括@，针对邮箱登陆
            //     var pattern1 = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_]");   
            //     var pattern2 = new RegExp("[`~!#$^&*()=|{}':;',\\[\\]<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_]");  //不包括.@
            //         if(tf == true){
            //             return str.replace(pattern1, "");  
            //         }  else{
            //             return str.replace(pattern2, "");
            //         }                                          
            //     }
    }
    return Sub;
})

 
