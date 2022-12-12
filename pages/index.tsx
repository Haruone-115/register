import styles from '../styles/Home.module.css'
import React, { useState, useRef } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Table from '../components/table'
import Modal from '../components/Modal'
import Delete from '../components/delete'
import ProductClick from '../components/productClick'


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
  
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>1</Tab>
          <Tab>2</Tab>
          <Tab>3</Tab>
        </TabList>
        
        <TabPanel>
          <div>
            <Modal Label={Label1} setLabel={setLabel1} show={show1} setShow={setShow1} />
            <ProductClick Label={Label1} setShow={setShow1} setFlag={setFlag} flag={flag} setProductname={setProductname} productname={productname} styles_name={styles.btn__orange_1} />
          </div>
          <div>
            <Modal Label={Label2} setLabel={setLabel2} show={show2} setShow={setShow2} />
            <ProductClick Label={Label2} setShow={setShow2} setFlag={setFlag} flag={flag} setProductname={setProductname} productname={productname} styles_name={styles.btn__orange_2} />
          </div>
          <div>
            <Modal Label={Label3} setLabel={setLabel3} show={show3} setShow={setShow3} />
            <ProductClick Label={Label3} setShow={setShow3} setFlag={setFlag} flag={flag} setProductname={setProductname} productname={productname} styles_name={styles.btn__orange_3} />
          </div>
          <Delete setFlag={setFlag} setProductname={setProductname}></Delete>
        </TabPanel>

        <TabPanel>
          <div>
            <Modal Label={Label1} setLabel={setLabel1} show={show1} setShow={setShow1} />
            <ProductClick Label={Label1} setShow={setShow1} setFlag={setFlag} flag={flag} setProductname={setProductname} productname={productname} styles_name={styles.btn__orange_1} />
          </div>
          <div>
            <Modal Label={Label2} setLabel={setLabel2} show={show2} setShow={setShow2} />
            <ProductClick Label={Label2} setShow={setShow2} setFlag={setFlag} flag={flag} setProductname={setProductname} productname={productname} styles_name={styles.btn__orange_2} />
          </div>
          <div>
            <Modal Label={Label3} setLabel={setLabel3} show={show3} setShow={setShow3} />
            <ProductClick Label={Label3} setShow={setShow3} setFlag={setFlag} flag={flag} setProductname={setProductname} productname={productname} styles_name={styles.btn__orange_3} />
          </div>
          <Delete setFlag={setFlag} setProductname={setProductname}></Delete>
        </TabPanel>

        <TabPanel>
          <div>
            <Modal Label={Label1} setLabel={setLabel1} show={show1} setShow={setShow1} />
            <ProductClick Label={Label1} setShow={setShow1} setFlag={setFlag} flag={flag} setProductname={setProductname} productname={productname} styles_name={styles.btn__orange_1} />
          </div>
          <div>
            <Modal Label={Label2} setLabel={setLabel2} show={show2} setShow={setShow2} />
            <ProductClick Label={Label2} setShow={setShow2} setFlag={setFlag} flag={flag} setProductname={setProductname} productname={productname} styles_name={styles.btn__orange_2} />
          </div>
          <div>
            <Modal Label={Label3} setLabel={setLabel3} show={show3} setShow={setShow3} />
            <ProductClick Label={Label3} setShow={setShow3} setFlag={setFlag} flag={flag} setProductname={setProductname} productname={productname} styles_name={styles.btn__orange_3} />
          </div>
          <Delete setFlag={setFlag} setProductname={setProductname}></Delete>
        </TabPanel>
        <Table Product={Product} flag = {flag} productname = {productname} />
      </Tabs>
    </>
  );
};
