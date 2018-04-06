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
                var captcha = $(that.inpSelector[2]).val();
                console.log(captcha);
                if(judge() == true){
                    return false;
                }else{
                    $.post(that.captchaSessionURL[0], {
                        account: emailAndPhone,
                        pwd: pwd,
                        captcha: captcha
                    },function(data){//要求后端返返回的信息来进行判定        
                        var $data = $.trim(data);//去掉回车空格
                        function action(da){
                             switch (da) {
                            case 'captcha error':
                                $(that.errorShow).css({ "color": "red", "display": "block" }).text("验证码错误");
                                // changecode1.changeCode();
                                break;
                            case 'email or phone not exist':
                                $(that.errorShow).css({ "color": "red", "display": "block" }).text("账号不存在");
                                // changecode1.changeCode();
                                break;
                            case 'success':
                                location.href = that.captchaSessionURL[1]//跳转到控制器下的方法（登录主页）
                                 break;
                            case 'password error':
                                $(that.errorShow).css({ "color": "red", "display": "block" }).text("密码错误");
                                // changecode1.changeCode();
                                break;
                            default:
                                console.log("callback is "+ data +"  but i don't want it");
                                break;  
                        }
                        }
                        if($data.test(/first/)){
                            var data1 = $data.slice(0, 5);
                            action($data1);
                        }else{
                            action($data);
                        }
                        
                    },'text')
                }                     
            });
            //判断账号是否为空
            function judge(){  
                if ($(that.inpSelector[0]).val() == ''){
                    $(that.errorShow).css({ "color": "red", "display": "block" }).text("账号不能为空");
                    return true;
                } else if ($(that.inpSelector[1]).val() == ''){
                    $(that.errorShow).css({ "color": "red", "display": "block" }).text("密码不能为空");
                    return true;
                } else if ($(that.inpSelector[2]).val() == ''){
                    $(that.errorShow).css({ "color": "red", "display": "block" }).text("验证码不能为空");
                    return true;
                }else{
                    return false;
                }
            }
    }
    return Sub;
})

 
