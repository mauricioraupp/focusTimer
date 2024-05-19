import * as el from './elements.js'
import state from './state.js'

export function countdown() {
  clearTimeout(state.countdownId)
  state.seconds--
  if (state.seconds < 0) {
    state.seconds = 59
    state.minutes--
  }
  if (state.minutes < 0) {
    state.minutes = 0
    state.seconds = 0
    state.isRunning = false
    updateTimer(state.minutes, state.seconds)
    state.minutes = state.resetMinutes
    state.seconds = state.resetSeconds
    state.buttonAvailable = true
    return
  }

  updateTimer(state.minutes, state.seconds)
  state.countdownId = setTimeout(() => countdown(), 1000)
}

export function updateTimer(minutes, seconds) {
  el.counterMinutes.textContent = state.minutes
  el.counterSeconds.textContent = state.seconds

  el.counterMinutes.textContent = String(minutes).padStart(2, "0")
  el.counterSeconds.textContent = String(seconds).padStart(2, "0")
}

export function plusTime() {
  state.minutes += 5
}
export function minusTime() {
  state.minutes -= 5
  if(state.minutes < 0){
    state.minutes = 0
    state.seconds = 0
    state.isRunning = false
    console.log(state)
  }
}