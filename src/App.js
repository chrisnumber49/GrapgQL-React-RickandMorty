import React from 'react';
import CharactersList from './components/CharactersList';
import CharacterDetail from './components/CharacterDetail';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route 
          path="/" 
          exact
          render={(props)=> (
            <CharactersList {...props} />
          )} 
        />

        <Route  
          path="/:id"
          render={(props)=> (
            <CharacterDetail {...props} />
          )} 
        />
      </Switch>
    </div>
  );
}

export default App;
