import React from "react";

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            clickNumber:0
        }
    }



  onClick = () => {
    
    this.props.onTouch(this.state.clickNumber);
    this.setState({
        clickNumber:this.state.clickNumber+1
    })
  };

  render() {
    return <div onClick={this.onClick}>{this.props.heading}</div>;
  }
}

export default Menu;
