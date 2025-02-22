class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null
    
  } 

  start(printTimeCallback) {

    this.intervalId = setInterval(() => {


      this.currentTime++;
      if (printTimeCallback) {

        printTimeCallback()
      }


    }, 1000);

  }

  getMinutes() {
    let minutes = Math.floor((this.currentTime / 60))
    return minutes
  }

  getSeconds() {
    let secs = this.currentTime % 60
    return +secs.toFixed(0)
  }

  computeTwoDigitNumber(value) {
    
    let valueString = value.toString()
    if (valueString.length === 1){
      return '0'+ valueString 
    }
    else return valueString

  }

  stop() {
   clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {

    return (`${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`)
  }
}
