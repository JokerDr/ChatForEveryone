      $('.setting').mouseenter(function(){
        $('.select').show();
       }).mouseleave(function(){
        $('.select').hide();
       }); 

       // 切换search方式
$('.way1').on('click',function(){
    $('.inpt').show();
    $('.startSearch').show();
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
    $('.startSearch').hide();
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