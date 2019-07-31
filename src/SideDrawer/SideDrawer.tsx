import React from 'react';

import SideNav from './SideNav/SideNav';
import Backdrop from './Backdrop/Backdrop';


interface Props {
    display : boolean,
    stateHandler() : any,
    right? : boolean
}

const sideDrawer:React.FC<Props> = (props) => (
    <React.Fragment>
        <SideNav display={props.display} right={props.right} linkClick={props.stateHandler}/>
        <Backdrop display={props.display} onClick={props.stateHandler}/>
    </React.Fragment>
);

export default sideDrawer;