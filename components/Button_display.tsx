import register from '../styles/register.module.css';
import React, { useRef } from 'react';
import Modal from './Modal'
import ProductClick from './productClick'


function Button_display(Label, setLabel, show, setShow, setFlag, flag, setProductname, productname) {
    return(
        <div>
            <Modal Label={Label} setLabel={setLabel} show={show} setShow={setShow} />
            <ProductClick Label={Label} setShow={setShow} setFlag={setFlag} flag={flag} setProductname={setProductname} productname={productname} />
        </div>
    );
};