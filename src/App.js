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
              currentSkybox={ModifyState.state.currentSkybox} />
            <UserInterface />
          </div>
        )}
      </Subscribe>
    </Provider>
  );
}

export default App;
