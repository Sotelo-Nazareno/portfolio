import styles from './Footer.module.css'

function Footer({anio, nombre_proyecto}){
    return(
        <div className={styles.footer}>
            {/* CORREGIDO: <copy1> no es una etiqueta HTML válida (no existe),
                así que el navegador la ignoraba y no rompía nada visualmente,
                pero tampoco hacía lo que probablemente buscabas: mostrar el
                símbolo de copyright ©. Lo reemplacé por un <span> con la
                entidad &copy; */}
            <p><span>&copy; Nazareno Sotelo {anio} -</span></p>
            <p>{nombre_proyecto}</p>
        </div>
    )
}

export default Footer;