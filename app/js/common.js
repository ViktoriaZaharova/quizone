// активная ссылка меню
$('.menu li a, .footer-menu li a').each(function () {
    let location = window.location.href;
    let link = this.href;
    if (location === link) {
        $(this).addClass('current');
    }
});
// end

// mobile menu
$('.btn-burger').on('click', function () {
   $('.navigation').fadeToggle();
});
