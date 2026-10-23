import Footer from "./Footer.jsx"
import { Header } from "./Header.jsx"
import styles from './Layout.module.css'
// CORREGIDO: se importa la imagen como módulo en vez de pasar el string
// 'src/assets/img/foto.JPG'. Igual que en App.jsx, esa ruta como texto se
// rompe en el build de producción.
import fotoPerfil from '../assets/img/foto.JPG'

export function Layout({ children, language, onLanguageChange }){
    return(
        <div className={styles.contenedor}>
            <Header foto={fotoPerfil} language={language} onLanguageChange={onLanguageChange} />
            <main className={styles.main}>
                {children}
            </main>
            <Footer anio={'2026'} nombre_proyecto={language === 'es' ? 'Mi Portfolio' : 'My Portfolio'} />
        </div>
    )
}