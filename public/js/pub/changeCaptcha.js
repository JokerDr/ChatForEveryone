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
            inpSelector: "",//验证码输入框选择器
            captchaSessionURL:"",// 验证码session地址
            subSelector:""//提交按钮
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
    //检查储存在session内的验证码值与输入的验证码值是否相同
    ChangeCaptcha.prototype.checkCaptcha = function(){
        var that = this.defaultSettings;    
        
        $(that.subSelector).on('click', function () {
            var emailAndPhone = $('#txtLoginEMail').val();
            var pwd = $('#txtLoginPwd').val();

            $.ajax(that.captchaSessionURL,{
                email: email,
                pwd: pwd
            },function(data){      
                console.log(data);          
                 if(data==$(that.inpSelector).val()){
                     console.log(true);
                 }else{
                     console.log(false);
                 }
             },"text")
             
        })    
       
    }
    return ChangeCaptcha;
   
})