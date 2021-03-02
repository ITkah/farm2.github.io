$('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
});

$(".call_filter").on("click", function() {

    $(".hide_filter").slideToggle(200);
});


$(".btn_unchor").on("click", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top - 70;
    $('body,html').animate({ scrollTop: top }, 1500);
});

$('.phone').on('input', function() {
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
});

var year = new Date().getFullYear();
$(".year").text(year);



$(".menu").on("click", function() {
    $("nav").toggleClass("nav_active");
});

$("nav ul li").each(function() {
    this_li = $(this);
    if ($(this_li).find("ul").length > 0) {
        $(this_li).append('<div class="arrow_mob"></div>');
    }
});

$(".arrow_mob").on("click", function() {
    $(this).siblings(".sub-menu").slideToggle(200);
});

$(".form_feedback").submit(function(e) {
    e.preventDefault();
    let form_data = $(this).serializeArray();
    $.ajax({
        type: "POST",
        url: "../../mail.php",
        data: form_data,
        success: function(response) {
            console.log(response);
            $(".thank_click").click();
        },
        error: function(error) {
            $(".thank_click").click();
        }
    });
    return false;
});

    $(".show_all").on("click", function(e){
        e.preventDefault();
        $(".filter_box").show();
    });

    $(".filter_item").on("click", function(){
        $(".filter_item").removeClass("active");
        $(this).addClass("active");
    });

    let filters = document.querySelectorAll('a[data-filter]');
    
    for (let filter of filters) {
        filter.addEventListener('click', function(e) {
            e.preventDefault();

            let catId = filter.getAttribute('data-filter');
            let workCat = document.querySelectorAll('.filter_box[data-cat="' + catId + '"]');
            let alldivs = document.querySelectorAll('.filter_box');

            alldivs.forEach(function (c) {
                c.classList.add('hide');
                if (c.getAttribute('data-cat') == catId){                
                    c.classList.add('show');
                } else {
                    c.classList.remove('show');
                }
            })
        });
    }

