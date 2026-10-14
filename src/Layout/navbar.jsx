// CORREGIDO: se importa como CSS Module (nombre.module.css) en vez de CSS
// global, para que las clases no se filtren a otros componentes.
import { useEffect, useState } from 'react'
import styles from './navbar.module.css'

export function Navbar(){
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleInicioClick = (event) => {
        event.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return(
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.contenedor}>
                <Enlace link='#inicio' text='Inicio' onClick={handleInicioClick} />
                <Enlace link='#proyectos' text='Proyectos'/>
                <Enlace link='#contacto' text='Contacto'/>
            </div>
        </nav>
    )
}

const Enlace = ({ link, text, onClick }) =>{
    return(
        <a className={styles.enlace} href={link} onClick={onClick}>{text}</a>
    )
}
