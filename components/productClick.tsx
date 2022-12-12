import styles from '../styles/Home.module.css';
import React, { useState } from 'react';

function ProductClick ({Label, setShow, setFlag, flag, setProductname, productname, styles_name}){
  const productClick = () => {
    if (Label == "")
    {
      setShow(true);
    }
    else
    {
      setFlag(flag + 1);
      setProductname([...productname, Label]);  
    }
  }
    return (
      <button className={styles_name} onClick={productClick}>
        {Label}
      </button>
    );
};

export default ProductClick;