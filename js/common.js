$(function() {
    $('.ko').on('click',function(){
        $('body').append('<div class="fix_top"><img src="images/wx.jpg"/><span class="close">x</span></div>');
    });
    $(document).on("click", ".close", function(){ 
    $('.close').hide(1000);
    $('.fix_top').hide(1000);
}); 

$('.band_item').hover(function(){
    $(this).find($('div')).animate({top:"0"})
},function(){
     $(this).find($('div')).animate({top:"-268px"})
});

$('.subnews').find($('h3')).on("mouseover",function(){
  $('.band_switch').stop(true).slideDown(200);
});
$('.subnews').on("mouseleave",function(){
    timea=null;
    timea=setTimeout(function(){
         $('.band_switch').stop(true,true).fadeOut();
    },1000);
   
});

function Person(txt1,txt2,txt3,mp,img){
    this.a=txt1;
    this.b=txt2,
    this.c=txt3;
    this.img=img;
    this.mp=mp;
}
var arr=[];
arr.push(new Person('曹敏护肤中心:','主攻：','祛斑，祛痘，祛眼袋','images/ps.jpg','images/m1.jpg'));
arr.push(new Person('金牌美肤专业指导中心:','主攻：','祛斑，抗衰，祛眼袋','images/ps.jpg','images/m2.jpg'));
arr.push(new Person('双双健康美肤中心:','主攻：','祛斑，祛眼袋，祛痘','images/ps.jpg','images/m3.jpg'));
arr.push(new Person('许欣健康美肤中心:','主攻：','美白，抗衰，祛眼袋','images/ps.jpg','images/m4.jpg'));
arr.push(new Person('林雪健康美肤中心:','主攻：','祛斑，抗衰，祛眼袋','images/ps.jpg','images/m5.jpg'));
arr.push(new Person('女人花健康美肤中心','主攻：','祛斑，祛痘，祛眼袋','images/ps.jpg','images/m6.jpg'));
arr.push(new Person('佳丽健康美肤中心:','主攻：','祛斑，抗衰，祛眼袋','images/ps.jpg','images/m8.jpg'));
arr.push(new Person('创美健康美肤中心:','主攻：','祛斑，祛眼袋，美白','images/ps.jpg','images/m9.jpg'));
arr.push(new Person('夏冰美肤中心:','主攻：','祛斑，抗衰，祛眼袋','images/ps.jpg','images/m7.jpg'));

$('.subcontent ul li').on('mouseover',function(){
    $('.ps_right').show();
    var key=$(this).index();
    var contant=
    '<div class="item_txt"><h3>'+arr[key]['a']+'<\/h3><p>'+arr[key]['b']+'</p><p>'+arr[key]['c']+'</p><h5><img src=\"'+arr[key]['mp']+'\"\/><\/h5><\/div><div class="item_pt"><img src=\"'+arr[key]['img']+'\"\/><\/div>';
    $('.ps_right').html(contant);
       
});
$('.subcontent').on('mouseleave',function(){
        $(".ps_right").fadeOut();
});


      $('.header').prepend('<p class="mask"></p>');
        $('.nav-menu').hover(
            function() {
                $('.mask').stop(true,true).show();
                $(this).find('.dbt').css('fontSize','18px');
                $(this).parents('.header').children('.mask').animate({
                    'left': ($(this).position().left+$('.nav-menus').position().left-300) + 'px'
                }, 'fast');
            },
            function() {
                $(this).find('.dbt').css('fontSize','16px');
                $('.mask').stop(true,true).slideUp(300);
                $(this).find('.dbt').css('color','#fff'); 
            }
        ); 

}) ;