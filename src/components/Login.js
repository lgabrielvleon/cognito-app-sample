import { useState } from "react"
import {Auth} from 'aws-amplify'

// Artefactory
import './Login.scss'
import './Auth.scss'
import InputFlotting from "./InputFlotting"


const Login = (props) => {
    const [user, setUser] = useState({
      username: '',
      password: ''
    })
  
    let {username,password} = user
    
    const HandleChange = (event) => {
      setUser({
        ...user,
        [event.target.name]: event.target.value
      })
    }
  
    const HandleSubmit = async (event) => {
      try {
        await Auth.signIn(username, password)          
        props.history.push('/')
      } catch (error) {
        console.error('error siging in', error)
      }
    } 
  return(
      <>
        <div className="row--login align-center my-1 mt-3 px-1">
          <InputFlotting descLabel="Correo electrónico" name="username" type="email" id="email" placeholder="Ejemplo. john@gmail.com" onChange={HandleChange}/>
        </div>
        <div className="row--login align-center mt-1 px-1">
          <InputFlotting descLabel="Contraseña" type="password" name="password" id="password" placeholder="Al menos 8 caracteres" onChange={HandleChange}/>
        </div>

        <div className="row--login align-rigth">
          <a href="#!" className="olvido-clave my-1">¿Has olvidado tu contraseña?</a>
        </div>

        <div className="row--login align-center">
          <button className="btn--login" type="button" onClick={() => HandleSubmit()}>INICIAR SESIÓN</button>
        </div>
      </>
    )
}

export default Login