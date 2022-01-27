import React from 'react';
import css from './listitem.module.css';

export default function ListItem(props) {
  return (<div className={css.itemConatainer}>
            <img alt='' src={props["front-link"]} className={css.deviceimg} />
            <h3 className={css.devicename}>{props.dname}</h3>
  </div>);
}
