import React from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      color: this.props.value
    }
  }

  handleOnClick = () => {
    const newColor = '#333';
    this.setState({color: newColor});
  }

  render() {
    return(
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleOnClick}> </div>
    )
  }
}

export default Cell;
