import { useState } from 'react';
import Banner from './componentes/Banner/';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import { v4 as uuidv4 } from 'uuid'


function App() {

  const [times, setTimes] = useState([
    {
      
      idTime: uuidv4(),
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      idTime: uuidv4(),
      nome: 'Front-End',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      idTime: uuidv4(),
      nome: 'DevOps',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8'
    },
    {
      idTime: uuidv4(),
      nome: 'UX e Design',
      corPrimaria: '#db6eb6',
      corSecundaria: '#fae9f9'
    },
    {
      idTime: uuidv4(),
      nome: 'Mobile',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },
    {
      idTime: uuidv4(),
      nome: 'Inovação e Gestão',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    },
    
  ])

  
  const[colaboradores, setColaboradores] = useState([])
  
  const onColaboradorAdicionado = (colaborador) =>{
    setColaboradores([...colaboradores, colaborador]) //pega todos itens da array coloca antes, "colaboradores" adiciona no final
  }
  
  function detelarColaborador(idColaborador){
    setColaboradores(colaboradores.filter(colaborador => colaborador.idColaborador !== idColaborador))
  }

  function mudarCorTime(corPrimaria, idTime){
    setTimes(times.map(time => {
      if(time.idTime === idTime){
        time.corPrimaria = corPrimaria;
      }
      return time;
    } ) )
  }

  function mudarCorCard(corSecundaria, idTime){
    setTimes(times.map(time => {
      if(time.idTime === idTime){
        time.corSecundaria = corSecundaria;
      }
      return time;
    } ) )
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
        idTime={time.idTime}
        key={time.nome}
        mudarCorCard={mudarCorCard}
        mudarCorTime={mudarCorTime}
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
