import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Component, MouseEvent } from 'react';
import React from 'react';
import { throws } from 'assert';

const Product = "商品";
const Label = "商品A";
var table_elements;

/*
function App() {

  const handleClick = (event: any) => {    {/*ボタンが押されたときの処理 
    console.log(event.currentTarget);
    console.log(event);
    table_elements = document.getElementById('product_name');

    table_elements!.textContent= Label;

  }


  return (
    <>
      <div className="App">
        <button className={styles.btn__orange} onClick={handleClick}>{Label}</button>  {/*ボタンの記述、CSSの参照 
      </div>
      <table border={1}>
        <tr>
          <th className={styles.table_th}>{Product}</th>
        </tr>
        <tr>
          <td className={styles.table_td} id="product_name"></td>
        </tr>
      </table>
    </>
  );
}

export default App;

*/
class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      productname: '',
      flag: 0,
    };
    this.delateClick = this.delateClick.bind(this);
  }

  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
      productname: Label,
      flag: this.state.flag + 1,
    }));
  }

  delateClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
      flag: 0,
      productname: "",
    }));
    alert("delate");
  }

  render() {
    //const productname = this.state;
    return (
      <>

        <button className={styles.btn__orange} onClick={this.handleClick}>
          {Label}
        </button>
        <button className={styles.btn__orange_1} onClick={this.delateClick}>
          削除
        </button>
        <table border={2}>
        <tr>
          <th className={styles.table_th}>{Product}</th>
        </tr>
        <tr>
          <td className={styles.table_td}>{this.state.flag >= 1 ? this.state.productname : ""}</td>
        </tr>
        <tr>  
          <td className={styles.table_td}>{this.state.flag >= 2 ? this.state.productname : ""}</td>        
        </tr>
        <tr>
          <td className={styles.table_td}>{this.state.flag >= 3 ? this.state.productname : ""}</td>
        </tr>
        </table>
      </>
      
    );
  }
}

export default Toggle;