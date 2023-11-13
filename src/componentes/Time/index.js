import CardColaborador from '../CardColaborador'
import './index.css'

const Time =(props) =>{
    return(
        <section className="time" style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='containerColaborador'>
                <CardColaborador/>
                <CardColaborador/>
                <CardColaborador/>
                <CardColaborador/>
                <CardColaborador/>
            </div>
        </section>
    )
}

export default Time