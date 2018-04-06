requirejs.config({
    path: {
        jquery: '../jquery.min'
    }
})
define(["jquery"],function($){
    function ChangeCaptcha(settings) { 
         this.defaultSettings = {
            captchaSelector:"",//验证码的选择器
            askCaptchaURL:"",//验证码生成文件的地址
            captchaWriperSelector:"",// 存放验证码文件的容器
         }
        $.extend(this.defaultSettings, settings);
     }

     //click图片，重新向后端请求新的验证码图片   
    ChangeCaptcha.prototype.changeCode = function(){  
        
        var that = this.defaultSettings ;
        $(that.captchaSelector).on('click', function () {
            $.get(that.askCaptchaURL, {}, function (data) {
                $(that.captchaWriperSelector).html(data);
                }, 'text');
            });
    }
 
    return ChangeCaptcha;
   
})