 $('.setting').mouseenter(function(){
        $('.select').show();
 }).mouseleave(function(){
        $('.select').hide();
 }); 

$(".Way").on('click',function (e) {
    let src = e.target || e.srcElement;
    var $index = $(src).parent().index();
    // $('.inpt').data('div','inpt');
    // $('.startSearch').data('div','startSearch');
    // $('.conditions').data('div','conditions');

    $(src).parent().addClass("selected").siblings().removeClass("selected");
    if ($index == 0) { //选择搜索用户
        $('.results').html("");
        $('.inpt').show();
        $('.startSearch').show();
        $('.conditions').hide();
        $('#dialog_content').remove();
        
    } else if ($index == 2) {// 选择发布公告时
        $('.results').html('');
        $('.inpt').hide();
        $('.startSearch').hide();
        $('.conditions').show();

    }else{//查看所有用户
         $('.inpt').hide();
         $('.startSearch').hide();
         $('.conditions').hide();
         $('#dialog_content').remove();
    };    
})
 