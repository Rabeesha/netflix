import { useState,useEffect } from "react";
import axios from "./axios";
import React from 'react';
import{Row,Col,Container, ListGroup}from 'react-bootstrap'
import './Horror.css';

const base_url="https://image.tmdb.org/t/p/original/"

function Trending({title,fetchhorrormovies}) {
const[horror,setHorror]=useState([])
useEffect(()=>{
    async function fetchdata(){
        const request=await axios.get(fetchhorrormovies)
        setHorror(request.data.results);
        return request
    }
    fetchdata();
},[fetchhorrormovies]
)
console.log(horror)

    return (
        <div>
              <Container>
           <h1 className="titles">{title}</h1>

      
               <Row className="row_posters">
             {  horror.map((horrors=>(
                  <Col lg={3}>
                                    
                  <img className="row_image zoom"
                   src={`${base_url}${horrors.backdrop_path}`}
                  alt={horrors.original_title}/>
                  {horrors.original_title ?(
     <div>
     <h2 className="title">{horrors.original_title}</h2>
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
