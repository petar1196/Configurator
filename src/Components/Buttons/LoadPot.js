import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import ModifyContainer from '../State/ModifyContainer';



class LoadPot extends Component {
    render() {
        return (
            <Subscribe to={[ModifyContainer]}>
                {modifyState => (
                    <button onClick={() => {
                        modifyState.loadClay()
                    }} className="button load-pot">Load Pot</button>
                )}

            </Subscribe>

        )

    }
}

export default LoadPot

