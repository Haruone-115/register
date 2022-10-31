import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Component, MouseEvent } from 'react';
import React from 'react';

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
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <>
        <div className='handleClick'>
          <button className={styles.btn__orange} onClick={this.handleClick}>
            {Label}
          </button>
        </div>
        <table border={1}>
        <tr>
          <th className={styles.table_th}>{Product}</th>
        </tr>
        <tr>
          <td className={styles.table_td} id="product_name">{this.state.isToggleOn ? '' : (Label)}</td>
        </tr>
        </table>
      </>
      
    );
  }
}

export default Toggle;