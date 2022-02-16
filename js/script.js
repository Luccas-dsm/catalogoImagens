$('a').click(function(e){
    e.preventDefault();
    var select=$(this).attr('href')
    $('.container').removeClass('slide-right');
    $(select).addClass('slide-right');
    $('a').removeClass('active');
    $('.container').removeClass('active');
    $(select).addClass('active');
    

})