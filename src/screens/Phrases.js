import React, { Component } from 'react';

class Phrases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
    }
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
        console.log(json)
      });
  }

  render() {

    const { isLoaded, items } = this.state;

    if(!isLoaded){
      return <div>Loading...</div>
    }

    else{
      return (
        <div>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.title}
              </li>
            ))};
          </ul>
        </div>
      );
    }
  }
}

export default Phrases;
