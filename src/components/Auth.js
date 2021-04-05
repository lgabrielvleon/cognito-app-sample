import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'


import logo from '../assets/logo.webp'
import './Login.scss'
import './Auth.scss'
import Login from './Login';
import Signup from './Signup';

const Auth = (props) => {
    const styleFont = {
        fontSize: '0.5 rem'
      }

      const [isLogin, setIsLogin] = useState(true)

      const swtichAction = (statusAction) => {
        var signin = document.getElementById('signin')
        var signup = document.getElementById('signup')
            setIsLogin(statusAction)
        if (statusAction) {
            signup.classList.remove('active')
            signin.classList.add('active')
        }else{
            signup.classList.add('active')
            signin.classList.remove('active')
        }
      }

    return(
        <>
          <div className="container--login">
              <div className="col--login">
                <div className="row--login align-rigth mt-1">
                  <FontAwesomeIcon style={styleFont} size="lg" icon={faTimes} />
                </div>
                <div className="row--login align-center my-1 ">
                    <img className="img--logo--login" src={logo} alt=""/>
                </div>
                <div className="row--login align-center justify-content-around my-1">
                  <div className="col--login">
                    <a id="signup" onClick={()=>swtichAction(false)} className="actions--auth " href="#!">Registrarme</a>
                  </div>
                  <div className="col--login">
                    <a id="signin" onClick={()=>swtichAction(true)} className="actions--auth active" href="#!">Iniciar sesión</a>
                  </div>
                </div>

                { isLogin ? <Login {...props}/> : <Signup {...props}/> }

                <div className="row--login align-center my-1 mt-3">
                  <p className="social-media">-O Únase con -</p>
                </div>
                <div className="row--login align-center">
                  <div className="col--login mx-05">
                    <FontAwesomeIcon style={styleFont} size="lg" icon={faFacebook}/>                    
                  </div>
                  <div className="col--login mx-05">
                    <FontAwesomeIcon style={styleFont} size="lg" icon={faGoogle}/>                    
                  </div>
                </div>
                <div className="row--login align-center my-1">
                  <p className="login__terminos--politicas">Al crear tu cuenta, aceptas nuestras <span>Políticas de Privacidad y de Cookies</span><br/>Al unirse aceptas nuestros <span>Términos y condiciones</span></p>
                </div>
              </div>
          </div>
        </>

    )
}

export default Auth