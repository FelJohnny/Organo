import './index.css'
const InputText = (props)=>{

    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="InputText">
            <label>{props.label}</label>
            <input type={props.type} value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    )
}

export default InputText