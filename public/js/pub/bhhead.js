var isMember = false;  //判断是否为会员
var link = document.createElement('link');
link.rel = 'shortcut icon';
link.href = 'http://images6.baihe.com/favicon.ico';
document.getElementsByTagName('head')[0].appendChild(link);
var hasLogin = document.cookie.search('AuthCookie') >= 0;


/*
*	判断特惠版是否显示
*/
$.getJSON("http://product.baihe.com/index/getMsgBannerInfo?jsonCallBack=?", function (data) {
    if (data.code == 200) {
        if (data.data.showFreeBanner == 1) {
            $("#bhHeaderH").height(110);
            $('.salePrice').show();
            $('.salePrice').find('a').html(data.data.msgBannerTxt);
            $('.salePrice').find('a').attr('href', data.data.msgBannerUrl);
            if (data.data.msgBannerTxt.indexOf('脱单捷径') > -1) { //临期
                baihe.bhtongji.tongji({
                    'event': '3',
                    'spm': '4.28.1035.2135.9826'
                });
            } else if (data.data.msgBannerTxt.indexOf('续费优惠') > -1) { //到期
                baihe.bhtongji.tongji({
                    'event': '3',
                    'spm': '4.28.1021.2135.10088'
                });
            }

        } else {
            $("#bhHeaderH").height(82);
            $('.salePrice').hide();
        }
    }
});
$('.salePrice a').click(function () {
    if ($(this).text().indexOf('脱单捷径') > -1) { //临期
        baihe.bhtongji.tongji({
            'event': '3',
            'spm': '4.28.1035.3584.9828'
        });
        baihe.cookie.setCookie('orderSource', '10170102', '', '/', '.baihe.com');
    } else if ($(this).text().indexOf('续费优惠') > -1) {  //到期
        baihe.bhtongji.tongji({
            'event': '3',
            'spm': '4.28.1021.3584.10090'
        });
        baihe.cookie.setCookie('orderSource', '10170103', '', '/', '.baihe.com');
    }
});


(function ($) {

	/*
	*	新增未支付订单
	*/
    //获取未读数
    //未支付订单
    $.ajax({
        async: true,
        url: 'http://u.baihe.com/index/getunpayedorderCount?&jsonCallBack=?',
        type: 'get',
        dataType: 'json',
        data: null,
        success: function (data) {
            if (data.code == 200) {
                if (data.data > 0 && data.data <= 99) {  //有支付订单 且小于99
                    $('.new_order').find('.num').show();
                    $('.new_order').find('.num').text(data.data);
                    $('#persDataPetalNum').text(data.data);
                    $('#BAIHE').attr('numm', data.data);
                } else if (data.data > 99) {
                    $('.new_order').find('.num').show();
                    $('.new_order').find('.num').text('99+');
                    $('#persDataPetalNum').text('99+');
                    $('#BAIHE').attr('numm', data.data);
                } else {
                    $('.new_order').find('.num').hide();
                    $('#persDataPetalNum').text('0');
                    $('#BAIHE').attr('numm', data.data);
                }

            }
        }
    });

    $.fn.textSlider = function (settings) {
        settings = jQuery.extend({
            speed: "normal",
            line: 2,
            timer: 3000
        }, settings);
        return this.each(function () {
            $.fn.textSlider.scllor($(this), settings);
        });
    };
    $.fn.textSlider.scllor = function ($this, settings) {
        var ol = $("ol:eq(0)", $this);
        var timerID;
        var li = ol.children();
        var liHight = $(li[0]).height();
        var upHeight = 0 - settings.line * liHight; //滚动的高度；
        var scrollUp = function () {
            ol.animate({
                marginTop: upHeight
            }, settings.speed, function () {
                for (i = 0; i < settings.line; i++) {
                    ol.find("li:first", $this).appendTo(ol);
                }
                ol.css({
                    marginTop: 0
                });
            });
        };
        var autoPlay = function () {
            timerID = window.setInterval(scrollUp, settings.timer);
        };
        var autoStop = function () {
            window.clearInterval(timerID);
        };
        //事件绑定
        ol.hover(autoStop, autoPlay).mouseout();
    };
})(jQuery);

$(document).ready(function () {
    $("#scrollPoint").textSlider({
        line: 1,
        speed: 500,
        timer: 3000
    });



});


//---------鼠标放上去的效果
//--主导航
$('#bhHeader li').each(function () {
    $(this).mouseover(function () {
        $(this).children('a').addClass('down').end().find('.navMenu').show();
        $(this).find('dt').mouseover(function (event) {
            $(this).addClass('active').find('dl').show();
        }).mouseout(function (event) {
            $(this).removeClass('active').find('dl').hide();
        });;
    }).mouseout(function () {
        $(this).children('a').removeClass('down').end().find('.navMenu').hide();
    });;
});



//--设置
$('#userInfoHandle li').each(function () {
    $(this).mouseover(function () {
        $(this).children('.set').addClass('active').end().find('.menu').show();
    }).mouseout(function () {
        $(this).children('.set').removeClass('active').end().find('.menu').hide();
    });;
});

$('#userInfoHandle .pic').hover(function () {
    $('#userInfoHandle .info').show();
}, function () {
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
            success: function (msg) {
                if (typeof msg != "undefined" && msg) {
                    if (msg['state'] == '1') {
                        $('#logOut').click(function (event) {
                            baihe.cookie.setCookie("GCUserID", -1, baihe.cookie.getExpDate(0, 0, 0), "/", "baihe.com");
                            baihe.cookie.setCookie("AuthCookie", "", baihe.cookie.getExpDate(0, 0, 0), "/", "baihe.com");
                            baihe.cookie.setCookie("Token", "", baihe.cookie.getExpDate(0, 0, 0), "/", "baihe.com");
                            baihe.cookie.setCookie("GCEmail", "", baihe.cookie.getExpDate(0, 0, 0), "/", "baihe.com");
                            location.href = "http://www.baihe.com/index.shtml";
                        });
                        $('#loginHandle').hide();
                        $('#userInfoHandle').show();
                        $('.setUp li').mouseover(function (event) {
                            $(this).find('em').addClass('now').end().children('.menu').show().end().siblings().find('.menu').hide();
                        }).mouseout(function (event) {
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


function start_scroll() {
    if (startScroll != 1) {
        clearInterval(startScroll); // 每次调用时，先删除任务，防止重叠
    }
    startScroll = setInterval(do_scroll, 1300);
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

function bzt_getHeadType(url) {
    return 9;
}
//profile 发消息按钮事件
function recordBhtg(ggcode) {
    if (typeof (ggcode) != 'undefined' && ggcode != null && ggcode != '' && ggcode.indexOf("_") > 0) {
        var img = new Image();
        img.src = "http://bhtg.baihe.com/stat.html?ggCode=" + ggcode;
    }
}

$.getJSON('http://my.baihe.com/getinterlogin/baiHeIndex?jsonCallBack=?', function (data) {
    var $aHref = data.data.userID;
    $('#nickName2').parent().attr('href', 'http://profile1.baihe.com/?oppID=' + $aHref + '');
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
        if (typeof (p) != 'undefined' && p != null) {
            p = p.replace("120_150", "36_45");
            var photohtml = "<img src=\"" + p + "\" id=\"sy_photo\" width=\"36\" height=\"45\"   />";
            $("#sy_profile_url").html(photohtml);
        }

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
        if (typeof (newmsg_) != 'undefined' && newmsg_ > 0) {
            head_noread_bhtglink = "http://bhtg.baihe.com/stat.html?ggCode=head-noread-msg_2#";
            leftmenu_noread_bhtglink = "http://bhtg.baihe.com/stat.html?ggCode=leftmenu-noread-msg_2#";
        }
        $("#msgNum").html(newmsg_);
        if (typeof (newmsg_) != 'undefined' && newmsg_ > 0 && close_msg_pop_flag < 1 && show_msg_flag < 1) {
            var pop_msg = '<div class="userShowPop" id="userShowPop_id"><div class="showBg"></div><a href="http://ms.baihe.com/?str=' + new Date().getTime() + '" target="_blank" class="text">你有新的未读消息哦~</a><a style="cursor:pointer;"  id="close_msgpop_id" class="close">关闭</a></div>';
            $("#mbLeft").append(pop_msg);
            show_msg_flag = 1;
            $("#close_msgpop_id").bind("click", function () {
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
        if ((typeof (msgInfo.noReadAllMsg_u) != 'undefined' && msgInfo.noReadAllMsg_u > 0) || (typeof (msgInfo.noReadSys) != 'undefined' && msgInfo.noReadSys > 0)) {
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
        if (typeof (msgInfo.noReadCommMsg) != 'undefined' && msgInfo.noReadCommMsg != null && msgInfo.noReadCommMsg != '') {
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


}


var loopMsgInfoTask;
var close_msg_pop_flag = 0;
var show_msg_flag = 0;
var startScroll = 1;
var falg_flash = 0;
var loadM4h = 3;

var title_ori = document.title; // 当前域名标题
var bzt_curUrl = window.location.href;
var bzt_headType = bzt_getHeadType(bzt_curUrl + "");
var bzt_loginUserId = baihe.cookie.getCookie("GCUserID");
var bzt_isMainUser = bzt_loginUserId > 0;
var isLogonMainUser = bzt_isMainUser;
$(document).ready(function () {
    if (bzt_isMainUser) {
        var isFpage = bzt_headType == 0 ? true : false;
        bzt_showMsgInfoNew(isFpage);
        //				setRealAuthInfo();
    }



    //头部会员级别显示
    $.getJSON("http://my.baihe.com/getinterlogin/uinfoInLeft?jsonCallBack=?", function (data) {
        var $huiyuan = data.data.userIdentity;
        var $src = 'http://images9.baihe.com/home/';
        var $link = 'http://product.baihe.com/vipcrystal/';
        var $obj = $('.info_info').parent().prev().find('img');

        

        if ($huiyuan == 'VIP_JSUPER_LovePull') {
            $('.info_info').text('金至尊牵线');
            $obj.attr('src', $src + 'nav_jzzqx.gif');
            $obj.parent().css('cursor', 'default');
            $obj.parent().click(function (event) {
                event.preventDefault();
                $(this).css('cursor', 'default');
            });
            isMember = true;
        } else if ($huiyuan == 'VIP_CLY') {
            $('.info_info').text('水晶会员');
            $obj.attr('src', $src + 'nav_sj.gif');
            $obj.parent().css('cursor', 'default');
            $obj.parent().click(function (event) {
                event.preventDefault();
                $(this).css('cursor', 'default');
            });
            isMember = true;
        } else if ($huiyuan == ' ') {
            $('.info_info').text('水晶会员'); //普通会员
            $obj.attr('src', $src + 'nav_icon.gif');
            $obj.parent().attr('href', $link);
            $obj.parent().attr('event', '3');
            $obj.parent().attr('spm', '4.14.42.1009.2520');
            isMember = false;
        } else {
            $('.info_info').text('水晶会员'); //普通会员
            $obj.attr('src', $src + 'nav_icon.gif');
            $obj.parent().attr('href', $link);
            $obj.parent().attr('event', '3');
            $obj.parent().attr('spm', '4.14.42.1009.2520');
            isMember = false;
        }
        //如果不是会员，改变 我的牵线 的链接
        if (!isMember) {
            $('.myConnect').attr('href', 'http://product.baihe.com/Vipjsupermatch');
        }


    })


})




