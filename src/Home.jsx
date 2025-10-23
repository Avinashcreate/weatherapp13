import React from "react";
import { Link } from "react-router-dom";


const Home = ()=>{
    return(
        <>
        <ul>
            <li>
                <Link to = "/product/111/Milk/10">Product Page 111 (Milk) 10</Link>

            </li>
        </ul>
        <ul>
            <li>
                <Link to = "/product/222/Biscuit/200">Product Page 222 (Biscuit) 200</Link>
                
            </li>
        </ul>
        </>
    )
}
export default Home;