import './index.css'
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";


const CardColaborador = (props) =>{
    return(
        <div className='CardColaborador' style={{backgroundColor:'white'}}>
            
            <div 
                className='btn-deletar'
                onClick={()=> props.onDelete(props.idColaborador)}
            >X</div>

            <div style={{backgroundColor: props.colorCard}}>
                <img src={props.imagem} alt={props.nome} />
            </div>
            <div >
                <h4 style={{color: props.colorCard}}>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
            <div className='favoritar'>
                {props.favorito 
                ? <MdOutlineFavorite onClick={()=> props.favoritar(props.idColaborador)}/>
                : <MdFavoriteBorder onClick={()=> props.favoritar(props.idColaborador)}/>}
            </div>
        </div>
    )
}

export default CardColaborador