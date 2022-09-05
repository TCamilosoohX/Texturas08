// creating sceme
var scene = new THREE.Scene();
scene.background = new THREE.Color(0xFDB98E)
var loader = new THREE.TextureLoader();
loader.load('../texture/texture8.jpg', function(texture){
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
const geometry = new THREE.SphereGeometry( 4, 10, 10 );

const sphere = new THREE.Mesh( geometry, material );


var textureLoader = new THREE.TextureLoader();
var matcap = textureLoader.load("../texture/texture1.jpg", (texture)=>{
    material.map = texture
    animate()
})

var material = new THREE.MeshNormalMaterial()

material.matcap = matcap
material.flatShading = true




/* var material = new THREE.MeshBasicMaterial({color: 0x2ccfc0}); */
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

camera.position.z = 55;

var animate = function(){
    requestAnimationFrame(animate);
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();