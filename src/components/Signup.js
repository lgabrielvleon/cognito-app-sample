import React, { useState } from 'react';
import {Auth} from 'aws-amplify'
import InputFlotting from './InputFlotting';

const Signup = (props) => {
    const [state, setstate] = useState({
        email: '',
        password: '',
        confirmationCode: '',
        newUser: null
    })

    let {email, password, confirmationCode} = state

    const HandleChange = (event) => {
        setstate({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const HandleSubmitSignUp = async () => {
        try {
            const newUser = await Auth.signUp({
                username: state.email,
                password: state.password
            })
            setstate({
                ...state,
                newUser
            })
        } catch (error) {
            console.error('Error en...'+error)
        }
    }

    const HandleSubmitConfirmationCode = async (e) => {
        try {
            await Auth.confirmSignUp(email, confirmationCode)
            await Auth.signIn(email, password)
            props.history.push('/')
        } catch (error) {
            console.error('Error en ...'+error)
        }
    }

    const returnFromConfirmationCode = () => {
        return(
            <>
                
                <div className="row--login align-center my-1 mt-3 px-1">
                    <InputFlotting descLabel="Código de confirmación" name="confirmationCode" type="text" id="confirmationCode" onChange={HandleChange} value={confirmationCode}/>
                </div>
                <div className="row--login align-center mt-1">
                    <button className="btn--login" type="button" onClick={()=>HandleSubmitConfirmationCode()}>CONFIRMAR CÓDGIO</button>
                </div>
                
            </>
        )
    }

    const returnSignin = () => {
        return(
            <>
                <div className="row--login align-center my-1 mt-3 px-1">
                    <InputFlotting descLabel="Correo electrónico" name="email" type="email" id="email" placeholder="Ejemplo. john@gmail.com" onChange={HandleChange}/>
                </div>
                <div className="row--login align-center mt-1 px-1">
                    <InputFlotting descLabel="Contraseña" type="password" name="password" id="password" placeholder="Al menos 8 caracteres" onChange={HandleChange}/>
                </div>
                <div className="row--login align-center mt-1">
                    <button className="btn--login" type="button" onClick={()=>HandleSubmitSignUp()}>REGISTRARME</button>
                </div>
            </>
        )
    }

    return(
        <>{state.newUser === null ? returnSignin() : returnFromConfirmationCode()}</>
    )
}

export default Signup
