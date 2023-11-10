import './index.css'
const InputText = (props)=>{

    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value)
        console.log(evento.target.value)
    }

    return(
        <div className="InputText">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    )
}

export default InputText