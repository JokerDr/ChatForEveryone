
define(function(){
//针对账号
// 验证邮箱格式   
    function checkEmail(str, obj) {
    var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
    return re.test(str) ? true : false;
}
//check手机号格式
    function checkMobile(str) {
    var re = /^1\d{10}$/;
    return re.test(str) ? true : false;
}   

    var arrFun = [checkEmail, checkMobile];//0-验证邮箱格式 ,1-检查手机号格式
    return arrFun;
})


// define(function () {
//     return {
//         //针对账号
//         // 验证邮箱格式   
//         checkEmail: function checkEmail(str, obj) {
//             var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
//             return re.test(str) ? true : false;
//         },
//         //check手机号格式
//         checkMobile: function (str) {
//             var re = /^1\d{10}$/;
//             return re.test(str) ? true : false;
//         }  

//     }
    
// })