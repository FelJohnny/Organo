import './index.css'

const CardColaborador = (props) =>{
    return(
        <div className='CardColaborador'>
            
            <div 
                className='btn-deletar'
                onClick={()=> props.onDelete(props.idColaborador)}
            >X</div>

            <div style={{backgroundColor: props.colorCard}}>
                <img src={props.imagem} alt={props.nome} />
            </div>
            <div>
                <h4 style={{color: props.colorCard}}>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default CardColaborador