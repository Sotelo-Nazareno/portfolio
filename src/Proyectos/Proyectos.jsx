import styles from './Proyectos.module.css'
import { TarjetaProyecto } from '../TarjetaProyecto/TarjetaProyecto'

// AGREGADO (componente nuevo): antes las <TarjetaProyecto/> se ponían
// sueltas directo en App.jsx dentro de un <section> sin ningún display
// definido, así que el navegador las apilaba una debajo de la otra
// (columna) en vez de ponerlas en fila. Este componente las envuelve en
// un contenedor con display:flex en fila, además de agregar un título
// "Proyectos" para que la sección se distinga claramente de Contacto.
export function Proyectos({ proyectos, language }) {
    const isEnglish = language === 'en'

    return (
        <section id="proyectos" className={styles.contenedor}>
            <h2 className={styles.titulo}>{isEnglish ? 'Projects' : 'Proyectos'}</h2>
            <div className={styles.grilla}>
                {proyectos.map((proyecto) => (
                    <TarjetaProyecto
                        key={proyecto.nombre}
                        link={proyecto.link}
                        path_foto={proyecto.path_foto}
                        nombre={proyecto.nombre}
                        descripcion={proyecto.descripcion}
                        descripcionEn={proyecto.descripcionEn}
                        language={language}
                    />
                ))}
            </div>
        </section>
    )
}
