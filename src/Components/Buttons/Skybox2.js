import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import ModifyContainer from '../State/ModifyContainer';


class Skybox2 extends Component {
    render() {
        
        return (
            <Subscribe to={[ModifyContainer]}>
                {modifyState => (
                    <button onClick={() => {
                        modifyState.setSkyboxTo2()
                    }} className="button skybox2">Skybox 2</button>
                )}
            </Subscribe>
        )
    }

}

export default Skybox2;