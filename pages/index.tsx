import styles from '../styles/Home.module.css'
import { Component, MouseEvent } from 'react';
import React, { useState, useRef } from 'react';
import { throws } from 'assert';
import Table from '../components/table'
import Modal from '../components/Modal'


export default function App() {
  const Product = "商品";
  const initialState = [];
  const [productname, setProductname] = useState(initialState);
  const [flag, setFlag] = useState(0);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [Label1, setLabel1] = useState("");
  const [Label2, setLabel2] = useState("");
  const [Label3, setLabel3] = useState("");

  const productClick_1 = () => {
    if (Label1 == "")
    {
      setShow1(true);
    }
    else
    {
      setFlag(flag + 1);
      setProductname([...productname, Label1]);
    }
  }

  const productClick_2 = () => {
    if (Label2 == "")
    {
      setShow2(true);
    }
    else
    {
      setFlag(flag + 1);
      setProductname([...productname, Label2]);  
    }
  }

  const productClick_3 = () => {
    if (Label3 == "")
    {
      setShow3(true);
    }
    else
    {
      setFlag(flag + 1);
      setProductname([...productname, Label3]);  
    }
  }

  const delateClick = () => {
    setFlag(0);
    setProductname ([]);
    alert("delate");
  }

    return (
    <>
    <div>
      <Modal Label={Label1} setLabel={setLabel1} show={show1} setShow={setShow1} />
      <button className={styles.btn__orange_1} onClick={productClick_1}>
        {Label1}
      </button>
    </div>
    <div>
      <Modal Label={Label2} setLabel={setLabel2} show={show2} setShow={setShow2} />
      <button className={styles.btn__orange_2} onClick={productClick_2}>
        {Label2}
      </button>
    </div>
    <div>
      <Modal Label={Label3} setLabel={setLabel3} show={show3} setShow={setShow3} />
      <button className={styles.btn__orange_3} onClick={productClick_3}>
        {Label3}
      </button>
    </div>
    <button className={styles.btn__delete} onClick={delateClick}>
      削除
    </button>
    <Table Product={Product} flag = {flag} productname = {productname} />
    </>
    
  );
}
