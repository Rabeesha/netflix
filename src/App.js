

import { Container } from 'react-bootstrap';
import './App.css';
import requests from './request';
import Row from './Rows'
import Trending from './Trending';
import Toprated from'./Toprated';
import Action from'./Action';
import Comedy from'./Comedy';
import Horrormovies from'./Horrormovies';
import Romance from'./Romance';
import Documentries from'./Documentries';
import Header from './Header';
import Banner from './Banner';


function App() {
  return (
 
      <div className="App">
        <Header/>
        <Banner 
         title="Netflix Originals"
        fetchbanner={requests.fetchNetflixOriginals}/>
       <Row 
       islargeRow={true}
       title="Netflix Originals"
       fetchUrl={requests.fetchNetflixOriginals}/>
       <Trending
       title="Trending movies"
       fetchtrending={requests.fetchTrending}/>
        <Toprated
       title="TopRated movies"
       fetchrating={requests.fetchTopRated}/>
       <Action
       title="Action Movies"
       fetactionmovies={requests.fetchActionMovies}/>
         <Comedy
       title="Comedy Movies"
       fetchcomedymovies={requests.fetchComedyMovies}/>
        <Horrormovies
       title="Horror Movies"
       fetchhorrormovies={requests.fetchHorrorMovies}/>
       <Romance
       title="Romance Movies"
       fetchromancemovies={requests.fetchRomanceMovies}/>
        <Documentries
       title="Documentaries"
       fetchdocument={requests.fetchDocumentaries}/>
      </div>
 
  );
}

export default App;
