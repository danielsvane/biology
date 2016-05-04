import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onRendered(function(){
  var scene, camera, renderer;
	var geometry, material, mesh;
	var wireframe;

	init();
	animate();

	function init() {

		scene = new THREE.Scene();

		camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
		camera.position.z = 1000;

		var ambient = new THREE.AmbientLight( 0x101030 );
				scene.add( ambient );
				var directionalLight = new THREE.DirectionalLight( 0xffeedd );
				directionalLight.position.set( 0, 0, 1 );
				scene.add( directionalLight );

		//var manager = new THREE.LoadingManager();
		var loader = new THREE.OBJLoader();
		loader.load( 'sicklecell2HBS.obj', function ( object ) {
			console.log("loaded object");

			// object.traverse( function ( child ) {
			// 						if ( child instanceof THREE.Mesh ) {
			// 							child.material.map = texture;
			// 						}
			// 					} );

			object.position.y = - 0;
			object.scale.setScalar(5);

			scene.add( object );
			console.log(object);
		});


		geometry = new THREE.BoxGeometry( 200, 200, 200 );
		material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

		mesh = new THREE.Mesh( geometry, material );
		scene.add( mesh );

		renderer = new THREE.WebGLRenderer();
		renderer.setSize( window.innerWidth, window.innerHeight );

		document.body.appendChild( renderer.domElement );

	}

	function animate() {

		requestAnimationFrame( animate );

		mesh.rotation.x += 0.01;
		mesh.rotation.y += 0.02;

		renderer.render( scene, camera );

	}
});
