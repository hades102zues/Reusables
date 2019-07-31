import React from 'react';
import styles from './SideNav.module.css';

interface Props {

    display:boolean,
    linkClick() : any
    right? : boolean

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