import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import ModifyContainer from '../State/ModifyContainer';

class Texture1Pot extends Component {
    render() {
        return (
            <Subscribe to={[ModifyContainer]}>
                {modifyState => (
                    <button onClick={() => {
                        modifyState.loadClayTexture1()
                    }} className="button texture1Pot">Texture 1 </button>
                )}

            </Subscribe>

        )
    }
}

export default Texture1Pot