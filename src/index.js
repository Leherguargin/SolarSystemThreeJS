import "./styles.css";
import * as THREE from "three";
import * as utils from "./utils";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const pivot = new THREE.Group();
pivot.position.set(0, 0, 0);
pivot.add(camera);
scene.add(pivot);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 500;

//planets
const earthRadius = 1;
const radiuses = [
  109,
  0.3825,
  0.9489,
  1,
  0.5335,
  11.2092,
  9.4494,
  4.0074,
  3.8827
].map((r) => r * earthRadius);
const distancesFromSun = [
  0,
  57910000,
  108200000,
  149600000,
  227940000,
  778330000,
  1429400000,
  2870990000,
  4504000000
];
const sun = utils.getBall(radiuses[0], 0, distancesFromSun[0], 0, 0);
const mercury = utils.getBall(radiuses[1], 1, distancesFromSun[1], 0, 0);
const venus = utils.getBall(radiuses[2], 0, distancesFromSun[2], 0, 0);
const earth = utils.getBall(radiuses[3], 1, distancesFromSun[3], 0, 0);
const mars = utils.getBall(radiuses[4], 0, distancesFromSun[4], 0, 0);
const jupiter = utils.getBall(radiuses[5], 1, distancesFromSun[5], 0, 0);
const saturn = utils.getBall(radiuses[6], 0, distancesFromSun[6], 0, 0);
const uranus = utils.getBall(radiuses[7], 1, distancesFromSun[7], 0, 0);
const neptune = utils.getBall(radiuses[8], 0, distancesFromSun[8], 0, 0);

scene.add(sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
}
utils.addEvents(renderer, camera, pivot);
animate();
