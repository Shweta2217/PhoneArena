import React from 'react';
import css from './tablerow.module.css';

export default function TableRow(props) {
  return (
    <tr className={css.data}>
    <td className={css.dataheader}>{props.header}</td>
    <td className={css.datadetail}>{props.data}</td>
    </tr>
  );
}
