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
    <link rel="stylesheet" type="text/css" media="screen" href="public/css/aboutOne.css" />
    <!-- <link rel="stylesheet" type="text/css" media="screen" href="public/css/lunbo.css" />    -->  
</head>
<body>
    <div id="header">       
        <div id="headerTop">
            <div class="containerHead">
               <?php 
                $user = $this->session->userdata('user');
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
        <div class="profile">
            <div class="userData">
                <div class="pic">
                    <img src="" alt="">
                </div>
                <div class="data">
                    <div class="name"></div>
                    <div class="others">
                        <div>
                            <span>生年:</span>
                            <span class="year"></span>
                        </div>
                        <div>
                            <span>身高:</span>
                            <span class="height"></span>
                        </div>
                        <div>
                            <span>省市:</span>
                            <span class="area"></span>
                        </div>
                        <div>
                            <span>学历:</span>
                            <span class="diploma"></span>
                        </div>
                    </div>            
                </div>
            </div>
        </div>
        <div class="intro">
            <span>自我介绍</span>
            <p></p>
            <div class="buttons">
                        <a href="javascript:;" class="findher">发送消息</a>
                        <a href="javascript:;" class="addFriend">加为好友</a>
            </div>
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
<script src="public/js/jquery.min.js"></script> 
<script>
    // 滑入滑出特效
    $('.setting').mouseenter(function(){
        $('.select').show();
    }).mouseleave(function(){
        $('.select').hide();
    });  
    var data = <?php echo $res;?>;
    var imgSrc =  data.photo; 
    console.log(data);
    $('.pic img').attr('src',imgSrc);
    $('.year').text(data.year);
    $('.height').text(data.height);
    $('.area').text(data.province+data.city);
    $('.diploma').text(data.diplomas);
    $('.name').text(data.user_name);
    $('.intro p').text(data.intro_content);
    $('.findher').attr('uid',data.user_id);
    $('.addFriend').attr('uid',data.user_id);
    // 发送消息
    $('.findher').on('click', function () {
        // console.log(22);
         <?php if(isset($user)){?>
            var other = $(this).attr('uid');
            var date_1 = new Date();
            var year = date_1.getFullYear();
            var month = date_1.getMonth() + 1;
            var days = date_1.getDate();
            var hour = date_1.getHours();
            var seconds = date_1.getMinutes();
            var create_time_YMD = year + "-" + month + "-" + days;
            var create_time_HS = hour + ":" + seconds;
            // 模板的显隐性切换
            // console.log(11);
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

    //加为好友
    $('.addFriend').on('click',function () {
        var accepter_id = $(this).attr('uid');
        console.log({
            user_id:<?php echo $user->user_id;?>,
            accepter_id:accepter_id
            });       
        $.post('Welcome/addfriend',{
            user_id:<?php echo $user->user_id;?>,
            accepter_id:accepter_id
        },function(data){
            console.log(data);
            var $data = $.trim(data);
            if($data=="already exist"){
                alert('对方已经是你的好友');
            }
         },'text')
    })
</script>
</body>
</html> 