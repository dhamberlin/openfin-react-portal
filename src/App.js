import React from 'react';
import './App.css';
import WindowPortal from './WindowPortal';

class App extends React.Component {
  state = {
    counter: 0,
    showWindowPortal: false
  }

  toggleWindowPortal = () => {
    this.setState(({ showWindowPortal }) => ({ showWindowPortal: !showWindowPortal }));
  }
  
  increment = () => this.setState(({ counter }) => ({ counter: counter + 1 }))
  decrement = () => this.setState(({ counter }) => ({ counter: counter - 1 }))

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Counter: {this.state.counter}</h1>
          <div>
            <button onClick={this.increment}>
              Increment Counter
            </button>
            <button onClick={this.decrement}>
              Decrement Counter
            </button>
          </div>
          <button
            onClick={this.toggleWindowPortal}
          >
            {this.state.showWindowPortal ? 'Close the' : 'Open a'} Portal
          </button>
          {this.state.showWindowPortal && (
            <WindowPortal>
              <h1>Counter in a portal: {this.state.counter}</h1>
              <p>State is shared!</p>
              <p>We can even increment/decrement from here.</p>
              <button onClick={() => {
                console.log('click')
                this.increment()
              }}>
                Increment Counter
              </button>
              <button onClick={this.decrement}>
                Decrement Counter
              </button>
            </WindowPortal>
          )}
        </header>
      </div>
    );
  }
}

export default App;
