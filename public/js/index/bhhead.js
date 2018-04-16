var isMember=false;  //判断是否为会员
var link = document.createElement('link');
 link.rel = 'shortcut icon';
 link.href = 'http://images6.baihe.com/favicon.ico';
 document.getElementsByTagName('head')[0].appendChild(link);
//  var hasLogin = document.cookie.search('AuthCookie') >= 0;
var hasLogin = true;
//<dt><a href="http://product.baihe.com/flashmsg" event="3" spm="4.14.42.864.2277" onclick="baihe.cookie.setCookie(\'orderSource\', \'10020111\',\'\',\'\/\',\'.baihe.com\');">爱情速递</a></dt>
//  document.write('<div id="bhHeaderH">\
//  <div id="bhHeader">\
//  <div class="headTop">\
// 		<div class="navTop">\
// 			<div class="right">\
// 				<!--- 注册登录 --->\
// 				<dl>\
// 					<dt id="loginHandle" style="display:none;">\
// 						<a href="http://my.baihe.com/register"  event="3" spm="4.14.42.258.985" >注册</a>　\
// 						<a href="http://my.baihe.com/login" event="3" spm="4.14.42.257.984" >登录</a>\
// 					</dt>\
//                 </dl>\
// 				<!--- 注册登录后状态 --->\
// 				<div id="userInfoHandle" class="setUp" style="display:none;">\
// 					<div class="member">\
// 						<a href="" class="name" event="3" spm="4.14.42.461.2518"><span>Hi，</span><strong id="nickName2"></strong></a>\
// 						<div class="pic">\
// 							<a href="javascript:;" target="_blank" onclick="baihe.cookie.setCookie(\'orderSource\', \'10010101\',\'\',\'\/\',\'.baihe.com\')"><img src="http://images9.baihe.com/home/nav_icon.gif" alt="会员状态"  /></a>\
// 							<div class="info" style="display:none"><em></em><span class="info_info"></span></div>\
// 						</div>\
// 					</div>\
// 					<ul>\
// 						<li>\
// 							<a class="message" href="http://msg.baihe.com" event="3" spm="4.14.42.869.2282"><em class="">消息</em></a>\
// 						</li>\
// 						<li>\
// 							<a class="set" href="javascript:;"><em class="">设置</em></a>\
// 							<div class="menu" style="display:none">\
// 								<em >空白</em>\
// 								<div>\
// 									<a href="http://my.baihe.com/userinfo/" event="3" spm="4.14.42.872.2286" >我的资料</a>\
// 									<a href="http://my.baihe.com/setting/" event="3" spm="4.14.42.874.2288" >账号设置</a>\
// 									<a href="javascript:;" id="logOut" event="3" spm="4.14.42.877.2291" >退&#12288;&#12288;出</a>\
// 								</div>\
// 							</div>\
// 						</li>\
// 					</ul>\
// 				</div>\
// 			</div>\
// 		</div>\
// 	</div>\
//    <div class="head">\
//         <h1><a href="http://www.baihe.com/index.shtml" class="logo" event="3" spm="4.14.42.844.2254">百合网,实名婚恋网开创者</a></h1>\
//          <div class="nav">\
//             <ul>\
//                 <li><a href="http://www.baihe.com/home.shtml" event="3" spm="4.14.42.131.2255">首页</a></li>');
                
//     if(location.href.indexOf("user.baihe.com") >= 0||location.href.indexOf("u.baihe.com") >= 0)
//     {document.write('<li><a class="active" href="http://u.baihe.com/" event="3" spm="4.14.42.845.2256" >我的百合</a></li>');}
//     else{
//         document.write('<li><a href="http://u.baihe.com/" event="3" spm="4.14.42.845.2256" >我的百合</a></li>')
//         };
// document.write('<li><a href="http://search.baihe.com" style="z-index:10" event="3" spm="4.14.42.684.2258" >搜索</a></li>')						
// 				document.write('</ul>\
//         </div>\
//     </div>\
// 	<div class="salePrice" style="display:none;"><a href=""></a></div>\
// 	</div>\
// </div>');



//---------鼠标放上去的效果
 //--主导航
 $('#bhHeader li').each(function() {
     $(this).mouseover(function() {
         $(this).children('a').addClass('down').end().find('.navMenu').show();
         $(this).find('dt').mouseover(function(event) {
             $(this).addClass('active').find('dl').show();
         }).mouseout(function(event) {
             $(this).removeClass('active').find('dl').hide();
         });;
     }).mouseout(function() {
         $(this).children('a').removeClass('down').end().find('.navMenu').hide();
     });;
 });
 

 //--设置
 $('#userInfoHandle li').each(function() {
     $(this).mouseover(function() {
		 $(this).children('.set').addClass('active').end().find('.menu').show();
     }).mouseout(function() {
         $(this).children('.set').removeClass('active').end().find('.menu').hide();
     });;
 });
 
$('#userInfoHandle .pic').hover(function(){
	$('#userInfoHandle .info').show();	  
},function(){
	$('#userInfoHandle .info').hide();	
});

 
//---------结束
 if (hasLogin) {
     ! function getLoginInfo() {
         $.ajax({
             type: "get",
             url: "http://my.baihe.com/getinterlogin/headInter?rand=" + Math.random() * 500 + "&jsonCallBack=?",
             async: true,
             dataType: "jsonp",
             success: function(msg) {
                 if (typeof msg != "undefined" && msg) {
                     if (msg['state'] == '1') {
                         $('#logOut').click(function(event) {
                             baihe.cookie.setCookie("GCUserID", -1, baihe.cookie.getExpDate(0, 0, 0), "/", "baihe.com");
                             baihe.cookie.setCookie("AuthCookie", "", baihe.cookie.getExpDate(0, 0, 0), "/", "baihe.com");
                             baihe.cookie.setCookie("Token", "", baihe.cookie.getExpDate(0, 0, 0), "/", "baihe.com");
                             baihe.cookie.setCookie("GCEmail", "", baihe.cookie.getExpDate(0, 0, 0), "/", "baihe.com");
                             location.href = "http://www.baihe.com/index.shtml";
                         });
                        //  $('#loginHandle').hide();
                         $('#userInfoHandle').show();
                         $('.setUp li').mouseover(function(event) {
                             $(this).find('em').addClass('now').end().children('.menu').show().end().siblings().find('.menu').hide();
                         }).mouseout(function(event) {
                             $(this).find('em').removeClass('now').end().children('.menu').hide();
                         });
                         if (typeof msg['data'] != "undefined" && msg['data']) {
                             if (0 < parseInt(msg['data']['msNum']) < 999) {
                                 $('#msNum').html('(' + msg['data']['msNum'] + ')');
                             } else if (parseInt(msg['data']['msNum']) > 999) {
                                 $('#msNum').html('(999+)');
                             }
                             if (0 < parseInt(msg['data']['adminNum']) < 999) {
                                 $('#adminNum').html('(' + msg['data']['adminNum'] + ')');
                             } else if (parseInt(msg['data']['adminNum']) > 999) {
                                 $('#adminNum').html('(999+)');
                             }
                             if (0 < parseInt(msg['data']['noticNum']) < 999) {
                                 $('#noticNum').html('(' + msg['data']['noticNum'] + ')');
                             } else if (parseInt(msg['data']['noticNum']) > 999) {
                                 $('#noticNum').html('(999+)');
                             }
                             /*
                                *注释标准头显示消息浮层
                              */
                             // if (msg['data']['userID']) {
                             //     //弹出消息
                             //     bzt_curUrl = window.location.href;
                             //     bzt_loginUserId = msg['data']['userID'];
                             //     bzt_isMainUser = bzt_loginUserId > 0;
                             //     title_ori = document.title; // 当前域名标题
                             //     bzt_headType = bzt_getHeadType(bzt_curUrl + "");
                             //     isFpage = bzt_headType == 0 ? true : false;
                             //     bzt_lovepull();
                             //     bzt_showMsgInfoNew(isFpage);
                             //     setRealAuthInfo();
                             // }
                         }
                     } else if (msg['state'] == "0" && msg['data'] == 'noRegistAll') {
                         location.href = "http://my.baihe.com/register/";
                     } else if (msg['state'] == "0" && msg['data'] == 'noLogin') {
                         $(".signIn").show();
                     }
                 }
             }
         });
     }();
 } else {
     $("#loginHandle").show();
 }







 /*
    *注释标准头显示消息浮层
    */
 /*

 //信息弹层
 var bzt_curUrl;
 var bzt_loginUserId;
 var bzt_isMainUser;
 var loopMsgInfoTask;
 var loopMsgTimes; // 一分钟循环一次
 var title_ori; // 当前域名标题
 var bzt_headType;
 var close_msg_pop_flag = 0;
 var show_msg_flag = 0;
 var newmsg_all_inHead = 0;
 var falg_flash = 0;
 var startScroll = 1;
 var loadM4h = 3;

bzt_curUrl = window.location.href;
if(bzt_curUrl.indexOf(('http://xact.baihe.com/html/201504/guomeijia').toLowerCase())>-1){
    $('.nav li a').first().removeClass('active').end().last().addClass('active').removeAttr('target');    
}
*/
 function start_scroll() {
     if (startScroll != 1) {
         clearInterval(startScroll); // 每次调用时，先删除任务，防止重叠
     }
     startScroll = setInterval(do_scroll, 1300);
 }

 function do_scroll() {
//     if (falg_flash % 2) {
//         document.title = '【新消息】' + title_ori;
//		 $('#userInfoHandle .message').addClass('messageA');
//     } else {
//         document.title = '【　　　】' + title_ori;
//		 $('#userInfoHandle .message').addClass('messageA');
//     }
//     falg_flash = falg_flash + 1;
 }

 function cancel_scroll() {
     clearInterval(startScroll);
	$('#userInfoHandle .message').removeClass('messageA');
     document.title = title_ori;
 }

 function changeStartScroll(msgNum_) {
     var arr_msg = new Array();
     arr_msg[0] = 0;
     arr_msg[1] = msgNum_;
     baihe.cookie.setCookie("newMsg_status" + bzt_loginUserId, arr_msg, baihe.cookie.getExpDate(1, 0, 0), "/", "baihe.com");
     start_scroll();
 }

 function changeEndScroll(msgNum_) {
     var arr_msg = new Array();
     arr_msg[0] = 1;
     arr_msg[1] = msgNum_;
     baihe.cookie.setCookie("newMsg_status" + bzt_loginUserId, arr_msg, baihe.cookie.getExpDate(1, 0, 0), "/", "baihe.com");
     cancel_scroll();
 }

/*
 function bzt_lovepull() {
     if (bzt_curUrl.indexOf("http://lovepull.baihe.com/lovepull.action") > -1) {
         location.href = "http://applove.baihe.com";
     }
 }



 //消息提醒类型
 var todayNewMsgTypeText = {
     '0001|0': '<li><dl><dt><img src="$user.mainPhoto" width="36" height="45" alt="" /></dt><dd><h5>他给你写信了</h5>$user.age岁,$user.city<a class="linkP" target="_blank" href="http://bhtg.baihe.com/stat.html?ggCode=baiheheadms_1#http://ms.baihe.com?userId=$user.id">去看信</a></dd></dl></li>',

     '0001|1': '<li><dl><dt><img src="$user.mainPhoto" width="36" height="45" alt="" /></dt><dd><h5>她给你写信了</h5>$user.age岁,$user.city<a class="linkP" target="_blank" href="http://bhtg.baihe.com/stat.html?ggCode=baiheheadms_1#http://ms.baihe.com?userId=$user.id">去看信</a></dd></dl></li>',

     '0002|0': '<li><dl><dt><img src="$user.mainPhoto" width="36" height="45" alt="" /></dt><dd><h5>他回复了你</h5>$user.age岁,$user.city<a class="linkP" target="_blank" href="http://bhtg.baihe.com/stat.html?ggCode=baiheheadms_2#http://ms.baihe.com?userId=$user.id">去看信</a></dd></dl></li>',

     '0002|1': '<li><dl><dt><img src="$user.mainPhoto" width="36" height="45" alt="" /></dt><dd><h5>她回复了你</h5>$user.age岁,$user.city<a class="linkP" target="_blank" href="http://bhtg.baihe.com/stat.html?ggCode=baiheheadms_2#http://ms.baihe.com?userId=$user.id">去看信</a></dd></dl></li>',

     '0003|0': '<li><dl><dt><img src="$user.mainPhoto" width="36" height="45" alt="" /></dt><dd><h5>他给你发信了</h5>$user.age岁,$user.city<a class="linkP" target="_blank" href="http://bhtg.baihe.com/stat.html?ggCode=baiheheadms_3#http://ms.baihe.com?userId=$user.id">去看信</a></dd></dl></li>',

     '0003|1': '<li><dl><dt><img src="$user.mainPhoto" width="36" height="45" alt="" /></dt><dd><h5>她给你发信了</h5>$user.age岁,$user.city<a class="linkP" target="_blank" href="http://bhtg.baihe.com/stat.html?ggCode=baiheheadms_3#http://ms.baihe.com?userId=$user.id">去看信</a></dd></dl></li>',

     '0004|0': '<li><dl><dt><img src="$user.mainPhoto" width="36" height="45" alt="" /></dt><dd><h5>他给你发信了</h5>$user.age岁,$user.city<a class="linkP" target="_blank" href="http://bhtg.baihe.com/stat.html?ggCode=baiheheadms_4#http://ms.baihe.com?userId=$user.id">去看信</a></dd></dl></li>',

     '0004|1': '<li><dl><dt><img src="$user.mainPhoto" width="36" height="45" alt="" /></dt><dd><h5>她给你发信了</h5>$user.age岁,$user.city<a class="linkP" target="_blank" href="http://bhtg.baihe.com/stat.html?ggCode=baiheheadms_4#http://ms.baihe.com?userId=$user.id">去看信</a></dd></dl></li>'
 }
*/
 function bzt_getHeadType(url) { // alert(url+"
//		"+url.indexOf("profile1.baihe.com"));
//		if (url != null) {
//         if (url.indexOf(("baihe.com/home.shtml").toLowerCase()) >= 0) {
//             return -1;
//         }
//         if (url.indexOf("profile1.baihe.com") >= 0 || url.indexOf("product.baihe.com") >= 0 || url.indexOf("product.baihe.com/baihecard") >= 0 || url.indexOf("market.baihe.com/view/product/service.jsp") >= 0 || url.indexOf("product.baihe.com") >= 0) { //白标准头、无搜索条
//             return 1;
//         }
//         if (url.indexOf("user.baihe.com") >= 0 || url.indexOf("u.baihe.com") >= 0 || url.indexOf("credit.baihe.com") >= 0) { // 带搜索条、我的百合高亮
//             return 2;
//         }
//         if (url.indexOf("story.baihe.com/index.php?action=openSpace") >= 0 || url.indexOf("video.baihe.com/user/MyVideo.action") >= 0 || url.indexOf("open.baihe.com/connector/t/OpenStatus.action") >= 0 || url.indexOf("app.baihe.com/test") >= 0) { // 带搜索条
//             // 特殊处理的
//             return 6;
//         }
//         if (url.indexOf("search.baihe.com") >= 0 || url.indexOf("class.baihe.com") >= 0 || url.indexOf("userinfo.baihe.com/UserBasicInfo4Task.action?doneNewTask=0") >= 0 || url.indexOf("photograph.baihe.com/photograph/photoNormalTask.do?taskStatus=0") >= 0 || url.indexOf("product.baihe.com") >= 0 || url.indexOf("userinfo.baihe.com/LovePlanningNomal.action?doneNewTask=0") >= 0) {
//             return 5;
//         }
//
//         if ( url.indexOf("msg.baihe.com") >= 0 || url.indexOf("task.baihe.com") >= 0 || url.indexOf("priv.baihe.com") >= 0 || url.indexOf("open.baihe.com") >= 0 || url.indexOf("coin.baihe.com") >= 0 || url.indexOf("userinfo.baihe.com") >= 0 || url.indexOf("lovemap.baihe.com") >= 0 || url.indexOf("auth.baihe.com") >= 0 || url.indexOf("realswap.baihe.com") >= 0 || url.indexOf("lovepull.baihe.com") >= 0 || url.indexOf("top.baihe.com") >= 0 || url.indexOf("test.baihe.com") >= 0 || url.indexOf("product.baihe.com") >= 0 || url.indexOf("score.baihe.com") >= 0 || url.indexOf("psymatch.baihe.com") >= 0 || url.indexOf("event.baihe.com") >= 0 || url.indexOf("media.baihe.com") >= 0 || url.indexOf("help.baihe.com") >= 0 || url.indexOf("face.baihe.com") >= 0 || url.indexOf("blog.baihe.com") >= 0 || url.indexOf("photograph.baihe.com") >= 0 || url.indexOf("news.baihe.com") >= 0 || url.indexOf("ms.baihe.com") >= 0) { // 带搜索条
//             return 3;
//         }
//         if ( url.indexOf("shouji.baihe.com") >= 0 || url.indexOf("emotion.baihe.com") >= 0 || url.indexOf("video.baihe.com") >= 0 || url.indexOf("story.baihe.com") >= 0) {
//             return 4;
//         }
//     }
     return 9;
 }
//profile 发消息按钮事件
 function recordBhtg(ggcode) {
     if (typeof(ggcode) != 'undefined' && ggcode != null && ggcode != '' && ggcode.indexOf("_") > 0) {
         var img = new Image();
         img.src = "http://bhtg.baihe.com/stat.html?ggCode=" + ggcode;
     }
 }
/*

 //是否提示当天有未读消息
 function bzt_todayNewMsgInfo(msgInfo) {
     var todayNoRead = msgInfo.todayNoRead;
     var todayNoRead_c = baihe.cookie.getCookie("ck_msgInfo_bzt_todayNoRead_" + bzt_loginUserId);
     if (typeof(todayNoRead_c) != 'undefined' && todayNoRead_c != null && todayNoRead_c != '') {
         todayNoRead = todayNoRead_c;
     }
     if (typeof(todayNoRead) != 'undefined' && todayNoRead != null && todayNoRead > 0) {
         loopMsgTimes = 60000; //设置循环时间
         baihe.cookie.setCookie("ck_msgInfo_bzt_loopTime_" + bzt_loginUserId, loopMsgTimes, baihe.cookie.getExpDate(0, 0, 2), "/", "baihe.com");
         if (bzt_curUrl.indexOf("ms.baihe.com") > 0) {
             $("#noticeMsg").hide();
             return;
         }
         $("#todayNoRead").html(todayNoRead);
         setTodayNoReadList(msgInfo);
         if (bzt_headType > 0) {
             $(".message em").addClass('now');
             $("#noticeMsg").show();
         }else{
            $('#bhHeader .nav li:first a').addClass('active');
         }

         if (parseInt(todayNoRead) > 1) {
             $("#scrollPoint").textSlider({
                 line: 1,
                 speed: 500,
                 timer: 8000
             });
         }
         recordBhtg("baiheheadhc_1");
     } else {
         var firstTime = baihe.cookie.getCookie("ck_msgInfo_bzt_firstloopTime_" + bzt_loginUserId);
         if (new Date().getTime() - firstTime < 300 * 1000) {
             loopMsgTimes = 10000; //设置循环时间
         } else {
             loopMsgTimes = 60000; //设置循环时间
         }
         baihe.cookie.setCookie("ck_msgInfo_bzt_loopTime_" + bzt_loginUserId, loopMsgTimes, baihe.cookie.getExpDate(0, 0, 2), "/", "baihe.com");
         $("#noticeMsg").hide();
         if (bzt_headType < 0) {
             $('#bhHeader .nav li:first a').addClass('active');
         }
     }
 }

 //设置滚动消息
 function setTodayNoReadList(msgInfo) {
     var todayUsersList = eval('(' + msgInfo.todayUsers + ')');
     var todayUserids = msgInfo.todayUserids;
     var userArr = todayUserids.split(",");
     var userGender = msgInfo.gender == 0 ? "0" : "1";
     var todayuserId; //发信人id
     var todayuser; //发信人详细信息
     var todayusermainphoto; //发信人照片
     var todayuserage; //发信人年龄
     var todayusercity; //发信人所在省
     var todayuserpathid; //发信类型
     var todayNoticeType = ""; //匹配文案类型
     var todayNoReadHtml = '<ol>';
     var tmpHtml;
     for (var i = 0; i < userArr.length; i++) {
         todayuserId = userArr[i];
         if (todayUsersList[todayuserId]) {
             try {
                 todayuser = todayUsersList[todayuserId];
                 todayusermainphoto = todayuser.mainphoto;
                 todayuserage = todayuser.age;
                 todayusercity = todayuser.city;
                 todayuserpathid = todayuser.pathid + "";
                 if (todayuserpathid.endsWith("0001")) {
                     todayuserpathid = "0001";
                 } else if (todayuserpathid.endsWith("0002")) {
                     todayuserpathid = "0002";
                 } else if (todayuserpathid.endsWith("0003")) {
                     todayuserpathid = "0003";
                 } else {
                     todayuserpathid = "0004";
                 }
                 todayNoticeType = todayuserpathid + "|" + userGender;
             } catch (e) {
                 todayNoticeType = "0004|" + userGender;
             }
             tmpHtml = todayNewMsgTypeText[todayNoticeType].replace(new RegExp("\\$user.id", "gm"), todayuserId).replace(new RegExp("\\$user.mainPhoto", "gm"), todayusermainphoto).replace(new RegExp("\\$user.age", "gm"), todayuserage).replace(new RegExp("\\$user.city", "gm"), todayusercity);
             todayNoReadHtml += tmpHtml;
         }
     }
     todayNoReadHtml += '</ol>';
     $("#scrollPoint").html(todayNoReadHtml);
 }
 */
$.getJSON('http://my.baihe.com/getinterlogin/baiHeIndex?jsonCallBack=?', function(data) {
	var $aHref=data.data.userID;
	//var $a=$('<a/>');
	//$a.attr('href','http://profile1.baihe.com/?oppID='+ $aHref +'');
	//$a.appendTo($('#nickName2'));
	$('#nickName2').parent().attr('href','http://profile1.baihe.com/?oppID='+ $aHref +'');
	$('#nickName2').text(data.data.nickname);
});

 function bzt_showMsgInfo(msgInfo, isFirstPage) {
     var _userName = msgInfo.userName;
     var _gender = msgInfo.gender;
     //cityCode = msgInfo.cityCode;
     var age = msgInfo.age;

	 //头部信息取值
	 $('#nickName2').text(_userName);
	 
     if (isFirstPage) {
         _userName = index_split(_userName, 10);
         $("#sy_UserName").html(_userName + "&nbsp;");
         $("#sy_newMsg").html(msgInfo.noReadAllMsg_u);
         $("#sy_CityName").html(msgInfo.cityChn);
         var p = msgInfo.mainPhoto;
         if (typeof(p) != 'undefined' && p != null) {
             p = p.replace("120_150", "36_45");
             var photohtml = "<img src=\"" + p + "\" id=\"sy_photo\" width=\"36\" height=\"45\"   />";
             $("#sy_profile_url").html(photohtml);
         }
         // if (cityCode && cityCode.length >= 2) {
         //     index_yjss_CountryId = cityCode.substring(0, 2);
         // }
         // if (cityCode && cityCode.length >= 3) {
         //     index_yjss_provinceId = cityCode.substring(0, 4);
         //     provinceCode = cityCode.substring(0, 4);
         //     setXiangqinResult();
         // }
     } else {

         if (_userName != null && _userName != "") {
             if (_userName.length > 7) {
                 _userName = _userName.substr(0, 7);
                 _userName += "...";
				 $('#nickName2').text(_userName);

             }
         }
         $("#bzt_userNameA").html(_userName);
         $("#bzt_userNameA").attr("href", "http://profile1.baihe.com/?oppID=" + bzt_loginUserId);

         var newmsg_ = msgInfo.noReadAllMsg_u;
         $("#bzt_msgSpan").html(newmsg_); // 显示消息数

         var head_noread_bhtglink = "http://bhtg.baihe.com/stat.html?ggCode=head-noread-msg_1#";
         var leftmenu_noread_bhtglink = "http://bhtg.baihe.com/stat.html?ggCode=leftmenu-noread-msg_1#";
         if (typeof(newmsg_) != 'undefined' && newmsg_ > 0) {
             head_noread_bhtglink = "http://bhtg.baihe.com/stat.html?ggCode=head-noread-msg_2#";
             leftmenu_noread_bhtglink = "http://bhtg.baihe.com/stat.html?ggCode=leftmenu-noread-msg_2#";
         }
         $("#msgNum").html(newmsg_);
         if (typeof(newmsg_) != 'undefined' && newmsg_ > 0 && close_msg_pop_flag < 1 && show_msg_flag < 1) {
             var pop_msg = '<div class="userShowPop" id="userShowPop_id"><div class="showBg"></div><a href="http://ms.baihe.com/?str=' + new Date().getTime() + '" target="_blank" class="text">你有新的未读消息哦~</a><a style="cursor:pointer;"  id="close_msgpop_id" class="close">关闭</a></div>';
             $("#mbLeft").append(pop_msg);
             show_msg_flag = 1;
             $("#close_msgpop_id").bind("click", function() {
                 $("#userShowPop_id").hide();
                 close_msg_pop_flag = 1;
                 show_msg_flag = 0;
             });
         } else {
             $('#userShowPop_id').remove();
         }
         var noread_link = $("#mymsg_id").attr("href");
         $("#mymsg_id").attr("href", head_noread_bhtglink + noread_link);

         $("#msgNumDetail").html(newmsg_);
         $("#msgNumDetail1").html(newmsg_);
         $("#msgNumTip").html(newmsg_);


         var noread_link1 = $("#msgNumDetail").attr("href");
         $("#msgNumDetail").attr("href", leftmenu_noread_bhtglink + noread_link1);

         var noread_link2 = $("#msgNumDetail1").attr("href");
         $("#msgNumDetail1").attr("href", leftmenu_noread_bhtglink + noread_link2);


         var noread_link3 = $("#msgNum").attr("href");
         $("#msgNum").attr("href", leftmenu_noread_bhtglink + noread_link3);

         if (newmsg_ >= 100) {
             $("#msgNum_new").html("99+");
         } else {
             $("#msgNum_new").html(newmsg_);
         }
         if (!isNaN(newmsg_) && parseInt(newmsg_) > 0) {
             $("#mymsg_id").removeClass("msggrayIcon");
             $("#mymsg_id").addClass("msgIcon");
             newmsg_all_inHead = newmsg_;
         } else {
             $("#mymsg_id").removeClass("msgIcon");
             $("#mymsg_id").addClass("msggrayIcon");
             newmsg_all_inHead = 0;
         }
         $("#bzt_systemMsgSpan").html(msgInfo.noReadSys);

         var bhtg_link = msgInfo.noReadSys > 0 ? "http://bhtg.baihe.com/stat.html?ggCode=head-noread-sys_2#" : "http://bhtg.baihe.com/stat.html?ggCode=head-noread-sys_1#";


         $("#bzt_systemMsglink").attr("href", bhtg_link + "http://ms.baihe.com/notice/list?str=" + new Date().getTime());

         $("#bzt_smjhId").attr("href", "http://bhtg.baihe.com/stat.html?ggCode=htdh_34#http://realswap.baihe.com/index.jsp?str=" + new Date().getTime());

         if (newmsg_ > 0) {
             $('#menu_my_msg').html('我的消息<span class="msgfcwr">' + (newmsg_ > 99 ? '99+' : newmsg_) + '</span>');
         } else {
             $('#menu_my_msg .msgfcwr').remove();
         }

         $("#newNoticeNum").html(msgInfo.noReadSys);
         $("#newNoticeNum1").html(msgInfo.noReadSys);
         $("#newNoticeNumTip").html(msgInfo.noReadSys);

         // showHd();


         $("#_newUserMsgNumId").html(msgInfo.noReadCommMsg);
         var sysmsg_cnum = msgInfo.noReadAllMsg_u - msgInfo.noReadCommMsg;
         if (isNaN(sysmsg_cnum) || parseInt(sysmsg_cnum) < 0) {
             sysmsg_cnum = 0;
         }
         $("#_newGlyNumId").html(sysmsg_cnum);
         $("#_newNoticeNumId").html(msgInfo.noReadSys);
         if ((typeof(msgInfo.noReadAllMsg_u) != 'undefined' && msgInfo.noReadAllMsg_u > 0) || (typeof(msgInfo.noReadSys) != 'undefined' && msgInfo.noReadSys > 0)) {
             // $("#userNewMsgId").addClass("now2");
             showHadMsg = "Y";
         }

         // if(msgInfo.noReadAllMsg_u > 0){
         // $("#isNewMsgId").css("display","block");
         // }

         var msgcount_j = 0;
         if (sysmsg_cnum >= 100) {
             sysmsg_cnum = "99<span></span>";
         }
         if (typeof(msgInfo.noReadCommMsg) != 'undefined' && msgInfo.noReadCommMsg != null && msgInfo.noReadCommMsg != '') {
             msgcount_j = msgInfo.noReadCommMsg;
             if (!isNaN(msgcount_j)) {
                 if (parseInt(msgcount_j) >= 100) {
                     msgcount_j = "99<span></span>";
                 }
             }
         }
         $('.J_msgCount').html(msgcount_j);
         $('.J_sysCount').html(sysmsg_cnum);
         $('.J_msgCount').attr("href", "http://ms.baihe.com/?str=" + new Date().getTime());
         $('.J_sysCount').attr("href", "http://ms.baihe.com/?boxType=0&msgType=2&str=" + new Date().getTime());
     }
 }

 function bzt_showMsgInfoNew_loop() { // 相当于循环
     var isFpage = bzt_headType == 0 ? true : false;
     bzt_showMsgInfoNew(isFpage);
 }

 function bzt_showMsgInfoNew(isFirstPage) {

     clearInterval(loopMsgInfoTask);

     loopMsgTimes = baihe.cookie.getCookie("ck_msgInfo_bzt_loopTime_" + bzt_loginUserId);
     if (loopMsgTimes == null || loopMsgTimes == '') {
         loopMsgTimes = 10000; //第一次调用
     }
     var lastTime = baihe.cookie.getCookie("ck_msgInfo_bzt_lastloopTime_" + bzt_loginUserId);
     if (lastTime != null && lastTime != '') {
         if (new Date().getTime() - lastTime < loopMsgTimes) {
             msgInfoFromCookie = baihe.cookie.getCookie("ck_msgInfo_bzt_" + bzt_loginUserId);
             if (msgInfoFromCookie != "" && msgInfoFromCookie != null) {
                 msgInfoFromCookie = decodeURI(msgInfoFromCookie);
                 var msginfo_ = new Array();
                 var msgInfoFromCookie_arr = msgInfoFromCookie.split("|");
                 if (msgInfoFromCookie_arr != null && msgInfoFromCookie_arr.length > 0) {
                     for (var i = 0; i < msgInfoFromCookie_arr.length; i++) {
                         var mfc = msgInfoFromCookie_arr[i].split(":#");
                         msginfo_[mfc[0]] = mfc[1];
                     }
                 }
                 //设置搜索


                 var todayUsers = decodeURI(baihe.cookie.getCookie("ck_msgInfo_bzt_todayNoReadList_" + bzt_loginUserId));
                 var todayUserids = decodeURI(baihe.cookie.getCookie("ck_msgInfo_bzt_todayNoReadIdList_" + bzt_loginUserId));
                 if (todayUsers != null && todayUsers != '' && todayUserids != null && todayUserids != '') {
                     msginfo_['todayUsers'] = todayUsers;
                     msginfo_['todayUserids'] = todayUserids;
                 }
                 // var msgInfoFromCookie_arr = msgInfoFromCookie.split("|");
                 // msgInfo_bzt_ck =
                 // {"userName":msgInfoFromCookie_arr[2],"newMsg":msgInfoFromCookie_arr[0],"cityCode":msgInfoFromCookie_arr[1],"groupID":msgInfoFromCookie_arr[3]};
                 // bzt_showMsgInfo(msginfo_,isFirstPage);
                 // loopMsgInfoTask = setInterval(bzt_showMsgInfoNew_loop,loopMsgTimes);

                 // bzt_todayNewMsgInfo(msginfo_); // 是否显示当日未读新消息

                 bzt_showMsgInfo(msginfo_, isFirstPage);

                 loopMsgInfoTask = setInterval(bzt_showMsgInfoNew_loop, loopMsgTimes);
                 return;
             }
         }
     }

     baihe.cookie.getCookie("ck_msgInfo_bzt_lastloopTime_" + bzt_loginUserId, new Date().getTime(), baihe.cookie.getExpDate(0, 0, 1), "/", "baihe.com");
     var todayNoRead = baihe.cookie.getCookie("ck_msgInfo_bzt_todayNoRead_" + bzt_loginUserId);
     var getTodayFlag = 1;
     if (todayNoRead != "" && todayNoRead != null) {
         getTodayFlag = 0;
     }
     //  if(location.href.toString().indexOf("http://msg.baihe.com") < 0){
     /*$.getJSON("http://msgservice.baihe.com/common/m4h.action?jsoncallback=?&msgtype=4&getTodayFlag=" + getTodayFlag + "&userid=" + bzt_loginUserId + "&time=" + new Date().getTime(), function(msgInfo) {
         if (isFirstPage && baiduuser_boolean && typeof(msgInfo) == 'undefined') {
             location.href = "http://u.baihe.com/?str=" + new Date().getTime();
             return;
         }
         if (typeof(msgInfo) == 'undefined' || msgInfo == null) {
             if (loadM4h > 0) {
                 setTimeout(function() {
                     bzt_showMsgInfoNew(isFirstPage);
                 }, 1000);
                 loadM4h--;
                 return;
             }
         }

         msgInfo_bzt_ck = msgInfo;
         cityCode = msgInfo_bzt_ck.cityCode;
         if (typeof(cityCode) != 'undefined' && cityCode != null) {
             provinceCode = cityCode.substring(0, 4);
         }
         // getTopDiffText(cityCode);
         // #########新消息标题提醒#########

         if (bzt_curUrl.indexOf("ms.baihe.com") >= 0) {
             changeEndScroll(msgInfo.noReadAllMsg_u);
         }

         var newMsg_status_ = baihe.cookie.getCookie("newMsg_status" + bzt_loginUserId);
         if (msgInfo.noReadAllMsg_u > 0) {
             if (newMsg_status_ == '') {
                 changeStartScroll(msgInfo.noReadAllMsg_u); // 相当于第一次进来并没有cookie
             } else {
                 var newMsg_status_arr = newMsg_status_.split(",");
                 if (newMsg_status_arr[0] == '1') {
                     if (newMsg_status_arr[1] < msgInfo.noReadAllMsg_u) {
                         changeStartScroll(msgInfo.noReadAllMsg_u);
                     } else {
                         changeEndScroll(msgInfo.noReadAllMsg_u);
                     }
                 } else {
                     changeStartScroll(msgInfo.noReadAllMsg_u);
                 }
             }
         }
         var firstTime = baihe.cookie.getCookie("ck_msgInfo_bzt_firstloopTime_" + bzt_loginUserId);
         if (firstTime == null || firstTime == '') {
             baihe.cookie.setCookie("ck_msgInfo_bzt_firstloopTime_" + bzt_loginUserId, new Date().getTime(), baihe.cookie.getExpDate(0, 0, 30), "/", "baihe.com");
         }
         // bzt_todayNewMsgInfo(msgInfo); // 是否显示当日未读新消息

         bzt_showMsgInfo(msgInfo, isFirstPage);

         loopMsgInfoTask = setInterval(bzt_showMsgInfoNew_loop, loopMsgTimes);

     });*/

 }

// function setRealAuthInfo() {
//
//     $.getJSON("http://realauth.baihe.com/getNoSwapNum.action?jsoncallback=?", function(data) {
//         var userNoResultCount = data.noSwapNum; // not swap info
//         if (typeof(userNoResultCount) != 'undefined' && userNoResultCount != '' && !isNaN(userNoResultCount)) {
//             if (userNoResultCount > 99) {
//                 userNoResultCount = "99+";
//             }
//             if (userNoResultCount > 0 || userNoResultCount == '99+') {
//                 $("#leftmenu_smrz").html(userNoResultCount);
//                 $("#leftmenu_smrz").show();
//             }
//         }
//         if (data.noSwapNum == 0) { // 加v标class
//             $("#bzt_smjhId").removeClass();
//             $("#bzt_smjhId").addClass("relNamegrayIcon");
//         } else {
//             $("#bzt_smjhId").removeClass();
//             $("#bzt_smjhId").addClass("relNameIcon");
//         }
//         $("#bzt_smjhSpan").html(data.noSwapNum); // 实名交换d
//         $("#_newSmjhNumId").html(data.noSwapNum);
//         if (typeof(data.noSwapNum) != 'undefined' && data.noSwapNum > 0) {
//             // $("#userNewMsgId").addClass("now2");
//             showHadMsg = "Y";
//         }
//     });
//
// }




