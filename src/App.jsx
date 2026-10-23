import { useEffect, useState } from 'react'
import { Layout } from './Layout/Layout'
import { Proyectos } from './Proyectos/Proyectos'
import { Contacto } from './Contacto/Contacto'
import { SkillsBand } from './SkillsBand/SkillsBand'
// CORREGIDO: se sacó el import de './App.css'. Ese archivo solo tenía una
// clase ".app" que nunca se usaba en este componente (el <div> no tenía
// className="app"), así que era código muerto. Se eliminó el archivo.

// CORREGIDO: las imágenes se pasaban como texto plano ('src/assets/img/...').
// Eso puede parecer que funciona en desarrollo, pero en el build de producción
// (npm run build) esas rutas se rompen porque Vite no sabe que tiene que
// procesar y copiar esos archivos. La forma correcta es importarlas como
// módulos, así Vite las optimiza y genera la URL final correcta.
import todoListImg from './assets/img/to-do-list.png'
import pizarronImg from './assets/img/pizarron.png'
import narutoImg from './assets/img/naruto.jpeg'
import proximamenteImg from './assets/img/proxproy.png'

// AGREGADO: se saca la lista de proyectos afuera del JSX y se recorre con
// .map() en el componente Proyectos. Antes cada <TarjetaProyecto/> estaba
// escrita a mano; con un array es más fácil agregar un proyecto nuevo el
// día de mañana (solo agregás un objeto acá, no tocás el layout).
// AGREGADO: lista de skills (lenguajes de programación que se manejan).
// Cada skill tiene: nombre (mostrado), logoUrl (imagen del logo desde CDN),
// y alt (texto alternativo para accesibilidad).
// Estos se mostrarán en una banda carrusel infinita arriba de Proyectos.
const skills = [
  {
    name: 'JavaScript',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    alt: 'Logo de JavaScript'
  },
  {
    name: 'React',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    alt: 'Logo de React'
  },
  {
    name: 'Python',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    alt: 'Logo de Python'
  },
  {
    name: 'Java',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    alt: 'Logo de Java'
  },
  {
    name: 'HTML5',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    alt: 'Logo de HTML5'
  },
  {
    name: 'CSS3',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    alt: 'Logo de CSS3'
  },
  {
    name: 'Node.js',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    alt: 'Logo de Node.js'
  },
  {
    name: 'Git',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    alt: 'Logo de Git'
  },
  {
    name: 'PostgreSQL',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    alt: 'Logo de PostgreSQL'
  },
  {
    name: 'MongoDB',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    alt: 'Logo de MongoDB'
  },
]

const proyectos = [
  {
    nombre: 'To-do-list',
    link: 'https://to-do-list-naza.netlify.app',
    path_foto: todoListImg,
    // TODO (Nazareno): reemplazar por una descripción real del proyecto.
    descripcion: 'Aplicación para crear, completar y eliminar tareas pendientes.',
    descripcionEn: 'An app to create, complete, and delete pending tasks.',
  },
  {
    nombre: 'etch-a-sketch',
    link: 'https://etch-a-sketch-naza.netlify.app',
    path_foto: pizarronImg,
    descripcion: 'Pizarra interactiva para dibujar con el mouse, hecha con JavaScript puro.',
    descripcionEn: 'An interactive drawing board made with vanilla JavaScript.',
  },
  {
    nombre: 'Pygame-Naruto-Shippuden',
    link: 'https://github.com/Sotelo-Nazareno/Pygame-Naruto-Shippuden',
    path_foto: narutoImg,
    descripcion: 'Juego de acción basado en la franquicia Naruto, desarrollado con Pygame.',
    descripcionEn: 'An action game based on the Naruto franchise, developed with Pygame.',
  },
  {
    nombre: 'Próximamente',
    link: '#',
    path_foto: proximamenteImg,
    descripcion: 'Proximamente mas proyectos...🚀',
    descripcionEn: 'More projects coming soon...🚀',
  },
]

function App() {
  const [language, setLanguage] = useState('es')

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <div>
      <Layout language={language} onLanguageChange={setLanguage}>
        {/* AGREGADO: banda de skills (lenguajes de programación). Se muestra
            como un carrusel infinito que va de izquierda a derecha. Se ubica
            arriba de la sección de Proyectos. */}
        <SkillsBand skills={skills} />

        {/* AGREGADO: componente Proyectos, que pone las tarjetas en fila
            horizontal (una al lado de la otra) y trae su propio título,
            para que se note como sección separada de Contacto. */}
        <Proyectos proyectos={proyectos} language={language} />

        {/* AGREGADO: sección de contacto. El navbar ya linkeaba a "#contacto"
            pero esa sección no existía en ningún lado del proyecto. */}
        <Contacto language={language} />
      </Layout>
    </div>
  )
}

export default App
