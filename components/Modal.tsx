import styles from '../styles/Home.module.css';
import React, { useRef } from 'react';

function Modal ({Label, setLabel, show, setShow}){
    var LabelRef = useRef(null);
    const handleSubmit = () => {
      console.log(Label);
      setLabel(LabelRef.current.value);
      setShow(false);
    }
    if (show) {
      return (
        <div className={styles.overlay}>
          <div className={styles.content}>
            商品名を入力してください。
            <input type = "text" ref={LabelRef}  />
            <button onClick={handleSubmit} >submit</button>
          </div>
        </div>
      )
    }
    else {
      return null;
    };
};

export default Modal;