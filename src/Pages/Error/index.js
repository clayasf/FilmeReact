import { Link } from "react-router-dom";
import './style.css'
function Error(){
    return(
<div className="notFound">
    <h1>404</h1>
    <h2>Not Found nada mesmo</h2>
    <Link to='/'>Another movies</Link>
</div>
    );
}

export default Error