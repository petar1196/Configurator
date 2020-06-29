import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import ModifyContainer from '../State/ModifyContainer';

class Texture2Pot extends Component {
    render() {
        return (
            <Subscribe to={[ModifyContainer]}>
                {modifyState => (
                    <button onClick={() => {
                        modifyState.loadClayTexture2()
                    }} className="button texture2Pot">Texture 2</button>
                )}
            </Subscribe>
        )
    }
}

export default Texture2Pot
