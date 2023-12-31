import CardColaborador from '../CardColaborador'
import './index.css'

const Time =(props) =>{
    return(
    (props.colaboradores.length > 0)?
    <section className="time" style={{backgroundColor: props.corSecundaria}}>
            <input 
                type='color' 
                className='defCorCard'
                value={props.corSecundaria} 
                onChange={(evento)=> props.mudarCorCard(evento.target.value, props.idTime)}>
            </input>
            <input 
                type='color' 
                className='defCorBackground'
                value={props.corPrimaria} 
                onChange={(evento)=> props.mudarCorTime(evento.target.value, props.idTime)}>
            </input>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='containerColaborador'>
                {props.colaboradores.map(colaborador => {
                    return(
                        <CardColaborador
                            idColaborador={colaborador.idColaborador}
                            key={colaborador.nome}
                            colorCard={props.corPrimaria}  
                            nome={colaborador.nome} 
                            cargo={colaborador.cargo} 
                            imagem={colaborador.imagem} 
                            onDelete={props.onDelete}
                            favorito={colaborador.favorito}
                            favoritar={props.favoritar}
                        />
                    )
                })}
            </div>
        </section>
        :''
    )
}

export default Time