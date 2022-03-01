import { useState,useEffect } from "react";
import axios from "./axios";
import React from 'react';
import{Row,Col,Container, ListGroup}from 'react-bootstrap'
import './Trending.css';

const base_url="https://image.tmdb.org/t/p/original/"

function Trending({title,fetchtrending}) {
const[trending,setTrending]=useState([])
useEffect(()=>{
    async function fetchdata(){
        const request=await axios.get(fetchtrending)
        setTrending(request.data.results);
        return request
    }
    fetchdata();
},[fetchtrending]
)
console.log(trending)

    return (
        <div>

<Container>
          <h1 className="titles">{title}</h1>

         
               <Row className="row_posters">
             {  trending.map((trends=>(
                  <Col lg={3}>
                                    
                  <img className="row_image zoom"
                   src={`${base_url}${trends.backdrop_path}`}
                  alt={trends.original_title}/>
                  {trends.original_title ?(
     <div>
     <h2 className="title">{trends.original_title}</h2>
    </div>
                  ):"noname"}
                 
                  {/* <ListGroup.Item>
                      <h2 className="title">{movie.name}</h2>
                      <p>{movie.origin_country}</p>
                      <p className="details">{movie.overview}</p>
                  </ListGroup.Item> */}
             </Col>
             )
             )
             )}
             </Row>
           </Container>
        </div>
    )
}

export default Trending
