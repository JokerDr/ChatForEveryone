requirejs.config({
    path: {
        jquery: '../jquery.min'
    }
})

define(['jquery'], function ($) {
    function ChangeWay(settings){
        this.defaultSettings={
            regWaySelector:[],//手机注册/邮箱注册选择器单选钮
            clickArea: [],//手机，邮箱单击区域
            phoneInp:'',//邮箱注册时显示手机号的输框
            
        }
        $.extend(this.defaultSettings,settings);
    }
    ChangeWay.prototype.change=function () {
        var that = this.defaultSettings;
        var phone =$(that.regWaySelector[0]);
        var email = $(that.regWaySelector[1]);
        $(that.clickArea[0]).on('click',function(){
            $(phone).prop('checked', true);
            $(that.phoneInp).css('display', 'none');
        })
        $(that.clickArea[1]).on('click', function () {
            $(email).prop('checked', true);
            $(that.phoneInp).css('display', 'block');
        })
        
    }

    return ChangeWay;
    

})