import React, {useState} from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault() // Stops refresh
        auth
          .signInWithEmailAndPassword(email, password)
          .then((auth) => {
            //logged in redirect to home page
            history.push("/");
          })
          .catch((e) => alert(e.message));
    }

    const register = event => {
        event.preventDefault() // Stops refresh
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //logged in redirect to home page
            history.push("/");
          }).catch(e => alert(e.message))
    }


    return (
      <div className="login">
        <Link to="/">
          <img
            className="login__logo"
            src="https://images-na.ssl-images-amazon.com/images/G/35/x-locale/common/amazon-logo._CB485934782_.gif"
            alt=""
          />
        </Link>
        <div className="login__container">
          <h1>Sign In</h1>
          <form>
            <h5>Email</h5>
            <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
            <h5>Password</h5>
            <input value={password} onChange={event => setPassword(event.target.value)}  type="password" />
            <button type="submit" onClick={login} className="login__SignInButton">Sign In</button>
          </form>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
          </p>
          <button  type="submit" onClick={register} className="login__registerButton">Create your Amazon Account</button>
        </div>
      </div>
    );
}


export default Login;
