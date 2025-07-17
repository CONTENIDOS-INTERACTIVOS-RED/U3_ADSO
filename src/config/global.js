export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Recolección y análisis de requisitos',
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
        titulo: 'Técnicas de recopilación de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Entrevistas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Encuestas y cuestionarios',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Observación directa',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Talleres de trabajo (<em>workshops</em>)',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Revisión de documentos existentes',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: '<em>Brainstorming</em> y <em>Focus Groups</em>',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Priorización de necesidades',
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
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Uso de diagramas UML',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Elementos básicos de UML',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Tipos principales de diagramas UML',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Uso de diagramas UML en el análisis de requisitos',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Uso de diagramas UML en el diseño del sistema',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Herramientas para crear diagramas UML',
            hash: 't_4_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.6',
            titulo: 'Buenas prácticas en la creación de diagramas UML',
            hash: 't_4_6',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Identificación de casos de uso',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Elementos de un caso de uso',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Técnicas para identificar casos de uso',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Criterios para definir un caso de uso',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Representación gráfica de casos de uso',
            hash: 't_5_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.5',
            titulo: 'Documentación de casos de uso',
            hash: 't_5_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.6',
            titulo: 'Pasos para construir un diagrama de casos de uso',
            hash: 't_5_6',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Modelado de datos y procesos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Modelado de datos',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Modelado de procesos',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Técnicas y herramientas de modelado',
            hash: 't_6_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.4',
            titulo:
              'Integración entre el modelo de datos y el modelo de procesos',
            hash: 't_6_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.5',
            titulo: 'Errores comunes en el modelado de datos y procesos',
            hash: 't_6_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.6',
            titulo: 'Aplicaciones prácticas del modelado',
            hash: 't_6_6',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Principios SOLID',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo:
              'Introducción al diseño, orientado a los objetos y principios SOLID',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Principio de Responsabilidad Única (SRP)',
            hash: 't_7_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.3',
            titulo: 'Principio de Abierto/Cerrado (OCP)',
            hash: 't_7_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.4',
            titulo: 'Principio de Sustitución de Liskov (LSP)',
            hash: 't_7_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.5',
            titulo: 'Principio de Segregación de Interfaces (ISP)',
            hash: 't_7_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.6',
            titulo: 'Principio de Inversión de Dependencias (DIP)',
            hash: 't_7_6',
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
