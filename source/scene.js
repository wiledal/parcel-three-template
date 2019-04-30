import TestCube from "./objects/TestCube";

const box = new TestCube()

function initScene ({scene, camera, renderer}) {
  scene.add(box)

  camera.position.z = 10
}

function updateScene ({delta, elapsedTime}) {
  box.position.x = Math.sin(elapsedTime * 2) * .2
  box.position.y = Math.cos(elapsedTime * 2) * .2
  box.position.z = Math.cos(elapsedTime * 2) * 2
  box.rotation.y += delta * .5
  box.rotation.x += delta * .5
}

export {
  initScene,
  updateScene
}