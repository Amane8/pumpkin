import React from 'react';
import ProductionVisuals from './ProductionVisuals.js'

class Shop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cursor: parseInt(localStorage.cursor) || 0,
      worker: parseInt(localStorage.worker) || 0,
      house: parseInt(localStorage.house) || 0,
      factory: parseInt(localStorage.factory) || 0,
    }
  }


  //Make the prices dymanic
  itemValues = {
    cursor: {price: 20, pps: 1},
    worker: {price: 100, pps: 3},
    house: {price: 300, pps: 5},
    factory: {price: 1000, pps: 10},
  }

  buyItem = (event) => {
    let item = event.currentTarget.dataset.item;
    let price = this.itemValues[item].price;
    let pps = this.itemValues[item].pps;
    if(this.props.pumpkins >= price) {
      console.log(`baught ${item}`);
      this.props.changePumpkins(-price);
      this.props.changePumpkinsPerSecond(pps)
      this.setState({[item]: this.state[item] + 1});
    }
  }

  componentDidUpdate(prevProps, prevState) {
    for (let item in this.state) {
      localStorage.setItem(item, this.state[item]);
    }
  }

  restart = () => {
    this.setState({
      cursor: 0,
      worker: 0,
      house: 0,
      factory: 0,
  });
  }

  render() {
    return(
      <div id='shop' style={shopStyle}>
        <p>Pumpkins: {this.props.pumpkins}</p>
        <p style={perSecondStyle}>per Second: {this.props.pumpkinsPerSecond}</p>
        <p style={perSecondStyle}>per Click: {this.props.pumpkinsPerClick}</p>
        <div style={{display: 'flex'}}>
          <ul style={shopItemsListStyle}>
            <li className='shopItem' style={shopItemsStyle} data-item='cursor' onClick={this.buyItem}>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <p>Cursor</p>
                <p>{this.state.cursor}</p>
              </div>
              <p style={{fontSize: '20px'}}>20 Pumpkins</p>
            </li>
            <li className='shopItem' style={shopItemsStyle} data-item='worker' onClick={this.buyItem}>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <p>Worker</p>
                <p>{this.state.worker}</p>
              </div>
              <p style={{fontSize: '20px'}}>100 Pumpkins</p>
            </li>
            <li className='shopItem' style={shopItemsStyle} data-item='house' onClick={this.buyItem}>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <p>House</p>
                <p>{this.state.house}</p>
              </div>
              <p style={{fontSize: '20px'}}>300 Pumpkins</p>
            </li>
            <li className='shopItem' style={shopItemsStyle} data-item='factory' onClick={this.buyItem}>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <p>Factory</p>
                <p>{this.state.factory}</p>
              </div>
              <p style={{fontSize: '20px'}}>1000 Pumpkins</p>
            </li>
          </ul>
          <ProductionVisuals />
        </div>
      </div>
    )
  }
}

const shopStyle = {
  marginTop: '50px',
  fontSize: '40px'
}

const perSecondStyle = {
  fontSize: '20px',
  color: 'gray',
}

const shopItemsListStyle = {
  minWidth: '180px',
  listStyle: 'none',
  padding: '0',
  fontSize: '30px',
  cursor: 'pointer',
}

const shopItemsStyle = {
  padding: '5px',
  textAlign: 'left',
  //border-collapse simulation
  border: '0 solid #ffcb59',
  borderWidth: '0 1px 1px 1px',
  backgroundColor: '#fff3b5',
}

export default Shop;