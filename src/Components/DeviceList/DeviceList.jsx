import React, {useEffect, useState} from 'react';
import css from './devicelist.module.css'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import baseUrl from '../../utils/baseUrl';

//Comps
import ListItem from './ListItem/ListItem';
import Loading from '../Loading/Loading';

export default function DeviceList() {

  const [result, setResult] = useState([]);

   //loading state
   const [loading, setLoading] = useState(false)

   
   //get the dynamic params
  const  {SearchData} = useParams();

  useEffect(() => {

    let url = "";

    if(isNaN(SearchData)) {
      url = `${baseUrl}/device/${SearchData}`;
    } else url = `${baseUrl}/${SearchData}`;

    setLoading(true);
    fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setResult(data);
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
      console.log(err.message);
    });
  }, [SearchData]);


  return (<div className={css.list}>
      {/* mapping the search result */}
      { loading ? <Loading /> :
      (
        result.map((device) => {
          return (
            <Link to={`/device/${device.id}`} key={device.id} className='link'>
           <ListItem {...device} />
             </Link>
          )
        })
      ) }
  </div>);
}
