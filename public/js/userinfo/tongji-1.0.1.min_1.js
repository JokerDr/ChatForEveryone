var baihe = baihe || {};
!
function() {
	baihe['bhtongji'] = {
		search: window.location.search,
		tjUrl: ['http://t1.baihe.com', 'http://t2.baihe.com', 'http://t3.baihe.com', 'http://t4.baihe.com', 'http://t5.baihe.com', 'http://t6.baihe.com', 'http://t7.baihe.com', 'http://t8.baihe.com', 'http://t9.baihe.com', 'http://t10.baihe.com'],
		cdnDomainList: ['www.baihe.com', 'vip.baihe.com','mall.baihe.com','xueyuan.baihe.com'],
		h5: ['i.baihe.com'],
		adapp: ['adapp.baihe.com'],
		apph5: ['apph5.baihe.com'],
		getRandomVal: function() {
			return Math.floor(Math.random() * 10)
		},
		getFullTime: function() {
			var time = new Date();
			return '' + time.getFullYear() + (time.getMonth() + 1 > 9 ? '' : '0') + (time.getMonth() + 1) + (time.getDate() > 9 ? '' : '0') + time.getDate() + (time.getHours() > 9 ? '' : '0') + time.getHours() + (time.getMinutes() > 9 ? '' : '0') + time.getMinutes() + (time.getSeconds() > 9 ? '' : '0') + time.getSeconds()
		},
		tj_getExpDate: function(days, hours, minutes) {
			var expDate = new Date();
			if (typeof days == 'number' && typeof hours == 'number' && typeof hours == 'number') {
				expDate.setDate(expDate.getDate() + parseInt(days));
				expDate.setHours(expDate.getHours() + parseInt(hours));
				expDate.setMinutes(expDate.getMinutes() + parseInt(minutes));
				return expDate.toGMTString()
			}
		},
		tj_setCookie: function(name, value, expires, path, domain, secure) {
			document.cookie = name + '=' + escape(value) + ((expires) ? '; expires=' + expires : '') + ((path) ? '; path=' + path : '') + ((domain) ? '; domain=' + domain : '') + ((secure) ? '; secure' : '')
		},
		tj_getCookie: function(name) {
			var arg = name + '=';
			var alen = arg.length;
			var clen = document.cookie.length;
			var i = 0;
			while (i < clen) {
				var j = i + alen;
				if (document.cookie.substring(i, j) == arg) {
					var endstr = document.cookie.indexOf(';', j);
					if (endstr == -1) {
						endstr = document.cookie.length
					}
					return unescape(document.cookie.substring(j, endstr)) == 'null' ? null : unescape(document.cookie.substring(j, endstr))
				}
				i = document.cookie.indexOf(' ', i) + 1;
				if (i == 0) break
			}
			return ''
		},
		tongji: function(options) {
			var img = new Image();
			var src = '';
			src = this.tjUrl[this.getRandomVal()] + '?';
			if (this.tj_getCookie('channel')) {
				src += 'channel=' + this.tj_getCookie('channel') + '&'
			}
			if (this.tj_getCookie('code')) {
				src += 'code=' + this.tj_getCookie('code') + '&'
			}
			if (this.tj_getCookie('accessID')) {
				src += 'accessID=' + this.tj_getCookie('accessID')
			} else {
				this.setDynamicVal(['accessID']);
				src += 'accessID=' + this.tj_getCookie('accessID')
			}
			if (this.tj_getCookie('userID') || this.tj_getCookie('spmUserID') || this.tj_getCookie('GCUserID')) {
				src += '&userID=' + (this.tj_getCookie('userID') || this.tj_getCookie('spmUserID') || this.tj_getCookie('GCUserID'))
			}
			for (var opt in options) {
				src += '&' + opt + '=' + options[opt]
			}
			img.src = src + '&rand=' + (new Date()).getTime()
		},
		clickTongJi: function(options) {
			var img = new Image();
			var src = 'http://click.baihe.com?';
			if (this.tj_getCookie('channel')) {
				src += 'channel=' + this.tj_getCookie('channel') + '&'
			}
			if (this.tj_getCookie('code')) {
				src += 'code=' + this.tj_getCookie('code') + '&'
			}
			if (this.tj_getCookie('accessID')) {
				src += 'accessID=' + this.tj_getCookie('accessID')
			} else {
				this.setDynamicVal(['accessID']);
				src += 'accessID=' + this.tj_getCookie('accessID')
			}
			if (this.tj_getCookie('userID') || this.tj_getCookie('spmUserID') || this.tj_getCookie('GCUserID')) {
				src += '&userID=' + (this.tj_getCookie('userID') || this.tj_getCookie('spmUserID') || this.tj_getCookie('GCUserID'))
			}
			for (var opt in options) {
				src += '&' + opt + '=' + options[opt]
			}
			img.src = src + '&rand=' + (new Date()).getTime()
		},
		autoTongJi: function() {
			var src = '',
				aList = '';
			if (arguments.length) {
				aList = document.getElementById(arguments[0]).getElementsByTagName('a')
			} else {
				aList = document.getElementsByTagName('a')
			}
			var src = '',
				aList = document.getElementsByTagName('a');
			if (aList.length) {
				if (this.tj_getCookie('channel')) {
					src += 'channel=' + this.tj_getCookie('channel') + '&'
				}
				if (this.tj_getCookie('code')) {
					src += 'code=' + this.tj_getCookie('code') + '&'
				}
				if (this.tj_getCookie('accessID')) {
					src += 'accessID=' + this.tj_getCookie('accessID')
				} else {
					this.setDynamicVal(['accessID']);
					src += 'accessID=' + this.tj_getCookie('accessID')
				}
				if (this.tj_getCookie('userID') || this.tj_getCookie('spmUserID') || this.tj_getCookie('GCUserID')) {
					src += '&userID=' + (this.tj_getCookie('userID') || this.tj_getCookie('spmUserID') || this.tj_getCookie('GCUserID'))
				}
				for (var i = 0; i < aList.length; i++) {
					if (typeof(aList[i]) != 'undefined') {
						var aHref = src;
						aHref += '&rand=' + (new Date()).getTime() + Math.ceil(Math.random(0, 1) * 999999);
						var isCdnDomain = false;
						var aHtml = aList[i].innerHTML;
						var isOutLink = false;
						if (aList[i].getAttribute('spm')) {
							for (var j = 0; j < this.cdnDomainList.length; j++) {
								if (aList[i].getAttribute('href').match(/(http|https):\/\/([^\/]+)\//i) && aList[i].getAttribute('href').match(/(http|https):\/\/([^\/]+)\//i)[2] == this.cdnDomainList[j]) {
									isCdnDomain = true;
									break
								}
								if (aList[i].getAttribute('href').match(/[\w][\w-]*\.(?:com\.cn|com|cn|co|net|org|gov|cc|biz|info)(\/|$)/i) && aList[i].getAttribute('href').match(/[\w][\w-]*\.(?:com\.cn|com|cn|co|net|org|gov|cc|biz|info)(\/|$)/i)[0] != 'baihe.com/') {
									isOutLink = true;
									break
								}
							}
							var attrs = aList[i].attributes;
							var text = "";
							for (var j = attrs.length - 1; j >= 0; j--) {
								if (attrs[j].name != 'href' && attrs[j].name != 'style' && attrs[j].name != 'class' && attrs[j].name != 'id' && attrs[j].name != 'target') {
									aHref += '&' + attrs[j].name + '=' + attrs[j].value
								}
							}
							if (isCdnDomain || isOutLink) {
								aList[i].setAttribute('href', 'http://click.baihe.com?' + aHref + '#' + aList[i].getAttribute('href'))
							} else {
								if (aList[i].getAttribute('href').indexOf('?') >= 0) {
									aList[i].setAttribute('href', aList[i].getAttribute('href') + '&' + aHref)
								} else {
									aList[i].setAttribute('href', aList[i].getAttribute('href') + '?' + aHref)
								}
							}
							if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE6.0" || navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE7.0" || navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE8.0")) {
								aList[i].innerHTML = aHtml
							}
							aList[i].removeAttribute('spm');
							aList[i].removeAttribute('event')
						}
					}
				}
			}
			return aList
		},
		setDynamicVal: function(args) {
			for (var arg in args) {
				this.tj_setCookie(args[arg], this.getFullTime() + Math.floor(Math.random() * 1000000), this.tj_getExpDate(3650, 0, 0), '/', 'baihe.com');
			}
		},
		spmGGCodeTongJi: function(args) {
			if (args['spm']) {
				var img2 = new Image();
				img2.src = 'http://spm.baihe.com/?spm=' + args['spm']
			}
			if (args['ggCode']) {
				var img1 = new Image();
				img1.src = 'http://bhtg.baihe.com/stat.html?ggCode=' + args['ggCode']
			}
		}
	};
	if (!baihe.bhtongji.tj_getCookie('accessID')) {
		baihe.bhtongji.setDynamicVal(['accessID'])
	}
	if (window.location.search.match(/[\?&]channel=([^&]*)(&|$)/i) && window.location.search.match(/[\?&]code=([^&]*)(&|$)/i)) {
		baihe.bhtongji.setCookieVal = function(args) {
			for (var arg in args) {
				eval('var reg=/[\\?&]' + args[arg] + '=([^&]*)(&|$)/i;');
				var argVal = this.search.match(reg)[1];
				this.tj_setCookie(args[arg], argVal, this.tj_getExpDate(30, 0, 0), '/', 'baihe.com')
			}
		};
		baihe.bhtongji.setCookieVal(['channel', 'code'])
	} else if (document.referrer && document.referrer.split('/')[2].match(/hao123.com/)) {
		baihe.bhtongji.tj_setCookie('channel', 'hao123k-pc', baihe.bhtongji.tj_getExpDate(30, 0, 0), '/', 'baihe.com');
		baihe.bhtongji.tj_setCookie('code', '001', baihe.bhtongji.tj_getExpDate(30, 0, 0), '/', 'baihe.com')
	}
	//手机判断 
	var browser = {
		versions: function () {
			var u = navigator.userAgent;
			return {//移动终端浏览器版本信息
				ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端 
				android: u.indexOf('Android') > -1 //android终端或者uc浏览器                   
			};
		} ()
	}
	//获取最后一次登录的时间戳
	var reg=new RegExp("-","g");
	var $stringObj=baihe.bhtongji.tj_getCookie('lastLoginDate');  
	var $newstr=$stringObj.replace(reg,'/').split('+').join(' ');
	if ((!baihe.bhtongji.tj_getCookie('lastLoginDate') || baihe.bhtongji.tj_getCookie('lastLoginDate') == 'null') || new Date() - new Date($newstr) > 1800000) {
		var img = new Image();
		baihe.bhtongji.tj_setCookie('lastLoginDate', (new Date()), '', '/', 'baihe.com');
		if (baihe.bhtongji.h5.join(',').search(new RegExp(location.host, 'gi')) > -1) {
			img.src = 'http://my.baihe.com/Getinterlogin/loginByUserID?lastLoginPlatform=1206&rad=' + new Date().getTime();
		}else{
			//判断手机是安卓还是ios
			if(browser.versions.android == true){
				img.src = 'http://my.baihe.com/Getinterlogin/loginByUserID?lastLoginPlatform=1202&rad=' + new Date().getTime();
			}else if(browser.versions.ios == true){
				img.src = 'http://my.baihe.com/Getinterlogin/loginByUserID?lastLoginPlatform=1203&rad=' + new Date().getTime();
			}else {
				img.src = 'http://my.baihe.com/Getinterlogin/loginByUserID?lastLoginPlatform=11&rad=' + new Date().getTime();
			}
		}
	}
	window.onload = function() {
		baihe.bhtongji.autoTongJi()
	}
}();