$(function () {

    // 如果不支持placeholder，用jQuery来完成
    if (!isSupportPlaceholder()) {
        // 遍历所有input对象, 除了密码框
        $('input').not("input[type='password']").each(
            function () {
                var self = $(this);
                var val = self.attr("placeholder");
                input(self, val);
            }
        );
        /**//* 对password框的特殊处理
         * 1.创建一个text框 
         * 2.获取焦点和失去焦点的时候切换
         */
        $('input[type="password"]').each(
            function () {
                var pwdField = $(this);
                var pwdVal = pwdField.attr('placeholder');
                var pwdId = pwdField.attr('id');
                // 重命名该input的id为原id后跟1
                pwdField.after('<input id="' + pwdId + '1" type="text" value=' + pwdVal + ' autocomplete="off" />');
                var pwdPlaceholder = $('#' + pwdId + '1');
                pwdPlaceholder.show();
                pwdField.hide();

                pwdPlaceholder.focus(function () {
                    pwdPlaceholder.hide();
                    pwdField.show();
                    pwdField.focus();
                });

                pwdField.blur(function () {
                    if (pwdField.val() == '') {
                        pwdPlaceholder.show();
                        pwdField.hide();
                    }
                });
            }
        );
    }
});

// 判断浏览器是否支持placeholder属性
function isSupportPlaceholder() {
    var input = document.createElement('input');
    return 'placeholder' in input;
}

// jQuery替换placeholder的处理
function input(obj, val) {
    var $input = obj;
    var val = val;
    $input.attr({ value: val });
    $input.focus(function () {
        if ($input.val() == val) {
            $(this).attr({ value: "" });
        }
    }).blur(function () {
        if ($input.val() == "") {
            $(this).attr({ value: val });
        }
    });
}
// 切换search方式
$('.way1').on('click',function(){
    $('.inpt').show();
    $('.conditions').hide();
    $('.way2').css({
        'background': '#fff',
        'color': '#000'
    });
    $(this).css({
    'background': '#ff7f00',
    'color': '#fff'});
});

$('.way2').on('click', function () {
    $('.inpt').hide();
    $('.conditions').show();
    $('.way1').css({
        'background': '#fff',
        'color': '#000'
    });
    $(this).css({
    'background': '#ff7f00',
    'color': '#fff'
}); 
})


 function ShowMessage(settings) {
   this.$container = $('<div id="message-container"></div>');
   this.$photo = $('<div class="photo"></div>');
   // this.$image = $('<img class="image" />')
   this.$infor = $('<div class = "infor"></div>');
   this.$title = $("<strong></strong>");
   this.$otherInfor = $("<span ></span>");
   this.$myIntro = $("<p></p>");
   this.$more = $('<a class="findHer"></a>');
   this.defaultSettings = { 
       wriper: "", 
       len: "",
        url: "" 
    };
   $.extend(this.defaultSettings, settings);
 }
 ShowMessage.prototype.init = function() {
   this.$container.append(this.$photo).append(this.$infor);
   // this.$photo.append(this.$image);
   this.$infor
     .append(this.$title)
     .append(this.$otherInfor)
     .append(this.$myIntro)
     .append(this.$more);
   var that = this.defaultSettings;
   $(that.wriper).append(this.$container);
   for (var i = 0; i < that.len; i++) {
     //    var $img = $("<img />").attr("src", data[i]);
     var $img = $("<img />");
     var $newContainer = this.$container;
     this.$photo.append($img);
     $(that.wriper).append;
   }
   // for (var i = 0; i < that.len; i++) {
   // $.get(that.url,{},function(data){
   //     //后端返回data数组
   //    for(var i=0;i<that.len;i++){
   //        var $img = $("<img />").attr("src", data[i]);
   //        this.$photo.append($img);
   //        $(that.wriper).append(this.$container);
   //    }
   // },'text');
 };
 var settings1 = { wriper: ".results", len: "6", url: "" };
 var ShowMessage1 = new ShowMessage(settings1);
 ShowMessage1.init();

