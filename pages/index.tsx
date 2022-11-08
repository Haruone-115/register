import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Component, MouseEvent } from 'react';
import React, { useState } from 'react';
import { throws } from 'assert';

const Product = "商品";
const Label1 = "商品A";
const Label2 = "商品B";
const Label3 = "商品C";

export default function App() {

  const initialState = [];
  const [productname, setProductname] = useState(initialState);
  const [flag, setFlag] = useState(0);

  const productClick_1 = () => {
    setFlag(flag + 1);
    setProductname([...productname, Label1]);
  }

  const productClick_2 = () => {
    setFlag(flag + 1);
    setProductname([...productname, Label2]);
  }

  const productClick_3 = () => {
    setFlag(flag + 1);
    setProductname([...productname, Label3]);
  }

  const delateClick = () => {
    setFlag(0);
    setProductname ([]);
    alert("delate");
  }

    //const productname = this.state;
    return (
    <>
      <button className={styles.btn__orange_1} onClick={productClick_1}>
        {Label1}
      </button>
      <button className={styles.btn__orange_2} onClick={productClick_2}>
        {Label2}
      </button>
      <button className={styles.btn__orange_3} onClick={productClick_3}>
        {Label3}
      </button>
      <button className={styles.btn__delete} onClick={delateClick}>
        削除
      </button>
      <table border={2}>
      <tr>
        <th className={styles.table_th}>{Product}</th>
      </tr>
      <tr>
        <td className={styles.table_td}>{flag >= 1 ? productname[0] : ""}</td>
      </tr>
      <tr>  
        <td className={styles.table_td}>{flag >= 2 ? productname[1] : ""}</td>        
      </tr>
      <tr>
        <td className={styles.table_td}>{flag >= 3 ? productname[2] : ""}</td>
      </tr>
      </table>
    </>
    
  );
}
