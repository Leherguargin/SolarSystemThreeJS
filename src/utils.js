import * as THREE from "three";
import getImgs from "./textures";

const getTexture = (index) => {
  const image = new Image();
  image.src = getImgs(index);
  const texture = new THREE.Texture();
  texture.image = image;
  image.onload = function () {
    texture.needsUpdate = true;
  };
  return texture;
};

const getBall = (radius, textureNum) => {
  const geometry = new THREE.SphereGeometry(radius, 32, 16);
  const material = new THREE.MeshBasicMaterial({
    map: this.getTexture(textureNum)
  });
  const sphere = new THREE.Mesh(geometry, material);
  return sphere;
};

// export default { getTexture, getBall };
