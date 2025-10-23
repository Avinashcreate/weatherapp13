import { useState,useEffect, use} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'


import axios from 'axios'
import Current from './Components/Current'
import Forecast from './Components/Forecast'


const App = ()=>{
    const [City,setCity] = useState();
    const[createCity,cityUpdate] = useState([]);
    const[clicked,setClicked] =useState();
    const[currentWeather,setcurrent] =useState();
    const[forcastWeather,setForcast] =useState();
    const[locationWeather,setLocation] =useState();


const createApi = "http://api.weatherapi.com/v1/search.json?key=7e6d85f13bb64809b18162950252406&q="

const weatherFortcast= (city)=> `http://api.weatherapi.com/v1/forecast.json?key=7e6d85f13bb64809b18162950252406&q=${city}&days=7&aqi=no&alerts=no`

useEffect(()=>{
    if(City && City.length>3){
requestApi()}
;
},[City])

const requestApi  = async()=>{
    try{
    const request = await axios.get(createApi+City)
    const respone = request.data;
    console.log(respone)
    const responeMap  = respone.map((data)=>{
    return `${data.name},${data.region},${data.country}`
})
cityUpdate(responeMap)
    }catch(e){
  console.log("Error Api",e);
}
};
const handleSelector  = (city)=>{
    console.log("Click City",city)
fetchWeatherApi(city)
setClicked(city)
cityUpdate([]);
}
const fetchWeatherApi =async(city)=>{
    try{
    const readyApi = await axios.get(weatherFortcast(city));
    const writeApi = readyApi.data;
    console.log(writeApi)
    setcurrent(writeApi.current);
    setForcast(writeApi.forecast);
    setLocation(writeApi.location);
    console.log("Current api",writeApi.current);
     console.log("Forcast api",writeApi.forecast);
      console.log("Location api",writeApi.location);

    } catch(e){
        console.log("Not Api defined")
    }
}


 


    return(
        
        <div className='contanier bg-success p-5 mt-5 rounded ' style={{cursor:'pointer'}} >
            <h1 style={{textAlign:"center",color:"white"}}>Weather App</h1>
            <input type="text"  value={clicked} className='form-control' placeholder="Enter Your City"  onChange={(e)=>{setCity(e.target.value);
            if(e.target.value==="")
            {
                setcurrent();
                setForcast();
                setLocation();
                setClicked();
            }
            }} />
     {createCity && createCity.map((city,index)=>{
        return (
            <div key={index} className='text-center bg-info bg-opacity-10 border border-opacity-25 text-white rounded' onClick={()=>handleSelector(city)}>{city} </div>
        )

     })}
      {currentWeather && <Current currentWeather = {currentWeather} locationWeather={locationWeather}/>}

{forcastWeather && <Forecast forcastWeather={forcastWeather} locationWeather={locationWeather}/>}
     </div>

       
        

        
        )
    
}
export default App;