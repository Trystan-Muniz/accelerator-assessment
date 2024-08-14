import Anime from "./Anime";
import {useEffect, useState} from 'react';


function Animes() {
  //fetch all animes from the backend and render them as a list using the Anime component. Make sure to style the animes to look like the screenshot from the README. Feel free to use axios to grab data

const API = process.env.REACT_APP_BASE_URL
 
  const [animes, setAnimes] = useState([]);
 useEffect(()=> {
  fetch(`${API}/animes`)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setAnimes(res)
    })
    .catch(err => console.log(err))
    }, [])


  return (
    <section className="index" id="anime-list">
       {animes.map((anime) => { return <Anime
        
      key={anime.id} name={anime.name} description={anime.description} />
         })}
              
      
    </section>
  );
}

export default Animes;
