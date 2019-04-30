import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Clock
} from 'three'
import { initLights } from './lights'
import { initScene, updateScene } from './scene'

const scene = new Scene()
const camera = new PerspectiveCamera()
const renderer = new WebGLRenderer({
})
renderer.setPixelRatio(devicePixelRatio > 1 ? 2 : 1)
const clock = new Clock()

document.body.appendChild(renderer.domElement)

initLights({scene, camera, renderer})
initScene({scene, camera, renderer})

function onResize () {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
}

function tick () {
  requestAnimationFrame(tick)

  const elapsedTime = clock.elapsedTime
  const delta = clock.getDelta()

  updateScene({delta, elapsedTime})
  renderer.render(scene, camera)
}

window.addEventListener('resize', onResize)

onResize()
tick()