import React from 'react';

import SideNav from './SideNav/SideNav';
import Backdrop from './Backdrop/Backdrop';


interface Props {
    display : boolean, /*flag for when to launch sidedrawer or backdrop */
    stateHandler() : any, /* the handler that sets the flag that triggers the sidedrawer or backdrop */
    right? : boolean /*used to affix the side drawer to the right of the screen */
}

const sideDrawer:React.FC<Props> = (props) => (
    <React.Fragment>
        <SideNav display={props.display} right={props.right} linkClick={props.stateHandler}/>
        <Backdrop display={props.display} onClick={props.stateHandler}/>
    </React.Fragment>
);

export default sideDrawer;