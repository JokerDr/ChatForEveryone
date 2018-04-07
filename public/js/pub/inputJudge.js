//输入判断
requirejs.config({
    path: {
        jquery: 'jquery.min'
    }
})
define(["jquery"],function($){
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
                    if (checkEmail($account.val()) == true || checkMobile($account.val()) == true){
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
        //针对账号
        // 验证邮箱格式
        function checkEmail(str,obj) {
            var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
            return re.test(str)?true:false;        
        }
        //check手机号格式
        function
            checkMobile(str) {
            var re = /^1\d{10}$/;
            return re.test(str) ? true : false;           
        }
  
    return InputJudge;
})