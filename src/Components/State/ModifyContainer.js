import React from 'react';
import * as THREE from 'three';
import ThreeScene from '../ThreeScene';

import { Container } from 'unstated';





class ModifyContainer extends Container {
    state = {

        currentSkybox: [

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

        coneModelState: true,
        clayModelState: false,

        trueState: true,
        falseState: false,


        coneTexture: new THREE.TextureLoader().load('/assets/models/Traffic Cone/ue4jfevga_2K_Albedo.jpg'),
        coneTexture1: new THREE.TextureLoader().load('/assets/models/Traffic Cone/ue4jfevga_2K_Albedo.jpg'),
        coneTexture2: new THREE.TextureLoader().load('/assets/models/Traffic Cone/albedo1.jpg'),
        coneTexture3: new THREE.TextureLoader().load('/assets/models/Traffic Cone/albedo2.jpg'),

        clayTexture: new THREE.TextureLoader().load('/assets/models/Clay Pot/uepibauva_2K_Albedo.jpg'),
        clayTexture1: new THREE.TextureLoader().load('/assets/models/Clay Pot/uepibauva_2K_Albedo.jpg'),
        clayTexture2: new THREE.TextureLoader().load('/assets/models/Clay Pot/AlbedoCone2.jpg'),
        clayTexture3: new THREE.TextureLoader().load('/assets/models/Clay Pot/AlbedoCone3.jpg'),
    };

    //Loading skybox
    setSkyboxTo1() {
        this.setState({ currentSkybox: this.state.skyboxMaterials1 })
    };

    setSkyboxTo2() {
        this.setState({ currentSkybox: this.state.skyboxMaterials2 })
    };



    //Loading Models
    loadCone() {
        this.setState({ coneModelState: this.state.trueState });
        this.setState({ clayModelState: this.state.falseState });
    };

    loadClay() {
        this.setState({ clayModelState: true });
        this.setState({ coneModelState: false });
    };

    //Loading Cone Textures
    loadConeTexture1() {
        this.setState({ coneTexture: this.state.coneTexture1 });
    }

    loadConeTexture2() {
        this.setState({ coneTexture: this.state.coneTexture2 });
    }

    loadConeTexture3() {
        this.setState({ coneTexture: this.state.coneTexture3 });
    }


    //Loading Clay Textures
    loadClayTexture1() {
        this.setState({ clayTexture: this.state.clayTexture1 });
    }

    loadClayTexture2() {
        this.setState({ clayTexture: this.state.clayTexture2 });
    }

    loadClayTexture3() {
        this.setState({ clayTexture: this.state.clayTexture3 })
    }




}

export default ModifyContainer