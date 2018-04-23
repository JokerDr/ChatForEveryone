<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>搜索</title>
    <base href="<?php echo site_url() ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="public/css/reset.css">
    <link rel="stylesheet" type="text/css" media="screen" href="public/css/admin.css" />  
    <link rel="shortcut icon" type="image/x-icon" href="public/image/favicon.ico" media="screen" />
</head>
<body>

    <div id="header">       
        <div id="headerTop">
            <div class="containerHead">
               <?php $user = $this->session->userdata('user');?>
                <div class="logined">
                    <div class="uinfor">
                         hi,<?php echo $user->user_name ?>
                        <span class="uname"></span>
                        <span class="hat"></span>
                    </div>
                    <!-- <div class=" top message">
                         <a href="welcome/message" class="message">消息</a>
                    </div> -->
                    <a href='user/logout'>
                    <div class="setting">退出
                        <!-- <div class="select">
                            <!-- <div ><a href='user/info'>我的疯言疯语</a></div> -->
                            <!-- <div ><a href='user/logout'>退出</a></div> -->
                        </div> </a>
                        
                    </div>
                </div>
    
            </div>           
            
        </div>  
        <div class="hello">管理员<span><?php echo '   '.$user->user_name.'   '; ?></span>您好！</div> 
    </div> 
    
    <div class="container">
    
        <div class="wayWriper">
                <span>你想做的是？</span>
                <div class="Way">       
                    <div class='way1'>
                        <label for="">搜索用户</label>
                    </div>         
                    <div class='way2'>
                        <label for="">发送通知</label>
                    </div>
                </div>
        </div>
        <div class="condition">
            <div class="inpt">
                <input type="text" class="inpUname" placeholder="输入昵称">
            </div>
            <div class='conditions'>
                           
                         
            </div>
            
        </div>
        <div class="startSearch">
                search
        </div>
        <div class="results">
        </div> 
        <div class="pages">echo $page </div>
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
    <script src="public/js/admin/admin.js"></script>
    <!-- <script src="public/js/pub/placeholder.js"></script> -->
    <script>
       $('.setting').mouseenter(function(){
        $('.select').show();
       }).mouseleave(function(){
        $('.select').hide();
       }); 
    </script>
</body>
</html>