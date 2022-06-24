import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Home from './pages/home/home.jsx';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Home />
      <div className="container-view">Some activities should be hereaaaa</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
