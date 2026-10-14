/**
 * SkillsBand - Componente que muestra una banda carrusel infinita con los
 * lenguajes de programación que se manejan. Los skills se mueven de izquierda
 * a derecha de forma continua y fluida, pasando por toda la pantalla y
 * repitiéndose infinitamente.
 *
 * Props:
 *   - skills (array): Array de objetos con { name, logoUrl, alt }
 */

import { SkillCard } from './SkillCard'
import styles from './SkillsBand.module.css'

export function SkillsBand({ skills }) {
    // Se duplica el array de skills para crear el efecto infinito. La primera
    // copia se ve, y cuando termina de salir de la pantalla, automáticamente
    // aparece la segunda copia. Al usuario le parece que es infinito.
    const duplicatedSkills = [...skills, ...skills]

    return (
        <section className={styles.bandContainer}>
            <div className={styles.band}>
                {duplicatedSkills.map((skill, index) => (
                    <SkillCard
                        key={`${skill.name}-${index}`}
                        name={skill.name}
                        logoUrl={skill.logoUrl}
                        alt={`Logo de ${skill.name}`}
                    />
                ))}
            </div>
        </section>
    )
}
