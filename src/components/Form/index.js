import './Form.css'
import TextField from '../TextField'
import DropdownList from '../DropdownList'
import ButtonRe from '../ButtonRe'
import { useState } from 'react'

const Form = (props) => {

    const times = [
        'Programação',
        'Chatwoot',
        'CRM',
        'Integrador'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="formSection">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    obrigatorio={true} 
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <TextField 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <DropdownList 
                    obrigatorio={true} 
                    label="Time" 
                    items={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <ButtonRe>
                        Criar card
                </ButtonRe>
            </form>
        </section>
    )
}

export default Form
