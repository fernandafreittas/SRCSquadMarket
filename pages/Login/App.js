import logoIGM from './logo.png'

import './styles.css';
import Cadastro from '../Cadastro/App.js';
import { Link } from 'react-router-dom';

function App(){
  return(
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">
              <img src={logoIGM} alt="mercado"/>
            </span>
             <span className="login-form-title">Login</span>

            <div className="wrap-input"> E-mail:
              <input className="input" type="email" />
              <span clasName="focus-input" name= "" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input "> Senha:
              <input className="input" name= "" type="password" />
              
              <span
               clasName="focus-input" ></span>
            </div>

            <div className="wrap-input"> 
  <button className="login-form-btn">Continuar</button>
</div>

            <div className="text-center">
              <span className ="txt1">Não possui conta?</span>

              <Link to="/cadastro" className="txt2">Cadastre-se</Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;