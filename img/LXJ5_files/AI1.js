window.onload=function() {
    var aitop = $('.VR').offset().top;
    $(window).scroll(function () {
        if ($(this).scrollTop() > aitop) {
            $('.circle').css({"transform": "translateY(0px)"});
            console.log($(this).scrollTop());
        }
    })

    var bgSchool = document.getElementById("bgSchool");
    var allWidth = bgSchool.children[0].offsetWidth * 6;
    var hh = bgSchool.children[0].offsetHeight;
    bgSchool.offsetParent.style.height = hh + "px";
    var timer = null;
    var step = 0;

    function schoolAuto() {
        step -= 3;
        if (step < -allWidth) {
            step = 0;
        }
        bgSchool.style.left = step + "px";
    }

    timer = setInterval(schoolAuto, 20);
    bgSchool.onmouseover = function () {
        clearInterval(timer);
    }
    bgSchool.onmouseout = function () {
        clearInterval(timer);
        timer = setInterval(schoolAuto, 20);
    }
    banner();
    function banner() {
        $(".banner-ai-p1 img").addClass("mp1");
        $(".banner-ai-p2 img").addClass("mp2");
        $(".banner-ai-p3 img").addClass("mp3");
        $(".banner-ai-p4 img").addClass("mp4");
        $(".banner-ai-p5 img").addClass("mp5");
    }
}
