import React from 'react';
import styles from './Backdrop.module.css'

interface Props {
    display : boolean, /*flag for when to launch  backdrop */
    onClick() :any /* the handler that sets the flag that triggers the backdrop */
}
const backdrop:React.FC<Props> = (props) => {

    let defaultClasses: String[] = [styles.backdrop];

    if (props.display) {
        defaultClasses.push(styles.backdrop_show);
    }

    const backdrop = defaultClasses.join(' ');

        return (
            <div className={backdrop} onClick={props.onClick} />
        );
}

export default backdrop;