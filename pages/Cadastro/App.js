import logo from './logo.png'
import './App.css';


function App() {
  return (
    <div className="container">
      <div className="container-cadastro">
        <div className="wraper-cadastro">
         <form className ="cadastro-form">
         <span className = "cadastro-form-title">
            <img src = {logo} alt="a"></img>
          </span>
          <span className = "login-form-title">Cadastro</span>


          <div className="wrap-input"> Nome completo:
            <input className="input" type="text" />
            <span clasName="focus-input" name= "" data-placeholder="Email"></span>
          </div>


          <div className="wrap-input"> Data de nascimento:
            <input className="input" type="date" />
            <span clasName="focus-input" name= "" data-placeholder="Email"></span>
          </div>


          <div className="wrap-input">
          <label htmlFor="cpf">CPF:</label>
          <input
          className="input"
           type="text"
          id="cpf"
           name="cpf"
           pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
           placeholder="123.456.789-01"
           required />
           <span className="focus-input"></span>
           </div>


          <div className="wrap-input">
           <label htmlFor="telefone">Número de Telefone:</label>
           <input
           className="input"
           type="tel"
           name="telefone"
           pattern="\(\d{2}\) \d{5}-\d{4}"
           placeholder="(99) 12345-6789"
           required />
          <span className="focus-input"></span>
          </div>


          <div className="wrap-input"> E-mail:
            <input className="input" type="email" />
            <span clasName="focus-input" name= "" data-placeholder="Email"></span>
          </div>


          <div className="wrap-input input-container"> Senha:
              <input className="input" name= "" type="password" />


              <span
               clasName="focus-input" ></span>
            </div>
         
          <div className="container-login-form-btn">
            <button className = "login-form-btn">Continuar</button>
          </div>


         </form>
        </div>
      </div>
    </div>


  );
}


export default App;