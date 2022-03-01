import { useState,useEffect } from "react";
import axios from "./axios";
import React from 'react';
import{Row,Col,Container, ListGroup}from 'react-bootstrap'
import './Comedy.css';

const base_url="https://image.tmdb.org/t/p/original/"

function Trending({title,fetchcomedymovies}) {
const[comedy,setComedy]=useState([])
useEffect(()=>{
    async function fetchdata(){
        const request=await axios.get(fetchcomedymovies)
        setComedy(request.data.results);
        return request
    }
    fetchdata();
},[fetchcomedymovies]
)
console.log(comedy)

    return (
        <div>
              <Container>
         <h1 className="titles">{title}</h1>
         
               <Row className="row_posters">
             {  comedy.map((comedys=>(
                  <Col lg={3}>
                                    
                  <img className="row_image zoom"
                   src={`${base_url}${comedys.backdrop_path}`}
                  alt={comedys.original_title}/>
                  {comedys.original_title ?(
     <div>
     <h2 className="title">{comedys.original_title}</h2>
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
