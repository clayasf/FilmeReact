import { useEffect, useState } from "react";
import api from "../../services/api";
import './style.css'
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
//movie/157336?api_key=5379e39f5657b734e34543334bb13f7f


function Home(){

    const [filmes, setFilmes] = useState([]);
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
        async function loadMovies(){
            const response = await api.get("discover/movie", {
                params:{
                    api_key:'5379e39f5657b734e34543334bb13f7f',
                    language: 'pt-BR',
                    page:1
                }
            })
            setFilmes(response.data.results.slice(0,10))
            setLoading(false)
            // console.log(response.data.results.slice(0,10))
        }
        loadMovies()
    },[]);

    if(loading){
        return(
            <div className="loading">
                <h2>Loading...</h2>
            </div>
        );
    }

    return(
        <div className="container">
            <div className="lista-filmes">
            {filmes.map((f) => {
                return(
                    //https://api.themoviedb.org/3/movie/{movie_id}/images
                    <article key={f.id}>
                        <strong>{f.title}</strong>
                        <img src={`https://image.tmdb.org/t/p/original/${f.poster_path}`} alt={f.title}/>
                        <Link to={`/movie/${f.id}`}>Acessar</Link>
                    </article>
                );
            })}
            </div>
        </div>
    );
}

export default Home;