import Button from '../Button'
import CampoTexto from '../CampoTexto'
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


    const aoSalvar = (event) =>{
        event.preventDefault()
        console.log("formulario foi subetido =",nome,cargo,imagem)
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="digite o seu nome"
                    valor = {nome}
                    aoAlterado={valor =>setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="digite o seu cargo"
                    valor = {cargo}
                    aoAlterado={valor =>setCargo(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="digite o endereço da sua imagem"
                    valor = {imagem}
                    aoAlterado={valor =>setImagem(valor)}
                />
                <Select obrigatorio={true} label="Setores" itens={times}/>
                <Button texto="criar card"/>
            </form>
        </section>
    )
}

export default Formulario