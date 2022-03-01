import React from 'react'
import { useState,useEffect } from 'react'
import axios from "./axios";
import{Row,Col,Container, ListGroup}from 'react-bootstrap'
import './Rating.css';
const base_url="https://image.tmdb.org/t/p/original/"



function Toprated({title,fetchrating}) {
    const [rating, setRating] = useState([])
    useEffect(()=>{
        async function fetchdata(){
            const request=await axios.get(fetchrating)
            setRating(request.data.results);
            return request
        }
        fetchdata();
    },[fetchrating]
    )
    console.log(rating)
    return (
        <div>
              <Container>
            <h1 className="titles">{title}</h1>

         
               <Row className="row_posters">
             {  rating.map((ratings=>(
                  <Col lg={3}>
                                    
                  <img className="row_image zoom"
                   src={`${base_url}${ratings.backdrop_path}`}
                  alt={ratings.original_title}/>
                  {ratings.original_title ?(
     <div>
     <h2 className="title">{ratings.original_title}</h2>
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

export default Toprated
