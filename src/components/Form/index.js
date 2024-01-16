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

    const onSave = (event) => {
        event.preventDefault()
        console.log('Form was submited')
    }

    return (
        <section className="formSection">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
                <TextField obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
                <DropdownList obrigatorio={true} label="Time" items={times}/>
                <ButtonRe>
                        Criar card
                </ButtonRe>
            </form>
        </section>
    )
}

export default Form
