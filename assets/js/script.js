$(' .offer-box .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left nav-icon'></i>", "<i class='fa fa-chevron-right nav-icon'></i>"],

    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: true
        },
        1000: {
            items: 2,
            nav: true,
            loop: false
        },
        1200: {
            items: 3,
            nav: true,
            loop: true
        }
    }
})

$(' .blog-box .owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    responsiveClass: true,
    dots: false,
    smartSpeed: 2000,
    navText: ["<i class='fa fa-chevron-left nav-icon'></i>", "<i class='fa fa-chevron-right nav-icon'></i>"],
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: true,
            loop: true,
        },
        1200: {
            items: 4,
            nav: true,
        }

    }
})

function copyCoupon() {
    // Get the text field
    var copyText = document.getElementById("coupnCode");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert(copyText.value);
}
$('.dropdown').on('show.bs.dropdown', function (e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
});

$('.dropdown').on('hide.bs.dropdown', function (e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
});


$(document).ready(function () {
   

  
    $('.dateinput').change(function () {
        var dt = new Date($(this).val());
        var year = dt.getFullYear();
        var month = (dt.getMonth() < 10 ? '0' : '') + (dt.getMonth() + 1);
        var day = (dt.getDate() < 10 ? '0' : '') + dt.getDate();
        console.log(day)
        console.log(year)
        console.log(month)
       
        
    })
});

