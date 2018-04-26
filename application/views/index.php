<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>疯言疯语首页</title>
    <base href="<?php echo site_url() ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">                                
    <link rel="shortcut icon" type="image/x-icon" href="public/image/favicon.ico" media="screen" />
    <link rel="stylesheet" href="public/css/reset.css">
    <link rel="stylesheet" type="text/css" media="screen" href="public/css/public.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="public/css/lunbo.css" />   
    <script src="public/js/jquery.min.js"></script> 
</head>
<body>
    <div id="header">       
        <div id="headerTop">
            <div class="containerHead">
               <?php 
                $user = $this->session->userdata('user');
                $photo = $this->session->userdata('photo');
                if(isset($user)==false){?>
                <div class="unlogin">
                    <a href='user/login'>登陆</a>
                    <a href='user/register'>注册</a> 
                </div>
                <?php }else{?>
                <div class="logined">
                    <div class="uinfor">
                         hi,<?php echo $user->user_name ?>
                        <span class="uname"></span>
                        <span class="hat"></span>
                    </div>
                    <div class=" top message">
                         <a href="welcome/message" class="message">消息</a>
                    </div>
                    <div class="setting">设置
                        <div class="select">
                            <div ><a href='user/info'>我的疯言疯语</a></div>
                            <div ><a href='user/logout'>退出</a></div>
                        </div>
                        
                    </div>
                </div>
                <?php }?>
            </div>           
            
        </div>   
        <div class="wrip">
            <div id="nav">
                <?php if(isset($user) ){?>
                    <a href="welcome/index_logined" class="home"></a>
                    <div id="select">      
                        <a href="welcome/index_logined">首页</a>
                        <a href="user/info">我的疯言疯语</a>
                        <a href="welcome/searched">搜索</a>
                    </div>
                 <?php }else{?> 
                    <a href="welcome/index_logined" class="home"></a>
                    <div id="select">
                        <a href="welcome/index">首页</a>
                        <a href="user/login">我的疯言疯语</a>
                        <a href="welcome/searched">搜索</a>
                    </div>
                <?php } ?>  
            </div>
        </div>     
        
    </div> 

    <div id="content">
            <div class="my-photo">
            </div>
            <?php if(isset($user)==false) {?>
            <div class="login" >
                    <div id = "right_bg">
        
                        <div class="layer">
                            <form name="loginForm" id="loginForm" ,action = "" target="_self" method="post">
                            <div class="cont">
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
                                            <!-- php echo $img;?>    //加一个请输入验证码的placehoder                            -->
                                    <!-- <a href="javascript:;" id="change-code">点我刷新</a> -->
                                    <!-- </span>
                                    <span .class='errorCaptcha'></span>
                                </div> --> 
                                
                                <div class="line">
                                    <a href="" target="_blank" >忘记密码？</a>
                                    <!-- <input type="checkbox"  checked="true" value="Yes" name="chkRememberMe" id="chkRememberMe" class="checkbox">
                                    <label for="chkRememberMe" >三天内自动登录</label> -->
                                </div>

                                <input class="btn" type="button"  value="登 录">
                                
                                <span class="noLogin">没有账号？</span>
                                <a href="user/register" class="register" onclick="">立即注册&gt;</a>
                                <a href="" target="_blank" class='forgetpwd'>忘记密码？</a>
                                
                            </div>
                            </form>
                
                        </div>
                    </div>
           
            </div>
            <?php } else { ?>
            <div class="login logined" >
                    <div id = "right_bg">       
                        <div class="layer">
                            <form name="loginForm" id="loginForm" ,action = "" target="_self" method="post" enctype="multipart/form-data">
                            <div class="cont">
                               <a href='user/info?id=<?php echo $user->user_id?>' id='uid'>
                                    <img src="<?php $pic = $photo ?$photo->photo :'public/image/not_avatar.gif';echo $pic;?>" alt="上传图片">
                               </a>
                                <p><?php echo $user->user_name?></p>
                                <ul class='list'>
                                    <li>
                                        <a>
                                            <strong><?php echo $msg_num?></strong>
                                            <span>我的消息</span>
                                        </a>
                                        
                                    </li>
                                    <li>
                                        <a>
                                            <strong><?php echo $friend_num?></strong>
                                            <span>我的好友</span>
                                        </a>
                                    </li>
                                </ul>
                                <!-- <input class="btn" type="button"  value="我的资料"> -->
                                <div class="btn"><a href="user/info">我的疯言疯语</a></div>
                                
                                
                            </div>
                            </form>
                
                        </div>
                    </div>
           
            </div>    
            <?php }?>
            <div class="title">
            我的推荐   
            <a href='welcome/searched' class="learnMore">点击我了解更多</a>
            </div>
            <div id="pubuliu">
            
                <?php for($x=0; $x<12; $x++){ ?>
                    <div id="message-container">
                       
                        <!-- {"user_id":"32","user_name":"00","password":"000000","phone":"12345678912","email":null,"sex":"1","province":"\u5317\u4eac\u5e02","city":"\u5317\u4eac\u5e02\u5e02\u8f96\u533a","others":"\u5bc6\u4e91\u533a","height":"1","diplomas":"\u521d\u4e2d","mood":null,"year":"2003","month":"2","days":"17","photo_id":null,"u_id":null,"photo":null,"using_or_not":null,"intro_id":null,"intro_content":null}, -->
                        <div class="photo">
                            <img src="" alt="">
                        </div>
                        <div class = "infor">
                            <strong></strong>
                            <span > </span>
                            <p></p>
                            <a class="findHer"  href="javascript:;">给他/她留言</a>
                            <!-- <a class="addfriend">添加好友</a> -->
                        </div>

                    </div>
                <?php }?>
            </div>
            
    </div>

    <div id="BHFooter">
        <div class="cont">
            	<div class="logo">
                    <img src="public/image/logo.png.png" alt="疯言疯语网实名婚恋开创者">
                </div>
                	<ul>
                        <li style='float:right'>
                            <span>
                                <a href="javascript:;" target="_blank" onfocus="this.blur();">关于疯言疯语</a> | 
                                <a href="javascript:;" target="_blank" onfocus="this.blur();">商务合作</a> |
                                <a href="javascript:;" target="_blank" onfocus="this.blur();">联系我们</a> |
                                <a href="javascript:;" target="_blank" onfocus="this.blur();">诚聘人才</a> |
                                <a href="javascript:;" target="_blank" onfocus="this.blur();">帮助中心</a>
                                <br>
                                <a href="javascript:;" target="_blank" onfocus="this.blur();">服务条款</a>  |
                                <a href="javascript:;" target="_blank" onfocus="this.blur();">隐私保护</a> |
                                <a href="javascript:;" target="_blank" onfocus="this.blur();">交友安全</a> |
                                <a href="javascript:;" onclick="openChat()" onfocus="this.blur();">意见反馈</a> | 
                                <a href="javascript:;" target="_blank">网站地图</a>
                                <br>
                                <a href="javascript:;" target="_blank" onfocus="this.blur();">家长监护工程</a> |
                                <a href="javascript:;" target="_blank">疯言疯语直播</a> |
                                <a href="javascript:;" target="_blank">疯言疯语游戏</a>
                            </span>
                            <br>
                            客服微信：baihekefu
                        </li>

                        <li style="width:475px;">
                            <span>北京市朝阳区阜通东大街1号院望京SOHO 塔3 B座 6层(100102)
                                <br>
                                服务城市：<a target="_blank" href="javascript:;">北京</a> |
                                 		<a target="_blank" href="javascript:;">上海</a> |
                                        <a target="_blank" href="javascript:;">广州</a> |
                                        <a target="_blank" href="javascript:;">深圳</a> |
                                         <a target="_blank" href="javascript:;">天津</a> |
                                        <a target="_blank" href="javascript:;">太原</a> |
                                        <a target="_blank" href="javascript:;">成都</a> | 
                                        <a target="_blank" href="javascript:;">哈尔滨</a> |
                                        <a target="_blank" href="javascript:;">大连</a> | 
                                        <a target="_blank" href="javascript:;">合肥</a><br>
                                        <a target="_blank" style="padding-left:60px;" href="javascript:;">杭州</a> | 
                                        <a target="_blank" href="javascript:;">济南</a> |
                                        <a target="_blank" href="javascript:;">南京</a> |
                                        <a target="_blank" href="javascript:;">青岛</a> |
                                        <a target="_blank" href="javascript:;">武汉</a> | 
                                        <a target="_blank" href="javascript:;">西安</a> | 
                                        <a target="_blank" href="javascript:;">郑州</a> | 
                                        <a target="_blank" href="javascript:;">石家庄</a> | 
                                        <a target="_blank" href="javascript:;">更多</a>	
                            </span>
                            <br>
                                        违法和不良信息举报电话：0316-5266032（24小时）
                                        <br>
                        </li>	
                    </ul>	
                <div class="clear"></div>	
                <p style="color:#333; font-family:Arial">
                    <a style="text-decoration: none;" href="http://www.miibeian.gov.cn" target="_blank">京ICP备10009806号-1</a>
                         京公网安备110105000655号　　京ICP证041124号　　京网文（2016）6588-901号　　版权所有© 2005 - 2018 疯言疯语网<br>	
                    <a target="_blank" href="http://media.baihe.com/index.php?action-viewnews-itemid-771-php-1">广播电视节目制作经营许可证（京）字第01303号</a>
                </p>	
               
            </div>
    </div>
 
    <script>     
        var data = <?php echo $users_width_photos ;?>;        
        for(var i = 0;i<12;i++){
             $('.photo img')[i].src= data[i].photo;
             $('.photo')[i].setAttribute('uid',data[i].user_id );
             $('.photo img')[i].alt = data[i].user_name;
             $('.infor strong')[i].innerHTML = data[i].user_name;
             $('.infor span')[i].innerHTML = data[i].height +"    "+ data[i].diplomas+"    "+ data[i].province+ data[i].city+data[i].others;          
             $('.findHer')[i].setAttribute('uid',data[i].user_id );
        }
        //cha看资料 
        $('.photo').on('click',function(){
            <?php if(isset($user)){?>
                var another = $(this).attr('uid');
                console.log(another);
                $.get('Welcome/firend_or_not',{
                    uid:<?php echo $user->user_id;?>,
                    another:another
                },function(data){
                    var $data = $.trim(data);
                    switch ($data) {
                        case 'all_visit'://所有人都能访问 ，
                            location.href="Welcome/about_one?uid=<?php echo $user->user_id?>&another="+another//跳转到控制器下的方法里
                            break;
                        case 'friend_visit'://只允许朋友访问，且朋友列表里有该用户
                            location.href="Welcome/about_one?uid=<?php echo $user->user_id?>&another="+another//跳转到控制器下的方法里
                            break;
                        case 'not_allow'://只允许朋友访问，但朋友列表里没有它
                            alert('对方设置了只允许好友访问，请搜索对方昵称，添加对方为好友！');
                            break;
                        default:
                        console.log($data);
                            break;
                    }
                },'text')
            <?php }else{?>
                alert("请登录后，再查看该用户资料！");
            <?php }?>
        })
        //发送消息
        $('.findHer').on('click', function () {
            <?php if(isset($user)){?>
                var other = $(this).attr('uid');
                var date_1 = new Date();
                var year = date_1.getFullYear();
                var month = date_1.getMonth()+1;
                var days = date_1.getDate();
                var hour = date_1.getHours();
                var seconds = date_1.getMinutes();
                var create_time_YMD = year + "-" + month + "-" + days;
                var create_time_HS = hour + ":" + seconds;
                // 模板的显隐性切换
                var dialog = `<div id='dialog_content'>
                                <div id="mask">
                                    <div class="msg_inpt" style="display: block;">
                                        <div class="close">[X]</div>
                                        <textarea name="" id="content_input">                   
                                        </textarea>
                                        <div class="send" >发送</div>
                                    </div>
                                </div>
                            </div>`
            
                            $('#content').append(dialog);
                $('.close').on('click', function () {
                    $('#dialog_content').remove();
                });
                //发送消息
                
                $('.send').on('click', function () {
                        if ($.trim($('#content_input').val()) != "") {
                            $.post('Welcome/acceptInfo', {
                                uid:<?php echo $user->user_id?>,
                                other: other,
                                content: $.trim($('#content_input').val()),
                                create_time_YMD: create_time_YMD,
                                create_time_HS: create_time_HS
                            }, function(data) {
                                console.log({
                                uid:<?php echo $user->user_id?>,
                                other: other,
                                content: $.trim($('#content_input').val()),
                                create_time_YMD: create_time_YMD,
                                create_time_HS: create_time_HS
                            });                           
                                alert('success!!!')
                            }, 'text')
                    }else {
                            alert("发送内容不能为空！！！")
                    } 
                })    
             <?php }else{?>
                alert("登陆后才能发送消息！");
            <?php }?>
        });
    </script>
    <script src="public/js/require.js" data-main="public/js/index/index.js"></script>
</body>
</html>     