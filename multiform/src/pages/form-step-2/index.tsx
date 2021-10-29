import { useEffect } from 'react'
import * as C from './styles'
import Theme from '../../components/theme'
import { useHistory, Link } from 'react-router-dom'
import { useForm, FormActions } from '../../contexts/FormContext'
import SelectOption from '../../components/select-option'

const FormStep2 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
         if (state.name === ''){
            history.push("/")
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        }
    }, []);

    const handleNextStep = () => {
        if (state.name !== ''){
             history.push("/step3")
        } else {
            alert("Preencha os dados corretamente")
        }
    }


    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

 
    return (
        <Theme>
        <C.Container>
            <p>Passo {state.currentStep}/3</p>
            <h1>Olá, {state.name}!</h1>
            <p>Qual seu nível de conhecimento?</p>

            <hr />

            <SelectOption
                title="Sou iniciante"
                description="Comecei a programar recentemente"
                icon="☠️"
                selected={state.level === 0}
                onClick={() => setLevel(0)}
            />
            <SelectOption
                title="Sou profissional"
                description="Já programo há 2 anos +"
                icon="👻"
                selected={state.level === 1}
                onClick={() => setLevel(1)}
            />
            
            <Link to="/" className="backButton"> Voltar </Link>
            
            <button onClick={handleNextStep}>Próximo</button>
        </C.Container>
        </Theme>
    )
}

export default FormStep2
