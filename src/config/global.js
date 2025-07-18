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
            titulo: 'Introducción a los patrones de diseño',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Patrones creacionales: visión general',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Patrón Singleton: concepto y fundamentos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Implementación del patrón Singleton',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Patrón Factory Method: concepto y fundamento',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Implementación del patrón Factory Method',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Beneficios de implementar patrones de diseño',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Diagramas de clases y secuencias',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Introducción al modelado estructural y de comportamiento en UML',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Elementos básicos de un diagrama de clase',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Construcción e interpretación de diagramas de clases',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Elementos fundamentales de un diagrama de secuencia',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Construcción e interpretación de diagramas de secuencia',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Relación entre diagramas de clases y de secuencia',
            hash: 't_3_6',
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
        'García Carmona, J. (2012). SOLID y GRASP: Buenas prácticas hacia el éxito en el desarrollo de software. Universidad de Sevilla.',
      link:
        'https://jbravomontero.files.wordpress.com/2012/12/solid-y-grasp-buenas-practicas-hacia-el-exito-en-el-desarrollo-de-software.pdf',
    },
    {
      referencia:
        'Stack Overflow Community. (2019). Principios SOLID [PDF]. RIP Tutorial.',
      link: 'https://riptutorial.com/Download/solid-principles-es.pdf',
    },
    {
      referencia:
        'Piattini Velthuis, M. & Garzás Parra, J. (2015). Fábricas de software: experiencias, tecnologías y organización: ( ed.). RA-MA Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106389',
    },
    {
      referencia:
        'Sampedro Hernández, J. L. (2011). Conocimiento y empresa: la industria del software en México: ( ed.). Plaza y Valdés (México).',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/39007',
    },
    {
      referencia:
        'Teniente López, E. Costal Costa, D. & Sancho Samsó, M. R. (2015). Especificación de sistemas software en UML: ( ed.). Universitat Politècnica de Catalunya.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/61407',
    },
    {
      referencia:
        'Conesa Caralt, J. & Casas Roma, J. (2014). Diseño conceptual de bases de datos en UML: ( ed.). Editorial UOC.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/57635',
    },
  ],
  glosario: [
    {
      termino: 'Abstracción',
      significado:
        'proceso mediante el cual se identifican las características esenciales de un objeto, ignorando las irrelevantes. En programación orientada a objetos, permite definir interfaces claras sin exponer los detalles internos.',
    },
    {
      termino: 'Clase',
      significado:
        'plantilla o modelo a partir del cual se crean objetos. Define atributos y métodos que representan las propiedades y comportamientos de una entidad dentro del sistema.',
    },
    {
      termino: 'Cohesión',
      significado:
        'medida del grado en que los elementos de una clase están relacionados entre sí. Alta cohesión sugiere que una clase tiene una única responsabilidad bien definida, en línea con el Principio de Responsabilidad Única (SRP).',
    },
    {
      termino: 'Dependencia',
      significado:
        'relación entre clases u objetos donde uno necesita del otro para funcionar. El Principio de Inversión de Dependencias (DIP) busca que estas relaciones se basen en abstracciones, no en implementaciones concretas.',
    },
    {
      termino: 'Diagrama de clases',
      significado:
        'representación estática de las clases de un sistema, sus atributos, métodos y relaciones (asociaciones, herencia, composición, etc.). Es fundamental en el modelado estructural de sistemas orientados a objetos.',
    },
    {
      termino: 'Diagrama de secuencia',
      significado:
        'modelo dinámico que ilustra cómo los objetos interactúan entre sí mediante el intercambio de mensajes a lo largo del tiempo. Se utiliza para describir escenarios específicos o casos de uso.',
    },
    {
      termino: 'Encapsulamiento',
      significado:
        'principio que implica ocultar los detalles internos de una clase y exponer solo lo necesario a través de interfaces públicas. Favorece la seguridad y la modularidad del código.',
    },
    {
      termino: 'Patrón de Método de Fábrica (<em>Factory Method</em>)',
      significado:
        'patrón de diseño creacional que define una interfaz para crear objetos, pero permite que las subclases decidan qué clase instanciar. Promueve la flexibilidad y reutilización del código.',
    },
    {
      termino: 'Herencia',
      significado:
        'mecanismo que permite a una clase derivar de otra, heredando sus atributos y comportamientos. Facilita la reutilización y la extensión de funcionalidades.',
    },
    {
      termino: 'Interface',
      significado:
        'contrato que define un conjunto de métodos sin implementar. Las clases que implementan una interfaz se comprometen a definir esos métodos, lo que promueve la interoperabilidad y el cumplimiento del Principio de Segregación de Interfaces (ISP).',
    },
    {
      termino: 'Liskov (Principio de Sustitución de Liskov)',
      significado:
        'principio SOLID que establece que una subclase debe poder sustituir a su clase base sin alterar el comportamiento esperado del programa. Garantiza coherencia en la jerarquía de clases.',
    },
    {
      termino: 'Singleton',
      significado:
        'patrón de diseño que asegura que una clase tenga una única instancia en todo el sistema y proporciona un punto de acceso global a ella. Es útil para controlar recursos compartidos como conexiones o configuraciones.',
    },
  ],
}
