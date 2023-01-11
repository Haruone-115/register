import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { mergeClasses } from '@material-ui/styles';
import styles from '../styles/Home.module.css'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);
const UseStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

/*function Tables ({Product, flag, productname}) {
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
*/

function table_tests({Product, productname}){
  const classes = UseStyles();
  return(
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{Product}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productname.map((productname) => (
            <StyledTableRow key={productname.name}>
              <StyledTableCell component="th" scope="row">
                {productname.name}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
};

export default table_tests;