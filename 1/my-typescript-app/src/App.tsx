import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  test = (props:string) => {
    return props;
  }

  render() {
    console.log(this.test("A"));
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

// const App: React.FC = () => {

// }

export default App;
