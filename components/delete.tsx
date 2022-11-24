import styles from '../styles/Home.module.css';
import React, { useRef } from 'react';

function Delete ({setFlag, setProductname}){
    const delateClick = () => {
        setFlag(0);
        setProductname ([]);
        alert("delate");
    }
    return (
        <button className={styles.btn__delete} onClick={delateClick}>
            削除
        </button>
    );
};
export default Delete;