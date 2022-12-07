import './networks.css'
import { useState } from 'react';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input'
import { MdAddLink } from 'react-icons/md'


export default function Networks(){
    const [linkedin, setLinkedin] = useState('');
    const [instagram, setInstagram] = useState('');
    const [youtube, setYoutube] = useState('');
    
    async function handleSave(e){
        e.preventDefault()

        console.log(youtube)
        console.log(linkedin)
        console.log(instagram)
    }

    return(
        <div className='admin-container'>
            <Header />

            <h1 className='title-social'>Suas redes sociais</h1>

            <form className='form' onSubmit={handleSave}>
                <label className='label'>Link do LinkedIn</label>
                <Input 
                    placeholder="Digite a url do LinkedIn..."
                    valeu={linkedin}
                    onChenge={(e)=> setLinkedin(e.target.value)}
                />

                <label className='label'>Link do Instagram</label>
                <Input 
                    placeholder="Digite a url do Instagram..."
                    valeu={instagram}
                    onChenge={(e)=> setInstagram(e.target.value)}
                />

                <label className='label'>Link do Youtube</label>
                <Input 
                    placeholder="Digite a url do Youtube..."
                    valeu={youtube}
                    onChenge={(e)=> setYoutube(e.target.value)}
                />

                <button 
                    type='submit'
                    className='btn-register'
                    
                >
                    Salvar links <MdAddLink size={24} color="#fff" />
                </button>
            </form>
        </div>
    )
}