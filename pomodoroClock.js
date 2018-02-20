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
        clearTimeout(interval)
    }
    console.log(secsWorkCount)    
    $secsWork.html(secsWorkCount)
    secsWorkCount--
}

const interval = setInterval(count, 1000)

// const counting = function(){
//     while (a.text()<=0){
//         console.log("I got here")
//         setTimeout(count, 1000)
//     }
// }

// counting()

$("#pause").click(function(){
    clearTimeout(interval)
})