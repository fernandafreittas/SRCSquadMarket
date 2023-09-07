import {BrowserRouter,Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Menu from './components/Menu/Menu.js';
import Slider from './components/Promocao/Slider.js';

function RoutesApp(){   
    return(
        <BrowserRouter>
        <Header/>
        <Menu/>    
        <Slider/>
            <Routes>
                <Route path="/" element = { <logo-img/> } />
            </Routes>
        </BrowserRouter>
    );

}

export default RoutesApp;