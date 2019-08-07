import React from 'react';

import styles from './App.module.css';

import SideDrawer from './SideDrawer/SideDrawer';
import Header from './Header/Header';
import ScrollHeader from './ScrollHeader/Header';
//import BasicForm from './BasicForm/BasicForm';
import DropDown from './DropDown/DropDown';
import { JSXElement } from '@babel/types';


interface State {
  displayBool : boolean, /*flag logic for opening sidedrawer and dropdown */
  changeColor : boolean,  /*flag logic for changing header transparency */
 
}

class App extends React.Component<{}, State> {

    constructor (props:{}) {
      super(props);
      this.state = {
        displayBool : false,
        changeColor: false
      };
    }

    //changes the boolean that controls the open state of the sidedrawer
    clickHandler = () =>{
      this.setState( {displayBool : !this.state.displayBool} );
    }


    //used to detect when the user has scrolled down past some point
    senseScroll = (event : any) => {
        if (window.scrollY > 110) {
              this.setState({changeColor : true});
        }
        else {
          this.setState({changeColor : false});
        }
    }

    
    componentDidMount() {
          window.addEventListener('scroll', this.senseScroll);
     }

    render () {

          
      return (
        <React.Fragment>
                <div className={styles.specialHeroSpace}>
                      <ScrollHeader drawerHandler={this.clickHandler} changeHeaderToStick={this.state.changeColor} />
                      <SideDrawer 
                        display={this.state.displayBool} 
                        stateHandler = {this.clickHandler}
                      />
                      
                </div>
                
         {/*
         
         <BasicForm /> 
          <ScrollHeader drawerHandler={this.clickHandler} changeHeaderToStick={this.state.changeColor} />
          <SideDrawer 
                        display={this.state.displayBool} 
                        stateHandler = {this.clickHandler}
           />
           <DropDown display={this.state.displayBool} stateHandler={this.clickHandler}/>
         <Header drawerHandler={this.clickHandler} />
         <DropDown display={this.state.displayBool} stateHandler={this.clickHandler}/>

           

          */}
             
        </React.Fragment>

      );
    }
 
  }

export default App;
