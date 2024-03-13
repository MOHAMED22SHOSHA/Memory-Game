$(document).ready(function(){
    $(".start").click(function(){
        $(".control-buttons").fadeOut(1500);
        var userName = prompt("Please enter your name:");
        $(".name span").text(userName);
        if (userName !== null && userName !== "") {
            $(".name span").text(userName);
            $(".congratulation-contents-title span").text(userName)
        } 
        else {
            $(".name span").text("Guest");
        }
    });
    
    var count = 0, wrong = 0, done = 0, tries=0;
    var firstCard, secondCard;
    
    $(".game-block").click(function(){

        if (!$(this).hasClass("is-flipped") && count < 2) {
            tries++;
            $(this).addClass("is-flipped");
            count++;
            if (count === 1) {
                firstCard = $(this);
            } else {
                secondCard = $(this);
                if (firstCard.data("technology") === secondCard.data("technology")) {
                    firstCard.addClass("has-match");
                    secondCard.addClass("has-match");
                    count = 0;
                    done++;
                    if (done === 10) {
                        $(".congratulation-wrapper").css("display","block");
                    }
                } 
                else {
                    setTimeout(function() {
                        firstCard.removeClass("is-flipped");
                        secondCard.removeClass("is-flipped");
                    }, 1000);
                    count = 0;
                    wrong++;
                    $(".score span").text(wrong); 
                    $(".cmn-btn.btn-bg-1 span").text((tries / wrong) + "%");
                }
            }
        }
    });
});