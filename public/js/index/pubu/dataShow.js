// requirejs.config({
//     path: {
//         jquery: '../../jquery.min',
//         // Masonry:'./Masonry'
//     }
// })
// define(["jquery"],function($){
//     function ShowMessage(settings){   
//         this.defaultSettings = {
//             wriper:'',
//             len:'',
//             url:''
//          }
//          $.extend(this.defaultSettings, settings);
//     }
//     ShowMessage.prototype.init = function(){
//         var that = this.defaultSettings;
//         $(that.wriper).append(this.$container);
//         for (var i = 0; i < that.len; i++) {
//              var $container = $('<div id="message-container"></div>');
//              var $photo = $('<div class="photo"></div>');
//              var $infor = $('<div class = "infor"></div>');
//              var $title = $("<strong></strong>");
//              var $otherInfor = $("<span ></span>");
//              var $myIntro = $("<p></p>");
//              var $more = $('<a class="findHer"></a>');
//             //    var $img = $("<img />").attr("src", data[i]);
//             var $img = $("<img />");
//             $container.append(this.$photo).append(this.$infor);
//             $infor.append(this.$title).append(this.$otherInfor).append(this.$myIntro).append(this.$more);
//             $photo.append($img);
//              $(that.wriper).append($container);    
//            }
        // for (var i = 0; i < that.len; i++) { 
        // $.get(that.url,{},function(data){
        //     //后端返回data数组     
        //    for(var i=0;i<that.len;i++){ 
        //        var $img = $("<img />").attr("src", data[i]);
        //        this.$photo.append($img);
        //        $(that.wriper).append(this.$container);
        //    }
        // },'text');
    // }
    // return ShowMessage;
   
  
    
// })