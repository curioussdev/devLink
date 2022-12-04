import { useState } from 'react';
import './login.css'
import { Logo } from '../../components/logo'
import { auth } from '../../services/firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth'


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(e){
        e.preventDefault();

        if(email === '' || password === ''){
            console.log('Preencha todos os campos')
            return;
        }

        signInWithEmailAndPassword(auth, email, password ).then(() => {
            console.log('USUARIO LOGADO COM SUCESSO')
        }).catch(()=>{
            console.log('DEU ERRO PO')
        })
    }

    return(
        <div className='login-container'>
           <Logo/>

           <form className='form' onSubmit={handleLogin}>
                <input 
                    type="email"
                    placeholder='Digite seu email'
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                />

                <input 
                    type="password"
                    placeholder='*********'
                    autoComplete='on'
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                />

                <button type='submit'>Acessar</button>
           </form>

        </div>
    )
}