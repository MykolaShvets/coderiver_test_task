import * as THREE from "three";

const canvas = document.getElementsByClassName("background")[0];
canvas.style.width = window.innerWidth + "px";
canvas.style.height = window.innerHeight + "px";

//create envirorment
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  5000
);
const renderer = new THREE.WebGL1Renderer();

camera.position.z = 5;
renderer.setClearColor(0x3b3d67);
renderer.setSize(window.innerWidth, window.innerHeight);
canvas.appendChild(renderer.domElement);

window.onresize = () => {
  const height = window.innerHeight
  const width = window.innerWidth

  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

};

//create geomentry
const geometryBig = new THREE.SphereGeometry(0.7, 24, 32);
const geometryMedium = new THREE.SphereGeometry(0.3, 24, 32);
const geometrySmall = new THREE.SphereGeometry(0.1, 24, 32);

const material = new THREE.MeshMatcapMaterial({ color: 0xffffff });
const material2 = new THREE.MeshMatcapMaterial({ color: 0x00ffff });
const material3 = new THREE.MeshMatcapMaterial({ color: 0xd40d1f });

//add sphere
const sphere = new THREE.Mesh(geometryBig, material);
sphere.position.set(2, 2.5, -2);
scene.add(sphere);
const sphere2 = new THREE.Mesh(geometryBig, material2);
sphere2.position.set(2, 1.2, -1.5);
scene.add(sphere2);
const sphere3 = new THREE.Mesh(geometryMedium, material3);
sphere3.position.set(2.9, 2.2, -2.7);
scene.add(sphere3);
const sphere4 = new THREE.Mesh(geometryMedium, material);
sphere4.position.set(1.1, 0.5, 1);
scene.add(sphere4);
const sphere5 = new THREE.Mesh(geometryMedium, material2);
sphere5.position.set(0.97, -0.09, 1.1);
scene.add(sphere5);
const sphere6 = new THREE.Mesh(geometryMedium, material3);
sphere6.position.set(1.7, 0.2, 0);
scene.add(sphere6);
const sphere7 = new THREE.Mesh(geometryMedium, material);
sphere7.position.set(1, 0.2, 0);
scene.add(sphere7);
const sphere8 = new THREE.Mesh(geometryBig, material2);
sphere8.position.set(1.6, -1.3, -2);
scene.add(sphere8);
const sphere9 = new THREE.Mesh(geometryBig, material3);
sphere9.position.set(1, -2.2, -1.4);
scene.add(sphere9);
const sphere10 = new THREE.Mesh(geometrySmall, material);
sphere10.position.set(1.04, -0.3, 2);
scene.add(sphere10);
const sphere11 = new THREE.Mesh(geometrySmall, material2);
sphere11.position.set(0.8, 0.7, 0);
scene.add(sphere11);
const sphere12 = new THREE.Mesh(geometrySmall, material3);
sphere12.position.set(0.8, -0.8, 0);
scene.add(sphere12);
document.onmousemove = (e) => {
  sphere.position.x = sphere.position.x + e.movementX / 10000;
  sphere.position.y = sphere.position.y + e.movementY / 10000;
  sphere2.position.x = sphere2.position.x + e.movementX / 10000;
  sphere2.position.y = sphere2.position.y + e.movementY / 10000;
  sphere3.position.x = sphere3.position.x - e.movementX / 10000;
  sphere3.position.y = sphere3.position.y + e.movementY / 1000;
  sphere4.position.x = sphere4.position.x - e.movementX / 10000;
  sphere4.position.y = sphere4.position.y + e.movementY / 10000;
  sphere5.position.x = sphere5.position.x + e.movementX / 10000;
  sphere5.position.y = sphere5.position.y - e.movementY / 10000;
  sphere6.position.x = sphere6.position.x + e.movementX / 10000;
  sphere6.position.y = sphere6.position.y + e.movementY / 10000;
  sphere7.position.x = sphere7.position.x + e.movementX / 10000;
  sphere7.position.y = sphere7.position.y + e.movementY / 10000;
  sphere8.position.x = sphere8.position.x - e.movementX / 10000;
  sphere8.position.y = sphere8.position.y + e.movementY / 10000;
  sphere9.position.x = sphere9.position.x + e.movementX / 10000;
  sphere9.position.y = sphere9.position.y - e.movementY / 10000;
  sphere10.position.x = sphere10.position.x + e.movementX / 10000;
  sphere10.position.y = sphere10.position.y - e.movementY / 10000;
  sphere11.position.x = sphere11.position.x + e.movementX / 10000;
  sphere11.position.y = sphere11.position.y + e.movementY / 10000;
  sphere12.position.x = sphere12.position.x - e.movementX / 10000;
  sphere12.position.y = sphere12.position.y + e.movementY / 10000;
  camera.position.z = camera.position.z + e.movementX / 1000;
};

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

animate();
