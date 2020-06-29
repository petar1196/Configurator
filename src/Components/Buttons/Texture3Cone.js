import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import ModifyContainer from '../State/ModifyContainer';

class Texture3Cone extends Component {
    render() {
        return (
            <Subscribe to={[ModifyContainer]}>
                {modifyState => (
                    <button onClick={() => {
                        modifyState.loadConeTexture3()
                    }} className="button texture3Cone">Texture 3 </button>
                )}

            </Subscribe>

        )
    }
}

export default Texture3Cone