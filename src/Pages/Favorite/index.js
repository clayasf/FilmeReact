import './style.css';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
function Favorite(){
  const [filmes, setFilmes]   = useState([]);
useEffect(()=>{
    let movie = JSON.parse(localStorage.getItem("@primeFlix"))
    setFilmes(movie || []);

},[])

function excluir(v){

let filtroFilmes = filmes.filter((item) => {
    return (item.id !== v)
});
setFilmes(filtroFilmes)
localStorage.setItem('@primeFlix',JSON.stringify(filtroFilmes))
toast.success('Filme removido com sucesso')
}

    return(
        <div className='meus-filmes'>
            <h1>Meus Favoritos</h1>
            {filmes.length === 0 && <span> Voce não poussui filmes</span>}
            <ul>
                {filmes.map((f)=>{
                    return(
                        <li key={f.id}> 
                            <span>{f.title}</span>
                            <div>
                            <Link to={`/movie/${f.id}`}>Ver detalhes</Link>
                            <button onClick={() => excluir(f.id)}>Excluir</button>
                            </div>
                        </li> 
                    );
                })}
            </ul>
        </div>
    );
}

export default Favorite