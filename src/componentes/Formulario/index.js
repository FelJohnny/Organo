import Button from '../Button'
import InputText from '../InputText'
import Select from '../Select'
import './index.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Formulario = (props) =>{



    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    

    const onEnvio = (event) =>{
        event.preventDefault()
        props.onColaboradorCadastrado({
            idColaborador: uuidv4(),
            nome,
            cargo,
            imagem,
            time
        })
        setTime('')
        setCargo('')
        setImagem('')
        setNome('')
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
                    label="Imagem URL"
                    placeholder="digite o endereço da sua imagem"
                    valor = {imagem}
                    aoAlterado={valorEscrito =>setImagem(valorEscrito)}
                />
                <div className='containerImg'>
                    <img src={imagem} alt={nome} className='imgInserida'/>
                </div>
                <Select
                    obrigatorio={true}
                    label="Setores" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valorSelecionado =>setTime(valorSelecionado)}
                />
                <Button texto="criar card"/>

            </form>
        </section>
    )
}

export default Formulario