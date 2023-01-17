import React, { Suspense } from "react";
import './App.css';

import PokemonPager from "./Pokemon";


function App() {
  return (
      <React.Suspense fallback={<div className="suspense">Loading...</div>}>
        <PokemonPager />
      </React.Suspense>
  );

}

export default App;
