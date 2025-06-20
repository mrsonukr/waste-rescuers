import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Routing from './Routing'

const App = () => {
  return (
    <HelmetProvider>
      <div>
        <Routing />
      </div>
    </HelmetProvider>
  );
}

export default App;