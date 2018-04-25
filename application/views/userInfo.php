<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>

<head>
    <!-- <script type='text/javascript'> -->
    <title>疯言疯语网·基本资料</title>
    <base href="<?php echo site_url() ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="public/image/favicon.ico" media="screen" /> 
    <link rel="stylesheet" href="public/css/reset.css">
    <link href="public/css/userinfo/public_2.css" rel="stylesheet" type="text/css" />
    <link href="public/css/userinfo/leftnav_1.css" rel="stylesheet" type="text/css" />
    <link href="public/css/userinfo/formstyle_1.css" rel="stylesheet" type="text/css" />
    <link href="public/css/userinfo/mydata.css" rel="stylesheet" type="text/css" />
    <link href="public/css/userinfo/userinfo.css"  rel="stylesheet" type="text/css" media="screen"/>  
    <link href="public/css/userinfo/ccy.css" rel="stylesheet"  type="text/css" media="screen"/>  
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
    <!-- 内  容 -->
    <div id="BAIHE">
        <!-- 左部导航 -->
        <div id="leftCont">
            <div class="pic bor js_topinfo">
                <dl>
                    <dt>                
                        <a href="user/info">
                            <img src="<?php $p = $avatar != ''?$avatar :'public/image/not_avatar.gif';echo $p;?>">

                        </a>
                        <span class="u_name"><?php echo $user->user_name;?><span>
                        <!-- <a href="http://my.baihe.com/myphoto/index" onclick="baihe.bhtongji.clickTongJi({'event':'3','spm':'4.2.2.459.1379'});" class="icon">上传照片</a>
                        <a href="http://my.baihe.com/userinfo/index" onclick="baihe.bhtongji.clickTongJi({'event':'3','spm':'4.2.2.460.1380'});" class="icon">编辑资料</a> -->
                    </dt>         
                </dl>        
                <div class="icon">            
                    <a href="welcome/message" onclick="baihe.bhtongji.clickTongJi({'event':'3','spm':'2.15.43.148.224'});">
                        <strong><?php echo $msg_num?></strong><br>消息<span></span>
                    </a>            
                    <a href="" onclick="baihe.bhtongji.clickTongJi({'event':'3','spm':'2.15.43.186.289'});">
                        <strong><?php echo $friend_num?></strong><br>好友<span></span>
                    </a>			
                    <a href="" onclick="baihe.bhtongji.clickTongJi({'event':'3','spm':'2.15.43.150.226'});">
                        <strong id="persDataPetalNum"><?php echo $user->mood?></strong><br>心情
                    </a>        
                </div>    
            </div>
        </div>
        <!-- <script language="javascript" src="public/js/leftnav_1.js" id="leftNav" charset='utf-8'></script> -->
        <!--rightCont -->
        <div id="rightCont">
            <div class="myData">
                <h3>
                    <strong>我的资料</strong>
                    
                </h3>
                <!-- <div class="changeWay">
                    <input type="radio" name="visit"><label for="visit">允许所有人访问<label/>
                    <input type="radio" name="visit"><label for="visit">仅允许好友访问<label/> 
                </div>  -->
                <div href="javascript:;" class="mainNav">
                    <a href="javascript:;" class="active">
                        <strong>基本资料</strong>
                        <em class="angleB"></em>
                    </a>
                    <a href="javascript:;" class="">
                        <strong>我的照片</strong>
                        <em class="angleB"></em>
                    </a>
                    <a href="javascript:;" class="">
                        <strong>自我介绍</strong>
                        <em class="angleB"></em>
                    </a>
                    <a href="javascript:;" class="">
                        <strong>修改密码</strong>
                        <em class="angleB"></em>
                    </a>
                    <a href="javascript:;" class="">
                        <strong>好友列表</strong>
                        <em class="angleB"></em>
                    </a>
                    
                </div>
                <form class="nav-data user_form info-detail">
                    <div class="data">
                        <div class="cont L">
                            <dl>
                                <dt>昵称：</dt>
                                <dd>
                                    <input name="nickname" type="text" class="c333" maxLength="12" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>性别：</dt>
                                <dd id="gender"><span></span></dd>
                            </dl>
                            <dl>
                                <dt>生日：</dt>
                                <dd id="birthDay">
                                    <div class="datepicker"></div>
                                    <!-- <span class="orangeT">* 只能修改一次</span> -->
                                </dd>
                            </dl>
                            <dl>
                                <dt>心情：</dt>
                                <dd id="ssssss">
                                    <select id="mood">
                                        <option value="super">极好</option>
                                        <option value="good">好</option >
                                        <option value="soso">一般</option>
                                        <option value="bad">差</option>
                                    </select>
                                    <!-- <div class="datepicker"></div> -->
                                    <!-- <span class="orangeT">* 只能修改一次</span> -->
                                </dd>
                            </dl>


                            <dl>
                                <dt>身高：</dt>
                                <dd id="height">
                                    <select class="sel01">
                                        <option value="-1">请选择</option>
                                        <option value='144'>145厘米以下</option>
                                        <option value='145'>145厘米</option>
                                        <option value='146'>146厘米</option>
                                        <option value='147'>147厘米</option>
                                        <option value='148'>148厘米</option>
                                        <option value='149'>149厘米</option>
                                        <option value='150'>150厘米</option>
                                        <option value='151'>151厘米</option>
                                        <option value='152'>152厘米</option>
                                        <option value='153'>153厘米</option>
                                        <option value='154'>154厘米</option>
                                        <option value='155'>155厘米</option>
                                        <option value='156'>156厘米</option>
                                        <option value='157'>157厘米</option>
                                        <option value='158'>158厘米</option>
                                        <option value='159'>159厘米</option>
                                        <option value='160'>160厘米</option>
                                        <option value='161'>161厘米</option>
                                        <option value='162'>162厘米</option>
                                        <option value='163'>163厘米</option>
                                        <option value='164'>164厘米</option>
                                        <option value='165'>165厘米</option>
                                        <option value='166'>166厘米</option>
                                        <option value='167'>167厘米</option>
                                        <option value='168'>168厘米</option>
                                        <option value='169'>169厘米</option>
                                        <option value='170'>170厘米</option>
                                        <option value='171'>171厘米</option>
                                        <option value='172'>172厘米</option>
                                        <option value='173'>173厘米</option>
                                        <option value='174'>174厘米</option>
                                        <option value='175'>175厘米</option>
                                        <option value='176'>176厘米</option>
                                        <option value='177'>177厘米</option>
                                        <option value='178'>178厘米</option>
                                        <option value='179'>179厘米</option>
                                        <option value='180'>180厘米</option>
                                        <option value='181'>181厘米</option>
                                        <option value='182'>182厘米</option>
                                        <option value='183'>183厘米</option>
                                        <option value='184'>184厘米</option>
                                        <option value='185'>185厘米</option>
                                        <option value='186'>186厘米</option>
                                        <option value='187'>187厘米</option>
                                        <option value='188'>188厘米</option>
                                        <option value='189'>189厘米</option>
                                        <option value='190'>190厘米</option>
                                        <option value='191'>191厘米</option>
                                        <option value='192'>192厘米</option>
                                        <option value='193'>193厘米</option>
                                        <option value='194'>194厘米</option>
                                        <option value='195'>195厘米</option>
                                        <option value='196'>196厘米</option>
                                        <option value='197'>197厘米</option>
                                        <option value='198'>198厘米</option>
                                        <option value='199'>199厘米</option>
                                        <option value='200'>200厘米</option>
                                        <option value='201'>201厘米</option>
                                        <option value='202'>202厘米</option>
                                        <option value='203'>203厘米</option>
                                        <option value='204'>204厘米</option>
                                        <option value='205'>205厘米</option>
                                        <option value='206'>206厘米</option>
                                        <option value='207'>207厘米</option>
                                        <option value='208'>208厘米</option>
                                        <option value='209'>209厘米</option>
                                        <option value='210'>210厘米</option>
                                        <option value='211'>210厘米以上</option>
                                    </select>
                                    <!-- <span class="orangeT">* 一个月修改一次</span> -->
                                </dd>
                            </dl>
                            <dl>
                                <dt>学历：</dt>
                                <dd id="education">
                                    <select class="sel01">
                                        <option value="-1">请选择</option>
                                        <option value="1">初中</option>
                                        <option value="2">中专/职高/技校</option>
                                        <option value="3">高中</option>
                                        <option value="4">大专</option>
                                        <option value="5">本科</option>
                                        <option value="6">硕士</option>
                                        <option value="7">博士</option>
                                        <!--<option value="8">博士后</option>-->
                                    </select>
                                    <!-- <span class="orangeT">* 只能修改一次</span> -->
                                </dd>
                            </dl>

                        </div>
                        <div class="cont R">
                           
                            <dl style="position:relative; z-index:4">
                                <dt>家乡：</dt>
                                <dd>
                                    <div class="selCity">
                                        &nbsp;&nbsp;省<input value="<?php echo $user->province?>" style="text-align: right" type="text" id="sheng"><br>
                                        &nbsp;&nbsp;市<input value="<?php echo $user->city?>" style="text-align: right" type="text" id="shi"><br>
                                        &nbsp;&nbsp;区<input value="<?php echo $user->others?>" style="text-align: right" type="text" id="qu"><br>
                                    </div>
                                </dd>
                            </dl>
                            
                        </div>
                    </div>
                    <div class="clear"></div>
                    
                    <div class="data">
                       
                        <a href="javascript:;" class="orange" id="saveInfo">保 存</a>
                    </div>
                </form>
                <form class="nav-data user_form user-avatar" action="" style="display: none" method="post" enctype="multipart/form-data">
                    <div class="data">
                        
                        <!-- 保存用户自定义的背景图片 -->  
                        <div class="my-avatar-box">
                            <!-- <p class="not-avatar">暂 无 头 像</p>
                            <img id="cropedBigImg" value='custom' alt="lorem ipsum dolor sit" data-address='' style="display: none"/>  -->


                            <div class="left image">
                                <img class="big-image" src="<?php $p = $avatar != ''?$avatar :'public/image/not_avatar.gif';echo $p;?>" alt="">
                            </div>
                            <div class="right image-list">
                                <?php foreach ($photos as $photo) {?>
                                    <div class="image-list-item">
                                        <img src="<?php echo $photo->photo?>" user-id="<?php echo $photo->u_id?>" data-set="<?php echo $photo->photo_id?>">
                                    </div>
                                <?php } ?>
                            </div>

                        </div>
                        <br />

                        <!-- <input type="file" name="userfile" size="20" id="chooseImg"/> -->
                        <div class="button-group">
                            <a href="javascript:;" class="file">选择文件
                                <input type="file" name="userfile" size="20" id="chooseImg">
                            </a>
                            <a href="javascript:;" class="upload">上传
                                <input type="text"/>
                            </a>
                            <a href="javascript:;" class="set-avatar">设为头像
                                <input type="text"/>
                            </a>
                             <!-- <a href="javascript:;" class="del_one">删除当前照片
                                <input type="text"/>
                            </a> -->
                        </div>
                        <!-- <input type="submit" value="upload" /> -->
                        <!-- <textarea name="" cols="" rows="" id="familyDescription" length="1000">您可以通过自我介绍描述自己的生活、工作、脾气性格、以及对未来的憧憬，真诚的自我介绍最能打动对方.</textarea>
                        <p class="cbd" id="textLength"><br />  </p>
                        <a href="javascript:;" class="orange" id="saveContent">保 存</a> -->
                    </div>
                

                </form>
                <!-- </form> -->
                <form class="nav-data user_form user-self-content" action="" style="display: none">

                    <div class="data">
                        <textarea name="" cols="" rows="" id="familyDescription" length="1000"><?php $a = $self_content == ""?"您可以通过自我介绍描述自己的生活、工作、脾气性格、以及对未来的憧憬，真诚的自我介绍最能打动对方.": $self_content;echo $a?></textarea>
                        <p class="cbd" id="textLength"><br />  </p>
                        <a href="javascript:;" class="orange" id="saveContent">保 存</a>
                    </div>
                </form>

                <form class="nav-data user_form user-passwd" action=""  style="display: none">
                    <div class="password"  style="text-align: center">
                        <dl>
                            <dt>当前密码</dt>
                            <dd>
                                <input id="passwdOld" name="passwdOld" type="password"><i id="passwdWrong"style="color: red;font-size: 20px;"></i>
                            </dd>
                            <dt>新密码</dt>
                            <dd>
                                <input id="passwd1" name="passwd1" type="password">
                            </dd>
                            <dt>确认新密码</dt>
                            <dd>
                                <input id="passwd2" name="passwd2" type="password"><i id="passwdSame"style="color: red;font-size: 20px;"></i>
                            </dd>
                        </dl>
                        <a class="orange" id="savePwd" style="display: inline-block">确认修改</a>
                    </div>
                </form>
                <form class="nav-data user_form" action=""  style="display: none">
                    <div class="data">
                            <div class="show_friends">
                                <?php foreach ($friend_list as $friend) {?>
                                    <div class="user_data">
                                        <div class="pict">
                                            <img src="<?php echo $friend["friend_avatar"]?>">
                                        </div>
                                        <div class="other_data">
                                            <span class="nick_name"><?php echo $friend["friend_name"]?></span>
                                            <div class="btns">
                                                <a href="javascript:;" class="delFriend" uid="<?php echo $friend["friend_id"]?>">删除好友</a>
                                                <a href="javascript:;" class="sendFriend" uid="<?php echo $friend["friend_id"]?>">发送消息</a>
                                            </div>
                                        </div>
                                    </div>
                                <?php } ?>     
                            </div>
                          
                    </div>
                </form>
                
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
    <script type="text/javascript" src="public/js/jquery.min.js" charset="utf-8"></script>
    <script type="text/javascript" src="public/js/userinfo/jquery.select-1.3.6_1.js" charset="utf-8"></script>
    <script type="text/javascript" src="public/js/userinfo/city.js" charset="utf-8"></script>
    <script type="text/javascript" src="public/js/userinfo/district.js" charset="utf-8"></script>
    <script type="text/javascript" src="public/js/userinfo/baihe_1.js" charset="utf-8"></script>
    <script src="public/js/userinfo/tongji-1.0.1.min_1.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript" src="public/js/userinfo/userinfo.js" charset="utf-8"></script>
    <!-- <script type="text/javascript" src="public/js/userinfo/main.js" charset="utf-8"></script> -->

    <script>
        // 选项卡
        $(function() {
            // $("#distpicker").distpicker();
            form_list = $(".myData > form");
            $(".mainNav a").each(function(index, ele) {
                $(ele).on('click', function(){
                    $(this).addClass("active");
                    $(this).siblings().removeClass("active");
                    $(form_list[index]).attr("style", "display: block").siblings("form").attr("style", "display: none");
                } )
            });

            $("#familyDescription").on('click', function() {
                $(this).val("")
            })
            //检查老的密码
            // $("#passwdOld").on("blur", function() {
            //     var passwdOld = $(this).val();
            //     $.get('user/checkPasswd', {
            //         passwdOld: passwdOld
            //     }, function(data) {
            //         if(data === "success"){
            //             // 显示绿色勾勾
            //         }else{
            //             // 显示红色叉叉
            //             $("#passswdWrong").html("×");
            //         }
            //     }, "text")
            // })
            // 检查两次的密码是否一样
            $("#passwd2").on("blur", function() {
                if($(this).val() !== $("#passwd1").val()){
                    // 显示两次密码不一致
                    $("#passswdSame").html("密码不一致");
                }else{
                    // 绿色勾勾
                }

            })
            // 检查图片
            $('#chooseImg').on('change',function(){  
                var filePath = $(this).val(),         //获取到input的value，里面是文件的路径  
                    fileFormat = filePath.substring(filePath.lastIndexOf(".")).toLowerCase(),  
                    src = window.URL.createObjectURL(this.files[0]); //转成可以在本地预览的格式  
                console.log(filePath);
                console.log(this.files);
                // 检查是否是图片  
                if( !fileFormat.match(/.png|.jpg|.jpeg/) ) {  
                    alert('上传错误,文件格式必须为：png/jpg/jpeg');  
                    return;    
                }  
            
                $('.big-image').attr('src',src);
            });  
            $('.delFriend').on("click", function() {
                delFriend(this);
            });
            $(".upload").on('click', function() {
                uploadPhoto();
            })
            $('#saveContent').on('click', function() {
                selfContent();
            })
            $("#savePwd").on('click', function() {
                updatePwd();
            })
            $('.set-avatar').on('click', function() {
                setAvatar();
            })
            $('.sendFriend').on('click', function () {
                        // console.log(11);          
                        var other = $(this).attr('uid');
                        var date_1 = new Date();
                        var year = date_1.getFullYear();
                        var month = date_1.getMonth();
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
                        console.log(22222);
                        $('#BAIHE').append(dialog);
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
                    });
            // 显示选择的图片 
            $(".image-list-item img").on('click', function() {
                console.log($(this));
                $(this).siblings().removeClass("avatar_active");
                $(this).addClass("avatar_active");
                $(".my-avatar-box .image img").attr('src',$(this).attr('src'));
            })
            // 删除当前照片
            // function del_pic(that){
            //     var uid  = $(that).attr('user-id');
            //     $.get()
            // }
            // 删除好友
            function delFriend(that) {
                var friend_id = $(that).attr('uid');
                console.log(friend_id);
                $.get("user/delete_friend",{
                    friend_id: friend_id
                }, function(res) {
                    res = res.trim();
                    if(res == 'success'){
                        alert('删除成功...');
                        location.href="user/info"
                    }else{
                        alert('删除失败...')
                    }
                },'text')
            }
            function setAvatar() {
                var photo_id = $(".avatar_active").attr('data-set');
                var u_id = $(".avatar_active").attr('user-id');
                $.get('user/set_avatar', {
                    photo_id: photo_id,
                    u_id: u_id
                }, function(data) {
                    data = data.trim();
                    if(data == "success"){
                        alert('设置成功....');
                        location.href="user/info"
                    }else{
                        alert('设置失败....');
                    }
                }, "text")
            }
            // 更新个人资料
            function updateUserInfo() {

            }
            // 更新自我介绍
            function selfContent() {
                var content = $("#familyDescription").val();
                console.log(content);
                $.get("user/updateContent",{
                    content: content
                }, function(data) {
                    data = data.trim();
                    if(data === "success"){
                        // 弹出层..成功..
                        alert('设置成功....');
                        location.href="user/info";
                    }else{
                        alert('设置失败....');
                    }
                }, "text")
            }
            
            // 修改密码
            function updatePwd() {
                var passwd = $("#passwd2").val();
                $.get("user/updatePasswd", {
                    passwd: passwd
                }, function(data) {
                    console.log(data);
                    data = data.trim();
                    if(data === "success"){
                        // 弹出层..成功..
                        alert("密码修改成功.....");
                        location.href="user/login";
                    }else{
                        alert("密码修改失败......");
                    }
                }, "text")
            }
            //更新头像
            function uploadPhoto() {
                var file = $('#chooseImg')[0].files[0];
                if(file){
                    var formdata = new FormData();
                    formdata.append('photo', file);
                    console.log(file);
                    console.log(formdata);
                    $.ajax({
                        url: "user/uploadPhoto",
                        type: "POST",
                        data: formdata,
                        dataType: 'text',
                        contentType: false,
                        processData: false,
                        cache: false,
                        success: function (data) { 
                            console.log(typeof(data));
                            console.log(data.length);
                            if(data.trim() === "success"){
                                alert("成功保存头像..3秒之后刷新页面....");
                                location.href="user/info";
                            }
                        }
                    });
                }
                
            }
        });
    </script>
    <script>  
        $(".datepicker").jsTransDate();
        $("#district").selectDistrict();
        $("#homeDistrict").selectDistrict();
        $('input:checkbox').jqTransCheckBox();
        $('input:radio').jqTransRadio();
        if ($('select').jqTransSelect().length > 0) { jqTransformAddDocumentListener(); }
        // function getIntegrity() {
          

        function validatePhone(ele) {
            if (!baihe.validateRules.isNull($(ele).val())) {
                if (!baihe.validateRules.isTel($(ele).val())) {
                    $(ele).siblings('.error').html('电话号码格式不正确！');
                    return false;
                } else {
                    $(ele).siblings('.error').html('');
                }
            } else {
                $(ele).siblings('.error').html('');
            }
            return true;
        }

     


        function init(options) {
            $("input[name='nickname']").val(options['nickname']);
            $('#gender span').html(options['gender'] == '1' ? '男' : '女');
            $('#animalSign').html(options['animalSignChn'] ? options['animalSignChn'] : '');
            $('#constellation').html(options['constellationChn'] ? options['constellationChn'] : '');
            options['occupation'] ? baihe.setBaiHeSelectVal('#occupation', options['occupation']) : '-1';
            //options['marriage']?baihe.setBaiHeSelectVal('#marriage',options['marriage']):'-1';
            options['children'] ? baihe.setBaiHeSelectVal('#children', options['children']) : '-1';
            options['homeDistrict'] ? baihe.setBaiHeDistrict('#homeDistrict', options['homeDistrictChn'], options['homeDistrict']) : baihe.setBaiHeDistrict('#homeDistrict', '中国', '86');
            options['housing'] ? baihe.setBaiHeSelectVal('#housing', options['housing']) : '-1';
            options['car'] ? baihe.setBaiHeSelectVal('#car', options['car']) : '-1';
            $("#mobileContact span").html(options['mobileContact'] ? options['mobileContact'] : '');
            $("input[name='phoneContact']").val(options['phoneContact'] ? options['phoneContact'] : '');
            $("input[name='weiXinContact']").val(options['weiXinContact'] ? options['weiXinContact'] : '');
            $("input[name='qqContact']").val(options['qqContact'] ? options['qqContact'] : '');
            $("input[name='otherContact']").val(options['otherContact'] ? options['otherContact'] : '');
            $("input[name='phoneContact']").on('blur', function () { validatePhone(this) });

            if (options['marriage'] == 4) {
                $("#marriage").html('<span class="LP">已婚</span><input type="hidden" name="marriage" value="' + options['marriage'] + '"></input>');
            } else {
                options['marriage'] ? baihe.setBaiHeSelectVal('#marriage', options['marriage']) : '-1';
            }

            validateUserInfo(options);

            $('#saveInfo').click(function () {
                if (validatePhone($("input[name='phoneContact']"))) {
                    var birthday, height, education, district, income, marriage;
                    if ($(".datepicker").length) {
                        birthday = baihe.getBaiHeDatePickerVal('.datepicker') == '-1' ? '' : baihe.getBaiHeDatePickerVal('.datepicker');
                    } else {
                        birthday = $("input[name='birthday']").val();
                    }
                    if ($("#height select").length) {
                        height = baihe.getBaiHeSelectVal('#height') == '-1' ? '' : baihe.getBaiHeSelectVal('#height');
                    } else {
                        height = $("input[name='height']").val();
                    }
                    if ($("#education select").length) {
                        education = baihe.getBaiHeSelectVal('#education') == '-1' ? '' : baihe.getBaiHeSelectVal('#education');
                    } else {
                        education = $("input[name='education']").val();
                    }
                    if ($("#district").length) {
                        district = baihe.getBaiHeDistrictDataVal('#district') ? baihe.getBaiHeDistrictDataVal('#district') : ''
                    } else {
                        district = $("input[name='district']").val();
                    }
                    if ($("#income select").length) {
                        income = baihe.getBaiHeSelectVal('#income') == '-1' ? '' : baihe.getBaiHeSelectVal('#income');
                    } else {
                        income = $("input[name='income']").val();
                    }

                    if ($("#marriage select").length) {
                        marriage = baihe.getBaiHeSelectVal('#marriage') == '-1' ? '' : baihe.getBaiHeSelectVal('#marriage');
                    } else {
                        marriage = $("input[name='marriage']").val();
                    }

                    var sheng = $('#sheng').val();
                    var shi = $('#shi').val();
                    var qu = $('#qu').val();
                    var edu = ['初中','中专/职高/技校','高中','大专','本科','硕士','博士']
                    var year = birthday.slice(0,4);
                    var month = birthday.slice(4,6);
                    var day = birthday.slice(6,8);
                    var mood = $('#mood').val();
                    var options = {
                        nickname: $("input[name='nickname']").val(),
                        // birthday: birthday,
                        height: height/100,
                        education: edu[education-1],
                        sheng: sheng.includes("省")?sheng:sheng + '省',
                        shi: shi.includes("市")?shi:shi + '市',
                        qu: qu.includes("区")?qu:qu + '区',
                        year: year,
                        month: month,
                        day: day,
                        mood: mood
                    };
                    console.log(options);
                    $.get('user/updateUserInfo',options,function(res) {
                        res = res.trim();
                        if(res == 'success'){
                            alert("成功保存...")
                        }else{
                            alert("保存失败...")
                        }
                    }, 'text')
                }
            });
        }

        
        init({ "nickname": "<?php echo $user->user_name?>", "gender": "<?php echo $user->sex?>"});

    
    </script>
</body>

</html>
