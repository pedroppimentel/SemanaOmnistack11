import React from 'react';

import './global.css';

import Routes from './routes'; //Quando importa uma pasta sempre é procurado o arquivo index.js primeiramente

function App() {
  //quando precisar armazenar info usando react, cria um estado ao inves da variavel
  //const[counter, setCounter] = useState(0);

  // useState retorna -> Array[valor, função de atualização]

  /*function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={ increment }>Incrementar</button>
    </div>
  );*/

  return (
    <Routes />
  );
}

export default App;
