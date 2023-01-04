import register from '../styles/register.module.css';
import React, { useRef } from 'react';

function Modal ({Labels, setLabels, shows, setShows, number}){
    var LabelRef = useRef(null);
    
    const handleSubmit = () => {
      console.log(Labels);
      setLabels(
        Labels.map((Label, index) => (index === number ? LabelRef.current.value : Label))
      );
      setShows(
        shows.map((show, index) => (index === number ? false : show))
      );
    }
    if (shows[number]) {
      return (
        <div className={register.overlay}>
          <div className={register.content}>
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