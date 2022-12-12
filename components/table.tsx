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
        <tr>
          <td className={styles.table_td}>{flag >= 4 ? productname[3] : ""}</td>
        </tr>
        <tr>
          <td className={styles.table_td}>{flag >= 5 ? productname[4] : ""}</td>
        </tr>
        <tr>
          <td className={styles.table_td}>{flag >= 6 ? productname[5] : ""}</td>
        </tr>
        <tr>
          <td className={styles.table_td}>{flag >= 7 ? productname[6] : ""}</td>
        </tr>
        <tr>
          <td className={styles.table_td}>{flag >= 8 ? productname[7] : ""}</td>
        </tr>
        <tr>
          <td className={styles.table_td}>{flag >= 9 ? productname[8] : ""}</td>
        </tr>
        <tr>
          <td className={styles.table_td}>{flag >= 10 ? productname[9] : ""}</td>
        </tr>
        <tr>
          <td className={styles.table_td}>{flag >= 11? productname[10] : ""}</td>
        </tr>

        </table>
    );
};

export default Tables;