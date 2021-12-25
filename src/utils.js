import * as THREE from "three";
import getImgs from "./textures";

const addEvents = (renderer, camera, pivot) => {
  let press = false;
  renderer.domElement.addEventListener("mousemove", (event) => {
    if (!press) {
      return;
    }
    const sensitivity = 0.01;

    pivot.rotation.x -= event.movementY * sensitivity;
    pivot.rotation.y -= event.movementX * sensitivity;
  });
  renderer.domElement.addEventListener("mousedown", (event) => {
    press = true;
  });
  renderer.domElement.addEventListener("mouseup", (event) => {
    press = false;
  });
  renderer.domElement.addEventListener("mouseleave", (event) => {
    press = false;
  });
  renderer.domElement.addEventListener("wheel", (event) => {
    const direction = event.wheelDelta;
    if (direction > 0) {
      camera.position.z--;
    } else {
      camera.position.z++;
    }
  });
  renderer.domElement.addEventListener("dblclick", (event) => {
    pivot.rotation.set(0, 0, 0);
    pivot.position.set(0, 0, 0);
    camera.lookAt(0, 0, 0);
    camera.position.set(0, 0, 40);
  });
};

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

export { addEvents, getTexture, getBall };
