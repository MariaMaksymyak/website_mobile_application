$('.modal-overlay').on('click', function(e){
    if($(e.target).closest('.modal').length == 0){
       $(this).fadeOut();
    }
});

$('.close').on('click', function(){
    $(this).parents('.modal-overlay').fadeOut()
});

$('#open-modal').on ('click', function(){
    $('.modal-overlay').fadeIn()
})

$('#open-modal-1').on ('click', function(){
    $('.modal-overlay').fadeIn()
})
$('#open-modal-2').on ('click', function(){
    $('.modal-overlay').fadeIn()
})

$('#open-modal-3').on ('click', function(){
    $('.modal-overlay').fadeIn()
})

$('#open-modal-4').on ('click', function(){
    $('.modal-overlay').fadeIn()
})





$('.modal-overlay-2').on('click', function(e){
    if($(e.target).closest('.modal_2').length == 0){
       $(this).fadeOut();
    }
});

$('.close-2').on('click', function(){
    $(this).parents('.modal-overlay-2').fadeOut()
});

$('#open-modal_2').on ('click', function(){
    $('.modal-overlay-2').fadeIn()
})





//TELEGRAM BOT
// https://api.telegram.org/botTOKEN/getUpdates


$('#telegram_bot').on('click', function(e){
    e.preventDefault();
    let name = $('#name').val().trim();
    let email = $('#email').val().trim();

    if(name == ""){
        $('#error-name').text('Enter your name');
        return false
    }else if(email == ""){
        $('#error-email').text('Enter your email');
        return false

    }
    $.ajax({
        url: 'ajax/telegram.php',
        type: 'POST',
        cache: false,
        data: {'email': email, 'name': name}, 
        dataType: 'html',
        beforeSend: function(){
            $('#button').prop('disabled', true)
        },
        success: function(){

            $('.modal-overlay').fadeIn();
                 $('#name').val('');
            $('#email').val('');
            $('#error-email').text('');
            $('#error-name').text('');
            $('#button').prop('disabled', false)
        }
    })
})