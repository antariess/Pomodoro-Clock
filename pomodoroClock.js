//WORK
let isIntervalActive = false
const $secsWork = $("#secsWork")
const $minsWork = $("#minsWork")
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
        intervalSecBreak = setInterval(countBreak, 1000)
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

//BREAK
const $secsBreak = $("#secsBreak")
const $minsBreak = $("#minsBreak")
let secondsBreak; 
let minsTrackerBreak; 
let secsTrackerBreak = 59 
let intervalSecBreak;
const countBreak = function(){ 
    isIntervalActive = true
    if (secondsBreak <= 0) {
        clearInterval(intervalSecBreak)
        isIntervalActive = false
        return
    }
    if (secondsBreak % 60 == 0){
        minsTrackerBreak -= 1
        $minsBreak.html(minsTrackerBreak)
        secsTrackerBreak = 59
        $secsBreak.html(secsTrackerBreak)
    }
    $secsBreak.html(secsTrackerBreak)
    secsTrackerBreak--
    secondsBreak--
    console.log(secondsBreak)
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
    secondsBreak = parse($minsBreak) * 60 + parse($secsBreak)
    minsTracker = parse($minsWork)
    minsTrackerBreak = parse($minsBreak)
    intervalSec = setInterval(count, 1000)
})

const $pause = $("#pause")
$pause.click(function(){
    isIntervalActive = false
    clearInterval(intervalSec)
    clearInterval(intervalSecBreak)
})

const $reset = $("#reset")
$reset.click(function(){
    isIntervalActive = false
    clearInterval(intervalSec)
    $secsWork.html(0)
    $minsWork.html(25)
    $secsBreak.html(0)
    $minsBreak.html(5)
})