<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>

<head>
   
    <title>疯言疯语网·基本资料</title>
    <base href="<?php echo site_url() ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="public/image/favicon.ico" media="screen" /> 
    <link rel="stylesheet" href="public/css/reset.css">
    <link href="public/css/userinfo/public_2.css" rel="stylesheet" type="text/css" />
    <link href="public/css/userinfo/leftnav_1.css" rel="stylesheet" type="text/css" />
    <link href="public/css/userinfo/formstyle_1.css" rel="stylesheet" type="text/css" />
    <link href="public/css/userinfo/mydata.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" type="text/css" media="screen" href="public/css/userinfo/userinfo.css" />    
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
                <a href="" class="home"></a>
                <div id="select">
                    <a href="welcome/index">首页</a>
                    <?php if(isset($user) ){?>
                    <a href="user/info">我的疯言疯语</a>
                    <a href="welcome/searched">搜索</a>
                    <?php }else{?>
                    <a href="user/login">我的疯言疯语</a>
                    <a href="welcome/searched">搜索</a>
                    <?php } ?>

                </div>
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
                        <a href="http://profile1.baihe.com/?oppID=156185851">
                            <img src="public/image/not_avatar.gif">
                        </a>
                        <!-- <a href="http://my.baihe.com/myphoto/index" onclick="baihe.bhtongji.clickTongJi({'event':'3','spm':'4.2.2.459.1379'});" class="icon">上传照片</a>
                        <a href="http://my.baihe.com/userinfo/index" onclick="baihe.bhtongji.clickTongJi({'event':'3','spm':'4.2.2.460.1380'});" class="icon">编辑资料</a> -->
                    </dt>         
                </dl>        
                <div class="icon">            
                    <a href="http://msg.baihe.com/" onclick="baihe.bhtongji.clickTongJi({'event':'3','spm':'2.15.43.148.224'});">
                        <strong>0</strong><br>消息<span></span>
                    </a>            
                    <a href="http://product.baihe.com/coin" onclick="baihe.bhtongji.clickTongJi({'event':'3','spm':'2.15.43.186.289'});">
                        <strong>0</strong><br>好友<span></span>
                    </a>			
                    <!-- <a href="http://trade.baihe.com/myOrder?orderStatus=0" onclick="baihe.bhtongji.clickTongJi({'event':'3','spm':'2.15.43.150.226'});">
                        <strong id="persDataPetalNum">0</strong><br>订单
                    </a>         -->
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
                    <a></a>
                    
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
                                        <input name="" id="homeDistrict" autocomplete="off" type="text" value="请选择您的家乡" class="city_input  inputFocus proCityQueryAll proCitySelAll"
                                            ov="请选择/输入城市名称" />
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
                            <p class="not-avatar">暂 无 头 像</p>
                            <img id="cropedBigImg" value='custom' alt="lorem ipsum dolor sit" data-address='' style="display: none"/> 
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
                        <textarea name="" cols="" rows="" id="familyDescription" length="1000">您可以通过自我介绍描述自己的生活、工作、脾气性格、以及对未来的憧憬，真诚的自我介绍最能打动对方.</textarea>
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
    <script>
        // 选项卡
        $(function() {

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
            
                $('#cropedBigImg').attr('src',src).attr("style", "");
                $('.my-avatar-box').attr("style", "background: #fff")
                $(".not-avatar").attr("style", "display: none;");
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
                    if(data === "success"){
                        // 弹出层..成功..
                    }
                }, "text")
            }
            
            // 修改密码
            function updatePwd() {
                var passwd = $("#passwd2").val();
                $.get("user/updatePasswd", {
                    passwd: passwd
                }, function(data) {
                    if(data === "success"){
                        // 弹出层..成功..
                        alert("密码修改成功");
                    }
                }, "text")
            }
            //更新头像
            function uploadPhoto() {
                var file = $('#chooseImg')[0].files[0];
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
        });
    </script>
    <script>  
        $(".datepicker").jsTransDate();
        $("#district").selectDistrict();
        $("#homeDistrict").selectDistrict();
        $('input:checkbox').jqTransCheckBox();
        $('input:radio').jqTransRadio();
        if ($('select').jqTransSelect().length > 0) { jqTransformAddDocumentListener(); }
        function getIntegrity() {
            // $.ajax({
            //     url: 'http://my.baihe.com/getinterlogin/getDataState?jsonCallBack=?',
            //     dataType: 'jsonp',
            //     success: function (msg) {
            //         if (msg && msg['state'] == '1') {
            //             if (msg['data']['dataIntegrity']) {
            //                 $('.strip').animate({
            //                     'width': (msg['data']['dataIntegrity'] + '%')
            //                 }, "slow")
            //                 $('#dataOrang').html(msg['data']['dataIntegrity'] + '%');
            //             }
            //             if (msg['data']['baseDataState'] == "1") {
            //                 $('.explain').html('恭喜您完善了基本资料，让异性有更多机会了解您！');
            //                 $('.mainNav a').eq(0).find('strong').removeClass('label01');
            //             }
            //             else {
            //                 $('.mainNav a').eq(0).find('strong').addClass('label01');
            //                 $('.explain').html('完整的基本资料不仅能让异性初步的了解您，更是异性搜索到您的重要保证，补充以下未填信息资料完整度增加 <span class="orangeT">5%</span>哦！');
            //             }
            //             if (msg['data']['myPhotoState'] != "1") {
            //                 $('.mainNav a').eq(1).find('strong').addClass('label01');
            //             }
            //             if (msg['data']['detailDataState'] != "1") {
            //                 $('.mainNav a').eq(3).find('strong').addClass('label01');
            //             }
            //             if (msg['data']['myLikeState'] != "1") {
            //                 $('.mainNav a').eq(4).find('strong').addClass('label01');
            //             }
            //         }
            //     }
            // });
        }

        // function validateMobile(ele) {
        //     if (!baihe.validateRules.isNull($(ele).val())) {
        //         if (baihe.validateRules.isMobile($(ele).val())) {
        //             $(ele).siblings('.error').html('');
        //         } else {
        //             $(ele).siblings('.error').html('手机号码格式错式错误');
        //             return false;
        //         }
        //     } else {
        //         $(ele).siblings('.error').html('');
        //     }
        //     return true;
        // }

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

        function validateUserInfo(options) {
            // $.ajax({
            //     url: 'http://my.baihe.com/getinterlogin/checkToEditState?jsonCallBack=?',
            //     dataType: 'jsonp',
            //     success: function (msg) {
            //         if (msg && msg['state'] == "1") {
            //             if (msg['data']['birthday']) {
            //                 $("#birthDay").html(options['birthday'].slice(0, 4) + '年' + options['birthday'].slice(4, 6) + '月' + options['birthday'].slice(6, 8) + '日<input type="hidden" name="birthday" value="' + options['birthday'] + '"></input>');
            //             } else {
            //                 options['birthday'] ? (baihe.setBaiHeDatePickerVal('.datepicker', options['birthday'])) : '';
            //             }
            //             if (msg['data']['height']) {
            //                 $("#height").html('<span class="LP">' + options['height'] + '</span><span class="orangeT">* 距离下次修改有' + msg['data']['height'] + '天</span><input type="hidden" name="height" value="' + options['height'] + '"></input>');
            //             } else {
            //                 options['height'] ? baihe.setBaiHeSelectVal('#height', options['height']) : '-1';
            //             }

            //             if (msg['data']['education']) {
            //                 $("#education").html(options['educationChn'] + '<input type="hidden" name="education" value="' + options['education'] + '"></input>');
            //             } else {
            //                 options['education'] ? baihe.setBaiHeSelectVal('#education', options['education']) : '-1';
            //             }
            //             if (msg['data']['district']) {
            //                 $("#districtInfo").html('<span class="LP">' + options['districtChn'] + '</span><span class="orangeT">* 距离下次修改有' + msg['data']['district'] + '天</span><input type="hidden" name="district" value="' + options['district'] + '"></input>');
            //             } else {
            //                 //  options['district']?baihe.setBaiHeDistrict('#district',options['districtChn'],options['district']):baihe.setBaiHeDistrict('#district','中国','86');
            //                 if (options['district'].length > 6) {
            //                     options['district'] ? baihe.setBaiHeDistrict('#district', options['provinceChn'] + options['districtChn'], options['district']) : baihe.setBaiHeDistrict('#district', '中国', '86');
            //                 } else {
            //                     options['district'] ? baihe.setBaiHeDistrict('#district', options['districtChn'], options['district']) : baihe.setBaiHeDistrict('#district', '中国', '86');
            //                 }

            //             }
            //             if (msg['data']['income']) {
            //                 $("#income").html('<span class="LP">' + options['incomeChn'] + '</span><span class="orangeT">* 距离下次修改有' + msg['data']['income'] + '天</span><input type="hidden" name="income" value="' + options['income'] + '"></input>');
            //             } else {
            //                 options['income'] ? baihe.setBaiHeSelectVal('#income', options['income']) : '-1';
            //             }
            //         }
            //         else {
            //             return false;
            //         }
            //     }
            // });
        }


        function init(options) {
            getIntegrity();
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
            //    $("input[name='mobileContact']").val(options['mobileContact']?options['mobileContact']:'');   
            $("#mobileContact span").html(options['mobileContact'] ? options['mobileContact'] : '');
            $("input[name='phoneContact']").val(options['phoneContact'] ? options['phoneContact'] : '');
            $("input[name='weiXinContact']").val(options['weiXinContact'] ? options['weiXinContact'] : '');
            $("input[name='qqContact']").val(options['qqContact'] ? options['qqContact'] : '');
            $("input[name='otherContact']").val(options['otherContact'] ? options['otherContact'] : '');
            // $("input[name='mobileContact']").on('blur',function(){validateMobile(this)});
            $("input[name='phoneContact']").on('blur', function () { validatePhone(this) });

            if (options['marriage'] == 4) {
                $("#marriage").html('<span class="LP">已婚</span><input type="hidden" name="marriage" value="' + options['marriage'] + '"></input>');
            } else {
                options['marriage'] ? baihe.setBaiHeSelectVal('#marriage', options['marriage']) : '-1';
            }
            // if (options['marriage'] == '1' || options['marriage'] == '2') {
            //     $('#marriage select')[0].onchange = function () {
            //         if ($(this).val() == '1') {
            //             baihe.block({
            //                 title: '提示',
            //                 text: '婚姻状况由离异或丧偶改成未婚状态时，请联系客服修改',
            //                 callback: function () {
            //                     baihe.setBaiHeSelectVal('#marriage', options['marriage']);
            //                 }
            //             });
            //         }

            //     };
            // }
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


                    var options = {
                        nickname: $("input[name='nickname']").val(),
                        birthday: birthday,
                        height: height,
                        education: education,
                        // occupation: baihe.getBaiHeSelectVal('#occupation') == '-1' ? '' : baihe.getBaiHeSelectVal('#occupation'),
                        // marriage: marriage,
                        // children: baihe.getBaiHeSelectVal('#children') == '-1' ? '' : baihe.getBaiHeSelectVal('#children'),
                        district: district,
                        homeDistrict: baihe.getBaiHeDistrictDataVal('#homeDistrict') ? baihe.getBaiHeDistrictDataVal('#homeDistrict') : '',
                        income: income,
                        // housing: baihe.getBaiHeSelectVal('#housing') == '-1' ? '' : baihe.getBaiHeSelectVal('#housing'),
                        // car: baihe.getBaiHeSelectVal('#car') == '-1' ? '' : baihe.getBaiHeSelectVal('#car'),
                        // mobileContact: $("#mobileContact span").val(),
                        phoneContact: $("input[name='phoneContact']").val(),
                        weiXinContact: $("input[name='weiXinContact']").val(),
                        qqContact: $("input[name='qqContact']").val(),
                        // otherContact: $("input[name='otherContact']").val()
                    };
                    if (options['nickname'].length > 12) {
                        baihe.block({
                            title: '提示',
                            text: '昵称最长不能超过12个字符'
                        });
                        return;
                    }
                    if (new RegExp(baihe.validateRegExp.nikename).test(options['nickname']) == false) {
                        baihe.block({
                            title: '提示',
                            text: '昵称最多可输入12个汉字、字母或数字'
                        });
                        return;
                    }
                    if (options['district'].slice(0, 2) == "86" && options['district'].slice(0, 5) != "8623" && options['district'].slice(0, 5) != "8681" && options['district'].slice(0, 5) != "8682" && options['district'].slice(0, 5) != "8683" && options['district'].length < 6) {
                        baihe.block({
                            title: '提示',
                            text: '请选择所在地区'
                        });
                        return;
                    }
                    console.log(options);
                    // saveUserInfo(options);
                }
            });
        }

        function saveUserInfo(opt) {
            // $.ajax({
            //     url: 'http://my.baihe.com/Userinfo/subBasicInfo?jsonCallBack=?',
            //     dataType: 'jsonp',
            //     data: opt,
            //     success: function (msg) {
            //         if (msg && msg['state'] == "-1") {
            //             location.href = msg['data'];
            //         } else if (msg && msg['state'] == "1") {
            //             baihe.block({
            //                 title: '提示',
            //                 text: '保存完成',
            //                 callback: function () {
            //                     getIntegrity();
            //                 }
            //             });
            //             return true;
            //         } else if (msg && msg['state'] == "0") {
            //             baihe.block({
            //                 title: '提示',
            //                 text: '保存完成',
            //                 callback: function () {
            //                     getIntegrity();
            //                 }
            //             });
            //             return true;
            //         }
            //         else {
            //             baihe.block({
            //                 title: '提示',
            //                 text: msg['data']
            //             });
            //             return false;
            //         }
            //     }
            // });
        }
        init({ "nickname": "\u591c\u7684\u7ec8\u7ae0", "gender": "1", "birthday": "19961228", "height": "170", "education": "5", "occupation": null, "marriage": "1", "children": null, "district": "86230103", "income": "4", "housing": null, "car": null, "mobileContact": "15945697079", "phoneContact": null, "weiXinContact": null, "qqContact": null, "otherContact": null, "districtChn": "\u54c8\u5c14\u6ee8\u5e02\u5357\u5c97\u533a", "provinceChn": "\u9ed1\u9f99\u6c5f\u7701", "constellation": "10", "animalSign": "1", "constellationChn": "\u9b54\u7faf\u5ea7", "animalSignChn": "\u9f20", "educationChn": "\u672c\u79d1", "incomeChn": "2000-5000" });

    </script>
</body>

</html>