import './home.css'

import { IconsSocial } from '../../components/Icons-Social';
import { FaInstagram, FaLinkedin, FaYoutube} from 'react-icons/fa'

export default function Home(){
    return(
        <div className='home-container'>
            <h1>Billadas</h1>
            <span>Veja meus links 👇</span>

            <main className='links'>
                <section className='link-area '>
                    <a href="#">
                        <p className='link-text'>Canal no Youtube</p>
                    </a>
                </section>

                <section className='link-area '>
                    <a href="#">
                        <p className='link-text'>Grupo do telegram</p>
                    </a>
                </section>

                <section className='link-area '>
                    <a href="#">
                        <p className='link-text'>Canal no Youtube</p>
                    </a>
                </section>

                <section className='link-area '>
                    <a href="#">
                        <p className='link-text'>Instagram</p>
                    </a>
                </section>

                <footer>
                    <IconsSocial url="https://www.linkedin.com/in/curioussdev/" >
                        <FaLinkedin size={35} color="#FFF"/>
                    </IconsSocial>

                    <IconsSocial url="https://www.instagram.com/_thebill/" >
                        <FaInstagram  size={35} color="#FFF"/>
                    </IconsSocial>

                    <IconsSocial url="https://www.youtube.com/@curiousdev1056" >
                        <FaYoutube size={35} color="#FFF"/>
                    </IconsSocial>
                </footer>
                
            </main>
        </div>
    );
};