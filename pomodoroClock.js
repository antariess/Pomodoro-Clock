// - and + buttons to add a minute to timer 

//WORK
let intervalState = false
const $secsWork = $("#secsWork")
const $minsWork = $("#minsWork")
const parse = function(span){
    return parseInt(span.html(), 10)
}
let seconds; 
let minsTracker; 
let secTracker = 59 
const count = function(){ 
    intervalState = true
    if (seconds <= 0) {
        clearTimeout(intervalSec)
        intervalState = false
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

//increase decreace time
const $incrWork = $("#incrWork")
const $decrWork = $("#decrWork")
const $incrBreak = $("#incrBreak")
const $decrBreak = $("#decrBreak")
const increase = function(){
    if (!intervalState){
        if (parse($minsWork) < 59){
            $minsWork.html(parse($minsWork) + 1)
        }
    }    
}
const decrease = function(){
    if (!intervalState){
        if(parse($minsWork) > 0){
            $minsWork.html(parse($minsWork) - 1)
        }
    }    
}
$incrWork.click(increase)
$decrWork.click(decrease)

//buttons
const $play = $("#play")
$play.click(function(){
    seconds = parse($minsWork) * 60 + parse($secsWork); 
    minsTracker = parse($minsWork)
    intervalSec = setInterval(count, 100)
})

const $pause = $("#pause")
$pause.click(function(){
    intervalState = false
    clearTimeout(intervalSec)
})

const $reset = $("#reset")
$reset.click(function(){
    intervalState = false
    clearTimeout(intervalSec)
    $secsWork.html(00)
    $minsWork.html(25)
})