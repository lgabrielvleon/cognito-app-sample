import React, { useState } from 'react';
import {Auth} from 'aws-amplify'

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
                <div>
                    <label htmlFor="">Confirmation Code</label>
                    <input type="text" name="confirmationCode" id="" onChange={HandleChange} value={confirmationCode} />
                </div>
                <button type="button" onClick={()=>HandleSubmitConfirmationCode()}>Confirmate</button>
            </>
        )
    }

    const returnSignin = () => {
        return(
            <>
                <div>
                    <label htmlFor="">Email</label><br/>
                    <input type="email" name="email" id="" onChange={HandleChange} value={email} />
                </div>
                <div>
                    <label htmlFor="">Password</label><br/>
                    <input type="password" name="password" id="" onChange={HandleChange} value={password} />
                </div>
                <br/>
                <button type="button" onClick={()=>HandleSubmitSignUp()}>SignUp</button>
            </>
        )
    }

    return(
        <div>{state.newUser === null ? returnSignin() : returnFromConfirmationCode()}</div>
    )
}

export default Signup
