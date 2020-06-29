import React, { Component } from 'react';
 import { Subscribe } from 'unstated';
import ModifyContainer from '../State/ModifyContainer';


class Texture1Cone extends Component {
    render() {
        return (
            <Subscribe to={ [ModifyContainer] }>
            {modifyState => (
                <button onClick={()=> {
                    modifyState.loadConeTexture1()
                }} className="button texture1Cone">Texture 1 </button>
            )}
           
            </Subscribe>
        )
    }
}

export default Texture1Cone