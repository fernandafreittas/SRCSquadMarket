import logoIGM from './logo.png'

import './styles.css'

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

            <div className="wrap-input input-container"> Senha:
              <input className="input" name= "" type="password" />
              
              <span
               clasName="focus-input" ></span>
            </div>

            <div className="wrap-input"> 
  <button className="login-form-btn">Continuar</button>
</div>

            <div className="text-center">
              <span className ="txt1">Não possui conta?</span>

              <a className="txt2" href="#"> Cadastre-se</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;