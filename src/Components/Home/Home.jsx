import React, {useEffect, useState} from 'react';
import css from './home.module.css';
import { Link } from 'react-router-dom';
import BrandCard from '../UI/BrandCard/BrandCard';
import Search from '../Search/Search';
import Loading from '../Loading/Loading';
//baseurl
import baseUrl from '../../utils/baseUrl';



export default function Home() {

  //state for all brands
  const [allbrands, setAllBrands] = useState([]);

    //loading state
    const [loading, setLoading] = useState(false);

 
  //useEffect for fetching the brands data
  useEffect(() => {
    setLoading(true);

      fetch(baseUrl)
      .then((res) => {
        return res.json()})
      .then((data) => {
        //set the all brands data to the state
        setAllBrands(data)
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      })
  }, []);


  return (
<>
    <Search />
    <h3 className={css.brandheading}>Popular Brands</h3>
    {loading ? <Loading /> :
  (<div className={css.brandContainer}>
  {
    allbrands.map(oneItem => {
      return (<Link to={`/list/${oneItem.id}`} key={oneItem.id} className='link'>
              <BrandCard {...oneItem} />
              </Link>);
    })
  }
</div> )}
</>  
);
}
