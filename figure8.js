// creating sceme
var scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd)
var loader = new THREE.TextureLoader();
loader.load('../texture/texture2.jpg', function(texture){
    scene.background = texture;
})
// add camera
var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight
);

// remderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// add geometry
const geometry = new THREE.TorusKnotGeometry( 9, 4, 70, 14, 12, 14 );
const torusKnot = new THREE.Mesh( geometry, material );


var material = new THREE.MeshStandardMaterial()
material.metalness = 1;
material.roughness = 0.2;

//luz ambiente
const ambientalight = new THREE.AmbientLight(0xdddddd, 10);
scene.add(ambientalight)

// point light

const pointlight = new THREE.PointLight(0xdddddd, 200, 2000)
scene.add(pointlight)
pointlight.position.set(5, 5, 5)

scene.background = new THREE.Color(0xdddddd)

/* var material = new THREE.MeshBasicMaterial({color: 0x2ccfc0}); */
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xdddddd } ) );
 scene.add(  );


camera.position.z = 30;

var animate = function(){
    requestAnimationFrame(animate);
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();