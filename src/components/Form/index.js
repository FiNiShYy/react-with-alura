import './Form.css'
import TextField from '../TextField'
import DropdownList from '../DropdownList'
import ButtonRe from '../ButtonRe'

const Form = () => {

    const times = [
        'Programação',
        'Chatwoot',
        'CRM',
        'Integrador'
    ]

    return (
        <section className="formSection">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField label="Nome" placeholder="Digite seu nome"/>
                <TextField label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
                <DropdownList label="Time" items={times}/>
                <ButtonRe>
                        Criar card
                </ButtonRe>
            </form>
        </section>
    )
}

export default Form
