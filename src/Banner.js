import React from 'react'
import { useEffect,useState } from 'react'
import axios from './axios'
import{Row,Col}from 'react-bootstrap'
import requests from './request'
import'./Banner.css';

const base_url="https://image.tmdb.org/t/p/original/"



function Banner({title,fetchbanner}) {
    const [movie, setMovies] = useState([])

    useEffect(()=>{
        async function fetchdata(){
            const request=await axios.get(fetchbanner)
            setMovies(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length-1)
                ]
                );
            return request
        }
        fetchdata();
    },[fetchbanner]
    )

console.log(movie);

function truncate(str,n){
    return str?.length>n?str.substr(0,n-1)+"...":str;
}
    return (

      
        <div>
            
          
           <header className="banner"
style={{
    backgroundSize:"cover",
    backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundPosition:"center center",
}}>
        

               
            <div>
<h1  className="banner_title">{movie?.title||movie?.name||movie?.orginal_name}</h1>
<div>

<button  className="banner_button">Play</button>
<button  className="banner_button">More Info</button>
</div>

<div>
    <h1  className="banner_contents">{truncate(movie?.overview,100)}</h1></div>
   
<div className="fade_bottom"></div>
            </div>
           </header>


            
        </div>
    )
}

export default Banner
