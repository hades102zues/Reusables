import React from 'react';
import styles from './Header.module.css';
import Hamburger from './Hamburger/Hamburger';

interface Props {
      changeHeaderToStick : boolean /*the flag which tells the header to be transparent or stick */
    drawerHandler: ()=> any, /*the handler that sets the flag that triggers any of the drawer components */
    
}

const header:React.FC<Props> = (props) => {

      const defaultStyleList: String[] = [styles.header];

      if (props.changeHeaderToStick) {
            defaultStyleList.push(styles.header_stick);
      }
      else {
            defaultStyleList.push(styles.header_fade);
      }

      const header = defaultStyleList.join(' ');

      return (

            <header className={header}>
            <div className={styles.header__wrapper}>
                <div className={styles.logoSpace}>
                     <div className={styles.logo}>
                      <img alt="company_logo" className={styles.logo__image} />
                      <h3 className={styles.logo__company}>Company Name</h3>
                     </div>
               </div>
        
              <div className={styles.navSpace}>
                    <nav className={styles.nav}>
                          <ul className={styles.nav__list}>
                                <li className={styles.nav__link}>JOshua</li>
                                <li className={styles.nav__link}>JOshua</li>
                                <li className={styles.nav__link}>JOshua</li>
                                <li className={styles.nav__link}>JOshua</li>
                                <li className={styles.nav__link}>JOshua</li>
                          </ul>
                           <Hamburger click={props.drawerHandler} />
                    </nav>
              </div>
              
          </div>
          </header>
      );
   
};

 export default header;