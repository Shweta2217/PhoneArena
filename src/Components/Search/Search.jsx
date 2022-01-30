import React, {useState} from 'react';
import css from './search.module.css';
import { useHistory } from 'react-router';
import {FiSearch} from 'react-icons/fi';


export default function Search() {

  const [search, setSearch] = useState("");

  //for navigation
  const history = useHistory();

  function onInput(e) {
    setSearch(e.target.value);
  }

  function onSearch() {

    if(search !== "") {
      history.push(`list/${search}`);
    }

  }

  return <div className={css.searchcontainer}>
        <input type='text' className={css.searchinput} placeholder='Search Device' onChange={onInput} />
        <button className={css.searchbtn} onClick={onSearch}><FiSearch /></button>
  </div>;
}
