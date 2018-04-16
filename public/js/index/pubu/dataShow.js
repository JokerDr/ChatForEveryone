requirejs.config({
    path: {
        jquery: '../../jquery.min',
        // Masonry:'./Masonry'
    }
})
define(["jquery"],function($){
    function ShowMessage(settings){
        this.$container = $('<div id="message-container"></div>');
        this.$photo = $('<div class="photo"></div>');
        // this.$image = $('<img class="image" />')
        this.$infor = $('<div class = "infor"></div>');
        this.$title = $('<strong></strong>');
        this.$otherInfor = $('<span ></span>');
        this.$myIntro = $('<p></p>');
        this.$more = $('<a class="findHer"></a>');
        this.defaultSettings = {
            wriper:'',
            len:'',
            url:''
         }
         $.extend(this.defaultSettings, settings);
    }
    ShowMessage.prototype.init = function(){
        this.$container.append(this.$photo).append(this.$infor);
        // this.$photo.append(this.$image);
        this.$infor.append(this.$title).append(this.$otherInfor).append(this.$myIntro).append(this.$more);
        var that = this.defaultSettings;
        $(that.wriper).append(this.$container);
        for (var i = 0; i < that.len; i++) {
            //    var $img = $("<img />").attr("src", data[i]);
            var $img = $("<img />");
            var $newContainer = this.$container;
            this.$photo.append($img);
             $(that.wriper).append
              
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
    }
    return ShowMessage;
   
  
    
})