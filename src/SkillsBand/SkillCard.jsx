/**
 * SkillCard - Componente reutilizable para mostrar un lenguaje/skill individual.
 *
 * Props:
 *   - name (string): Nombre del lenguaje (ej: "React", "JavaScript")
 *   - logoUrl (string): URL de la imagen del logo
 *   - alt (string): Texto alternativo para la imagen
 */

import styles from './SkillsBand.module.css'

export function SkillCard({ name, logoUrl, alt }) {
    return (
        <div className={styles.skillCard}>
            <img src={logoUrl} alt={alt} className={styles.logo} />
            <p className={styles.skillName}>{name}</p>
        </div>
    )
}
