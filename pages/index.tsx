import register from '../styles/register.module.css';
import React, { useState} from 'react';
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
  const [shows_1, setShows_1] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
  const [shows_2, setShows_2] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
  const [shows_3, setShows_3] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
  const [Labels_1, setLabels_1] = useState(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]);
  const [Labels_2, setLabels_2] = useState(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]);
  const [Labels_3, setLabels_3] = useState(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]);
  const data = 3;
  const BUTTON_AMOUNT = 28;
  const tab_list = [];
  const button_list_1 = [];
  const button_list_2 = [];
  const button_list_3 = [];



  for (var i = 0; i < data; i++){
    tab_list.push(<Tab>{i+1}</Tab>);
  }

  for (var j = 0; j < BUTTON_AMOUNT; j++){
    button_list_1.push(
      <div>
          <Modal Labels={Labels_1} setLabels={setLabels_1} shows={shows_1} setShows={setShows_1} number={j} key={j}/>
          <ProductClick 
            Labels={Labels_1} shows={shows_1} setShows={setShows_1} setFlag={setFlag} 
            flag={flag} setProductname={setProductname} productname={productname} number={j} tab_flag={1} key={j}/>
      </div>
    );
  }

  for (var k = 0; k < BUTTON_AMOUNT; k++){
    button_list_2.push(
      <div>
          <Modal Labels={Labels_2} setLabels={setLabels_2} shows={shows_2} setShows={setShows_2} number={k} key={k}/>
          <ProductClick
            Labels={Labels_2} shows={shows_2} setShows={setShows_2} setFlag={setFlag}
            flag={flag} setProductname={setProductname} productname={productname} number={k} tab_flag={2} key={k}/>
      </div>
    );
  }

  for (var l = 0; l < BUTTON_AMOUNT; l++){
    button_list_3.push(
      <div>
          <Modal Labels={Labels_3} setLabels={setLabels_3} shows={shows_3} setShows={setShows_3} number={l} key={l}/>
          <ProductClick 
            Labels={Labels_3} shows={shows_3} setShows={setShows_3} setFlag={setFlag}
            flag={flag} setProductname={setProductname} productname={productname} number={l} tab_flag={3} key={l}/>
      </div>
    );
  }

  

  
  return (
    <>
      <Tabs>
        <TabList>
          {tab_list}
        </TabList>

        <div >
          <TabPanel>
            <div className = {register.frame_container}>
              {button_list_1}
            </div>
           <Delete setFlag={setFlag} setProductname={setProductname}></Delete>
          </TabPanel>
        </div>

        <div>
          <TabPanel>
            <div className={register.frame_container}>
              {button_list_2}
            </div>
            <Delete setFlag={setFlag} setProductname={setProductname}></Delete>
          </TabPanel>
        </div>

        <div>
          <TabPanel>
            <div className={register.frame_container}>
              {button_list_3}
            </div>
            <Delete setFlag={setFlag} setProductname={setProductname}></Delete>
          </TabPanel>
        </div>

        <Table Product={Product} flag = {flag} productname = {productname} />
      </Tabs>
    </>
  );
};
