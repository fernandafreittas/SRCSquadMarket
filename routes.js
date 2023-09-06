import {BrowserRouter,Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element = { <logo-img/> } />
                <Route path="/Login" element = { <Login/> }/>
                <Route path="/Carrinho" element = { <carrinho/> }/>
            </Routes>
        </BrowserRouter>
    );

}

export default RoutesApp;