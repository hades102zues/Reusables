import React from 'react';
import styles from './Backdrop.module.css'

interface Props {
    display : boolean,
    onClick() :any
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