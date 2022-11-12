import styles from '../styles/Home.module.css'

function Tables ({Product, flag, productname}) {
    return(
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
    );
};

export default Tables;