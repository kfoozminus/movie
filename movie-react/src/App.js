import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  onSubmit = (e) => {
    //e.preventDefault();

    //const {  } = this.state;
    const inputValue = this.input.current.value;

    axios.get('127.0.0.1:9900/api/search/' + inputValue)
      .then((result) => {
        console.log(result)
      });

    
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light">
          <form className="form-inline" onSubmit={this.onSubmit}>
            <input className="form-control mr-sm-2" ref={this.input} type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>

        <div className="result">
        </div>
      </div>
    );
  }
}

export default App;
