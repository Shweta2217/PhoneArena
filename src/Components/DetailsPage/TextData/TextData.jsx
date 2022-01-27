import React from 'react';
import css from './textdata.module.css';

//Comps
import TableRow from './TableRow/TableRow';


export default function TextData(props) {

  //checking for certain property not to include
  const mappedObject = {
    "Device Name": props.device["dname"],
      "Brand": props.device["brand"],
      "Network": props.device["network"],
      "Sim-support": props.device["sim-support"],
      "Display-type": props.device["Display-type"],
      "Display-size": props.device["Display-size"],
      "Display-resolution": props.device["Display-resolution"],
      "OS": props.device["OS"],
      "Chipset": props.device["Chipset"],
      "CPU": props.device["CPU"],
      "GPU": props.device["GPU"],
      "Card-slot": props.device["Card-slot"],
      "Memory": props.device["Internal"],
      "Rear-Cam": props.device["Rear-Cam"],
      "Video-Rear": props.device["video-r"],
      "Front-cam": props.device["Front-cam"],
      "Video-Front": props.device["video-f"],
      "Fingerprint-sensor": props.device["Fingerprint-sensor"],
      "Other-sensor": props.device["Other-sensor"],
      "Battery-type": props.device["Battery-type"],
      "Charging": props.device["Charging"],
      "All-Models": props.device["all-modals"],
      "Antutu Benchmark": props.device["Antutu-p"] ? props.device["Antutu-p"] : 'None',
      "Geekbench-p": props.device["geekbench-p"] ? props.device["geekbench-p"] : 'None',
      "Base Price": props.device["price-b"] + "rs",
      "Colors": props.device["color-v"]
  }

  //transforming a object into array
  const deviceDataArray = Object.entries(mappedObject);


  return <div className={css.devicetextdata}>
        <table className={css.texttable}>
        <tbody>

        {/* mapping the textual data */}
        {
            deviceDataArray.map(item => {
                  return <TableRow key={item[0]} header={item[0]} data={item[1]} />
            })
        }

        </tbody>
        </table>
        </div>;
}
