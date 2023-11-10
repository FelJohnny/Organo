import CampoTexto from '../CampoTexto'
import './index.css'
const Formulario = () =>{
    return(
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="digite o seu nome"/>
                <CampoTexto label="Cargo" placeholder="digite o seu cargo"/>
                <CampoTexto label="Imagem" placeholder="digite o endereço da sua imagem"/>
            </form>
        </section>
    )
}

export default Formulario