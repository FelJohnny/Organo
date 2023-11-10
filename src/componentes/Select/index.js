import './index.css'

const Select = (props) =>{
    return(
        <div className='Select'>

            <label>{props.label}</label>

            <select onChange={evento =>{ props.aoAlterado(evento.target.value)}} required={props.obrigatorio} value={props.valor}>
                {props.itens.map(item => {
                   return <option key={item}>{item}</option>
                } ) }
            </select>
            
        </div>
    )
}

export default Select