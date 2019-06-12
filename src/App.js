import React from 'react';
import Palette from './Pallette';
import seedColors from './seedColors';

function App() {
  return (
    <div>
      <Palette {...seedColors[3]} />
    </div>
  );
}

export default App;
