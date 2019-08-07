import React from 'react';

//import styles from './App.module.css';

import SideDrawer from './SideDrawer/SideDrawer';
import Header from './Header/Header';
//import BasicForm from './BasicForm/BasicForm';
import DropDown from './DropDown/DropDown';


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

         {/* {<BasicForm />} */}

         <Header drawerHandler={this.clickHandler} />
        <DropDown display={this.state.displayBool} stateHandler={this.clickHandler}/>
         
           <SideDrawer 
              display={this.state.displayBool} 
              stateHandler = {this.clickHandler}
            />


             
             
        </React.Fragment>

      );
    }
 
  }

export default App;
