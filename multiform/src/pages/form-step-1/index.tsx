import { useEffect, ChangeEvent } from 'react'
import * as C from './styles'
import Theme from '../../components/theme'
import { useHistory } from 'react-router-dom'
import { useForm, FormActions } from '../../contexts/FormContext'

const FormStep1 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, []);

    const handleNextStep = () => {
        if (state.name !== ''){
             history.push("/step2")
        } else {
            alert("Preencha os dados corretamente")
        }
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }
        
    return (
        <Theme>
        <C.Container>
            <p>Passo {state.currentStep}/3</p>
            <h1>Vamos começar com seu nome</h1>
            <p>Preencha o campo abaixo com seu nome completo:</p>

            <hr />

            <label>
                Seu nome completo
                <input
                    type="text"
                    autoFocus
                    value={state.name}
                    onChange={handleNameChange}
                />
            </label>

            <button onClick={handleNextStep}>Próximo</button>
        </C.Container>
        </Theme>
    )
}

export default FormStep1
