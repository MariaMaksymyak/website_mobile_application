$(window).on('scroll', function(){
    if($(this).scrollTop() > 500){
        $('#up').fadeIn()
    }else{
        $('#up').fadeOut()
    }
    })

$('#up').on('click', function(){
    $('html, body') .animate({scrollTop: 0}, 500)
})


//down button
$(window).on('scroll', function(){
    if($(this).scrollButton() > 100){
        $('#down').fadeIn()
    }else{
        $('#down').fadeOut()
    }
    })

$('#down').on('click', function(){
    window.scrollBy(0, 2500);
})

