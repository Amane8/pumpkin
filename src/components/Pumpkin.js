import React from 'react';

class Pumpkin extends React.Component {

  render() {
    return(
      <div id='pumpkinScreen'>
        <div id='pumpkin' style={divStyle} onClick={this.props.clickPumpkin}></div>
      </div>
    )
  }
}

const divStyle = {
  marginTop: '100px',
  height: '300px',
  width: '300px',
  objectFit: 'cover',
  backgroundSize: '300px 300px',
  backgroundImage: 'URL(https://images-na.ssl-images-amazon.com/images/I/41RORFSdPrL._AC_.jpg)', 
  border: 'none',
}

export default Pumpkin;