//输入判断
requirejs.config({
    path: {
        jquery: 'jquery.min',
        check:'../pub/check'
    }
})
define(["jquery", 'check'], function ($, arrFun){
     function InputJudge(settings){
            this.defaultSettings={
                accountIdSelector: "",
                pwdIdSelector:"",
                showErrorSelector:""
            }
         $.extend(this.defaultSettings,settings);
        }             
    InputJudge.prototype.init=function(){
            var $account = $("#" + this.defaultSettings.accountIdSelector); 
            var $errors = $("#" + this.defaultSettings.showErrorSelector);
            if($account.focus()){
                $account.keyup(function (param) {    
                    //如果符合正则要求        
                    if (arrFun[0]($account.val()) == true || arrFun[1]($account.val()) == true){
                        $errors.css({ "color": "green", "display": "block" }).text("格式正确");
                    } else if ($account.val() == ""){
                        $errors.css({ "color": "red", "display": "block" }).text("账号不能为空");
                    }else{
                        $errors.css({ "color": "red", "display": "block" }).text("手机号或邮箱账号格式错误");
                    }
                  })
            }else{
                $errors.css( {"display": "none"} )
            }
        }
  
    return InputJudge;
})