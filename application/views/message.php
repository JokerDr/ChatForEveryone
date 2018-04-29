
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>疯言疯语---消息盒子</title>
    <base href="<?php echo site_url() ?>">  
    <link rel="shortcut icon" type="image/x-icon" href="public/image/favicon.ico" media="screen" />
    <?php $user = $this->session->userdata('user');?>
    <link rel="stylesheet" type="text/css" media="screen" href="public/css/reset.css">
    <link rel="stylesheet" type="text/css" media="screen" href="public/css/message.css">
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
                        <a href="welcome/about_us">关于我们</a>
                    </div>
                 <?php }else{?> 
                    <a href="welcome/index_logined" class="home"></a>
                    <div id="select">
                        <a href="welcome/index">首页</a>
                        <a href="user/login">我的疯言疯语</a>
                        <a href="welcome/searched">搜索</a>
                        <a href="welcome/about_us">关于我们</a>
                    </div>
                <?php } ?> 
            </div>
        </div>     
        
    </div> 
    <div id="content">
        <div class="msg_left">
            <div class="data">
                <?php foreach ($results as $row){?>
                     <?php if( $user->user_id != $row->user_id){?><!-- paoo-->
                        <div class="msg" >
                            <a href="javascript:;" class="del <?php echo 'uesr_'.$row->user_id;?>" uid="<?php echo $row->user_id;?>" time="<?php echo $row->create_time_YMD ;?>" time_1="<?php echo $row->create_time_HS ;?>" >删除</a>
                            <div class='wriper' uid="<?php echo $row->user_id;?>" time="<?php echo $row->create_time_YMD ;?>" time_1="<?php echo $row->create_time_HS ;?>">
                                <div class="pic">
                                <a href="user/ ?uid=<?php echo $row->user_id;?>">
                                    <img src="<?php echo $row->photo; ?>" alt="<?php echo $row->user_name;?>">
                                </a>
                            </div>
                            <div class ="info">
                                <div class="name"><?php  echo $row->user_name;?></div>
                                <div class="txt">
                                    <span>
                                        <?php echo $row->province.$row->city.$row->others;?>
                                    </span>
                                    <span>
                                        <?php echo $row->height; ?>
                                    </span>
                                </div>
                                <div class="time"><?php echo $row->create_time_YMD ?></div>
                            </div>
                            </div>

                            
                            
                        </div>
                     <?php }?>      
                <?php } ?>
            </div>
            <div class="page">
                <a href="javascript:;" class="del_all" >删除</a>
                <?php echo $links;?>
            </div>
        </div>  
        <div class="msg_right">
            <div class="msg_show">
                   <div class="two">
                                <div class="time"> 
                                    
                                    时间：
                                     <span></span>        
                                </div>
                                
                                <div class="mine">
                                    <div class="inforCont">
                                        内容：
                                        <p></p>
                                    </div>
                                    <!-- <div class="inforPhoto">   

                            w        </div> -->
                                </div>
                        </div>  
            </div>
            <div class="msg_inpt">
                <textarea name="" id="content_input" >
                   
                </textarea>
                <div class="send">发送/回复消息</div>
            </div>
        </div>
    </div>    
    <div id="BHFooter">
        <div class="cont">
            	<div class="logo">
                    <img src="public/image/logo.png.png" alt="疯言疯语网">
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
                            <span>黑龙江省哈尔滨市南岗区学府路74号
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
   <script type="text/javascript" src="public/js/jquery.min.js"></script>
   <script src="public/js/message/message.js"></script>
   <script>   
        // 删除选定的信息
        $('.del').on('click',function(){  
            var selector = '.uesr_'+$(this).attr('uid'); 
             $.get('Welcome/del_one_message',{
                uid:<?php echo $user->user_id ;?>,
                other: $(this).attr('uid'),
                time:$(this).attr('time'),
                time_1:$(this).attr('time_1')
            },function(data){
                //  $(selector).parent().remove();
                alert(data);
                 location.href = "welcome/message"
            },'text')
        })  
        // 删除所有信息
        $('.del_all').on('click',function(){    
             $.get('Welcome/del_all_message',{
                uid:<?php echo $user->user_id ;?>,
            },function(data){  
             $('.msg').remove();
            },'text')
        })
        //点击左边栏信息
        $(".wriper").on("click", function(){
            $('.msg_show,.msg_inpt').css('display','block'); 
            $('.send').attr('uid',$(this).attr('uid')); 
            //查看消息    
            $.get('Welcome/get_message',{
                uid:<?php echo $user->user_id ;?>,
                other: $(this).attr('uid'),
                time:$(this).attr('time'),
                time_1:$(this).attr('time_1')
            },function(data){     
                var $data = $.parseJSON(data);
                console.log($data);
                var date = $data.create_time_YMD +"   "+$data.create_time_HS;   
                $('.two .time span').text(date);
                $('.inforCont p').text($data.content);
                // $('.inforPhoto').html('<img src=""/>>')
            },'text')
            //发送信息
            $('.send').on('click',function(){
                var date_1 = new Date();
                var year  = date_1.getFullYear();
                var month = date_1.getMonth();
                var days = date_1.getDate();
                var hour = date_1.getHours();
                var seconds = date_1.getMinutes();
                var create_time_YMD = year +"-"+ month +"-"+days;
                var create_time_HS = hour+ ":" +seconds;
                if($.trim($('#content_input').val())!=""){
                    // console.log($(this).call($('.wriper')));
                    console.log({
                                uid:<?php echo $user->user_id ;?>,
                                other: $(this).attr('uid'),
                                content:$.trim($('#content_input').val()),
                                create_time_YMD:create_time_YMD,
                                create_time_HS:create_time_HS
                             });
                        $.post('Welcome/acceptInfo',{
                            uid:<?php echo $user->user_id ;?>,
                            other: $(this).attr('uid'),
                            content:$.trim($('#content_input').val()),
                            create_time_YMD:create_time_YMD,
                            create_time_HS:create_time_HS
                        },function(data){
                             $('#dialog_content').remove();
                            alert(data);
                            // console.log(data);                   
                        },'text')  
                }else{
                    alert("发送内容不能为空！！！")
                }
                
            })
        });
    
        
   </script>
</body>
</html