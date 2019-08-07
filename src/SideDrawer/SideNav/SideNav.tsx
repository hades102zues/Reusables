import React from 'react';
import styles from './SideNav.module.css';

interface Props {

    display:boolean,  /*flag for when to launch sidedrawer */
    linkClick() : any  /* the handler that sets the flag that triggers the sidedrawer */
    right? : boolean  /*used to affix the side drawer to the right of the screen */

}


const sideNav: React.FC<Props>  = (props) => {


    let defaultClasses: String[] =[styles.sideNav] ;

    //if display is true then open the drawer
    if (props.display) {
        defaultClasses.push(styles.sideNav_show);
    }

    if (props.right){
        defaultClasses.push(styles.sideNav_right);
    }
    

    const sideNav = defaultClasses.join(' ');

return (
        <nav className={sideNav}>
            <div className={styles.sideNav__flatop}></div>
                <ul className={styles.sideNav__list}>
                    <li className={styles.sideNav__link} onClick={props.linkClick}>Joshua </li>
                    <li className={styles.sideNav__link} onClick={props.linkClick}>Joshua </li>
                    <li className={styles.sideNav__link}onClick={props.linkClick}>Joshua </li>
                    <li className={styles.sideNav__link} onClick={props.linkClick}>Joshua </li>
                </ul>
            </nav>
    );
};

export default sideNav;