import { controls } from "./elements.js";
import state from './state.js'
import * as timer from './timer.js'

export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if (action == 'toggleRunningY' && state.isRunning == false){
      state.isRunning = true
      timer.countdown()
    }
    if (action == 'toggleRunningN' && state.isRunning == true){
      state.isRunning = false
      clearTimeout(state.countdownId)
    }
    if (action == 'plusTime'){
      timer.plusTime()
      timer.updateTimer(state.minutes, state.seconds)
    }
    if (action == 'minusTime'){
      timer.minusTime()
      timer.updateTimer(state.minutes, state.seconds)
    }
  })
}