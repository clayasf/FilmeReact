import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../Pages/Home'; 
import Movie from '../Pages/Movie';
import Favorite from '../Pages/Favorite';
import Header from "../components/Header";

import Error from '../Pages/Error';
   
function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/> 
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/movie/:id' element={<Movie/>}/>
                <Route path='/favoritos' element={<Favorite/>}/>

                <Route path='*' element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;