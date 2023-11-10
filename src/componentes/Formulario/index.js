import Button from '../Button'
import InputText from '../InputText'
import Select from '../Select'
import './index.css'
import { useState } from 'react'

const Formulario = () =>{

    const times = [
        'Programação',
        'Front-End',
        'DevOps',
        'UX e Design',
        'Mobile',
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    const onEnvio = (event) =>{
        event.preventDefault()
        console.log("formulario foi subetido =",nome,cargo,imagem, time)
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
                    aoAlterado={valor => setNome(valor)}
                />
                <InputText 
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="digite o seu cargo"
                    valor = {cargo}
                    aoAlterado={valor =>setCargo(valor)}
                />
                <InputText
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="digite o endereço da sua imagem"
                    valor = {imagem}
                    aoAlterado={valor =>setImagem(valor)}
                />
                <Select
                    obrigatorio={true}
                    label="Setores" 
                    itens={times}
                    valor={time}
                    aoAlterado={valor =>setTime(valor)}
                />
                <Button texto="criar card"/>
            </form>
        </section>
    )
}

export default Formulario