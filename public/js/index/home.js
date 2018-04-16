var chks = document.getElementsByTagName("input");
for (var i = 0, l = chks.length; i < l; i++) {
    chks[i].checked = false;
};
var hasLogin = document.cookie.search('AuthCookie') >= 0;

function bindType(v) {
    baihe.cookie.setCookie("bindType", v, "", "/", "baihe.com");
}

function checkAuthCookie() {
    var img = new Image();
    img.src = 'http://my.baihe.com/getinterlogin/checkAuthCookie?rand=' + (new Date()).getTime();
}

$(function () {
    $(".proCitySelAll").selectDistrict();
    $('input:checkbox').jqTransCheckBox();
    $('input:radio').jqTransRadio();
    if ($('select').jqTransSelect().length > 0) {
        jqTransformAddDocumentListener();
    }
    $("#photo").trigger('click');
    baihe.setBaiHeSelectVal("#maxage", 28);
    baihe.setBaiHeDistrict("#district", "中国-北京市", "8611");
    // 焦点图
    $('.focusPic').foursFn({
        isTab: true, //是否有tab
        isTabNum: true, //tab里是否显示数字
        tabClassName: 'active', //当前tab的样式
        isState: false, //是否有图片说明
        stateClassName: '.icon', //图片说明的样式                          
        timer: 3500, //图片切换时间
        isBg: true,
        bgClassName: '.homeFocusBgList'
    });
    $('.carousel').foursFn({
        isTab: true, //是否有tab
        isTabNum: true, //tab里是否显示数字
        tabClassName: 'active', //当前tab的样式
        isState: false, //是否有图片说明
        stateClassName: '.icon', //图片说明的样式               
        timer: 3500 //图片切换时间                
    });

    $(".activeCont dt ul").idTabs();
    $("#idTabOne").click(function (event) {
        baihe.statistics({
            spm: '2.1.40.122.167',
            //            ggCode: 'newversion_98'
        });
    });
    $("#idTabTwo").click(function (event) {
        baihe.statistics({
            spm: '4.1.57.1716.4283',
            //            ggCode: 'newversion_97'
        });
    });
    $("#idTabThree").click(function (event) {
        baihe.statistics({
            spm: '4.1.1.1747.4348'
        });
    });

    if (hasLogin) {
        checkAuthCookie();
        hasLogin = document.cookie.search('AuthCookie') >= 0;
        if (hasLogin) {
            setInterval(checkAuthCookie, 600000);
            ! function getUserLoginInfo() {
                try {
                    $.ajax({
                        type: "get",
                        url: "http://my.baihe.com/getinterlogin/baiHeIndex?rand=" + Math.random() * 500 + "&jsonCallBack=?",
                        async: true,
                        dataType: "jsonp",
                        success: function (msg) {
                            if (typeof msg != "undefined" && msg) {
                                if (msg['state'] == '1') {
                                    $('.signIn').hide();
                                    $('.persData').show();
                                    $('#dataIntegrity').mouseover(function (event) {
                                        $(this).css('cursor', 'pointer');
                                        $('#dataIntegrityLabel').show();
                                    }).mouseout(function (event) {
                                        $('#dataIntegrityLabel').hide();
                                    });
                                    if (typeof msg['data'] != "undefined" && msg['data']) {
                                        if (msg['data'] == 'noLogin') {
                                            location.href = "http://my.baihe.com/register/";
                                        } else {
                                            setUserInfo(msg['data']);
                                            if (msg['data']['gender'] == "0") {
                                                getRecommendUserInfo(tempLoginRecommendMal);
                                                $('.picList .icon').html(getAllClassName("1"));
                                                $("#picListData").html(getAllPicListInfo("1"));
                                                baihe.setBaiHeSelectVal("#sex", 1);
                                            } else if (msg['data']['gender'] == "1") {
                                                getRecommendUserInfo(tempLoginRecommendFemal);
                                                $('.picList .icon').html(getAllClassName("0"));
                                                $("#picListData").html(getAllPicListInfo("0"));
                                                baihe.setBaiHeSelectVal("#sex", 0);
                                            }
                                        }

                                    }

                                } else if (msg['state'] == "0" && msg['data'] == 'noRegistAll') {
                                    location.href = "http://my.baihe.com/register/";
                                } else if (msg['state'] == "0" && msg['data'] == 'noLogin') {
                                    $(".signIn").show();
                                }
                            }
                        },
                        error: function (XHR, textStatus, errorThrown) {
                            console.log('error' + errorThrown);
                        }
                    });
                } catch (err) {
                    console.log('加载出错请重试！');
                }
            }();
        } else {
            $(".signIn").show();
        }
    } else {
        $(".signIn").show();
    }

    /*
     *用户信息初始化设置
     */
    var myCity = "",
        myAge = "",
        myGender = "";

    function setUserInfo(data) {
        if (data['msNum'] == 0) {
            $('#persDataMsNum').css('color', '#bdbdbd');
        } else if (0 < data['msNum'] && data['msNum'] < 999) {
            $('#persDataMsNum').html(data['msNum']);
        } else if (data['msNum'] > 999) {
            $('#persDataMsNum').html('999+');
        }
        if (data['redBeanNum'] == 0) {
            $('#redBeanNum').css('color', '#bdbdbd');
        } else if (0 < data['redBeanNum'] && data['redBeanNum'] < 999) {
            $('#redBeanNum').html(data['redBeanNum']);
        } else if (data['redBeanNum'] > 999) {
            $('#redBeanNum').html('999+');
        }
        /*if (data['petalNum'] == 0) {
            $('#persDataPetalNum').css('color', '#bdbdbd');
        } else if (0 < data['petalNum']) {
            $('#persDataPetalNum').html(data['petalNum']);
        }*/
        if (data['dataIntegrity'] > 0) {
            $('#dataIntegrity').html(data['dataIntegrity'] + '%');
            $('.strip').animate({
                'width': (data['dataIntegrity']) + '%'
            }, 500);
        }
        if (data['matchCity']) {
            baihe.setBaiHeDistrict("#district", data['matchCountryChn'] + '-' + data['matchProvinceChn'] + '-' + data['matchCityChn'], data['matchCity']);
        } else if (data['matchProvince']) {
            baihe.setBaiHeDistrict("#district", data['matchCountryChn'] + '-' + data['matchProvinceChn'], data['matchProvince']);
        } else if (data['matchCountry']) {
            baihe.setBaiHeDistrict("#district", data['matchCountryChn'], data['matchCountry']);
        }
        if (data['matchMinAge']) {
            baihe.setBaiHeSelectVal("#minage", parseInt(data['matchMinAge']) < 18 ? 18 : parseInt(data['matchMinAge']));
        }
        if (data['matchMaxAge']) {
            baihe.setBaiHeSelectVal("#maxage", parseInt(data['matchMaxAge']) < 18 ? 28 : parseInt(data['matchMaxAge']));
        }
        if (data['city']) {
            myCity = data['city'];
        }
        if (data['gender']) {
            myGender = data['gender'] == 0 ? 1 : 0;
        }
        if (data['age']) {
            myAge = data['age'];
        }


        data['nickname'] ? $('#nickName').html(data['nickname']) : $('#nickName').html('');

        if (data['headPhotoUrl'] && (data['headPhotoUrl'].indexOf("nopic_male.gif") >= 0 || data['headPhotoUrl'].indexOf("nopic_female.gif") >= 0)) {
            $("#userID").attr('href', 'http://my.baihe.com/myphoto/index?showType=1042&zx=1&oppId=' + data['userID']).attr({ "event": "3", "spm": "4.1.1.900.2338" }).find('img').attr('src', "http://images7.baihe.com/pic/upload_pic.jpg");
        } else {
            $("#userID").attr('href', 'http://profile1.baihe.com/?showType=1042&zx=1&oppID=' + data['userID']).attr({ "event": "3", "spm": "4.1.1.882.2313" }).find('img').attr('src', data['headPhotoUrl'].replace("120_150", "100_100"));
        }
        var arrPass = [],
            arrNoPass = [],
            tempPass = 0,
            tempNoPass = 0;
        if (data['isCreditedById5'] != 1) {
            arrNoPass.push('<li><a href="http://auth.baihe.com/id5/MyAuthentication.action" spm="4.1.1.185.2316" event="3" target="_blank"><img src="http://images6.baihe.com/icon/icon_09g.gif"></a><div class="label" style="display:none;"><em></em><span><a href="http://auth.baihe.com/id5/MyAuthentication.action" target="_blank">未进行身份通认证</a></span></div></li>');
        } else {
            arrPass.push('<li><a href="http://auth.baihe.com/id5/MyAuthentication.action" spm="4.1.1.185.2316" event="3" target="_blank"><img src="http://images6.baihe.com/icon/icon_09.gif"></a></li>');
        }
        if (data['isCreditedBySesame'] != 1) {//芝麻认证
            arrNoPass.push('<li><a href="http://credit.baihe.com/zhima" spm="4.1.1.885.2318" event="3" target="_blank"><img src="http://images6.baihe.com/icon/icon_00g.gif"></a><div class="label" style="display:none;"><em></em><span><a href="http://credit.baihe.com/zhima" target="_blank">未进行芝麻信用认证</a></span></div></li>');
        } else {
            arrPass.push('<li><a href="http://credit.baihe.com/zhima" spm="4.1.1.885.2318" event="3" target="_blank"><img src="http://images6.baihe.com/icon/icon_00.gif"></a></li>');
        }

        if (data['isCreditedByMobile'] != 1) {
            arrNoPass.push('<li><a href="http://auth.baihe.com/lily/MyMobileAuth.action" spm="4.1.1.165.2315" event="3" target="_blank"><img src="http://images6.baihe.com/icon/icon_08g.gif"></a><div class="label" style="display:none;"><em></em><span><a href="http://auth.baihe.com/lily/MyMobileAuth.action" target="_blank">未进行手机认证</a></span></div></li>');
        } else {
            arrPass.push('<li><a href="http://auth.baihe.com/lily/MyMobileAuth.action" spm="4.1.1.165.2315" event="3" target="_blank"><img src="http://images6.baihe.com/icon/icon_08.gif"></a></li>');
        }
        if (data['isCreditedBySfz'] != 1) {
            arrNoPass.push('<li><a href="http://auth.baihe.com/" spm="4.1.1.884.2317" event="3" target="_blank"><img src="http://images6.baihe.com/icon/icon_05g.gif"></a><div class="label" style="display:none;"><em></em><span><a href="http://auth.baihe.com/" target="_blank">未上传身份证</a></span></div></li>');
        } else {
            arrPass.push('<li><a href="http://auth.baihe.com/" spm="4.1.1.884.2317" event="3" target="_blank"><img src="http://images6.baihe.com/icon/icon_05.gif"></a></li>');
        }
        // if (data['isCreditedByVideo'] != 1) {
        //     arrNoPass.push('<li><a href="http://auth.baihe.com/video/user/VideoAuth.action?spm=2.1.40.181.283" target="_blank"><img src="http://images6.baihe.com/icon/icon_07g.gif"></a><div class="label" style="display:none;"><em></em><span><a href="http://auth.baihe.com/video/user/VideoAuth.action" target="_blank">未进行视频认证</a></span></div></li>');
        // } else {
        //     arrPass.push('<li><a href="http://auth.baihe.com/video/user/VideoAuth.action?spm=2.1.40.181.283" target="_blank"><img src="http://images6.baihe.com/icon/icon_07.gif"></a></li>');
        // }
        // if (data['isCreditedByIncome'] != 1) {
        //     arrNoPass.push('<li><a href="http://auth.baihe.com/authentication/new/MyAuth.action?spm=2.1.40.182.284" target="_blank"><img src="http://images6.baihe.com/icon/icon_06g.gif"></a><div class="label" style="display:none;"><em></em><span><a href="http://auth.baihe.com/authentication/new/MyAuth.action" target="_blank">未进行财产认证</a></span></div></li>');
        // } else {
        //     arrPass.push('<li><a href="http://auth.baihe.com/authentication/new/MyAuth.action?spm=2.1.40.182.284" target="_blank"><img src="http://images6.baihe.com/icon/icon_06.gif"></a>');
        // }
        if (data['isCreditedByEducation'] != 1) {
            arrNoPass.push('<li><a href="http://auth.baihe.com/authentication/new/MyAuth.action" event="3" spm="4.1.1.183.2339" target="_blank"><img src="http://images6.baihe.com/icon/icon_04g.gif"></a><div class="label" style="display:none;"><em></em><span><a href="http://auth.baihe.com/authentication/new/MyAuth.action" target="_blank">未进行学历认证</a></span></div></li>');
        } else {
            arrPass.push('<li><a href="http://auth.baihe.com/authentication/new/MyAuth.action?" event="3" spm="4.1.1.183.2339" target="_blank"><img src="http://images6.baihe.com/icon/icon_04.gif"></a></li>');
        }
        // if (data['isCreditedByMarriage'] != 1) {
        //     arrNoPass.push('<li><a href="http://auth.baihe.com/authentication/new/MyAuth.action?spm=2.1.40.183.285" target="_blank"><img src="http://images6.baihe.com/icon/icon_03g.gif"></a><div class="label" style="display:none;"><em></em><span><a href="http://auth.baihe.com/authentication/new/MyAuth.action" target="_blank">未进行生育认证</a></span></div></li>');
        // } else {
        //     arrPass.push('<li><a href="http://auth.baihe.com/authentication/new/MyAuth.action?spm=2.1.40.183.285" target="_blank"><img src="http://images6.baihe.com/icon/icon_03.gif"></a></li>');
        // }

        if (arrPass.length >= 6) {
            $('.persData .icon ul').html(arrPass.slice(0, 5).join(''));
        } else {
            var len = arrPass.length;
            $('.persData .icon ul').html(arrPass.slice(0, len).join('') + arrNoPass.slice(0, 5 - len).join(''));
            $('.persData .icon a').mouseover(function () {
                $(this).siblings().show();
            }).mouseout(function (event) {
                $(this).siblings().hide();
            });
        }
    }

    /*
     * [登录成功获取推荐用户信息]
     * @return
     */
    function getRecommendUserInfo(temp) {
        $.ajax({
            url: 'http://xapp.baihe.com/msg/getmyrecommend?"' + Math.random() * 500 + '&myGender=' + myGender + '&myAge=' + myAge + '&myCity=' + myCity + '&key=3&jsonCallBack=?',
            dataType: 'jsonp',
            success: function (msg) {
                if (msg && msg['data']) {
                    var arr = sliceDescription(msg['data'].slice(0, 6));
                    for (var i = 0; i < arr.length; i++) {
                        arr[i]['photo'] = arr[i]['photo'].replace("80_100", "120_150");
                        if (arr[i]['creditStatus'] == 1) {
                            arr[i]['shiming'] = '<img src="http://images6.baihe.com/icon/icon_01.gif" alt="实名制" />';
                        } else {
                            arr[i]['shiming'] = "";
                        }
                    }
                    $(".recommend").html("").html('<div id="jsNoLoginRecommend">' + $.format(temp, arr) + '</div>');
                }
            }
        })

    }

    function fnVerificationCode(arg) {
        var _val = arg;
        $.ajax({
            url: 'http://my.baihe.com/Getinterlogin/getAccountTimes?jsonCallBack=?',
            dataType: 'jsonp',
            data: {
                'userAccount': _val
            },
            success: function (data) {
                if (data && data.state == 1 && data.data.showCode) {
                    $('#divVerificationCode').html('<input name="verification" type="text" class="name" value="验证码" id="verification" style="float:left; width:68px;"/>\
                    <img src="http://images6.baihe.com/icon/icon_15.gif" alt="验证码" width="77" height="38" id="picVerificationCode">\
                    <a href="javascript:void(0);" class="refresh" id="btnVerificationCode">刷新</a>\
                    <div class="clear"></div>\
                    <span id="errVerificationCode"></span>').show();
                    picValiCode();
                    $("#verification").live('focus', function () {
                        if ($(this).val() == "验证码") {
                            $(this).val('');
                        }
                    }).live('blur', function (event) {
                        if ($(this).val() == "") {
                            $(this).val('验证码');
                        }
                    });
                    $('#btnVerificationCode,#picVerificationCode').live('click', picValiCode);
                    $('#verification').blur(function (event) {

                        $.getJSON('http://my.baihe.com/Getinterlogin/checkVerifyPic?jsonCallBack=?', {
                            'tmpId': temId,
                            'checkcode': $(this).val()
                        }, function (data) {
                            if (data && data.data == 1) {
                                $('#verification').removeClass('highlight2').attr('sta', 2);
                                $("#errVerificationCode").removeClass('error').html('');
                                if ($("#regName_error").text() == '用户名或密码错误') {
                                    fnVerificationCode(arg);
                                }
                                //$('#verification').blur();

                                //失去焦点，只有当iBtn为true时，点击登录才有反应
                                if (iBtn) {
                                    $('#login').trigger('click');
                                }
                            } else {
                                $('#verification').addClass('highlight2').attr('sta', 1);
                                $("#errVerificationCode").addClass('error').html('验证码不正确');
                                console.log(4);
                                $('#verification').val('');
                                //picValiCode();
                                $("#codeVal").attr("disabled", false);
                                if (iBtn) {
                                    $('#login').trigger('click');
                                }
                                //$('#verification').blur();
                                return;
                            }
                        });
                    });
                    /*$('#verification').blur(function(event) {
                        $.getJSON('http://my.baihe.com/Getinterlogin/checkVerifyPic?jsonCallBack=?', {
                            'tmpId': temId,
                            'checkcode': $(this).val()
                        }, function(data) {
                            if (data && data.data == 1) {
                                $('#verification').removeClass('highlight2').attr('sta', 2);
                                  $("#errVerificationCode").removeClass('error').html('');
                            } else {       
                                $('#verification').addClass('highlight2').attr('sta', 1);                        
                                $("#errVerificationCode").addClass('error').html('验证码不正确');
                                picValiCode();
                                $("#codeVal").attr("disabled", false);
                                return;
                            }
                        });
                    });*/
                }
            }
        })
    }

    /* 解决因没使用form表单提交，使验证码的失去焦点事件和登录按钮提交事件相冲突 */
    var iBtn = false;

    var temId;

    function picValiCode() {
        temId = (new Date()).getTime() + Math.random();
        $("#picVerificationCode").attr('src', 'http://my.baihe.com/Getinterlogin/getVerifyPic?jsonCallBack=?&tmpId=' + temId);
    }

    $("#regName").on('focus', function (event) {
        $(this).removeClass('highlight2').addClass('highlight1');
        $("#regName_error").removeClass('error').html('');
        if ($(this).val().replace(/(^\s+)|(\s+$)/g, "") == '邮箱/手机') {
            $(this).val('');
        }
        event.stopPropagation();
    }).on('blur', function (event) {
        $(this).removeClass('highlight1').attr('sta', '');
        $("#regName_error").removeClass('error').html('');
        var _val = $(this).val().replace(/(^\s+)|(\s+$)/g, "");
        if (baihe.validateRules.isNull(_val)) {
            $(this).val('邮箱/手机');
        } else {
            var format = baihe.validateRules.isMobile(_val) || baihe.validateRules.isLoginEmail(_val);
            if (!format) {
                $(this).addClass('highlight2');
                $("#regName_error").addClass('error').html('用户名必须为邮箱或手机号');
                return false;
            } else {
                fnVerificationCode(_val);
                $(this).attr('sta', 2);
                $(this).removeClass('highlight2');
                $("#regName_error").removeClass('error').html('');
                $("#password").trigger('focus');
            }
        }
        event.stopPropagation();
    }).on('keydown', function (e) {
        if (e.which == 13) {
            $(this).trigger('blur');
        }
        e.stopPropagation();
    });
    $("#password").on('focus', function (event) {
        $(this).hide();
        $('#repassword').show().focus();
        $('#repassword').removeClass('highlight2').addClass('highlight1');
        $("#password_error").removeClass('error').html('');
        if ($('#repassword').val() == '密码') {
            $('#repassword').val('');
        }
        event.stopPropagation();
    });
    $('#repassword').on('blur', function (event) {
        var _val = $(this).val();
        $(this).attr('sta', "");
        $(this).removeClass('highlight1');
        if (_val === '') {
            $("#password").show().addClass('highlight2');
            $("#password_error").addClass('error').html('密码不能为空');
            $(this).hide();
            return false;
        } else {
            $(this).attr('sta', 2);
        }
        event.stopPropagation();
    }).on('keydown', function (e) {
        if (e.which == 13) {
            ($("#regName").trigger('blur')) && ($("#password").is(":hidden") ? $('#repassword').trigger('blur') : "") && ($("#login").trigger('click'));
        }
        e.stopPropagation();
    });
    $('#loginClose').click(function (event) {
        baihe.bhtongji.tongji({ 'event': '3', 'spm': '4.1.1.880.2297' });
        baihe.cookie.setCookie("GCUserID", -1, baihe.cookie.getExpDate(0, 0, 0), "/", "baihe.com");
        baihe.cookie.setCookie("AuthCookie", "", baihe.cookie.getExpDate(0, 0, 0), "/", "baihe.com");
        baihe.cookie.setCookie("Token", "", baihe.cookie.getExpDate(0, 0, 0), "/", "baihe.com");
        baihe.cookie.setCookie("GCEmail", "", baihe.cookie.getExpDate(0, 0, 0), "/", "baihe.com");
        location.href = "http://www.baihe.com/";
    });
    var bzt_loginUserId = baihe.cookie.getCookie('OnceLoginWEB');
    $("#login").on('click', function (event) {
        iBtn = true;
        baihe.statistics({
            spm: '2.1.39.80.125',
            ggCode: 'newversion_140'
        });
        baihe.bhtongji.tongji({ 'event': '0', 'spm': '4.20.104.257.1022' });
        // $("#regName").removeClass('highlight2').addClass('highlight1');
        // $("#regName_error").removeClass('error').html('');
        // $('#repassword').removeClass('highlight2').addClass('highlight1');
        // $("#password_error").removeClass('error').html('');
        var _val;
        var hasAuth = true;
        if ($("#regName").attr('sta') != 2) {
            _val = $("#regName").val().replace(/(^\s+)|(\s+$)/g, "");
            if (_val == '邮箱/手机' || baihe.validateRules.isNull(_val)) {
                $("#regName").addClass('highlight2');
                $("#regName_error").addClass('error').html('用户名不能为空');
            }
            hasAuth = false;
        }
        if ($("#repassword").attr('sta') != 2) {
            _val = $("#repassword").val();
            if (baihe.validateRules.isNull(_val)) {
                $("#password").show().addClass('highlight2');
                $("#repassword").hide();
                $("#password_error").addClass('error').html('密码不能为空');
            }
            hasAuth = false;
        }
        if ($("#verification").size() > 0 && $("#verification").attr('sta') == undefined && $("#verification").attr('sta') != 2) {
            _val = $("#verification").val();
            if (baihe.validateRules.isNull(_val) || _val == '验证码') {
                $("#verification").show().addClass('highlight2');
                $("#errVerificationCode").addClass('error').html('验证码不能为空');
                return false;
            }
            hasAuth = false;
        }

        if (hasAuth) {
            $(".signIn input[name='chkRememberMe']").val($(".signIn input[name='chkRememberMe']").prop('checked'));
            var _val = $("#regName").val().replace(/(^\s+)|(\s+$)/g, "");
            $.ajax({
                //url: 'http://my.baihe.com/getinterlogin/gotoLogin?jsonCallBack=?',
                url: 'http://my.baihe.com/Getinterlogin/gotoLogin?jsonCallBack=?',
                dataType: 'jsonp',
                data: {
                    'txtLoginEMail': $("#regName").val().replace(/(^\s+)|(\s+$)/g, ""),
                    'txtLoginPwd': $('#repassword').val(),
                    'chkRememberMe': $(".signIn input[name='chkRememberMe']").prop('checked') ? "true" : "",
                    'codeId': temId,
                    'codeValue': $('#verification').size() > 0 ? $('#verification').val() : '',
                    'event': '3',
                    'spmp': '4.20.53.225.685'
                },
                success: function (msg) {
                    if (msg['data'] == 11) {  //如果是2013-2014注册的账号，出现防刷弹层
                        PreventData(msg['state']);
                        return;
                    } else if (msg['state'] == "1") {
                        baihe.bhtongji.tongji({ 'event': '3', 'spm': '4.20.104.225.1021' });
                        //window.location.reload();
                        window.location.href = 'http://u.baihe.com/?userid=' + bzt_loginUserId + "&time=" + new Date().getTime();
                    } else if (msg['state'] == "0") {
                        if (msg['data'] == "0") {
                            $("#regName_error").addClass('error').html('用户名或密码错误');
                            fnVerificationCode(_val);
                        } else if (msg['data'] == "1") {
                            $("#regName_error").addClass('error').html('用户名或密码错误');
                            fnVerificationCode(_val);
                        } else if (msg['data'] == "2") {
                            $("#regName_error").addClass('error').html('用户名密码检测异常');
                        } else if (msg['data'] == "3") {
                            window.location.href = "http://my.baihe.com/register/";
                        } else if (msg['data'] == "4") {
                            $("#regName_error").addClass('error').html('被停权');
                        } else if (msg['data'] == "5") {
                            $("#regName_error").addClass('error').html('登录异常登录失败');
                        } else if (msg['data'] == "6") {
                            $("#regName_error").addClass('error').html('您的IP被限制登录，请与客服联系');
                        } else if (msg['data'] == "7") {
                            if (msg['data'] == "0" || msg['data'] == "1") {
                                $("#regName_error").addClass('error').html('用户名或密码错误');
                            } else {
                                $("#regName_error").removeClass('error').html('');
                            }
                            $("#errVerificationCode").addClass('error').html('验证码不正确');
                            fnVerificationCode(_val);
                        } else if (msg['data'] == "12") {
                            baihe.block({
                                title: '提示',
                                text: '抱歉，您的账号存在登录异常，请检查您的登录环境后再次尝试。如有问题，请咨询客服电话：400-1520-555（8:00至20:00）。'
                            });
                        }
                    }
                }
            });
            iBtn = false;
        }
        event.stopPropagation();
    });



    ! function () {
        $(function () {
            var newArr = [];
            $(".story a").each(function (index, val) {
                newArr.push($(this).attr('data-id'));
            });
            if (newArr.length > 0) {
                $.ajax({
                    url: 'http://story.baihe.com/index.php?action=spaceport&jsonCallBack=?',
                    dataType: 'jsonp',
                    data: {
                        "idStr": newArr.join()
                    },
                    success: function (data) {
                        if (typeof data != "undefined" && data) {
                            for (var newJson in data['msg']) {
                                $('#dataNum' + newJson).html(data['msg'][newJson]);
                            }
                        }
                    }
                });
            }
        });
    }();

    var timer;
    $(".story a").mouseenter(function (event) {
        var _this = this;
        // var dataID=$(_this).attr('data-id');
        //  $.ajax({
        //     url: 'http://story.baihe.com/space.php?action=port&jsonCallBack=?',            
        //     dataType: 'jsonp',
        //     data:{"id":dataID},
        //     success:function(msg){
        //         if(typeof msg !="undefined" && msg)
        //         $(_this).find('.like strong').html(msg.num);
        //     }
        // });
        timer = setTimeout(function () {
            $(_this).find('.like').show();
            setTimeout(function () {
                $(_this).find('.data').addClass('active');
            }, 50);

        }, 300);
    }).mouseleave(function (event) {
        var _this = this;
        if (timer) {
            clearTimeout(timer);
        }
        $(_this).find('.data').removeClass('active');
        setTimeout(function () {
            $(_this).find('.like').hide();
        }, 400);
    });


    $('#searchBtn').click(function (event) {
        var havingpic = '&search.sb.havingpic=',
            searchUrl = 'http://search.baihe.com/solrAdvanceSearch.action?spm=2.1.39.11.138&pageId=1&search.se2.change=0&&ord=1&spm=1.1.1.11.15&&search.se2.groupid=0';

        searchUrl += ('&search.sb.gender=' + baihe.getBaiHeSelectVal('#sex'));
        searchUrl += ('&search.sb.minage=' + baihe.getBaiHeSelectVal('#minage'));
        searchUrl += ('&search.sb.maxage=' + baihe.getBaiHeSelectVal('#maxage'));
        var provinceId = baihe.getBaiHeUniversityDataVal('#district');
        if (provinceId.length < 4) {
            baihe.block({
                title: '提示',
                text: '请选择城市名称'
            });
            return;
        } else if (provinceId.length == 4) {
            searchUrl += ('&search.se1.provinceId=' + provinceId.slice(0, 4));
            searchUrl += ('&search.se1.districtId=-1');
        } else if (provinceId.length > 4) {
            searchUrl += ('&search.se1.provinceId=' + provinceId.slice(0, 4));
            searchUrl += ('&search.se1.districtId=' + provinceId.slice(0, 6));
        }
        if ($('#photo').prop('checked')) {
            havingpic += '1';
        } else {
            havingpic += '0';
        }
        searchUrl += havingpic;
        window.open(searchUrl);
    });



    $(".arrow").on('click', function () {
        $(this).hide();
        $("#loginIcon").show();
    });

    $("#realName").on('focus', function () {
        $(this).removeClass('highlight2').addClass('highlight1');
        $("#regName_error").removeClass('error').html('');
        if ($(this).val() == '请填写真实姓名') {
            $(this).val('');
        }
    }).on('blur', function () {
        $(this).removeClass('highlight1');
        var _val = $(this).val();
        if (baihe.validateRules.isNull(_val)) {
            $(this).val('请填写真实姓名');
        } else {
            $(this).attr('sta', 2).removeClass('highlight2');
            $("#realName_error").removeClass('error').html('');
        }
    });

    $("#realTel").on('focus', function () {
        $(this).removeClass('highlight2').addClass('highlight1');
        $("#realTel_error").removeClass('error').html('');
        if ($(this).val() == '请填写真实电话') {
            $(this).val('');
        }
    }).on('blur', function () {
        $(this).removeClass('highlight1');
        var _val = $(this).val();
        if (baihe.validateRules.isNull(_val)) {
            $(this).val('请填写真实电话');
        } else {
            var format = baihe.validateRules.isMobile(_val); //|| baihe.validateRules.isTel(_val)
            if (!format) {
                $(this).addClass('highlight2');
                $("#realTel_error").addClass('error').html('请填写真实电话');
            } else {
                $(this).attr('sta', 2).removeClass('highlight2');
                $("#realTel_error").removeClass('error').html('');
            }
        }
    });


    $("#verifyCity").on('focus', function () {
        $(this).removeClass('highlight2').addClass('highlight1');
        $("#verifyCity_error").removeClass('error').html('');
        if ($(this).val() == '请选择/输入城市名称') {
            $(this).val('');
        }
    }).on('blur', function () {
        $(this).removeClass('highlight1');
        var _val = $(this).val();
        if (baihe.validateRules.isNull(_val)) {
            $(this).val('请选择/输入城市名称');
        } else {
            $(this).attr('sta', 2).removeClass('highlight2');
            $("#verifyCity_error").removeClass('error').html('');
        }
    });

    $("#freeTrial").on('click', function () {
        baihe.statistics({
            spm: '2.1.39.112.153',
            ggCode: 'newversion_112'
        });
        var isTrue = true,
            _val;
        if ($("#realName").attr('sta') != 2) {
            isTrue = false;
            _val = $("#realName").val();
            if (_val == '请填写真实姓名' || baihe.validateRules.isNull(_val)) {
                $("#regName").addClass('highlight2');
                $("#realName_error").addClass('error').html('姓名不能为空');

            }
        }

        if ($("#sexInfo").find('.radioChecked').length === 0) {
            $("#sexInfo_error").addClass('error').html('请选择性别');
            isTrue = false;
        }

        if ($("#realName").attr('sta') != 2) {
            isTrue = false;
            _val = $("#realName").val();
            if (_val == '请填写真实姓名' || baihe.validateRules.isNull(_val)) {
                $("#regName").addClass('highlight2');
                $("#realName_error").addClass('error').html('姓名不能为空');

            }
        }

        if ($("#verifyCity").attr('sta') != 2) {
            isTrue = false;
            _val = baihe.getBaiHeUniversityDataVal("#verifyCity");
            if (_val.length < 4) {
                $("#verifyCity").addClass('highlight2');
                $("#verifyCity_error").addClass('error').html('请选择城市名称');

            }
        }

        if ($("#realTel").attr('sta') != 2) {
            isTrue = false;
            _val = $("#realTel").val();
            if (_val == '请填写真实电话' || baihe.validateRules.isNull(_val)) {
                $("#realTel").addClass('highlight2');
                $("#realTel_error").addClass('error').html('电话号码不能为空');

            }
        }
        if (isTrue) {
            var jsonData = {};
            jsonData['username'] = $("#realName").val();
            jsonData['gender'] = $("#sexInfo input:Checked").val();
            jsonData['city'] = baihe.getBaiHeUniversityDataVal("#verifyCity");
            jsonData['telphoto'] = $("#realTel").val();
            $.ajax({
                url: "http://www.vipbaihe.com/action_jsonp.php?jsonCallBack=?",
                data: jsonData,
                dataType: "jsonp",
                success: function (data) {
                    if (data['state'] == "ok") {
                        $('#formApply').hide();
                        $('#applySuccss').show();
                    }
                }
            });
        }
    });

    function getArrRndomNumber(arr, count) {
        var len = arr.length;
        var newArr = [];
        !(function randomArr() {
            var num = Math.floor(Math.random() * len);
            if (newArr.length === 0) {
                newArr.push(arr[num]);
            } else {
                len = arr.length;
                for (var i = 0; i < len; i++) {
                    if (newArr[i] == arr[num]) {
                        randomArr();
                        return;
                    }
                }
                newArr.push(arr[num]);
            }

            if (newArr.length == count) {
                return;
            } else {
                randomArr();
            }
        })();
        return newArr;
    }

    var recommendMal = [{ "userID": "5347419", "sex": "男", "name": " 阿威nick", "age": "37", "height": "173", "educationChn": "本科", "incomeChn": "20000-25000元", "familyDescription": "从小生长在沈阳的东北大院~~父母分别是上海和沈阳人（还有些锡伯族和满族血统）~~　　\n\n大学专业是计算机，毕业后也顺其自然的在互联网公司做了几年，但后来自己主动转行做记者，后又在上海做过2-3年商业摄影师（主拍杂志或新闻图片），因为小时喜欢画画，也因为喜欢做自己从未做过的事情~~\n\n现在回归老本行继续在北京一家大型互联网公司朝九晚五的工作着。　\n　\n三十岁之前基本做过了所有有关“青春的事情”（不管是对的还是错的）~~~\n\n现在和一条大金毛狗一起生活，因为我答应过它要不离不弃，所以希望你也能喜欢小动物：）\n" }, { "userID": "84120668", "sex": "男", "name": "风平浪静", "age": "27", "height": "181", "educationChn": "本科", "incomeChn": "10000-15000元", "familyDescription": "在国企工作。工作以后被公司派到内蒙古和非洲，耽误了个人问题。现工作稳定，希望执子之手，与子偕老。" }, { "userID": "109487819", "sex": "男", "name": "小宝", "age": "33", "height": "178", "educationChn": "本科", "incomeChn": "10000-15000元", "familyDescription": "喜欢在一个人的下午泡一杯清茶，一个人静静的读书、写字，晒太阳或是听自己喜欢的音乐，抑或是喜欢一杯红酒的休闲时光；喜欢看晚霞伴着夕阳的画面，看着天边的那抹云彩，人生也仿佛就在里面，随风飘荡。" }, { "userID": "54761783", "sex": "男", "name": "来福胶泥", "age": "30", "height": "173", "educationChn": "博士", "incomeChn": ">50000元", "familyDescription": "试试缘分。第一代北京人，父在经商，母是国家公务员。一直对物质生活淡然，支过教，吃过苦，随和谦卑幽默，几经努力考上国家公务员，狮子座的博士，上进心强。对生活有追求，计划性强，看过不少书，游历不少国家，喜欢周末看球、听民谣摇滚古典现场、看展览，文艺范儿。nn　　对另一半，不喜欢拜金虚荣女，你要做过外围或是常出入夜店也别找我弃暗投明，婚姻不是用来搞慈善。还有，要是没念过正经大学、没有正式工作的，咱恐怕也没机会One World One Dream了。nn　　无意冒犯，说这么多还不是真心想找个能够相互搀扶、欢度晚" }, { "userID": "64170899", "sex": "男", "name": "浮华沧桑-托勿扰 ", "age": "26", "height": "177", "educationChn": "本科", "incomeChn": "15000-20000元", "familyDescription": "希望互相彼此可以包容。。。争取可以牵手在一起！" }, { "userID": "117533735", "sex": "男", "name": "帅星", "age": "27", "height": "178", "educationChn": "硕士", "incomeChn": "水晶百合可见", "familyDescription": "我是北京某名牌大学高校教师，祖籍山东。喜欢跑步、羽毛球等运动和喜欢电影、话剧等艺术形式。毕业于某传媒高校，毕业后留京，京户。期待孝顺，温柔的女孩！" }, { "userID": "55138685", "sex": "男", "name": "robin", "age": "41", "height": "179", "educationChn": "硕士", "incomeChn": ">50000元", "familyDescription": "     关于我??极致人生\n  \n\n      我生活的追求就是做大事、过小日子，性格是外柔内刚，富有宽容心、责任心、家庭观念。\n      我之前，学的专业是计算机和MBA，曾在在500强企业任高管，早在两年半，自营公司，这期间，尽管起伏跌宕，终成正果，未来，可以预见。\n\n     我小时候有很多爱好，现在主要呆在健身房、钢琴房、口语班度过，我平常烟酒不沾，即便陪客户吃饭、K歌也是如此，因为闲时太多，我周末也会去登山、游泳、写生，或者琢磨做点美食，给家里人尝尝新鲜的玩意，我也喜欢逛街买衣服，让身边的人" }, { "userID": "117655915", "sex": "男", "name": "007", "age": "32", "height": "180", "educationChn": "本科", "incomeChn": "15000-20000元", "familyDescription": "于茫茫人海中，寻一个人....\n乐观开朗，真实善良，性格脾气佳，就算再物欲的现实社会也要做一个典型的浪漫主义处女座....\n爱好很广泛，还想继续拓展的爱好也很多...." }, { "userID": "95568998", "sex": "男", "name": "Smile?L ", "age": "23", "height": "181", "educationChn": "本科", "incomeChn": "10000-15000元", "familyDescription": "2015.2.3，不会主动提分手，即使你厌倦了，我也会尽最大努力，得卿不易，我可以承诺。你需要我的时候，我就在你身后。脾气非常温和，言念君子，温其如玉。找一人，陪她一生，我始终坚信!我比谁都乐观，骨子里坚韧，不轻言放弃r不会抽烟，很少喝酒，爱好可以交流，你有喜爱的可以教我，我陪着你。打算明年或后年在京购房。1.别怕付出，我来主动，付出更多。2.不要计较，早见家长，认真负责。ps：至少让我在茫茫人海中，看到你，好吗，我走了很久，阳光会在路上吗？" }, { "userID": "82015505", "sex": "男", "name": "小小酥", "age": "26", "height": "182", "educationChn": "本科", "incomeChn": "15000-20000元", "familyDescription": "大家好，现在常住地点在云南省丽江市，我平时的业余时间喜欢旅行，与朋友聚会，我在自营公司工作，我想一年之内就结婚，我理想中的约会方式是共赴浪漫之旅，对于我的另一半，我希望她是一个时尚的女生……希望在百合网能快点遇到心仪的她。" }],
        recommendFeMal = [{ "userID": "104514246", "sex": "女", "name": "春暖花开", "age": "25", "height": "162", "educationChn": "硕士", "photoNum": "8", "familyDescription": "找个靠谱的嫁了吧" }, { "userID": "75419781", "sex": "女", "name": "白色羽毛", "age": "32", "height": "164", "educationChn": "本科", "photoNum": "11", "familyDescription": "  愿得一人心，白首不相离。\n    我是一个要在家庭和事业两者必选其一时会毫不犹豫选择家庭的传统女孩.做过幼儿教师的我活泼开朗、乐观自信。如果你是真诚、善良、有责任心的,我希望在这里能遇到你,两人相亲相爱,相互体贴,相互信任,白头携老共渡此生。" }, { "userID": "100602030", "sex": "女", "name": "洁白色的雪", "age": "23", "height": "172", "educationChn": "本科", "photoNum": "8", "familyDescription": "你好 \n感谢你认真看我的内心独白，我上百合网是为了寻找一份纯真属于自己的爱情和婚姻，我是一个对爱情和婚姻比较传统的女孩，虽然上面形形色色的人很多，但是我坚信也有和我一样抱着真诚来寻找未来的幸福。我认为爱情和婚姻是一件非常庄严的事。也是一件附有责任的事，这关系到两个人未来的幸福，同样也关系到一个家庭未来的命运。所以对于我自己的爱情和婚姻我不会草率。我不会轻易和陌生见面，不会轻易给陌生人联系方式，希望这点你们能理解和尊重。因为我只想认真的选择一次。而不是肆无忌惮去对面所有。如果我们认识了，走到见面的那天这需要" }, { "userID": "114158167", "sex": "女", "name": "Joey ", "age": "24", "height": "170", "educationChn": "本科", "photoNum": "12", "familyDescription": "　“在我们的一生中，遇到爱，遇到性，都不稀罕。稀罕的是，遇到了了解。”---廖一梅《柔软》n        可能我人生中最好的光景没有给予你，但我愿用未来的时间依偎在你的身边。我坚信，两个平凡的人，偶然遇到，慢慢地彼此了解，相互依靠，无论发生什么，两个人都一起面对。你下班累了，我给你泡杯咖啡，晚上打雷下雨，你抱着我，我就不会害怕，我觉得那样，才是我最想要的。我简单介绍下我的家庭情况，一家三口，我目前和父母共同居住，父亲是高级工程师，母亲是一私企副总，经济状况普通，工薪家庭。父母都是很和蔼的人。完全不用担心" }, { "userID": "72141492", "sex": "女", "name": "静夜思绪 ", "age": "34", "height": "170", "educationChn": "本科", "photoNum": "5", "familyDescription": "大家好，我是一个善良，稳重的女孩，现在常住地点在北京朝阳，希望将来过安定、温馨简单的生活。对于我的另一半，我希望他是一个睿智，稳重，思想成熟，有品位的男士……希望在百合网能找到牵手一辈子的他。" }, { "userID": "77025333", "sex": "女", "name": "喜宝Queenie", "age": "29", "height": "172", "educationChn": "本科", "photoNum": "22", "familyDescription": "大家好，我是一个直率，开朗，独立，体贴的女孩，现在常住地点在北京市朝阳区，我平时的业余时间喜欢下厨，旅行，运动，唱歌，我的家庭是单亲家庭，我在私营企业工作，我想一年之内就结婚，我理想中的约会方式是牵手漫步在公园，共赴浪漫之旅，做伴去听演唱会，希望将来过共同为小家奋斗，依偎在沙发里看电影，共同下厨，相互倾听心声的生活。对于我的另一半，我希望他是一个责任心，幽默，成熟稳重的男士……希望在百合网能找到牵手一辈子的他。" }, { "userID": "117658615", "sex": "女", "name": "Meggie", "age": "29", "height": "168", "educationChn": "硕士", "photoNum": "4", "familyDescription": "大家好，我是一个独立，体贴的女孩，现在常住地点在北京市朝阳区，我平时的业余时间喜欢旅行，看书，摄影，我想时机成熟就结婚，希望在百合网能找到牵手一辈子的他。" }, { "userID": "73878904", "sex": "女", "name": "野菜饭团子", "age": "27", "height": "160", "educationChn": "本科", "photoNum": "8", "familyDescription": "希望你最好是北京人 或者长期在北京生活过 且未来也一定将会在北京生活的人\n希望你为人踏实 有上进心 做事谨慎 但又不失幽默感 有品位 有生活情趣\n希望你阅历丰富 无论是上到地理历史 还是生活常识 \n希望我们的年龄差距大概在4~10岁 本人有轻微的恋父情节\n希望你是个看起来亦正亦邪的人 但骨子里是个彻头彻尾的好人\n希望你是真诚的 禁止勾搭 非诚勿扰 \n本人对于那些言简意赅自动生成的信件 一律不回复\n喜欢张嘉译、孙红雷风格的男性 喜欢穿西装 或者休闲商务类的装束 仅供参考 \n对偏瘦的人 类似洗发店大工小工的男" }, { "userID": "117072259", "sex": "女", "name": "流年", "age": "25", "height": "178", "educationChn": "本科", "photoNum": "3", "familyDescription": "等待，只为与你相遇，从相识 相爱到遥远的未来。夕阳下，携手一起慢慢变老。" }, { "userID": "116557777", "sex": "女", "name": "好久不见", "age": "28", "height": "168", "educationChn": "本科", "photoNum": "14", "familyDescription": "我的性格特点是：简单，开朗，活泼，直脾气；业余时间我喜欢：摄影，旅游，户外，聚会；我憧憬的生活是：开心快乐，自由自在的生活；我希望我的爱人：善良，有担当，责任心强，成熟稳重。；此外我还想补充：遇到了就好好珍惜，两个优秀的人在一起不一定幸福，只有两个合适的人在一起才会幸福。。" }];

    // var recommendMal =[{"userID":"92824717","sex":"男","name":"lihuiyan1","age":"25","height":"182","educationChn":"本科","incomeChn":">50000元","familyDescription":"我是开服装店的，家里也都是做生意的，家庭条还不错，我希望找一个年龄稍微比我大些，成熟，经历过事的女孩结婚","isMember":"是","area":"天津"},{"userID":"84765468","sex":"男","name":"简单生活","age":"33","height":"178","educationChn":"本科","incomeChn":"30000-50000元","familyDescription":"西安求学，上海折腾过几年，现扎根天津；\n　　曾做过通信，现在创立运营一家投资公司从事企业孵化服务工作，在收获事业的同时也失去了很多，现在生活开始趋于我稳定，希望能够在这里收获一份缘分；\n    习惯了顺其自然，命里有时终须有，命里无时莫强求；\n　　都说缘由天定，份在人为，希望找到属于你我的缘分。\n　　（补充：离异过的、不在天津的、资料没照片的、岁以上的、单亲家庭的、2年内不能结婚的就请不用发信了，其他信件必复）","isMember":"否","area":"天津"},{"userID":"114435323","sex":"男","name":"无所畏惧","age":"26","height":"175","educationChn":"本科","incomeChn":"20000-25000元","familyDescription":"人还是很靠谱的，长相也还过的去，希望她也靠谱，也长相过的去，开开心心在一起比什么都好","isMember":"否","area":"北京"},{"userID":"96294417","sex":"男","name":"逆光","age":"27","height":"182","educationChn":"硕士","incomeChn":"20000-25000元","familyDescription":"遇见一位简单善良的姑娘，不用那么惊艳，像邻家女孩一般亲切温和就好。nn　　我会陪你一起过单纯幸福的日子，看没看过的风景。nn　　愿得一人心，白首不相离。","isMember":"否","area":"北京"},{"userID":"92863866","sex":"男","name":"看海","age":"24","height":"180","educationChn":"大专","incomeChn":">50000元","familyDescription":"家庭个人条件很好  非诚勿扰","isMember":"是","area":"湖南"},{"userID":"83383809","sex":"男","name":"奋斗之…","age":"26","height":"174","educationChn":"大专","incomeChn":"30000-50000元","familyDescription":"谁曾在我耳畔呢喃私语？愿陪我一生颠沛流离。谁曾在我身边浅唱低吟？许我三世情缘不变，无怨无悔。 岁月流年，沧海沉淀。忙忙碌碌，我有几何？苦笑不已！这个世界，被记起的会是谁，去遗忘的又是谁？","isMember":"否","area":"湖南"},{"userID":"108457890","sex":"男","name":"Tsi…","age":"27","height":"178","educationChn":"本科","incomeChn":"20000-25000元","familyDescription":"谦卑而执着，羞涩而无畏。繁华过后寻找一片宁静，有共同的追求，价值观，思想。人生本无定数，回首已是天涯，相识便是缘，愿遇到携手相伴的你。","isMember":"是","area":"湖南"},{"userID":"67014083","sex":"男","name":"一岁就…","age":"30","height":"178","educationChn":"本科","incomeChn":"30000-50000元","familyDescription":"出发啦，我的真情告白，发自肺腑的。nn　　我，178，长相一般，绝对带的出手，也能顺利带回家。nn　　我没有固定的工作单位，所以我绝对不是什么公务员之类的，如果您需要找个铁饭碗的，就请您把光标选中右上角的那个X，直接下一位，免得浪费您宝贵的青春。n　　但是我有稳定的收入来源。n　　我自己在创业，主要是建筑和地产方面。最近又在涉足网络软件开发领域。n        有自己的公司。n　　我对待感情专一，所以我希望您也是，我敬畏朝三暮四，浓妆艳抹，见利忘义的MM.nn　　我爱笑，虽然年纪大了，一笑起来脸上皱","isMember":"是","area":"湖南"},{"userID":"115450800","sex":"男","name":"对望","age":"26","height":"184","educationChn":"本科","incomeChn":"4000-5000元","familyDescription":"出生在医学家庭，后来大学也读的医学，但是在毕业工作一年后，发现我并适合做一名医学工作者，选择下海，为了实现自己心中的事业梦。如果说有一天事业有了，一切都有了，我期待有那么一个乐观，善良，积极向上，充满正能量的人出现，和我一起分享这个世界所有的美好。期待那份刻骨铭心，并暖暖的爱情。我期待另一半，身高165以上，瘦瘦的，独立性强，有主见，如果感觉合适，闪婚。","isMember":"金至尊","area":"北京"},{"userID":"83482624","sex":"男","name":"Walter","age":"38","height":"170","educationChn":"本科","incomeChn":">50000元","familyDescription":"大家好，我是一个有责任心，体贴，憨厚老实的男孩，现在常住地点在台湾省台北市，我在私营企业工作，我想时机成熟就结婚，我理想中的约会方式是共赴浪漫之旅，对于我的另一半，我希望她是一个顾家，漂亮，可爱，温柔，孝顺的女生……希望在百合网能快点遇到心仪的她。","isMember":"否","area":"台湾"},{"userID":"117058739","sex":"男","name":"为风轻过","age":"28","height":"181","educationChn":"硕士","incomeChn":"15000-20000元","familyDescription":"温顺强韧斗志、高雅内敛文静而不乏开朗、艺术气质、善心仁慈、孝顺重情爱家、爱大自然、善解人意、遇事顾虑周全。n心灵上是个宇宙的流浪者，在展开流浪之旅之时，只是寻求成长和提升，而不被成败所束缚。只会要求了解，而不局限於世俗的眼光。","isMember":"水晶会员","area":"天津"},{"userID":"64585755","sex":"男","name":"张浅宇 ","age":"29","height":"177","educationChn":"本科","incomeChn":">50000元","familyDescription":"希望可以在这里遇见与我执手偕老的她~~\n\n\n\n　　我，是一个非常有责任心的男人，我愿意为我未来的妻子和我的事业贡献所有。\n\n\n\n　　我，在一天繁忙的工作之后，喜欢喝点红酒，喜欢健身，游泳，打打桌球，喜欢旅游。\n\n\n\n　　她，希望你温柔可爱，浪漫迷人，孝顺父母，和我有共同的世界观，一起铸造幸福的每一天。\n\n\n\n　　我愿化身石桥，受五百年风吹，五百年日晒，五百年雨打，只为等你从桥上走过.","isMember":"水晶会员","area":"江苏"},{"userID":"110876480","sex":"男","name":"MR渣男","age":"26","height":"172","educationChn":"本科","incomeChn":"30000-50000元","familyDescription":"一个完整的人生，不能缺少一场奋不顾身的爱情，和一次说走就走的旅行","isMember":"高级会员","area":"浙江"},{"userID":"116113268","sex":"男","name":"绩优股","age":"27","height":"170 ","educationChn":"初中","incomeChn":" >50000元","familyDescription":"茫茫人海、碌碌一生","isMember":"否","area":"浙江"},{"userID":"116781666","sex":"男","name":"我以为","age":"35","height":"176","educationChn":"大专","incomeChn":" 15000-20000元","familyDescription":"大家好，我是一个性格比较直爽的男生，第一次在这样的场合自我介绍与评价自己。我本人不相信性格能互补，只相信性格相合方可同舟。对于婚姻我不会因为结婚而结婚，生活中的相互尊重比两个人的爱情来的更于重要，换位思考以及沟通才是生活的本质，看对眼是有缘，对上眼是有份，志同道合是才缘份的开始！                                                   以上所表达的纯属个人的看法与理解！希望在百合网能快点遇到心仪的她。","isMember":"高级会员 ","area":"福建"},{"userID":"56349670","sex":"男","name":"张力","age":"27","height":"185","educationChn":"本科","incomeChn":" 10000-15000元","familyDescription":" 2012年江苏卫视“非诚勿扰”专场活动，河北省人气第一男嘉宾。\n  \n  本人属于牵的出去带的回来的类型，不要再问照片是不是我，照片就是我.就长这样，不会化妆！\n  感情是双方的吸引、付出、和包容，不是用客观条件可以框架的，遇到对的人，就什么都对了。\n  \n敬致某些异性朋友：非常感谢您的关注，跟我聊之前请您先衡量下是否您能具备咱们相互吸引的因素，以免浪费你我的时间，谢谢。","isMember":"水晶会员","area":"河北"}],
    // recommendFeMal =[{"userID":"65177844","sex":"女","name":"张77","age":"24","height":"165","educationChn":"本科","photoNum":"7","familyDescription":"大家好，我是一个善良，开朗的女孩，现在常住地点在天津东丽，我平时的业余时间喜欢旅行，运动，我理想中的约会方式是一起做饭，共赴浪漫之旅，彼此相依相偎，希望将来过安定、温馨的生活。希望在百合网能找到牵手一辈子的他。","isMember":"否","area":"天津"},{"userID":"79156741","sex":"女","name":"极品妃","age":"22","height":"170","educationChn":"本科","photoNum":"9","familyDescription":"等待，只为与你相遇，从相识 相爱到遥远的未来。夕阳下，携手一起慢慢变老。","isMember":"否","area":"河南"},{"userID":"112915217","sex":"女","name":"hanabi","age":"26","height":"164","educationChn":"本科","photoNum":"5","familyDescription":"我的个性开朗活泼，工作稳定，能承担一定的家务，现已定居南昌，我想找个认真、负责、有担当的人。外地的暂时不考虑了～","isMember":"否","area":"江西"},{"userID":"115242084","sex":"女","name":"自导自演","age":"22","height":"164","educationChn":"本科","photoNum":"3","familyDescription":"等待，只为与你相遇，从相识、相爱、到遥远的未来。夕阳下，携手一起慢慢变老。","isMember":"否","area":"河南"},{"userID":"69962005","sex":"女","name":"cocoli","age":"34","height":"164","educationChn":"大专","photoNum":"8","familyDescription":"曾经我有一个人人羡慕的合乐之家，唯一的初恋，唯一的爱人，和一双乖巧可爱的儿女，但长久的两地分居出现了弊端，面对背叛我曾放下自尊极力挽回，经过4，5年的努力和忍耐却终是无用功，致使最后的分离，如今过去多年了，我想重拾自信，带着用所有青春换来抚育和珍惜的孩子找一个栖息之地，希望能出现成熟稳重，有爱心，有责任感，重视家庭及事业有成的那个他，组成互敬互爱，珍惜彼此的再续姻缘...\n\n性格：我大多数是喜欢安静，居家型，不喜欢?嗦，对事情的判断力很果断，诚实心善，也比较感性，看悲剧的时候会流泪，看到喜剧好笑的地方也会","isMember":"水晶会员","area":"江苏"},{"userID":"70071072","sex":"女","name":"Nancy","age":"26","height":"164","educationChn":"本科","photoNum":"4","familyDescription":" HIHI  我出生在大陆  在国外生活了很久  外航空姐5年的经?让我比同龄女生更成熟一些，现已回到国内陪伴家人并定居南京工作 \n\n　　典型的狮子座的女生  敏感  自信  开朗   喜欢交朋友  不喜欢被忽视  在喜欢的人面前会展现比较小女人的一面  希望你是一个懂我的人  不知道怎样形容喜欢的类型  眼缘最重要吧（因?太广了  感觉对了就是对了  标?并不是死条件）  不喜欢太娘  古板又脾气大的  不爱笑  小气又自私的  \n\n   当然 说再多也还是需要相处来验证 欢迎大家来认识我","isMember":"否","area":"江苏"},{"userID":"60115394","sex":"女","name":"YueYue","age":"26","height":"171","educationChn":"本科","photoNum":"4","familyDescription":"曾拥有过甜蜜的恋爱，但已成为过去，感谢曾经的一切，让我成熟，让我明白该如何去更好的相爱。\n　　感情是需要两个人共同去经营去珍惜，对的感情应该是积极且快乐的，不需去百般讨好，失去自我，一句简单的话语，一个注视的眼神便足已。渴望爱情，但不盲目，一切顺其自然，在对的你还没出现前，我会努力照顾好自己，让自己变的更加优秀。只想拥有一段简单的幸福，拥有一个美满的家庭，抚养我们健康可爱的孩子，一起照顾好我们的父母。只有你可以看穿我的逞强，读懂我的小世界，就这样和你一起慢慢变老。","isMember":"否","area":"北京"},{"userID":"65836665","sex":"女","name":"飘飘","age":"22","height":"170","educationChn":"本科","photoNum":"8","familyDescription":"爱生活，爱自由\n爱lomo，爱摄影，不太爱movie\n爱唱歌，更爱Cheer陈绮贞\n爱甜食，也爱夜间大排档\n我爱chanel,lv...也爱60一件的淘宝日系内搭\n我是个小胖纸，是个不折不扣的大吃货\n我不是腐女，不爱搅基\n我不奢求帅哥\n我不爱文学男，感性男，学霸男，花心男\n我希望有个美丽的baby,\n我等待聪明睿智，简单专一，身高不要太矮，体重不要太重的，眼睛不要太小的你。\n我就是我\n身高170，体重飘忽不定，生活在爱北京的重庆妹纸\n我是白飘飘","isMember":"否","area":"北京"},{"userID":"97846451","sex":"女","name":"灿悠优","age":"30","height":"162","educationChn":"本科","photoNum":"10","familyDescription":"首先声明一下，实名认证的出生日期不对，我实际上是86年一月份出生的，身份证上显示84年。\n很感慨自己成了大龄剩女，其实根源还在自身，大学的恋爱因为地域关系家庭原因结束了。感觉进入社会工作之后找对象真的很不容易，尤其我自己还不想找老家的，也不想找一个公司的，工作环境又闭塞，开始几年自己也不着急，相信总会有好的姻缘等着自己一样，但是有时候又擦肩而过。\n     因为不是在天津上学，这边朋友同学少，也没有什么介绍的资源，在找对象这块，我就是一个井底之蛙，又要忙着工作，感情这事一放再放。老是觉得反正自己看起来不大","isMember":"水晶会员","area":"天津"},{"userID":"115798258","sex":"女","name":"夏夜","age":"25","height":"164","educationChn":"本科","photoNum":"5","familyDescription":"大家好，我是一个开朗的女孩，现在常住地点在长春市市辖区，我平时的业余时间喜欢摄影，我在稳定的国有企业工作，我理想中的约会方式是体贴，共赴浪漫之旅，希望在百合网能找到牵手一辈子的他。","isMember":"否","area":"吉林"},{"userID":"62365563","sex":"女","name":"六月花神","age":"31","height":"164","educationChn":"本科","photoNum":"9","familyDescription":"出于对中医的热爱，我成为了一名中医医师，大学时主修中医学类，辅修针灸推拿，平时比较关注养生保健，喜欢食疗。\n    相信一见钟情，相信总有一个人会在岁月的拐角处静静等我，我在寻找我的灵魂伴侣，是你吗？","isMember":"水晶会员","area":"上海"},{"userID":"70168174","sex":"女","name":"angelsuns","age":"30","height":"165","educationChn":"本科","photoNum":"10","familyDescription":"华丽的话不多说，两个人了解相处坦诚是第一步！首页我不是很上照，也不会ps，只能说本人比那些照片看上去美丽的美女90%都漂亮，哈哈，这点自信还是有的，我是一个感性的女孩，我喜欢美食，我不喜欢给自己太大的压力,生活开心就好,但是择偶,我一定要选自己喜欢的,宁缺毋滥,希望我的另一半也是这样要求自己的!如果您是一位非常忙的人士或者没有责任心的男人,那也就不要联系我了.我需要我的爱人顾我,顾家!否则也没有成家的必要了！我也比较粘人，老是出去泡吧，女闺蜜特别多的我也不能接受噢！只想找个简单的人好好相爱过日子！没有一个","isMember":"否","area":"上海"},{"userID":"89128092","sex":"女","name":"molly","age":"31","height":"163","educationChn":"本科","photoNum":"17","familyDescription":"大家好，我是一个独立，开朗，直率，小女人的女孩，现在常住地点在上海市闵行区，我平时的业余时间喜欢下厨，希望在百合网能找到牵手一辈子的他。","isMember":"否","area":"上海"},{"userID":"116775993","sex":"女","name":"崔佳庆","age":"26","height":"162","educationChn":"本科","photoNum":"10","familyDescription":"大家好，我是一个小女人，直率的女孩，现在常住地点在，我平时的业余时间喜欢旅行，希望将来过共同下厨，相互倾听心声的生活。对于我的另一半，我希望他是一个责任心，幽默的男士……希望在百合网能找到牵手一辈子的他。","isMember":"水晶会员","area":"湖北"},{"userID":"115883593","sex":"女","name":"闲情逸致","age":"26","height":"170","educationChn":"本科","photoNum":"17","familyDescription":"等待，只为与你相遇，从相识 相爱到遥远的未来。夕阳下，携手一起慢慢变老。","isMember":"否","area":"湖南"},{"userID":"91056219","sex":"女","name":"FF","age":"26","height":"160","educationChn":"本科","photoNum":"17","familyDescription":"　（实话实说，稍微注重外表和经济实力）一，我不是最漂亮的，但也绝对配得上外貌出众的男生不喜欢花样美男和过于修饰打扮的男生，喜欢成熟有男人味却又不失可爱的男人，例如韩国明星宋承宪类型的最佳，不过主要还是注重眼缘；二，不是拜金女，也不是要钓金龟婿，只是经济标准不能低于父母一直以来给予我略微偏高的生活。没有哪家父母愿意让自己的孩子去过吃苦受累的生活，而我自己也不愿意，所以请理解！三，我是贵州凯里的，如果您有能力，可以妥当安排我去到你的城市，那我也愿意去，如果您要来我的家乡发展，那我也欢迎，虽然我们这地方小，但消","isMember":"否","area":"贵州"},{"userID":"104568003","sex":"女","name":"蓝色beauty","age":"33","height":"162","educationChn":"本科","photoNum":"5","familyDescription":" 大家好，我是一个直率，开朗，独立的女“汉纸”，现在常住地点在贵州省兴义市，就职于当地一家国企，我平时的业余时间喜欢唱歌、旅行、偶尔会与三五好友品味红酒，在与红酒的约会中聊天放松，我做作，我只做我自己，我不伪装，我只想做好自己！对于感情我宁缺毋滥，只想于茫茫人海中找寻到一个真正懂我，真正能走进我内心的人，牵我的手走完剩下的人生！\n   希望将来能于他过着相互倾听心声的生活。一起幸福一起走，对于我的另一半，我希望他是一个风趣幽默，成熟稳重，有责任心的男士……希望在百合网能找到牵手一辈子的他。","isMember":"否","area":"贵州"}];
    var tempRecommendFemal = '<dl><dt><a href="http://profile1.baihe.com/?oppID={userID}&showType=2012" spm="4.1.1.893.2330" event="3" target="_blank"><img src="http://images8.baihe.com/member/recommend/{userID}.jpg" alt="" /></a></dt><dd><strong><a href="http://profile1.baihe.com/?oppID={userID}&showType=2012" target="_blank">{name}</a><img src="http://images6.baihe.com/icon/icon_01.gif" alt="实名制" /></strong><span>{age}岁 {height}cm  {educationChn}<br />{photoNum}张照片</span><p>{familyDescription}</p><a href = "http://profile1.baihe.com/?oppID={userID}&showType=2012&spm=2.1.39.110.146" class="orange" target="_blank">查看资料</a></dd></dl>',
        tempRecommendMal = '<dl><dt><a href="http://profile1.baihe.com/?oppID={userID}&showType=2012" spm="4.1.1.893.2330" event="3" target="_blank"><img src="http://images8.baihe.com/member/recommend/{userID}.jpg" alt="" /></a></dt><dd><strong><a href="http://profile1.baihe.com/?oppID={userID}&showType=2012" target="_blank">{name}</a><img src="http://images6.baihe.com/icon/icon_01.gif" alt="实名制" /></strong><span>{age}岁 {height}cm  {educationChn}<br />月薪：{incomeChn}</span><p>{familyDescription}</p><a href="http://profile1.baihe.com/?oppID={userID}&showType=2012&spm=2.1.39.110.146" class="orange" target="_blank">查看资料</a></dd></dl>';
    tempLoginRecommendFemal = '<dl><dt><a href="http://profile1.baihe.com/?oppID={userID}&showType=2012" spm="4.1.1.893.2330" event="3" target="_blank"><img src="{photo}" alt="" /></a></dt><dd><strong><a href="http://profile1.baihe.com/?oppID={userID}&showType=2012" target="_blank">{name}</a>{shiming}</strong><span>{age}岁 {height}cm  {educationChn}<br />{photoNum}张照片</span><p>{familyDescription}</p><a href="javascript:void(0);" onclick="sendMessage({userID},\'01.00.10502\');baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.1.1.894.2331\'});"  class="red" >发消息</a></dd></dl>',
        tempLoginRecommendMal = '<dl><dt><a href="http://profile1.baihe.com/?oppID={userID}&showType=2012" spm="4.1.1.893.2330" event="3" target="_blank"><img src="{photo}" alt="" /></a></dt><dd><strong><a href="http://profile1.baihe.com/?oppID={userID}&showType=2012" target="_blank">{name}</a>{shiming}</strong><span>{age}岁 {height}cm  {educationChn}<br />月薪：{incomeChn}</span><p>{familyDescription}</p><a href="javascript:void(0);" onclick="sendMessage({userID},\'01.00.10502\');baihe.bhtongji.clickTongJi({\'event\':\'3\',\'spm\':\'4.1.1.894.2331\'});"  class="red" >发消息</a></dd></dl>';


    function sliceDescription(arr) {
        for (var i = 0; i < arr.length; i++) {
            arr[i]['familyDescription'] = arr[i]['familyDescription'].slice(0, 24) + '...';
        }
        return arr;
    }

    if (!hasLogin) {
        recommendMal = sliceDescription(recommendMal);
        recommendFeMal = sliceDescription(recommendFeMal);

        var femaleArr = getArrRndomNumber(recommendFeMal, 3),
            malArr = getArrRndomNumber(recommendMal, 3);

        var relustFemal = $.format(tempRecommendFemal, femaleArr);
        var relustMal = $.format(tempRecommendMal, malArr);


        $(".recommend").html("").html('<div id="jsNoLoginRecommend">' + relustFemal + relustMal + '</div>');
    }
});


if (!hasLogin) {
    $('.picList .icon').html(getAllClassName());
    $("#picListData").html(getAllPicListInfo());
}
var _vipPhotoTimer = null;
$("#picListData a").live("mouseenter", function (event) {
    var _this = this;
    _vipPhotoTimer = setTimeout(function () {
        $(_this).find('.data').animate({
            'bottom': '0px'
        }, 500);
    }, 200);

}).live("mouseleave", function (event) {
    if (_vipPhotoTimer) {
        clearTimeout(_vipPhotoTimer);
    }
    $(this).find('.data').animate({
        'bottom': '-30px'
    }, 500);
});

$(".picList .icon a").live('click', function (event) {
    if ($(this).html() == '妩媚动人') {
        baihe.statistics({
            spm: '2.1.49.200.304',
            ggCode: 'newversion_121'
        });
    } else if ($(this).html() == '天生丽质') {
        baihe.statistics({
            spm: '2.1.49.199.303',
            ggCode: 'newversion_122'
        });
    } else if ($(this).html() == '清新单纯') {
        baihe.statistics({
            spm: '2.1.49.198.302',
            ggCode: 'newversion_123'
        });
    } else if ($(this).html() == '女强人') {
        baihe.statistics({
            spm: '2.1.49.197.301',
            ggCode: 'newversion_124'
        });
    } else if ($(this).html() == '活泼可爱') {
        baihe.statistics({
            spm: '2.1.49.196.300',
            ggCode: 'newversion_125'
        });
    } else if ($(this).html() == '正太') {
        baihe.statistics({
            spm: '2.1.49.194.298',
            ggCode: 'newversion_10'
        });
    } else if ($(this).html() == '英俊潇洒') {
        baihe.statistics({
            spm: '2.1.49.193.297',
            ggCode: 'newversion_188'
        });
    } else if ($(this).html() == '型男') {
        baihe.statistics({
            spm: '2.1.49.192.296',
            ggCode: 'newversion_189'
        });
    } else if ($(this).html() == '文质彬彬') {
        baihe.statistics({
            spm: '2.1.49.191.295',
            ggCode: 'newversion_190'
        });
    } else if ($(this).html() == '温文尔雅') {
        baihe.statistics({
            spm: '2.1.49.190.294',
            ggCode: 'newversion_191'
        });
    } else if ($(this).html() == '年轻有为') {
        baihe.statistics({
            spm: '2.1.49.189.293',
            ggCode: 'newversion_192'
        });
    } else if ($(this).html() == '大家闺秀') {
        baihe.statistics({
            spm: '2.1.49.195.299',
            ggCode: 'newversion_126'
        });
    }
    if ($(this).attr('sexAttr') == 0) {
        $("#picListData").html(getFeMalPicListInfo($(this).html()));
    } else if ($(this).attr('sexAttr') == 1) {
        $("#picListData").html(getMalPicListInfo($(this).html()));
    }
});