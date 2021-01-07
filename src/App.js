import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      dropdownView: false
    }
  }
  toggleDropdown = () => {
    this.setState({dropdownView: !this.state.dropdownView})
  }
  render(){
  return (
    <div className="App">
      
    <header className='main-header'>
    {/* <img src = 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/header-bg.jpg'/> */}
    <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg" alt="Start Bootstrap" />
      <nav className = 'desktop-menu'>
        <span>SERVICES</span>
        <span>PORTFOLIO</span>
        <span>ABOUT</span>
        <span>TEAM</span>
        <span>CONTACT</span>
      </nav>
    <div className='dropdown' onClick={this.toggleDropdown}>Menu</div>
          {this.state.dropdownView
          ? (
            <nav className = 'mobile-menu'>
              <span>SERVICES</span>
              <span>PORTFOLIO</span>
              <span>ABOUT</span>
              <span>TEAM</span>
              <span>CONTACT</span>
            </nav>
          )
          : null}
    </header>
    <body>
      <section>
        <h3>Welcome to Our Studio!</h3>
        <h1>IT'S NICE TO MEET YOU</h1>
        <button>TELL ME MORE</button>
        
      </section>
      
    </body>
    </div>
  );
  }
}

export default App;
