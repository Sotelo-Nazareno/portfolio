import { useState } from 'react'
import styles from './TarjetaProyecto.module.css'

export function TarjetaProyecto({ link, path_foto, nombre, descripcion, descripcionEn, language }) {
  const [volteada, setVolteada] = useState(false)
  const isEnglish = language === 'en'
  const projectName = nombre === 'Próximamente' && isEnglish ? 'Coming soon' : nombre

  function alternarTarjeta(event) {
    event.preventDefault()
    setVolteada((prev) => !prev)
  }

  return (
    <div className={styles.tarjetaContainer}>
      <div className={`${styles.contenido} ${volteada ? styles.volteada : ''}`}>
        <div className={styles.caraFrontal}>
          <h2 className={styles.titulo}>{projectName}</h2>
          <img src={path_foto} alt={projectName} className={styles.imagen} />
          <button type="button" className={styles.boton} onClick={alternarTarjeta}>
            {isEnglish ? 'More information' : 'Más información'}
          </button>
        </div>

        <div className={styles.caraPosterior}>
          <h2 className={styles.titulo}>{projectName}</h2>
          <p className={styles.descripcion}>
            {(isEnglish ? descripcionEn : descripcion) || (isEnglish ? 'Description unavailable.' : 'Descripción no disponible.')}
          </p>
          <div className={styles.botonesPosteriores}>
            <button type="button" className={styles.boton} onClick={alternarTarjeta}>
              {isEnglish ? 'Back' : 'Volver'}
            </button>
            {link && link !== '#' ? (
              <a className={styles.enlaceProyecto} href={link} target="_blank" rel="noopener noreferrer">
                {isEnglish ? 'View project' : 'Ver proyecto'}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}