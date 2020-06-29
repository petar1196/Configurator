import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import ModifyContainer from '../State/ModifyContainer';

class Texture3Pot extends Component {
    render() {
        return (
            <Subscribe to={[ModifyContainer]}>
                {modifyState => (
                    <button onClick={() => {
                        modifyState.loadClayTexture3()
                    }} className="button texture3Pot">Texture 3 </button>
                )}

            </Subscribe>
        )
    }
}

export default Texture3Pot
