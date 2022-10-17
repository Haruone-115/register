import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import { MouseEvent } from 'react';

import style from '../styles/Button.module.css';
import React from 'react';

const Product = "商品";
const Label = "商品A";
var table_elements;

function App() {
  const handleClick = (event: any) => {    {/*ボタンが押されたときの処理 */}
    console.log(event.currentTarget);
    console.log(event);
    //alert("plessed button");
    //window.close();
    table_elements = document.getElementById('product_name');

    table_elements!.textContent= Label;

  }


  return (
    <>
      <div className="App">
        <button className={styles.btn__orange} onClick={handleClick}>{Label}</button>  {/*ボタンの記述、CSSの参照 */}
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
