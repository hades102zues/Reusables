import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';

import SideDrawer from './SideDrawer/SideDrawer';




interface State {
  displayBool : boolean
}
class App extends React.Component<{}, State> {

    constructor (props:{}) {
      super(props);
      this.state = {
        displayBool:false
      };
    }

    //changes the boolean that controls the open state of the sidedrawer
    clickHandler = () =>{
      
      this.setState( {displayBool : !this.state.displayBool} );
    }

    render () {
      return (
        <React.Fragment>
            
              <SideDrawer 
              display={this.state.displayBool} 
              stateHandler = {this.clickHandler}
              
              />
              <button onClick={this.clickHandler}>click me</button>
             
        </React.Fragment>

      );
    }
 
}

export default App;
