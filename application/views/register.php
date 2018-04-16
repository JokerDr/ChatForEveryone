<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>疯言疯语网 | 用户注册</title>
        <base href="<?php echo site_url() ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="public/image/favicon.ico" media="screen" />
    <link rel="stylesheet" href="public/css/reset.css">
    <link rel="stylesheet" type="text/css" media="screen" href="public/css/register.css" />
</head>
<body>
    <div id="header">
      <a href="index.php" class="logo"></a>
      <h1>
        5亿人的选择
          <span>|</span>
          思维的碰撞
          <span>|</span>
          一起畅所欲言吧
          
      </h1> 
      <a href='user/login' id="login">登录</a>
    </div>
    <div id="wriper">
        <div>
            <div class="content">  
                    <span class="conbg"></span>
                    <div class="apply">              
                        <div class='regWay'>
                                <span class="otherInfor">注册方式</span>
                            <div class="pos" id="phoneReg">
                                <input type="radio" class="phone"  checked ="checked" name="way">
                                <label for="way">手机号注册</label>
                            </div>
                            <div class="pos" id="emailReg">
                                <input type="radio" class="email"  name="way">
                                <label for="way">邮箱注册</label>
                            </div>                  
                        </div> 
                        <div id="infoStatu1">
                            <div class="pos">
                                <label for="account">账号</label> <input type="text" class="account"  name="account">
                                 <div class="error error1" ></div>        
                                <div class="prompt" id="account_msg"></div>                               
                            </div>
                            
                            <div class="pos">
                                <label for="account">密码</label> 
                                <input type="password" value="" class="pwd" name="account" rows="3" maxlength="16" 
                                onchange="this.value=this.value.substring(0, 16)" onkeydown="this.value=this.value.substring(0, 16)" onkeyup="this.value=this.value.substring(0, 16)" >
                                   <div class="error error2"></div>
                                 <div class="prompt" id="pwd_msg">                                   
                                    6-16位英文字母,数字
                                </div>
                              
                            </div>
                            <div class="pos">
                                <label for="account">确认密码</label>
                                <input type="password" value="" class="pwdConfirm" name="account"  maxlength="16" 
                                onchange="this.value=this.value.substring(0, 16)" onkeydown="this.value=this.value.substring(0, 16)" onkeyup="this.value=this.value.substring(0, 16)" >
                                    <div class="error error3"></div>                                  
                                   <div class="prompt" id="pwdConfirm_msg">
                                    
                                    密码正确
                                  </div> 
                                   <!-- <div class="error"></div> -->
                            </div>
                           <div class="pos">
                                <label for="account">验证码</label> <input type="text" class="captcha"  name="account"> 
                                <div class="showCaptcha"><?php echo $img?></div>                            
                                
                                <span class="refresh"></span>
                                <div class="prompt" id="captcha_msg">
                                   
                                    验证码错误
                                </div> 
                                <!-- <div class="error"></div> -->
                            </div> 
                         
                            
                        </div>
                        <div id="infoStatu2">
                            <span class="otherInfor">完善资料</span>
                           <div class="pos" id="phoneInp">
                                     <label for="">手机 </label><input type="text" name="name" value="" class='phoneinpt'>
                            </div>
                            <div class="pos">
                                     <label for="">昵称 </label>
                                     <input type="text" name="name" value="" class="uname"  maxlength="12" 
                                onchange="this.value=this.value.substring(0, 12)" onkeydown="this.value=this.value.substring(0, 12)" onkeyup="this.value=this.value.substring(0, 12)" >
                                     <div class="error error4"></div>
                                     <div class="prompt" id="uname">
                                    
                                    
                                     </div>
                                     
                            </div>
                            <div class="pos">
                                <label>性别 </label> 
                                <span class="sex" id="man" value=''>我是男生</span>
                                <span class="sex" id="woman" value=''>我是女生</span>
                            </div>
                            <div class="pos">
                                <label for="">生日 </label>
                                <div id="date">
                                    <select name="year" id="year">
                                        <option value="">选择年份</option>
                                    </select>
                                    <select name="month" id="month">
                                        <option value="">选择月份</option>
                                    </select>
                                    <select id="days" class="day">
                                        <option value="">选择日期</option>
                                    </select>
                                </div>
                                <div class="error error5"></div>
                            </div>
                            <div class="pos">
                                <label for="">地区 </label>
                            <div data-toggle="distpicker" id="distpicker">
                                    <select data-province="---- 选择省 ----"></select>
                                    <select data-city="---- 选择市 ----"></select>
                                    <select data-district="---- 选择区 ----"></select>
                                </div>
                                <div class="error error6"></div>
                            </div>
                            <div class="pos hAndS">
                                <label for="">身高</label>
                                <input type="text" value="" class="uheight" placeholder="1.85" maxlength="4"> 
                                <div class="ok ok1"></div>
                            </div>
                            <div class="pos hAndS">
                                <label for="" class="study">学历</label>
                                <select class='diplomas'>
                                     <option value="">选择学历</option>
                                    <option value="初中">初中</option>
                                    <option value="中专/职高/技校">中专/职高/技校</option>
                                    <option value="高中">高中</option>
                                    <option value="大专">大专</option>
                                    <option value="本科">本科</option>
                                    <option value="硕士">硕士</option>
                                    <option value="博士后">博士后</option>
                                </select>
                                <div class="ok ok2"></div>                      
                            </div> 
                        <div id="readMe">
                            <input type="checkbox" name="readme" id="agree">
                            <label for="readme">已经阅读并已经同意<a href="">疯言疯语服务条款</a></label>
                        </div>
                        <input name="" type="button" value="注册完成" class="icon" id="sub">                 
                    </div>    
                    <div class="intro">
                            <p>
                                <strong>爱好拉近距离</strong> 
                                <b>“疯言疯语”</b>，沟通交流<br/>                              
                                共同语言 带来好友的聊天陪伴<br/>
                                才更加的有吸引力
                                <div class="introImg"></div>
                            </p>
                            <div class="bto"> 
                                <p>
                                    客服：<span>13224585779</span>
                                </p>
                                <p>
                                    邮件：<a href="2676775725@qq.com">2676775725@qq.com</a>
                                </p>
                        </div>
                        </div> 
            </div>
        </div>
    </div>
    <div id="divbg"></div>
    <div id="topicsFooter">	疯言疯语网股份有限公司　|　版权所有© 2005 - 2018 疯言疯语 　京ICP证041124号　 京公网安备110105000655号</div>
    <script src="public/js/require.js" data-main="public/js/register/register.js"></script>
</body>
</html>