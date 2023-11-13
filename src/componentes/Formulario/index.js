import Button from '../Button'
import InputText from '../InputText'
import Select from '../Select'
import './index.css'
import { useState } from 'react'

const Formulario = (props) =>{



    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    const onEnvio = (event) =>{
        console.log("formulario foi subetido =",nome,cargo,imagem, time)
        event.preventDefault()
        props.onColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return(
        <section className="formulario">
            <form onSubmit={onEnvio}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="digite o seu nome"
                    valor = {nome}
                    aoAlterado={valorEscrito => setNome(valorEscrito)}
                />
                <InputText 
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="digite o seu cargo"
                    valor = {cargo}
                    aoAlterado={valorEscrito =>setCargo(valorEscrito)}
                />
                <InputText
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="digite o endereço da sua imagem"
                    valor = {imagem}
                    aoAlterado={valorEscrito =>setImagem(valorEscrito)}
                />
                <Select
                    obrigatorio={true}
                    label="Setores" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valorSelecionado =>setTime(valorSelecionado)}
                />
                <Button texto="criar card"/>
                <p>{time}</p>
            </form>
        </section>
    )
}

export default Formulario