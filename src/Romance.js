import { useState,useEffect } from "react";
import axios from "./axios";
import React from 'react';
import{Row,Col,Container, ListGroup}from 'react-bootstrap'
import './Romance.css';

const base_url="https://image.tmdb.org/t/p/original/"

function Romance({title,fetchromancemovies}) {
const[romance,setRomance]=useState([])
useEffect(()=>{
    async function fetchdata(){
        const request=await axios.get(fetchromancemovies)
        setRomance(request.data.results);
        return request
    }
    fetchdata();
},[fetchromancemovies]
)
console.log(romance)

    return (
        <div>
            <Container>
         <h1 className="titles">{title}</h1>

           
               <Row className="row_posters">
             {  romance.map((romancedata=>(
                  <Col lg={3}>
                                    
                  <img className="row_image zoom"
                   src={`${base_url}${romancedata.backdrop_path}`}
                  alt={romancedata.original_title}/>
                  {romancedata.original_title ?(
     <div>
     <h2 className="title">{romancedata.original_title}</h2>
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

export default Romance
