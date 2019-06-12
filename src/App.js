import React from 'react';
import Palette from './Pallette';
import seedColors from './seedColors';

function App() {
  return (
    <div>
      <Palette palette={seedColors[4]} />
    </div>
  );
}

export default App;
