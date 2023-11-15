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
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')
    const [corCard, setCorCard] = useState('')
    

    const onEnvio = (event) =>{
        event.preventDefault()
        props.onColaboradorCadastrado({
            idColaborador: uuidv4(),
            nome,
            cargo,
            imagem,
            time,
        })
        setTime('')
        setCargo('')
        setImagem('')
        setNome('')
    }
const onCadTime = (event) =>{
    event.preventDefault()
    props.cadastrarTime({
        id: uuidv4(),
        nome: nomeTime,
        corPrimaria: corTime,
        corSecundaria: corCard,
    })
    setNomeTime('')
    setCorTime('')
    setCorTime('')
}

    return(
        <>
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
                        label="Times" 
                        itens={props.times}
                        valor={time}
                        aoAlterado={valorSelecionado =>setTime(valorSelecionado)}
                    />
                    <Button texto="Criar Card"/>

                </form>
            </section>

                    <section className="formulario">
                <form onSubmit={onCadTime}>
                    <h2>Preencha os dados para Cadastrar um novo Time</h2>
                    <InputText 
                        obrigatorio={true}
                        label="Nome"
                        placeholder="digite o nome do Time"
                        valor = {nomeTime}
                        aoAlterado={valorEscrito => setNomeTime(valorEscrito)}
                    />
                    <div className='containerInput'>
                        <InputText 
                            //obrigatorio={true}
                            label="Cor de fundo"
                            placeholder="digite a cor do Time #hexadecimal"
                            valor = {corTime}
                            aoAlterado={valorEscrito =>setCorTime(valorEscrito)}
                        />
                        <InputText 
                            //obrigatorio={true}
                            label="Cor do Card"
                            placeholder="digite a cor do Card #hexadecimal"
                            valor = {corCard}
                            aoAlterado={valorEscrito =>setCorCard(valorEscrito)}
                        />
                    </div>

                    <Button texto="Criar Time"/>

                </form>
            </section>
        </>
    )
}

export default Formulario