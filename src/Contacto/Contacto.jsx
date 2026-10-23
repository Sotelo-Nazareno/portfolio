import styles from './Contacto.module.css'

// AGREGADO (componente nuevo): sección de contacto.
// El navbar tenía un link a "#contacto" que no llevaba a ningún lado.
// Un portfolio necesita siempre una forma clara de que te contacten,
// así que agregué esta sección con GitHub y mail (usando los íconos
// "github-icon" y "social-icon" que ya estaban en public/icons.svg
// pero no se usaban en ningún componente). Ya está cargada con tus
// datos reales.
export function Contacto({ language }) {
    const isEnglish = language === 'en'

    return (
        <section id="contacto" className={styles.contenedor}>
            <h2>{isEnglish ? 'Contact' : 'Contacto'}</h2>
            <p>
                {isEnglish
                    ? 'Would you like to get in touch? You can find me here:'
                    : '¿Querés hablar conmigo? Podés encontrarme acá:'}
            </p>
            <div className={styles.enlaces}>
                <a
                    className={styles.enlace}
                    href="https://github.com/Sotelo-Nazareno"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg className={`${styles.icono} ${styles.githubIcon}`} aria-hidden="true" viewBox="0 0 19 19">
                        <use href="/icons.svg#github-icon" xlinkHref="/icons.svg#github-icon" />
                    </svg>
                    GitHub
                </a>
                <a
                    className={styles.enlace}
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=nazarenohernansotelo@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg className={`${styles.icono} ${styles.emailIcon}`} aria-hidden="true" viewBox="0 0 20 20">
                        <use href="/icons.svg#social-icon" xlinkHref="/icons.svg#social-icon" />
                    </svg>
                    Email
                </a>
            </div>
        </section>
    )
}
