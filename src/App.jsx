import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.js';
import Detail from './Detail.js';
import Home from './Home.js';
import Footer from './Footer.js';

const App = () => {
  return (
    <div>
      <div className="container">
        <Header />
        <Home />
      </div>
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
