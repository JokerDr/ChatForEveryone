<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>疯言疯语网 | 用户注册</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../../public/css/reset.css">
    <link rel="stylesheet" type="text/css" media="screen" href="../../public/css/register.css" />
</head>
<body>
    <div id="header">
      <a href="./index" class="logo"></a>
      <h1>
        5亿人的选择
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
                             <span class="otherInfor">注册方式</span>
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
                             <label for="account">确认密码</label><input type="text" value="" class="pwdConfirm" name="account">
                        </div>  
                        
                    </div>
                    <div id="infoStatu2">
                        <span class="otherInfor">完善资料</span>
                        <div class="cont">
                             <div class="pos">
                            <label for="">昵称 </label><input type="text" name="name" value="">
                        </div>
                        <div class="pos">
                            <label>性别 </label> 
                            <span class="sex" id="man">我是男生</span>
                            <span class="sex" id="woman">我是女生</span>
                        </div>
                        <div class="pos">
                            <label for="">生日 </label><input type="text">
                        </div>
                        <div class="pos">
                            <label for="">地区 </label>
                           <div data-toggle="distpicker" id="distpicker">
                                <select data-province="---- 选择省 ----"></select>
                                <select data-city="---- 选择市 ----"></select>
                                <select data-district="---- 选择区 ----"></select>
                            </div>
                        </div>
                        <div class="pos hAndS">
                             <label for="">身高</label>
                             <input type="text"> <div class="ok"></div>
                        </div>
                        <div class="pos hAndS">
                             <label for="" class="study">学历</label>
                             <input type="text"> <div class="ok"></div>                      
                        </div>
                    </div>
                        
                    <div id="readMe">
                         <input type="radio" name="readme">
                         <label for="readme">已经阅读并已经同意<a href="">疯言疯语网条款</a></label>
                    </div>
                    <input name="" type="button" value="注册完成" class="icon" id="sub">                 
                </div>    
                <div class="intro">
                        <p>
                            <strong>用语言绽放魅力</strong> 
                            梦寐以求的交流舞台<br/>
                            聊天交友，畅所欲言<br/>
                            <b>因为未知</b>
                            才更加的有吸引力
                            <div class="introImg"></div>
                        </p>
                        <div class="bto"> 
                            <p>
                                客服：<span>13224585779</span>
                            </p>
                            <p>
                                邮件：<a href="xxxx@qq.com">xxxx@qq.com</a>
                            </p>
                       </div>
                    </div> 
        </div>
    </form>
  <div id="divbg"></div>
    <div id="topicsFooter">	百合网股份有限公司　|　版权所有© 2005 - 2018 百合网 　京ICP证041124号　 京公网安备110105000655号</div>
    <script src="../../public/js/require.js" data-main="../../public/js/register/register.js"></script>
</body>
</html>