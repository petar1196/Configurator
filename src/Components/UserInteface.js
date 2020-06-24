import React, { Component } from 'react';
import { Subscribe, Provider } from 'unstated'
import '../Style/Style.css'
import Skybox1 from './Buttons/Skybox1';
import Skybox2 from './Buttons/Skybox2';
import LoadCone from './Buttons/LoadCone';
import LoadPot from './Buttons/LoadPot';
import Texture1Cone from './Buttons/Texture1Cone';
import Texture2Cone from './Buttons/Texture2Cone';
import Texture3Cone from './Buttons/Texture3Cone';
import Texture1Pot from './Buttons/Texture1Pot';
import Texture2Pot from './Buttons/Texture2Pot';
import Texture3Pot from './Buttons/Texture3Pot';
import ModifyContainer from './State/ModifyContainer';





class UserInterface extends Component {

    


    render() {

        return (
              
                    <div className="modify">
                    <Skybox1 />
                    <Skybox2 />
                    <LoadCone />
                    <LoadPot />
                    <span className="span coneSpan">Cone </span>
                    <span className="span potSpan">Pot</span>
                    <Texture1Cone />
                    <Texture2Cone />
                    <Texture3Cone />
                    <Texture1Pot />
                    <Texture2Pot />
                    <Texture3Pot />
                    </div >
              

        )




    }
}

export default UserInterface