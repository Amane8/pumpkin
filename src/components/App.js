import React from 'react';
import Pumpkin from './Pumpkin.js'
import Shop from './Shop.js'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.Shop = React.createRef();
    this.state = {
      pumpkins: parseInt(localStorage.pumpkins) || 0,
      pumpkinsPerClick: 1,
      pumpkinsPerSecond: parseInt(localStorage.pumpkinsPerSecond) || 1,
    };
  }

  tickPerSecond = setInterval(() => this.changePumpkins(), 1000);


  clickPumpkin = (event) => {
    this.changePumpkins(this.state.pumpkinsPerClick);
  }

  changePumpkins = (value = this.state.pumpkinsPerSecond) => {
    this.setState(() => ({
      pumpkins: this.state.pumpkins + value,
    }));
  }
 
  changePumpkinsPerSecond = (value) => {
    this.setState(() => ({pumpkinsPerSecond: this.state.pumpkinsPerSecond + value}))
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('pumpkins', this.state.pumpkins);
    localStorage.setItem('pumpkinsPerSecond', this.state.pumpkinsPerSecond)
  }

  restart = () => {
    window.confirm('Are you sure?');
    this.setState({
      pumpkins: 0,
      pumpkinsPerClick: 1,
      pumpkinsPerSecond: 1,
    })
    this.Shop.current.restart();
  }


  render() {
    return(
      <main style={mainStyle}>
        <button onClick={this.restart}>Restart</button>
        <Pumpkin clickPumpkin={this.clickPumpkin}/>
        <Shop ref={this.Shop} pumpkins={this.state.pumpkins} pumpkinsPerSecond={this.state.pumpkinsPerSecond} pumpkinsPerClick={this.state.pumpkinsPerClick} changePumpkins={this.changePumpkins} changePumpkinsPerSecond={this.changePumpkinsPerSecond} />  
      </main>
    )
  }
}

const mainStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  color: 'white'
}

export default App;