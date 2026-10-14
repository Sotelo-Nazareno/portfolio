import { Navbar } from "./navbar"
import styles from './Header.module.css'

export function Header({foto}){

return(
    <header>
        <Navbar/>
        <div className={styles.contenedor} id="inicio">
            <Imagen ruta={foto} descripcion='Foto de Nazareno Sotelo'/>
            <div className={styles.descripcion} id="sobre-mi">
                <h2>Sobre mí</h2>
                <p>
                    Soy Nazareno, un estudiante de programación con enfoque en desarrollo web.
                    Me gusta transformar ideas en experiencias claras, funcionales y visualmente
                    atractivas, usando tecnologías como React, JavaScript, HTML y CSS.
                </p>
            </div>
        </div>
    </header>
)}

const Imagen = ({ruta, descripcion}) =>{
    return(
        <img src={ruta} alt={descripcion}/>
    )
}