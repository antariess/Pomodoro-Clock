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

//minutes
const $minsWork = $("#minsWork")
const $minsWorkNum = parseInt($minsWork.html(), 10)
let seconds = $minsWorkNum * 60
let secTracker = 59 
let minsTracker = $minsWorkNum 
const count = function(){ 
    if (seconds <= 0) {
        clearTimeout(intervalSec)
        return
    }
    if (seconds % 60 == 0){
        minsTracker -= 1
        $minsWork.html(minsTracker)
        secTracker = 59
        $secsWork.html(secTracker)
    }
    $secsWork.html(secTracker)
    secTracker--
    seconds--
    console.log(seconds)
}
var intervalSec;

//buttons
const $play = $("#play")
$play.click(function(){
    intervalSec = setInterval(count, 100)
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