import styles from '../styles/Home.module.css'
import { Component, MouseEvent } from 'react';
import React, { useState, useRef } from 'react';
import { throws } from 'assert';



function Modal1 ({Label1, setLabel1, show1, setShow1}){
  var Label1Ref = useRef(null);
  const handleSubmit = () => {
    console.log(Label1);
    setLabel1(Label1Ref.current.value);
    setShow1(false);
  }
  if (show1) {
    return (
      <div className={styles.overlay}>
        <div className={styles.content}>
          商品名を入力してください。
          <input type = "text" ref={Label1Ref}  />
          <button onClick={handleSubmit} >submit</button>
        </div>
      </div>
    )
  }
  else {
    return null;
  }
}

function Modal2 ({Label2, setLabel2, show2, setShow2}){
  var Label2Ref = useRef(null);
  const handleSubmit = () => {
    console.log(Label2);
    setLabel2(Label2Ref.current.value);
    setShow2(false);
  }
  if (show2) {
    return (
      <div className={styles.overlay}>
        <div className={styles.content}>
          商品名を入力してください。
          <input type = "text" ref={Label2Ref}  />
          <button onClick={handleSubmit} >submit</button>
        </div>
      </div>
    )
  }
  else {
    return null;
  }
}

function Modal3 ({Label3, setLabel3, show3, setShow3}){
  var Label3Ref = useRef(null);
  const handleSubmit = () => {
    console.log(Label3);
    setLabel3(Label3Ref.current.value);
    setShow3(false);
  }
  if (show3) {
    return (
      <div className={styles.overlay}>
        <div className={styles.content}>
          商品名を入力してください。
          <input type = "text" ref={Label3Ref}  />
          <button onClick={handleSubmit} >submit</button>
        </div>
      </div>
    )
  }
  else {
    return null;
  }
}


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
      <Modal1 Label1={Label1} setLabel1={setLabel1} show1={show1} setShow1={setShow1} />
      <button className={styles.btn__orange_1} onClick={productClick_1}>
        {Label1}
      </button>
    </div>
    <div>
      <Modal2 Label2={Label2} setLabel2={setLabel2} show2={show2} setShow2={setShow2} />
      <button className={styles.btn__orange_2} onClick={productClick_2}>
        {Label2}
      </button>
    </div>
    <div>
      <Modal3 Label3={Label3} setLabel3={setLabel3} show3={show3} setShow3={setShow3} />
      <button className={styles.btn__orange_3} onClick={productClick_3}>
        {Label3}
      </button>
    </div>
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
