<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>疯言疯语网会员登录</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="../../public/image/favicon.ico" media="screen" />
     <link rel="stylesheet" href="../../public/css/reset.css">
    <link rel="stylesheet" type="text/css" media="screen" href="../../public/css/logIn.css" /> 
</head>
<body>
    
    <div id = "right_bg">
    
        <div class="layer">
            <form name="loginForm" id="loginForm" ,action = "" target="_self" method="post">
                <div class="cont">
                    <!-- 图标 -->
                    <a href="./home">
                        <img src="../../public/image/logo.png.png" alt="疯言疯语">
                    </a>
                    <!-- 手机号、邮箱 -->
                    <input class="inp01" type="text" name="txtLoginEMail" id="txtLoginEMail" size="16" maxlength="40"                   
                     placeholder="邮箱/手机号" >
                     <!-- 错误信息 -->
                    <span class="msg" id="txtLoginEMail_e" ></span>

                    <!-- 密码 -->
                    <input class="inp01" name="txtLoginPwd" id="txtLoginPwd" placeholder="密码" type="password" size="16" maxlength="16">
                    
                    <span class="msg" id="txtLoginPwd_e" ></span>
                    <!-- 验证码 -->
                    <!-- <div class="captcha">
                        <input type="text" class="inpCap" name="passcode">
                        <span class="showCaptcha">                                   
                                <!-- php echo $img;?>                                -->
                           <!-- <a href="javascript:;" id="change-code">点我刷新</a> -->
                        <!-- </span>
                        <span .class='errorCaptcha'></span>
                    </div> --> 
                    
                    <div class="line">
                        <a href="" target="_blank" >忘记密码？</a>
                        <input type="checkbox"  checked="true" value="Yes" name="chkRememberMe" id="chkRememberMe" class="checkbox">
                        <label for="chkRememberMe" >三天内自动登录</label>
                    </div>

                    <input class="btn" type="button"  value="登 录">
                    
                    <span class="noLogin">没有账号？</span>
                    <a href="user/register" class="register" onclick="">立即注册&gt;</a>
                    
                </div>
            </form>
           
        </div>
    </div>
    <script src="../../public/js/require.js" data-main="../../public/js/logIn/logIn.js"></script>
</body>
</html>