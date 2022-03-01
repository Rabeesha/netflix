import { useState,useEffect } from "react";
import axios from "./axios";
import React from 'react';
import{Row,Col,Container, ListGroup}from 'react-bootstrap'
import './Document.css';

const base_url="https://image.tmdb.org/t/p/original/"

function Documentries({title,fetchdocument}) {
const[document,setDocument]=useState([])
useEffect(()=>{
    async function fetchdata(){
        const request=await axios.get(fetchdocument)
        setDocument(request.data.results);
        return request
    }
    fetchdata();
},[fetchdocument]
)






console.log(document)

    return (
        <div>
             <Container>
           <h1 className="titles">{title}</h1>

          
               <Row className="row_posters">
             {  document.map((documents=>(
                  <Col lg={3}>
                                    
                  <img className="row_image zoom"
                   src={`${base_url}${documents.backdrop_path}`}
                  alt={documents.original_title}/>
                  {documents.original_title ?(
     <div>
     <h2 className="title">{documents.original_title}</h2>
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

export default Documentries
