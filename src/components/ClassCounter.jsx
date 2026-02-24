import React, {useState} from 'react';

class ClassCounter extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    )
    
  }
}