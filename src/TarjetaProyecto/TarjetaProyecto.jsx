import { useState } from 'react'
import styles from './TarjetaProyecto.module.css'

export function TarjetaProyecto({ link, path_foto, nombre, descripcion }) {
  const [volteada, setVolteada] = useState(false)

  function alternarTarjeta(event) {
    event.preventDefault()
    setVolteada((prev) => !prev)
  }

  return (
    <div className={styles.tarjetaContainer}>
      <div className={`${styles.contenido} ${volteada ? styles.volteada : ''}`}>
        <div className={styles.caraFrontal}>
          <h2 className={styles.titulo}>{nombre}</h2>
          <img src={path_foto} alt={nombre} className={styles.imagen} />
          <button type="button" className={styles.boton} onClick={alternarTarjeta}>
            Más información
          </button>
        </div>

        <div className={styles.caraPosterior}>
          <h2 className={styles.titulo}>{nombre}</h2>
          <p className={styles.descripcion}>{descripcion || 'Descripción no disponible.'}</p>
          <div className={styles.botonesPosteriores}>
            <button type="button" className={styles.boton} onClick={alternarTarjeta}>
              Volver
            </button>
            {link && link !== '#' ? (
              <a className={styles.enlaceProyecto} href={link} target="_blank" rel="noopener noreferrer">
                Ver proyecto
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}