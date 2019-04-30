import { AmbientLight, DirectionalLight } from "three";

function initLights ({scene, camera, renderer}) {
  const ambLight = new AmbientLight(0x333333, 1)
  scene.add(ambLight)

  const dirLight = new DirectionalLight(0xffffff, 1)
  dirLight.position.set(0, 1, 1)
  scene.add(dirLight)
}

export {
  initLights
}