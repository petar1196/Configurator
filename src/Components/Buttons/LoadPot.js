import React, { Component } from 'react';
import ModifyContainer from '../State/ModifyContainer';
import { Subscribe } from 'unstated';
import ThreeScene from '../ThreeScene';


class LoadPot extends Component {
    render() {
        return (
            <Subscribe to={[ModifyContainer]}>
                {modifyState => (
                    <button onClick={modifyState.LoadPot} className="button load-pot">Load Pot</button>
                )}
            </Subscribe>

        )

    }
}

export default LoadPot

