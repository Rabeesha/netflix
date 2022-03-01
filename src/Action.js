import React from 'react'
import { useState,useEffect } from "react";
import axios from "./axios";
import{Row,Col,Container, ListGroup}from 'react-bootstrap'
import './Action.css';
const base_url="https://image.tmdb.org/t/p/original/"

function Action({title,fetactionmovies}) {
    const[action,setAction]=useState([])
    useEffect(()=>{
        async function fetchdata(){
            const request=await axios.get(fetactionmovies)
            setAction(request.data.results);
            return request
        }
        fetchdata();
    },[fetactionmovies]
    )
    console.log(action)
   
    return (
        <div>
              <Container>
            <h1 className="titles">{title}</h1>

         
               <Row className="row_posters">
             {  action.map((actions=>(
                  <Col lg={3}>
                                    
                  <img className="row_image zoom"
                   src={`${base_url}${actions.backdrop_path}`}
                  alt={actions.original_title}/>
                  {actions.original_title ?(
     <div>
     <h2 className="title">{actions.original_title}</h2>
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

export default Action
