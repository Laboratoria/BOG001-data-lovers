# Data Lovers

## Índice

- [1. Descripción del proyecto](#1-descripción-del-proyecto)
- [2. Investigación UX](#2-Investigación-UX)
- [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
- [4. Checklist](#4-Checklist)

---

## 1. Descripción del proyecto

Una API creada para los seguidores de la tan famosa serie animada para adultos Rick and Morty. Esta API fue creada para facilitar la busqueda tanto de personajes como de lugares importantes de la serie, en la que se pueden encontrar datos curiosos como las estadisticas de cantidad de personajes que habitan un lugar y poder filtar por especie los personajes.

<figure>
<img width="500px" src="./prototipo-alta-web-FirstView.png">
<figcaption>Vista principal</figcaption>
</figure>
<figure>
<img width="500px" src="./prototipo-alta-locations-web.png">
<figcaption>Vista Locations</figcaption>
</figure>
<figure>
<img width="500px" src="./prototipo-alta-characters-web.png">
<figcaption>Vista Characters</figcaption>
</figure>

## 2. Investigación UX

### ¿Quiénes son los principales usuarios de producto?

Nuestros usuarios son personas entre la adolecencia y la adultez que se interesen por conocer sobre la serie Rick and Morty, que hayan visto la serie alguna vez y quieran conocer más sobre ese tipo de informción, o que solo tengan el interes y quieran saber un poco para determinar si es su tipo de serie.

### ¿Cuáles son los objetivos de estos usuarios en relación con tu producto?

El objetivo de nuestros usuarios es usar nuestra API para obtener información general de la serie de televisión.

### ¿Cómo crees que el producto que estás creando está resolviendo sus problemas?

Nuestra API le ofrece al usuario una manera fácil y rapida de conocimiento sobre la serie y datos curiosos que pueden ser interesantes en el momento de ver capítulos y tener el contexto de diferentes temas.

<figure>
<img width="500px" src="./prototipo-baja-firstView.jpg">
<figcaption>Primer prototipo primera vista mobile</figcaption>
</figure>
<figure>
<img width="500px" src="./prototipo-baja-firstView-web.jpeg">
<figcaption>Primer prototipo primera vista web</figcaption>
</figure>

Con feedback de diferentes compañeras adaptamos colores y distribución de las diferentes vistas

<figure>
<img width="500px" src="./prototipo-alta-characters-web.jpeg">
<figcaption>Primer prototipo characters web</figcaption>
</figure>

## 3. Objetivos de aprendizaje

El objetivo principal de este proyecto es que aprendas a diseñar y construir una
interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesita.

### HTML y CSS

- [x] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
- [x] [Uso de selectores de CSS.]
- [ ] [Construir tu aplicación respetando el diseño realizado (maquetación).]
- [x] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM y Web APIs

- [x] Uso de selectores del DOM.
- [x] Manejo de eventos del DOM.
- [ ] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
      (appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

- [x] Uso de condicionales (if-else | switch | operador ternario)
- [x] Uso de bucles (for | for..in | for..of | while)
- [x] Uso de funciones (parámetros | argumentos | valor de retorno)
- [x] Manipular arrays (filter | map | sort | reduce)
- [x] Manipular objects (key | value)
- [x] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
      | [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
- [ ] Diferenciar entre expression y statements.
- [ ] Diferenciar entre tipos de datos atómicos y estructurados.

### Testing

- [x] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

- [ ] Organizar y dividir el código en módulos (Modularización)
- [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
- [ ] Uso de linter (ESLINT)

### Git y GitHub

- [x] Uso de comandos de git (add | commit | pull | status | push)
- [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)
- [ ] Colaboración en Github (branches | pull requests | |tags)

### UX

- [x] Diseñar la aplicación pensando y entendiendo al usuario.
- [ ] Crear prototipos para obtener feedback e iterar.
- [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
- [ ] Planear y ejecutar tests de usabilidad.

## 4. Checklist

- [x] Usa VanillaJS.
- [x] No hace uso de `this`.
- [ ] Pasa linter (`npm run pretest`)
- [x] Pasa tests (`npm test`)
- [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
      lines y branches.
- [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
- [ ] Incluye historias de usuario en `README.md`.
- [x] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
      `README.md`.
- [x] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
      en `README.md`.
- [ ] Incluye link a Zeplin o Figma en `README.md`.
- [ ] Incluye el listado de problemas que detectaste a través de tests de
      usabilidad en el `README.md`.
- [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
- [x] UI: Permite ordenar data por uno o más campos (asc y desc).
- [x] UI: Permite filtrar data en base a una condición.
- [x] UI: Es _responsive_.
