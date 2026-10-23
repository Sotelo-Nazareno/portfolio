import { Navbar } from "./navbar"
import styles from './Header.module.css'
import { Enlace } from "./navbar"

export function Header({ foto, language, onLanguageChange }){
const isEnglish = language === 'en'

return(
    <header>
        <Navbar language={language} onLanguageChange={onLanguageChange} />
        <div className={styles.contenedor} id="inicio">
            <Imagen ruta={foto} descripcion={isEnglish ? 'Photo of Nazareno Sotelo' : 'Foto de Nazareno Sotelo'} />
            <div className={styles.descripcion} id="sobre-mi">
                <h2>{isEnglish ? 'About me' : 'Sobre mí'}</h2>
                <p>
                    {isEnglish
                        ? 'I am Nazareno, a programming student focused on web development. I enjoy turning ideas into clear, functional, and visually appealing experiences using technologies like React, JavaScript, HTML, and CSS.'
                        : 'Soy Nazareno, un estudiante de programación con enfoque en desarrollo web. Me gusta transformar ideas en experiencias claras, funcionales y visualmente atractivas, usando tecnologías como React, JavaScript, HTML y CSS.'}
                </p>
                <Enlace
                    link={`${import.meta.env.BASE_URL}CV-NazarenoSotelo.pdf`}
                    text={isEnglish ? 'Download CV' : 'Descargar Curriculum'}
                    download='CV-NazarenoSotelo.pdf'
                />
            </div>
        </div>
    </header>
)}

const Imagen = ({ruta, descripcion}) =>{
    return(
        <img src={ruta} alt={descripcion}/>
    )
}