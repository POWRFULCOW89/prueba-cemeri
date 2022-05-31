# Prueba técnica CEMERI

Recreación de uno de los artículos de [CEMERI](https://cemeri.org/enciclopedia/que-es-el-ifad/) como parte de una prueba técnica en el proceso de selección para prácticas profesionales.

## Instalación

1. Clonar el repositorio

    ```bash
    gh repo clone POWRFULCOW89/prueba-cemeri
    ```

2. Instalar las dependencias:

    ```bash
    npm i
    ```

3. Iniciar la aplicación con:

    ```bash
    npm start
    ```

## Descripción técnica

Consiste en una aplicación en React haciendo uso de componentes y módulos CSS para evitar la contaminación de estilos globales, sin usar librerías como Bootstrap. Para recrear el sitio, se usa la librería FontAwesome para suplir íconos. Por motivos de tiempo, se omite la implementación de estilos responsivos. Para renderizar los artículos, se utiliza React Markdown, que convierte una cadena de texto en formato Markdown en elementos del DOM. Se asume que la estructura de un artículo consiste en la siguiente:

```json
{
    "title": "string",
    "img": "string",
    "date": "string",
    "author": "string",
    "cites": ["string"],
    "references": ["string"],
    "content": "string",
    "contentPreview": "string"
}
```

## Líneas de mejora

Para terminar la implementación del sitio, es necesario:

- Conectar el componente de [Article](./src/components/Article.js) a la API que provee los artículos,
  - a través de parámetros de ruta, efectos secundarios y llamadas `fetch`, y adaptar el código a la estructura de los mismos.
- Conectar los enlaces a los elementos ancla.
- Habilitar el formulario para comentarios.
- Terminar de pulir estilos para igualar aquellos del sitio.
