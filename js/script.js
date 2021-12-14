// $('p').click(function () {
//     $(this).slideToggle('slow');
// });

// $('button').mouseenter(function() {
//     $(this).removeClass('make-red').addClass('make-blue');
// });

// $('button').mouseleave(function() {
//     $(this).removeClass('make-blue').addClass('make-red');
// });

// $(document).ready(function() {
//     $('.box').on('click', function() {
//         let classNames = $(this).attr('class').split(' ');
//         $('.' + classNames[1]).css('background-color', 'red');
//     });
// });

$(document).ready(function() {
    $('.box').on('click', function() {
        let classNames = $(this).attr('class').split(' ');
        let boxClass = classNames[0];
        let className = classNames[1];
        if ($(this).css('background-color') == 'rgb(255,0,0)') {
            $('.' + className).css('background-color', '#000');
        } else {
            $('.' + boxClass).css('background-color', '#000');
            $('.' + className).css('background-color', 'red');
        }
    });
});