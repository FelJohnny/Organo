import { useState } from 'react';
import Banner from './componentes/Banner/';
import Formulario from './componentes/Formulario';

function App() {

  const[colaboradores, setColaboradores] = useState([])

  const onColaboradorAdicionado = (colaborador) =>{
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador]) //pega todos itens da array coloca antes, "colaboradores" adiciona no final
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario onColaboradorCadastrado={colaborador => onColaboradorAdicionado(colaborador)}/>
    </div>
  );
}

export default App;
