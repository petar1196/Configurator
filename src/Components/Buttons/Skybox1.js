import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import ModifyContainer from '../State/ModifyContainer';




class Skybox1 extends Component {

    render() {

        return (
            <Subscribe to={[ModifyContainer]}>
                {modifyState => (
                    <button onClick={() => {
                        modifyState.setSkyboxTo1()
                    }} className="button skybox1" >Skybox1</button>
                )}
            </Subscribe>
        )
    }


}

export default Skybox1