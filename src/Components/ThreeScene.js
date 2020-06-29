import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';



let scene, camera, renderer;
let aspect = window.innerWidth / window.innerHeight;
let spotLight, controls;
let plane;
let skyboxGeometry, skybox;
const gltfLoader = new GLTFLoader();


let coneModel, coneTexture;
let clayModel, clayTexture;



class ThreeScene extends Component {



    //End of buttons funcionality


    /*  ThreeJS Scene */
    componentDidMount() {


        const createPlane = () => {

            let planeGeometry = new THREE.BoxBufferGeometry(100, 1, 100);

            let planeMaterial = new THREE.ShadowMaterial({ side: THREE.DoubleSide });
            planeMaterial.opacity = 0.7;
            plane = new THREE.Mesh(planeGeometry, planeMaterial);
            plane.receiveShadow = true;
            plane.castShadow = false;
            plane.position.y = -10;

            scene.add(plane);
        }

        //Skybox
        const createSkyBox = () => {

            skyboxGeometry = new THREE.BoxBufferGeometry(1000, 1000, 1000);

            skybox = new THREE.Mesh(skyboxGeometry, this.props.currentSkybox);

            scene.add(skybox);

        }


        const createCone = () => {
            gltfLoader.load('assets/models/Traffic Cone/ue4jfevga.glb', gltf => {
                coneModel = gltf.scene.children[0];
                coneTexture = this.props.coneTexture;
                coneModel.material = new THREE.MeshStandardMaterial({
                    map: coneTexture, roughness: .5,
                    reflectivity: .5
                });
                coneModel.scale.setScalar(1);
                coneModel.castShadow = true;
                coneModel.receiveShadow = true;
                coneModel.position.y -= 9;
                coneModel.visible = this.props.coneModelState;
                scene.add(coneModel);
                console.log(coneModel.visible);


            });

        }

        const createClay = (props) => {
            gltfLoader.load('assets/models/Clay Pot/uepibauva.glb', gltf => {
                clayModel = gltf.scene.children[0];
                clayTexture = this.props.clayLoader;
                clayModel.material = new THREE.MeshStandardMaterial({
                    map: clayTexture, roughness: .5,
                    reflectivity: .5
                });
                // console.log(clayModel.material);
                clayModel.scale.setScalar(3);
                clayModel.castShadow = true;
                clayModel.receiveShadow = true;
                clayModel.visible = this.props.clayModelState;
                scene.add(clayModel);


                clayModel.position.y -= 8;

            });
        }


        //Init function
        const init = () => {

            scene = new THREE.Scene();
            scene.background = new THREE.Color(0xdddddd);

            camera = new THREE.PerspectiveCamera(
                75,
                aspect,
                10,
                10000
            )
            camera.position.set(0, 40, 110);


            spotLight = new THREE.SpotLight(0xffffff, 5, 1000);
            spotLight.position.set(30, 60, 30);
            spotLight.distance = 110;
            spotLight.angle = 0.8;
            spotLight.castShadow = true;
            spotLight.shadow.mapSize.width = 1024;
            spotLight.shadow.mapSize.height = 1024;
            spotLight.shadow.camera.near = 60;
            spotLight.shadow.camera.far = 150;
            spotLight.shadow.camera.fov = 30;

            scene.add(spotLight);

            // TEMP
            /*  let ambientLight = new THREE.AmbientLight(0xffffff, .5);
             scene.add(ambientLight)
          */


            // let lightHelper = new THREE.SpotLightHelper(spotLight);
            // scene.add(lightHelper); 



            createPlane();
            createSkyBox();

            createCone();
            createClay();






            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            renderer.shadowMap.autoUpdate = true;
            renderer.shadowMap.needsUpdate = true;
            renderer.setSize(window.innerWidth, window.innerHeight);

            document.body.appendChild(renderer.domElement);

            controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.enableRotate = true;
            controls.minDistance = 80;
            controls.maxDistance = 170;
            controls.maxPolarAngle = 1.4;
            controls.rotateSpeed = 0.5;
            controls.zoomSpeed = 0.5;

            controls.update();
        }

        //Animation function
        const animate = () => {
            requestAnimationFrame(animate);


            skybox.material = this.props.currentSkybox;


            if (coneModel) {
                coneModel.visible = this.props.coneModelState;
            }

            if (clayModel) {
                clayModel.visible = this.props.clayModelState;
            }

            if (coneModel) {
                coneTexture = this.props.coneTexture;
                coneModel.material = new THREE.MeshStandardMaterial({
                    map: coneTexture, roughness: .5,
                    reflectivity: .5
                });
            }

            if (clayModel) {
                clayTexture = this.props.clayLoader;
                clayModel.material = new THREE.MeshStandardMaterial({
                    map: clayTexture, roughness: .5,
                    reflectivity: .5
                });
            }





            controls.update();


            renderer.render(scene, camera);
        }

        init();
        animate();


        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);

        }

        window.addEventListener('resize', onWindowResize, false);





    }

    render() {
        return (
            <div />
        )
    }


}

export default ThreeScene;

