import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import css from './detailspage.module.css';
import baseUrl from '../../utils/baseUrl';


//Comps
import TextData from './TextData/TextData';
import Loading from '../Loading/Loading';

export default function DetailsPage() {

    //for string device data
    const [deviceData, setDeviceData] = useState({});

    //loading state
    const [loading, setLoading] = useState(false);

    const params = useParams();
    const deviceId = params.deviceId;


    //fething device data using the device id
    useEffect(() => {

        setLoading(true);
        fetch(`${baseUrl}/onedevice/${deviceId}`)
        .then((res) => {return res.json()})
        .then((data) => {
            setDeviceData(data);
            setLoading(false);
        })
        .catch((err) => {
            setLoading(false);
            console.log(err);
        });

    }, [deviceId]);

  return (
    <>
    {loading ? <Loading /> :
         (<div className={css.mainContainer}>
            {/* image container */}
                <div className={css.images} >
                <img alt='' src={deviceData["front-link"]} className={css.deviceimg} />
                <img alt='' src={deviceData["back-link"]} className={css.deviceimg} />
            </div>
            
            <TextData device={deviceData} />

            <div className={css.buttons}>
              <a rel="noreferrer" href={deviceData["buy-link"]} className={css.buylink + " " + css.shared} target='_blank'>Buy</a>
              <a rel="noreferrer" href={deviceData["Review-link"]} className={css.videolink + " " + css.shared} target='_blank'>Watch Review</a>
            </div>
        </div>)}
        </>  
        );
}
