import register from '../styles/register.module.css';
import React, { useRef } from 'react';

function Delete ({setFlag, setProductname}){
    const delateClick = () => {
        setFlag(0);
        setProductname ([]);
        alert("delate");
    }
    return (
        <button className={register.btn__delete} onClick={delateClick}>
            削除
        </button>
    );
};
export default Delete;