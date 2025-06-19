import HelloFromFrontend from '@deepak-terse/hello-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <div>
      <h1>GitHub Package Consumer POC</h1>
      <p>This app demonstrates consuming a package from GitHub Package Registry</p>
      <HelloFromFrontend />
    </div>
  );
};

export default App; 