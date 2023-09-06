import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';
import './header.css';
import logo from './logo.png';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Barrapesquisa from './barrapesquisa';

const Header = () => {

    return(
        <div>
            <React.Fragment>
                <AppBar sx = {{background: ' #0A2442'}} position='static'>
                    <Toolbar>
                    <Typography>
                        <img src={logo} alt='Logo' className='logo-img'></img>
                        <span className='conta-icon' style={{position: 'absolute', right: '10px', top: '10px'}}>
                                <AccountCircleIcon style={{fontSize: '3rem'}}/>
                            </span>
                        <span className='carrinho-icon' style={{position: 'absolute', right: '75px', top: '10px'}}>
                                <LocalGroceryStoreIcon style={{fontSize: '3rem'}}/>
                            </span>
                        
                    </Typography>
                        <Barrapesquisa style = {{position: 'absolute', right: '10px', top: '10px'}}/>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        </div>
    );

}

export default Header;

