import './index.css'

const CardColaborador = (props, colorCard) =>{
    return(
        <div className='CardColaborador'>
            <div>
                <img src={props.imagem} alt={props.nome} />
            </div>
            <div>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default CardColaborador