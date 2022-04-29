import React from 'react';
import styles from './ColorBox.module.css';
const ColorBox = ({ BgColor, Size }) => {



    const bgRed = {
        background: BgColor,
        height: Size + "px",
        width: Size + "px",
    }

    return (

        <div className={styles.ColorBox} style={bgRed}></div>

    );

}
export default ColorBox;