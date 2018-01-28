import React, { Component } from 'react';
import router from './router';
import './components/styles.css'
import Footer from './components/Footer/Footer'


class App extends Component {
  render() {
    return (
      <div>
      <div className="body">
        {router}
      </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
