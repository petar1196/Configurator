import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import ModifyContainer from "./State/ModifyContainer";


let scene, camera, renderer;
let aspect = window.innerWidth / window.innerHeight;
let spotLight, controls;
let plane;
let skyboxGeometry, skyboxMaterials1, skyboxMaterials2, skybox, skyboxGeo2, skybox2;
const gltfLoader = new GLTFLoader();
const textureLoader = new THREE.TextureLoader();

let coneModel, coneTexture1, coneTexture2, coneTexture3;
let clayModel, clayTexture1, clayTexture2, clayTexture3;



class ThreeScene extends Component {

    // Buttons functionality
    changeSkybox1() {
        this.skybox.material = this.skyboxMaterials1;
    }

    changeSkybox2() {
        this.skybox.material = this.skyboxMaterials2;
    }

    loadCone() {
        this.coneModel.visible = true;
        this.clayModel.visible = false;
    }


    coneTexture1 = new THREE.TextureLoader().load('public/assets/models/Traffic Cone/ue4jfevga_2K_Albedo.jpg');
    coneTexture2 = new THREE.TextureLoader().load('public/assets/models/Traffic Cone/albedo1.jpg');
    coneTexture3 = new THREE.TextureLoader().load('public/assets/models/Traffic Cone/albedo2.jpg');

    changeCone1() {
        this.coneModel.material = coneTexture1;
    }

    changeCone2() {
        this.coneModel.material = coneTexture2;
    }

    changeCone3() {
        this.coneModel.material = coneTexture3;
    }


    clayTexture1 = new THREE.TextureLoader().load('public/assets/models/Clay Pot/uepibauva_2K_Albedo.jpg');
    clayTexture2 = new THREE.TextureLoader().load('public/assets/models/Clay Pot/AlbedoCone2.jpg');
    clayTexture3 = new THREE.TextureLoader().load('public/assets/models/Clay Pot/AlbedoCone3.jpg');

    changeClay1() {
        this.clayModel.material = clayTexture1;
    }

    changeClay2() {
        this.clayModel.material = clayTexture2;
    }

    changeClay3() {
        this.clayModel.material = clayTexture3;
    }

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
            textureLoader.load('assets/models/Traffic Cone/ue4jfevga_2K_Albedo.jpg', coneTexture1 => {
                gltfLoader.load('assets/models/Traffic Cone/ue4jfevga.glb', gltf => {
                    coneModel = gltf.scene.children[0];
                    coneModel.material = new THREE.MeshStandardMaterial({
                        map: coneTexture1, roughness: .5,
                        reflectivity: .5
                    });
                    coneModel.scale.setScalar(1);
                    coneModel.castShadow = true;
                    coneModel.receiveShadow = true;
                    coneModel.position.y -= 9;
                    coneModel.visible = true;
                    scene.add(coneModel);
                });
            });
        }

        const createClay = () => {
            gltfLoader.load('assets/models/Clay Pot/uepibauva.glb', gltf => {
                clayModel = gltf.scene.children[0];
                clayTexture1 = new THREE.TextureLoader().load('assets/models/Clay Pot/uepibauva_2K_Albedo.jpg');
                clayModel.material = new THREE.MeshStandardMaterial({ map: clayTexture1 });
                clayModel.scale.setScalar(3);
                clayModel.castShadow = true;
                clayModel.receiveShadow = true;
                clayModel.visible = false;
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

