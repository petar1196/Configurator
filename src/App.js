import React from 'react';
import ThreeScene from './Components/ThreeScene';
import './App.css';
import UserInterface from './Components/UserInteface';
import { Subscribe, Provider } from 'unstated';
import ModifyContainer from './Components/State/ModifyContainer';

function App() {
  return (
    <Provider>
      <Subscribe to={[ModifyContainer]}>
        {ModifyState => (
          <div className="App">
            <ThreeScene
              skyboxMaterials1={ModifyState.state.skyboxMaterials1}
              skyboxMaterials2={ModifyState.state.skyboxMaterials2}
              currentSkybox={ModifyState.state.currentSkybox}
              clayModelState={ModifyState.state.clayModelState}
              coneModelState={ModifyState.state.coneModelState}
              trueState={ModifyState.state.trueState}
              falsestate={ModifyState.state.falseState}
              currentConeTexture={ModifyState.state.currentConeTexture}
              currentClayTexture={ModifyState.state.currentClayTexture}
              clayLoader={ModifyState.state.clayTexture}
              coneTexture={ModifyState.state.coneTexture} />
            <UserInterface />
          </div>
        )}
      </Subscribe>
    </Provider>
  );
}

export default App;
