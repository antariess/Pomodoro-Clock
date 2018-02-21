// - and + buttons to add a minute to timer 

//WORK
let isIntervalActive = false
const $secsWork = $("#secsWork")
const $minsWork = $("#minsWork")
const $secsBreak = $("#secsBreak")
const $minsBreak = $("#minsBreak")
const parse = function(span){
    return parseInt(span.html(), 10)
}
let seconds; 
let minsTracker; 
let secsTracker = 59 
let intervalSec;
const count = function(){ 
    isIntervalActive = true
    if (seconds <= 0) {
        clearInterval(intervalSec)
        isIntervalActive = false
        return
    }
    if (seconds % 60 == 0){
        minsTracker -= 1
        $minsWork.html(minsTracker)
        secsTracker = 59
        $secsWork.html(secsTracker)
    }
    $secsWork.html(secsTracker)
    secsTracker--
    seconds--
    console.log(seconds)
}

//increase decreace time
const $incrWork = $("#incrWork")
const $decrWork = $("#decrWork")
const $incrBreak = $("#incrBreak")
const $decrBreak = $("#decrBreak")
const increase = function(span){
    if (!isIntervalActive && parse(span) < 59){
        span.html(parse(span) + 1)
    }    
}
const decrease = function(span){
    if (!isIntervalActive && parse(span) > 0){
        span.html(parse(span) - 1)
    }   
}
$incrWork.click(() => increase($minsWork))
$decrWork.click(() => decrease($minsWork))
$incrBreak.click(() => increase($minsBreak))
$decrBreak.click(() => decrease($minsBreak))


//buttons
const $play = $("#play")
$play.click(function(){
    seconds = parse($minsWork) * 60 + parse($secsWork); 
    minsTracker = parse($minsWork)
    intervalSec = setInterval(count, 100)
})

const $pause = $("#pause")
$pause.click(function(){
    isIntervalActive = false
    clearInterval(intervalSec)
})

const $reset = $("#reset")
$reset.click(function(){
    isIntervalActive = false
    clearInterval(intervalSec)
    $secsWork.html(00)
    $minsWork.html(25)
})