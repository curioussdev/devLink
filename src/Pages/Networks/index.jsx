import './networks.css'
import { useState } from 'react';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input'
import { MdAddLink } from 'react-icons/md'

import { db } from '../../services/firebaseConnection'; 
import { setDoc, doc, getDoc} from 'firebase/firestore';
import { toast } from 'react-toastify';

export default function Networks(){
    const [linkedin, setLinkedin] = useState('');
    const [instagram, setInstagram] = useState('');
    const [youtube, setYoutube] = useState('');
    
    async function handleSave(e){
        e.preventDefault()

       await setDoc(doc(db, "social", "link"), {
            linkedin: linkedin,
            instagram: instagram,
            youtube: youtube,
            created_at: new Date()
        }).then(()=>{
            toast.success("Redes sociais salvas com sucesso.")
            console.log("Urls Salvas com sucesso")
        }).catch((error)=>{
            toast.error("erro ao salvar redes sociais.")
            console.log("ERRO AO SALVAR" + error)
        })

        
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
                    onChange={ (e)=> setLinkedin(e.target.value)}
                />

                <label className='label'>Link do Instagram</label>
                <Input 
                    placeholder="Digite a url do Instagram..."
                    valeu={instagram}
                    onChange={ (e)=> setInstagram(e.target.value)}
                />

                <label className='label'>Link do Youtube</label>
                <Input 
                    placeholder="Digite a url do Youtube..."
                    valeu={youtube}
                    onChange={ (e)=> setYoutube(e.target.value)}
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