import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Navbar from './components/Navbar';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Main/>
      </div>
    )
  }

}

export default App;
