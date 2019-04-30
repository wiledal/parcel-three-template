import { Mesh, BoxGeometry, MeshBasicMaterial, MeshStandardMaterial } from "three";

export default class TestCube extends Mesh {
  constructor() {
    super(
      new BoxGeometry(1,1,1),
      new MeshStandardMaterial({
        color: 0xff00ff,
        roughness: .4
      })
    )
  }
}