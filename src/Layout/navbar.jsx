// CORREGIDO: se importa como CSS Module (nombre.module.css) en vez de CSS
// global, para que las clases no se filtren a otros componentes.
import { useEffect, useState } from 'react'
import styles from './navbar.module.css'

export function Navbar({ language, onLanguageChange }){
    const [scrolled, setScrolled] = useState(false)
    const isEnglish = language === 'en'

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
                <Enlace link='#inicio' text={isEnglish ? 'Home' : 'Inicio'} onClick={handleInicioClick} />
                <Enlace link='#proyectos' text={isEnglish ? 'Projects' : 'Proyectos'} />
                <Enlace link='#contacto' text={isEnglish ? 'Contact' : 'Contacto'} />
                <div className={styles.idiomas} aria-label={isEnglish ? 'Select language' : 'Seleccionar idioma'}>
                    <button
                        type="button"
                        className={`${styles.botonIdioma} ${language === 'en' ? styles.idiomaActivo : ''}`}
                        aria-pressed={language === 'en'}
                        onClick={() => onLanguageChange('en')}
                    >
                        EN
                    </button>
                    <button
                        type="button"
                        className={`${styles.botonIdioma} ${language === 'es' ? styles.idiomaActivo : ''}`}
                        aria-pressed={language === 'es'}
                        onClick={() => onLanguageChange('es')}
                    >
                        ES
                    </button>
                </div>
            </div>
        </nav>
    )
}

export const Enlace = ({ link, text, onClick, download }) =>{
    return(
        <a className={styles.enlace} href={link} onClick={onClick} download={download}>{text}</a>
    )
}
