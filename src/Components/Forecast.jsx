import React from "react";
import { data } from "react-router-dom";


const Forecast = ({forcastWeather,locationWeather})=>{
    return(
        <>
 <div className="container">
    <h2 className="text-center text-white mt-5">Forecast weather {locationWeather.name} and {locationWeather.region}</h2>

{forcastWeather.forecastday.map((data,index)=>{
  return(
<div className="accordion accordion-flush mt-3" id="accordionFlushExample">

<div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${index}`}   aria-expanded="false" aria-controls="flush-collapseOne">
        <div className="d-flex flex-row bd-highlight text-align:center mb-3">
  <div className="p-2 bd-highlight">Day:{data.date}</div>
  <div className="p-2 bd-highlight"><img src={data.day.condition.icon}/></div>
   <div className="p-2 bd-highlight">{data.day.condition.text}</div>
  <div className="p-2 bd-highlight">Temperature:{data.day.maxtemp_f}
</div>
</div>
      </button>
    </h2>
    <div id={`${index}`} className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        {data.hour.map((date)=>{
          return(
            <>
           <h4 className="text-center">  {date.time} Max Temp:{date.temp_c} </h4> 
            <div className="progress">
  <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: `${date.temp_c}%`}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
            
            </>
          )
        })}
      
      </div>
    </div>
  </div>








</div>




  )
})}















 </div>
      
        
        </>
    );
}

export default Forecast;