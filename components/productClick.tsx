import register from '../styles/register.module.css'
import React, { useState } from 'react';


function ProductClick ({Labels, shows, setShows, setFlag, flag, setProductname, productname, number, tab_flag}){
  const productClick = () => {
    if (Labels[number] == "")
    {
      setShows(
        shows.map((show, index) => (index === number ? true: show))
      )
    }
    else
    {
      setFlag(flag + 1);
      setProductname([...productname, Labels[number]]);  
    }
  }

  if (tab_flag == 1){
    return (
      <div key={number}>  
        <button className={register.button_register_1 } onClick={productClick}>
          {Labels[number]}
        </button>
      </div>
    );
  }
  else if (tab_flag == 2){
    return (
      <div key={number}>  
        <button className={register.button_register_2 } onClick={productClick}>
          {Labels[number]}
        </button>
      </div>
    );
  }
  else if (tab_flag == 3){
    return (
      <div key={number}>  
        <button className={register.button_register_3 } onClick={productClick}>
          {Labels[number]}
        </button>
      </div>
    );
  }
  else{
    return null;
  }
    
};

export default ProductClick;