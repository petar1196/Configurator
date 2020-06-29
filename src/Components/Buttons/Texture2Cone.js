import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import ModifyContainer from '../State/ModifyContainer';

class Texture2Cone extends Component {
    render() {
        return (
            <Subscribe to={[ModifyContainer]}>
                {modifyState => (
                    <button onClick={() => {
                        modifyState.loadConeTexture2()
                    }} className="button texture2Cone">Texture 2 </button>
                )}
            </Subscribe>
        )
    }
}

export default Texture2Cone


