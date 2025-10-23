import React from "react";
const Current = ({currentWeather,locationWeather})=>{
  return(
    <>
    <div className="container mg-5">
      <h2 className="text-center text-white  mt - 5"> Current Weather  {locationWeather.name} {locationWeather.region} and {locationWeather.country} </h2>

<div className="col-3">
    <div className="card">
      <div className="card-body">
        <p className="card-title">Weather Temperature {currentWeather.dewpoint_f}</p>
      </div>
    </div>
  </div>


 <div className="col-3">
    <div className="card">
      <div className="card-body">
        <p className="card-title">Weather Temperature:{currentWeather.temp_c}</p>
      </div>
    </div>
  </div>

<div className="col-2">
  <div className="card">
    <div className="card-body">
      <div className="card-title">Weather humidity:{currentWeather.humidity}</div>
    </div>
  </div>
</div>


</div>
  

    
    
    </>
  )
}
export default Current;