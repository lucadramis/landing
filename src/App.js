import React, { Component } from 'react';
import './App.css';
import Page from './page';
import Menu from './menu';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu></Menu>
         <Page></Page>
         <Footer></Footer>

         
        </header>
      </div>
    );
  }
}

export default App;
