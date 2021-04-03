import { useState } from "react"
import {Auth} from 'aws-amplify'

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
          <div>
              <div>
                  <label htmlFor="">Email</label><br/>
                  <input type="email" name="username" id="" onChange={HandleChange} value={username} />
              </div>
              <div>
                  <label htmlFor="">Password</label><br/>
                  <input type="password" name="password" id="" onChange={HandleChange} value={password} />
              </div>
              <button type="button" onClick={() => HandleSubmit()}>Loging</button>
          </div>
      </>
    )
}

export default Login