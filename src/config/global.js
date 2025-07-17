export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: ' Diseño orientado a objetos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Principios SOLID',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Introducción al diseño, orientado a los objetos y principios SOLID',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Principio de Responsabilidad Única (SRP)',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Principio de Abierto/Cerrado (OCP)',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Principio de Sustitución de Liskov (LSP)',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Principio de Segregación de Interfaces (ISP)',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Principio de Inversión de Dependencias (DIP)',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Patrones de diseño (Factory, Singleton)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Criterios para priorizar (valor de negocio, urgencia, viabilidad técnica)',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Métodos de priorización',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Herramientas de apoyo en la priorización',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Resolución de conflictos entre prioridades',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Herramientas de análisis',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Diagramas de casos de uso',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Historias de usuario',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Matriz de trazabilidad de requisitos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Gil Pascual, J. A. (2016). Técnicas e instrumentos para la recogida de información: ( ed.). UNED - Universidad Nacional de Educación a Distancia.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/48876',
    },
    {
      referencia:
        'Fresno Chávez, C. (2018). ¿Cómo gestionar la información científico-técnica?: ( ed.). Ciudad Educativa.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/36730',
    },
    {
      referencia:
        'Genero Bocco, M. Cruz Lemus, J. A. & Piattini Velthuis, M. G. (2014). Métodos de investigación en ingeniería del <em>Software</em>: ( ed.). RA-MA Editorial.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106450',
    },
    {
      referencia:
        'Echeverri, J. Aristizábal, M. & González, L. (2013). Reflexiones sobre ingeniería de requisitos y pruebas de <em>Software</em>: ( ed.). Corporación Universitaria Remington. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/68913 ',
    },
    {
      referencia:
        'Universidad Politécnica Salesiana. (2021). Priorización de requisitos para una adecuada calidad de <em>Software</em>. ',
      link:
        'https://dspace.ups.edu.ec/bitstream/123456789/20957/1/UPS-GT003395.pdf',
    },
    {
      referencia:
        'Zapata Jaramillo, C. M. (2006). Alineación entre metas organizacionales y elicitación de requisitos del <em>Software</em>: ( ed.). Red Dyna.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/304',
    },
    {
      referencia:
        'Genero Bocco, M. Cruz Lemus, J. A. & Piattini Velthuis, M. G. (2014). Métodos de investigación en ingeniería del <em>Software</em>: ( ed.). RA-MA Editorial.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106450',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de requisitos',
      significado:
        'proceso mediante el cual se estudian, refinan y documentan las necesidades y expectativas de los usuarios respecto a un sistema o producto.',
    },
    {
      termino: 'Caso de uso',
      significado:
        'técnica de recopilación que describe cómo los usuarios interactúan con el sistema para lograr un objetivo específico.',
    },
    {
      termino: 'Entrevistas estructuradas',
      significado:
        'método de recopilación de requisitos en el que se realizan preguntas previamente definidas a los usuarios o interesados para obtener información precisa. ',
    },
    {
      termino: 'Encuestas',
      significado:
        'herramienta utilizada para recopilar datos de una amplia audiencia mediante cuestionarios diseñados para identificar necesidades y requisitos.',
    },
    {
      termino: 'Escucha activa',
      significado:
        'habilidad utilizada durante la recopilación de requisitos que implica prestar atención completa al interlocutor, comprendiendo sus necesidades explícitas e implícitas.',
    },
    {
      termino: 'Historias de usuario',
      significado:
        'Descripciones breves de funcionalidades vistas desde la perspectiva del usuario final, utilizadas para entender mejor las necesidades del cliente.',
    },
    {
      termino: 'Matriz de priorización',
      significado:
        'herramienta de análisis que permite clasificar y ordenar requisitos o necesidades según criterios como el valor, costo o riesgo.',
    },
    {
      termino: 'Priorización MoSCoW',
      significado:
        'Técnica que categoriza los requisitos en cuatro grupos: <em>Must have</em> (deben tener), <em>Should have</em> (deberían tener), <em>Could have</em> (podrían tener) y <em>Won’t have</em> (no se tendrán por ahora).',
    },
    {
      termino: 'Prototipado',
      significado:
        'Método de recopilación que consiste en crear representaciones visuales preliminares de un sistema para clarificar y validar requisitos.',
    },
    {
      termino: 'Reuniones de enfoque (<em>Focus Group</em>)',
      significado:
        'Técnica que reúne a usuarios o interesados en sesiones grupales para discutir y explorar necesidades comunes sobre un sistema.',
    },
    {
      termino: '<em>Software</em> de gestión de requisitos',
      significado:
        'Aplicaciones diseñadas para documentar, organizar, rastrear y priorizar requisitos a lo largo del ciclo de vida del proyecto.',
    },
    {
      termino: 'Taller de requisitos (<em>Workshop</em>)',
      significado:
        'Actividad colaborativa donde los interesados trabajan juntos para definir, refinar y priorizar los requisitos del sistema.',
    },
  ],
}
