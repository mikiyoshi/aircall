import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Detail from './Detail.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';

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
