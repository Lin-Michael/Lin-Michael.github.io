$(document).ready(() => {


    $('.experienceIcon').click(function(){
        $('html, body').animate({
            scrollTop: parseInt($("#internships").offset().top - 100)
        }, 1000);
    });



});