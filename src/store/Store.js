import React from 'react';

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
    };
    this.setState=this.setState.bind(this);
    this.getElements = this.getElements.bind(this);
  }

  setState(arrayItem){
    this.setState({
      elements:this.state.elements.concat(arrayItem),
    })
  }

  getElements(){
    return this.elements;
  }


}
export default Store;
