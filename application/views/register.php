<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../../public/css/reset.css">
    <link rel="stylesheet" type="text/css" media="screen" href="../../public/css/register.css" />
    <script src="../../public/js/register/"></script>
</head>
<body>
    <div id="header">
      <a href="./index" class="logo"></a>
      <h1>
         <span>5亿</span> 
         人的选择
          <span>|</span>
          思维的碰撞
          <span>|</span>
          一起畅所欲言吧
          
      </h1> 
      <a href='./login' id="login">登录</a>
    </div>
    <form action="" methods="post">
        <div class="content">  
                <span class="conbg"></span>
                <div class="apply">
                 
                    <div class='regWay'>
                             <span>注册方式</span>
                         <div class="pos">
                            <input type="radio" class="phone"  checked ="checked" name="way">
                            <label for="way">手机号注册</label>
                         </div>
                         <div class="pos">
                            <input type="radio" class="email"  name="way">
                            <label for="way">邮箱注册</label>
                         </div>                  
                    </div> 
                    <div id="infoStatu1">
                        <div class="pos">
                            <label for="account">账号</label> <input type="text" class="account" value="" name="account">
                        </div>
                        <div class="pos">
                            <label for="account">验证码</label> <input type="text" class="captcha" value="" name="account">
                            <?php echo $img?>
                            <span class="refresh"></span>
                        </div>
                        <div class="pos">
                            <label for="account">密码</label> <input type="text" value="" class="pwd" name="account">
                        </div>
                        <div class="pos">
                             <label for="account">确认密码</label><input type="text" value="" class="pwdComfirm" name="account">
                        </div>  
                        
                    </div>
                    <div id="infoStatu2"></div>

                    <div>
                    <span>完善资料</span>
                    昵称 <input type="text">
                    性别<div>
                        <input type="checkbox">
                        <input type="checkbox">
                    </div>
                    
                    生日<input type="text">
                    地区 <input type="text">
                    <input type="text">
                    <div>
                     身高 <input type="text">
                     收入<input type="text">
                    </div>
                  
                    
                    </div>
                    
                    <
               
            </div>
        </div>
    </form>

    <script src="../../public/js/require.js" data-main="../../public/js/register/register.js"></script>
</body>
</html>