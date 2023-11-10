import './index.css'

const Select = (props) =>{

    const aoSelecionar = (evento) =>{
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className='Select'>

            <label>{props.label}</label>

            <select onChange={aoSelecionar} required={props.obrigatorio} value={props.valor}>
                {props.itens.map(item => {
                   return <option key={item}>{item}</option>
                } ) }
            </select>
            
        </div>
    )
}

export default Select