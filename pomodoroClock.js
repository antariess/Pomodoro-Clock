// link with jquery
// set time out function to decrease the counter with 00:01
// - and + buttons to add a minute to timer 
// start button - calls the countdown function
// reset button - sets times and break back to initia values
// pause button - pauses countdown temporarily
// stop button - breaks out of coutdown permanently

//WORK
//seconds
const $secsWork = $("#secsWork")
const $secsWorkNum = parseInt($secsWork.html(), 10)
let secsWorkCount = $secsWorkNum
const count = function(){    
    if (secsWorkCount <= 0) {
        clearTimeout(intervalSec)
    }
    $secsWork.html(secsWorkCount)
    secsWorkCount--
}
var intervalSec;
//minutes
const $minsWork = $("#minsWork")
const $minsWorkNum = parseInt($minsWork.html(), 10)


//buttons
const $play = $("#play")
$play.click(function(){
    intervalSec = setInterval(count, 1000)
})

const $pause = $("#pause")
$pause.click(function(){
    clearTimeout(intervalSec)
})

const $reset = $("#reset")
$reset.click(function(){
    $secsWork.html(00)
    $minsWork.html(25)
})