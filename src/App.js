import { useState } from 'react';
import Banner from './componentes/Banner/';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'DevOps',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#db6eb6',
      corSecundaria: '#fae9f9'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    },
    
  ]

  
  const[colaboradores, setColaboradores] = useState([])
  
  const onColaboradorAdicionado = (colaborador) =>{
    setColaboradores([...colaboradores, colaborador]) //pega todos itens da array coloca antes, "colaboradores" adiciona no final
  }
  
  

  function detelarColaborador(idColaborador){
    setColaboradores(colaboradores.filter(colaborador => colaborador.idColaborador !== idColaborador))
  }
  return (
    <div className="App">
      <Banner/>
      
      <Formulario 
        times={times.map((time) => time.nome)}
        onColaboradorCadastrado={colaborador => onColaboradorAdicionado(colaborador)}
      />
      
      {times.map(time => 
      <Time
        key={time.nome}
        nome={time.nome} 
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        onDelete={detelarColaborador}
      
      />)}
      
    </div>
  );
}

export default App;
