import {
  Mesh,
  TetrahedronGeometry,
  MeshBasicMaterial
} from 'three';

import {MeshComponent} from 'whs/src/core/MeshComponent';
import {reactify} from '../../src/index';

@reactify
export class BasicTetrahedron extends MeshComponent {
  build() {
    return new Mesh(
      new TetrahedronGeometry(3, 1),
      this.applyBridge({
        material: new MeshBasicMaterial({color: 0xffffff})
      }).material
    )
  }
}
