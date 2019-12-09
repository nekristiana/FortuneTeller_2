
// this script takes the scroll position of the page and
// uses it to rotate a very big square <div>
// note: check the .css, the height of the body is like 500%, so that 
// there is something to scroll

$(window).on("scroll",function(e){
    
/*     the scroll position of the page is in $(window).scrollTop()
    console.log($(window).scrollTop())*/

    $(".tunnel").css("transform","rotateX("+ $(window).scrollTop() +"deg)")   
    
    $(".tunnel").css("transform-origin","bottom")   
    
    console.log('scroll');
    
});
