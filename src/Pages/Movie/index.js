import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import api from "../../services/api";
import './style.css'
import { toast } from "react-toastify";

function Movie(){

    const [movie, setMovie] = useState({});
    const [loading , setLoading] = useState(true);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        async function loadFilme(){
            await api.get(`movie/${id}`,{
                params:{
                    api_key:'5379e39f5657b734e34543334bb13f7f',
                    language: 'pt-BR'
                }
            }).then((response) => {
                
            setMovie(response.data);
            setTimeout(() => setLoading(false), 0);

            }).catch(() =>{
                console.log('filme não encontrado')
                navigate('/',{ replace:true});
                return;
            });
        }

        loadFilme()

        // return () => {
        //     console.log('componente foi desmonetado')
        // }
    },[navigate, id]);

function salvarFilme(){
    const minhaLista = localStorage.getItem("@primeFlix")

    let filmesSalvos = JSON.parse(minhaLista) || []

    const hasFilme = filmesSalvos.some( (filmesSalvos) => filmesSalvos.id === movie.id) // compara se possui ao menos um item na lista

    if(hasFilme){

        toast.info('filme na lista')
        return;
    }

    filmesSalvos.push(movie);
    localStorage.setItem('@primeFlix',JSON.stringify(filmesSalvos));
    toast.success('Filmes salvos com sucesso')
    // alert('Filmes salvos com sucesso');
}
    if(loading){
        return(
            <div className="filme-info">
                {toast.info('Loading')}
            </div>
        );
    }
        return(
            
            <div>
                <div className="filme-info">
                    <h1 key={movie.key}>{movie.title}</h1>
                    <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title}/>
                    <h3>Sinopse</h3>
                    <span>{movie.overview}</span>
                    <strong>Avalidação: {movie.vote_average} / 10</strong>
                    
                    <div className='area-buttons'>
                        <button onClick={salvarFilme}>Salvar</button>
                        <button>
                            <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${movie.title} trailer`}>Trailer</a>                            
                        </button>
                    </div>
                </div>
            </div>
        );
}

export default Movie;