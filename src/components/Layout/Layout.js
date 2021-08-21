import React from 'react';
import styles from '../ListButton/ListButton.module.scss';
const Layout = (props) =>{
    return(
        <div className={styles.container}>
            {props.children}
        </div>
    )
}
export default Layout;