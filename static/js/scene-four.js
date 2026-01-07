import { DOM } from './elements.js'

/* main timeline */
export function createSceneFour() {
  return gsap.timeline({ defaults: {duration: 1 }, paused: true })
    .pause()
    .add(tlUfo(), .25)
}

/* child timelines */
function tlUfo() {
  return gsap.timeline({})
    .set(DOM.ufo, {xPercent:10, x:'140%', scale: 0.15,  transformOrigin:'1% 0'})
    .to(DOM.ufo, 1,  {opacity:1}, '+=.25')
    .to(DOM.ufo, 3,  {xPercent:100, yPercent:200, scale: 1, ease: 'elastic.out(1, 0.3)'})
}

