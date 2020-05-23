$('document').ready(function() {
    $('.link').on('click', function() {
        $('.link').removeClass('clicked')
        $(this).addClass('clicked')
    })
})