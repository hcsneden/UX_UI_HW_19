$(document).ready(function (){
    $("#workButton").click(function (){
        $('html, body').animate({
            scrollTop: $("#caseStudies").offset().top
        }, 500);
    });
});