import React from 'react';
import './App.css';

function App(){
  const [nome,setNome] = React.useState('');
  const [sobrenome, setsobrenome] = React.useState('');
  const [email,setEmail] = React.useState('');
  const [senha,setSenha] = React.useState('');


  const handleSubmit = (event) => {
    event.preventDefault() 

    alert(`Nome: ${nome}, sobrenome: ${sobrenome}, Email: ${email}, Senha: ${senha}`)
  };

  return (

    <form onSubmit={handleSubmit}>
      <h1>Forms</h1>

      <label htmlFor="nome">Nome:</label>
      <input type="text" name="nome" id="nome" value={nome}
      onChange={(e) => setNome(e.target.value)}/>
      <br />
      
      <label htmlFor="sobrenome">Sobrenome:</label>
      <input type="text" name="sobrenome" id="sobrenome" value={sobrenome}
      onChange={(e) => setsobrenome(e.target.value)}/>
      <br />

      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" value={email}
      onChange={(e) => setEmail(e.target.value)}/>
      <br />
      <label htmlFor="senha">Senha:</label>
      <input type="password" name="senha" id="senha" value={senha}
      onChange={(e) => setSenha(e.target.value)}/>
      <br />


      <div>
        <input type="checkbox" name="senha" id="check" />
        <label htmlFor="checkbox">Você aceita os nossos termos ?</label>
      </div>
      <button type="submit">Enviar</button>

    </form>

  );
}

export default App;