import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import ModifyContainer from '../State/ModifyContainer';


class LoadCone extends Component {
    render() {

        return (
            <Subscribe to={[ModifyContainer]}>
            {modifyState => (
                <button onClick={() => {
                    modifyState.loadCone()
                }} className="button load-cone">Load Cone</button>
            )}
            </Subscribe>
        )
    }
}

export default LoadCone