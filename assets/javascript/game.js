$(function () {
 
var computerNumber;
var crystalA;
var crystalB;
var crystalC;
var crystalD;
var userTotal = 0;
var wins = 0;
var losses = 0; 
var audio = new Audio ('assets/images/magic-chime-01.mp3');    
resetGame();

$(".crystal-a").click(function(){
    audio.play();
    userTotal += parseInt(crystalA);
    $(".user-total").text(userTotal);
    checkWin();
})

$(".crystal-b").click(function(){
    audio.play();
    userTotal += parseInt(crystalB);
    $(".user-total").text(userTotal);
    checkWin();
})
$(".crystal-c").click(function(){
    audio.play();
    userTotal += parseInt(crystalC);
    $(".user-total").text(userTotal); 
    checkWin();
})

$(".crystal-d").click(function(){
    audio.play();
    userTotal += parseInt(crystalD);
    $(".user-total").text(userTotal);
    checkWin();
})

// functions 

function checkWin(){
    if (userTotal === parseInt(computerNumber)){
        wins++;
        $(".wins").text(wins);
        $(".you").text("You Won!");
        resetGame();
    
    
    }
    else if (userTotal > parseInt(computerNumber)){
        losses++
        $(".losses").text(losses);
        $(".you").text("You Lost!");
        resetGame();
    }
    else {
    
    }
}



function randomNumber (max, min){
    return [Math.floor(Math.random() * (max - min))+min];
}

function resetGame (){
    computerNumber = randomNumber(120,19);
    crystalA = randomNumber(12,1);
    crystalB = randomNumber(12,1);
    crystalC = randomNumber(12,1);
    crystalD = randomNumber(12,1);
    userTotal = 0;
    $(".target").text(computerNumber);
    $(".user-total").text(userTotal);
    
}
 

})