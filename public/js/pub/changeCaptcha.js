requirejs.config({
    path: {
        jquery: '../jquery.min'
    }
})
define(["jquery"],function($){
    // function ChangeCaptcha(settings) { 
    //      this.defaultSettings = {
    //         refreshSelector:"",//验证码的选择器
    //         askCaptchaURL:"",//验证码生成文件的地址
    //         captchaWriperSelector:"",// 存放验证码文件的容器
    //      }
    //     $.extend(this.defaultSettings, settings);
    //  }

    //  //click图片，重新向后端请求新的验证码图片   
    // ChangeCaptcha.prototype.changeCode = function(){  
    //     console.log(22);
    //     var that = this.defaultSettings ;
        // $(that.refreshSelector).on('click', function () {
        //     $.get(that.askCaptchaURL, {}, function (data) {
        //         $(that.captchaWriperSelector).html(data);
        //         }, 'text');
        //     });
    // }
    //          refreshSelector: "",//验证码的选择       askCaptchaURL:"",//验证码生成文件的地址  captchaWriperSelector:"",// 存放验证码文件的容器
    function ChangeCaptcha(refreshSelector, askCaptchaURL, captchaWriperSelector) {
        $(refreshSelector).on('click', function () {
            $.get(askCaptchaURL, {}, function (data) {
                $(captchaWriperSelector).html(data);
            }, 'text');
        });
    }
    return ChangeCaptcha;
   
})