import { useState,useEffect } from "react";
import axios from "./axios";
import React from 'react';
import'./Row.css';
import{Row,Col,Container, ListGroup}from 'react-bootstrap'
const base_url="https://image.tmdb.org/t/p/original/"

function Rows({title,fetchUrl,islargeRow}) {
const [movies,setMovies]=useState([])
useEffect(()=>{
    async function fetchData(){
        const request=await axios.get(fetchUrl)
        setMovies(request.data.results);
        return request
    }
    fetchData();
},[fetchUrl])



    return (
     <>
          <Container>
              
                    <div className="row">
                        <h1 className="titles">{title}</h1>
                    </div>
                    

       
                        <Row className="row_posters">
                           
                               
                               {movies.map((movie)=>(
                                  <Col lg={3}>
                                        
                                       <img className={`row_image zoom ${islargeRow&& "poster"}`}



                                        src={`${base_url}${islargeRow? movie.poster_path:movie.backdrop_path}`}
                                       alt={movie.name}/>
                                      
                                           <h2 className="title">{movie.name}</h2>
                                           {/* <p>{movie.origin_country}</p>
                                           <p className="details">{movie.overview}</p> */}
                                      
                                  </Col>
                                   
                               ))}
                               
                            
                        </Row>
   </Container>
             
             
          
     </>
    )
}

export default Rows






