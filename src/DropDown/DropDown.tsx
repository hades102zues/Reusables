import React from 'react';
import styles from './DropDown.module.css';


interface Props {
    display : boolean, /*flag that triggers opening of dropdown */
    stateHandler() : any,  /*the handler that sets the flag which displays the drop down*/
}

const dropDown:React.FC<Props> = ( props ) => {

    let defaultClasses: String[] =[styles.dropDownSpace];

    //if display is true then slide down the drop down
    if (props.display) {
        defaultClasses.push(styles.dropDownSpace_reveal);
    }

    const dropDownSpace = defaultClasses.join(' ');

    return (

        <div className={dropDownSpace}>
        <div className={styles.dropDownSpace__wrapper}>
            <nav className={styles.dropDown}>
                <ul className={styles.dropDown__list}>
                    <li className={styles.dropDown__link} onClick={props.stateHandler} >Joshua</li>
                    <li className={styles.dropDown__link} onClick={props.stateHandler} >Joshua</li>
                    <li className={styles.dropDown__link} onClick={props.stateHandler} >Joshua</li>
                </ul>
            </nav>
       </div>
       </div>

    );
    
};

export default dropDown;