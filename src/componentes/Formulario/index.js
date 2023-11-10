import Button from '../Button'
import CampoTexto from '../CampoTexto'
import Select from '../Select'
import './index.css'
const Formulario = () =>{

    const times = [
        'Programação',
        'Front-End',
        'DevOps',
        'UX e Design',
        'Mobile',
    ]

    const aoSalvar = (event) =>{
        event.preventDefault()
        console.log("formulario foi subetido")
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="digite o seu nome"/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="digite o seu cargo"/>
                <CampoTexto obrigatorio={true} label="Imagem" placeholder="digite o endereço da sua imagem"/>
                <Select obrigatorio={true} label="Setores" itens={times}/>
                <Button texto="criar card"/>
            </form>
        </section>
    )
}

export default Formulario