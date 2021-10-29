import { useEffect, ChangeEvent } from 'react'
import * as C from './styles'
import Theme from '../../components/theme'
import { useHistory, Link } from 'react-router-dom'
import { useForm, FormActions } from '../../contexts/FormContext'

const FormStep3 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

   useEffect(() => {
         if (state.name === ''){
            history.push("/")
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, []);

    const handleExit = () => {
        if ((state.email !== '') && (state.github !== '')) {
            console.log(state);
            alert("Cadastrado com sucesso!")
        } else {
            alert ("Preencha os dados corretamente")
        }
      
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }

       const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    }
        
    return (
        <Theme>
        <C.Container>
            <p>Passo {state.currentStep}/3</p>
            <h1>Muito bem, {state.name}! Onde te achamos? </h1>
            <p>Preencha com seus dados de contato:</p>

            <hr />

            <label>
                E-mail
                <input
                    type="email"
                    value={state.email}
                    onChange={handleEmailChange}
                />
            </label>

            <label>
                Github
                <input
                    type="text"
                    value={state.github}
                    onChange={handleGithubChange}
                />
            </label>
             <Link to="/step2" className="backButton"> Voltar </Link>

            <button onClick={handleExit}>Finalizar</button>
        </C.Container>
        </Theme>
    )
}

export default FormStep3
