$(function() {
    setInterval(function() {
        $("header .space-planet .planet:first-child").animate({top:"80px"}).animate({top:"100px"},800),
        $("header .space-planet .planet:nth-child(2)").animate({bottom:"220px"}).animate({bottom:"250px"},1400),
        $("header .space-planet .planet:last-child").animate({bottom:"50px"}).animate({bottom:"70px"},1300)
    },"swing");

    $("#menu-btn").click(() => {
        $('#menu-btn').hide();
        $('#close-btn').show();
        $('nav').slideDown(500, 'swing');
    });

    $("#close-btn").click(() => {
        $("#close-btn").hide();
        $("#menu-btn").show();
        $('nav').slideUp(500, 'swing');
    });

    $("nav .gnb li > a").click(function() {
        const target = $(this).attr("href");
        $("html").animate({
            scrollTop:$(target).offset().top
        },1000,"swing")
    });

    $("section:nth-child(2) .program-list div h4:first-child").mouseover(function() {
        $(this).css({
            transition:"transform 0.5s",
            transform:"rotate(90deg)"
        })
    })

    
    $("section:nth-child(2) .program-list div h4").mouseout(function() {
        $(this).css({
            transition:"transform 0.5s",
            transform:"rotate(0deg)"
        })
    })

    setInterval(function() {
        $(".grid-star-img .star:first-child").
        fadeToggle(2000,"swing"),
        $(".grid-star-img .star:nth-child(2)").
        fadeToggle(1000,"swing"),
        $(".grid-star-img .star:nth-child(3)").
        fadeToggle(3000,"swing"),
        $(".grid-star-img .star:nth-child(4)").
        fadeToggle(4000,"swing"),
        $(".grid-star-img .star:nth-child(5)").
        fadeToggle(5000,"swing"),
        $(".grid-star-img .star:nth-child(6)").
        fadeToggle(6000,"swing"),
        $(".grid-star-img .star:nth-child(7)").
        fadeToggle(7000,"swing"),
        $(".grid-star-img .star:last-child").
        fadeToggle(8000,"swing")
    });

    setInterval(function() {
        $("section .planet5").animate({top:"50px"}).animate({top:"80px"},1500),
        $("section:nth-child(2) .space-planet .planet:first-child").animate({top:"30px"}).animate({top:"50px"},2000),
        $("section:nth-child(2) .space-planet .planet:last-child").animate({bottom:"50px"}).animate({bottom:"80px"},2500),
        $("section:nth-child(3) .planet6").animate({top:"50px"}).animate({top:"30px"},3000),
        $("section:last-child .space-planet .planet:first-child").animate({top:"50px"}).animate({top:"30px"},3500),
        $("section:last-child .space-planet .planet:last-child").animate({bottom:"10px"}).animate({bottom:"30px"},4000)
    }, "swing");

    setInterval(function() {
        $("section:last-child .space-rocket").animate({
            bottom:"150px"
        },1500,"swing").animate({
            bottom:"0px"
        },1500,"swing")
    })

    $("section:last-child .space-rocket").mouseover(function() {
        $(this)
    .css({
            transition: "transform 1s",
            transform:"rotate(360deg)"
        })
    })

    $("section:last-child .space-rocket").mouseout(function() {
        $(this)
        .css({
            transition: "transform 1s",
            transform:"rotate(0deg)"
        })
    })

    $(window).scroll(function() {
        if($(this).scrollTop() > 200) {
            $("#top-bt").fadeIn();
        } else {
            $("#top-bt").fadeOut();
        }
    }) 
    
    $("#top-bt").click(function() {
        $("html").animate({scrollTop : 0}, 500);
    })
})