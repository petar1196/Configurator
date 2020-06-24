import React from 'react';
import * as THREE from 'three';
import ThreeScene from '../ThreeScene';

import { Container } from 'unstated';



class ModifyContainer extends Container {
    state = {

        currentSkybox:  [

            //Right
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/skyBox/box1/3.jpg'), side: THREE.BackSide }),
            //Left 
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/skyBox/box1/1.jpg'), side: THREE.BackSide }),
            //Up
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/skyBox/box1/up.jpg'), side: THREE.BackSide }),
            //Down
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/skyBox/box1/down.jpg'), side: THREE.BackSide }),
            //Front 
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/skyBox/box1/4.jpg'), side: THREE.BackSide }),
            //Back
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/skyBox/box1/2.jpg'), side: THREE.BackSide }),
        ],

        skyboxMaterials1: [
            //Right
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/skyBox/box1/3.jpg'), side: THREE.BackSide }),
            //Left 
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/skyBox/box1/1.jpg'), side: THREE.BackSide }),
            //Up
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/skyBox/box1/up.jpg'), side: THREE.BackSide }),
            //Down
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/skyBox/box1/down.jpg'), side: THREE.BackSide }),
            //Front 
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/skyBox/box1/4.jpg'), side: THREE.BackSide }),
            //Back
            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/skyBox/box1/2.jpg'), side: THREE.BackSide }),
        ],

         skyboxMaterials2: [

            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/skyBox/box2/negx.jpg'), side: THREE.BackSide }),

            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/skyBox/box2/posx.jpg'), side: THREE.BackSide }),

            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/skyBox/box2/posy.jpg'), side: THREE.BackSide }),

            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/skyBox/box2/negy.jpg'), side: THREE.BackSide }),

            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/skyBox/box2/negz.jpg'), side: THREE.BackSide }),

            new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/skyBox/box2/posz.jpg'), side: THREE.BackSide }),
        ],

      


    };

    setSkyboxTo1() {
        this.setState({ currentSkybox: this.state.skyboxMaterials1 })
    };

    setSkyboxTo2() {
        this.setState({ currentSkybox: this.state.skyboxMaterials2 })
    };


   





}

export default ModifyContainer