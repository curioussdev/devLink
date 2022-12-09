import './home.css'
import { useState, useEffect } from 'react'

import { IconsSocial } from '../../components/Icons-Social';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { db } from '../../services/firebaseConnection';
import {
    getDocs,
    collection,
    orderBy,
    query
} from 'firebase/firestore';

export default function Home() {
    const [links, setLinks] = useState([])

    useEffect(() => {
        function loadLinks() {
            const linksRef = collection(db, "links")
            const queryRef = query(linksRef, orderBy("created_at", "asc"))

            getDocs(queryRef).then((snapshot) => {
                let lista = [];

                snapshot.forEach((doc) => {
                    lista.push({
                        id: doc.id,
                        name: doc.data().name,
                        url: doc.data().url,
                        bg: doc.data().bg,
                        color: doc.data().color
                    })
                })
                setLinks(lista)
            })
        }

        loadLinks();
    }, [])
    return (
        <div className='home-container'>
            <h1>Billadas</h1>
            <span>Veja meus links 👇</span>

            <main className="links">

                {links.map((item) => (
                    <section key={item.id} className='link-area' style={{ backgroundColor: item.bg }}>
                        <a href={item.url} target="_blank">
                            <p className='link-text' style={{ color: item.color }} >
                                {item.name}
                            </p>
                        </a>
                    </section>

                ))}


                <footer>
                    <IconsSocial url="https://www.linkedin.com/in/curioussdev/" >
                        <FaLinkedin size={35} color="#FFF" />
                    </IconsSocial>

                    <IconsSocial url="https://www.instagram.com/_thebill/" >
                        <FaInstagram size={35} color="#FFF" />
                    </IconsSocial>

                    <IconsSocial url="https://www.youtube.com/@curiousdev1056" >
                        <FaYoutube size={35} color="#FFF" />
                    </IconsSocial>
                </footer>

            </main>
        </div>
    );
};