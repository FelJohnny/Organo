import './index.css'

const Select = (props) =>{
    return(
        <div className='Select'>

            <label>{props.label}</label>

            <select required={props.obrigatorio} className='select'>
                {props.itens.map(item => {
                   return <option key={item}>{item}</option>
                } ) }
            </select>
            
        </div>
    )
}

export default Select