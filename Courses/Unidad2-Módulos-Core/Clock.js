'use strict'

class Clock {
    constructor(){

        setInterval(() => {
            this.theTime()
        },1000)
    }

    theTime(){
        let date = new Date(),
            hoursAmPm = (date.getHours() > 12) ? (date.getHours() - 12) : date.getHours(),
            hours = addZero(hoursAmPm),
            min = addZero(date.getMinutes()),
            sec = addZero(date.getSeconds()),
            ampm = (date.getHours() < 12) ? 'am' : 'pm',
            message = `${hours}:${min}:${sec}${ampm}`
        
        function addZero(num){ return (num < 10) ? ('0' + num) : num}
        
        console.log(message)
    }
}

module.exports = new Clock