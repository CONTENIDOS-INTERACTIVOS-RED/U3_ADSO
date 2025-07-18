<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Diagramas de clases y secuencias'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-5
        .col-lg-8
          .bg-color-4.p-4.mb-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 En el contexto del diseño orientado a objetos, los diagramas de clases y de secuencia desempeñan un papel esencial al representar gráficamente tanto la estructura estática como la dinámica de un sistema. Estas herramientas, propias del Lenguaje Unificado de Modelado (UML), permiten a los desarrolladores comprender, comunicar y documentar el comportamiento y la organización interna del software de forma clara y precisa (Conesa Caralt & Casas Roma, 2014).
      
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")


      .bg-color-6.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema3/3.svg', alt='')
          .col-lg
            .p-4
              p.mb-4(data-aos="fade-up") El diagrama de clases se centra en describir la estructura estática del sistema. Representa las clases involucradas, sus atributos, métodos y las relaciones entre ellas, tales como asociaciones, herencias, composiciones y dependencias. Este tipo de diagrama resulta fundamental en las fases de análisis y diseño, debido a que proporciona una visión detallada de cómo se organizan los elementos del dominio del problema y cómo interactúan conceptualmente.

              p.mb-0 #[b Este nivel de abstracción permite al equipo de desarrollo planificar con antelación la arquitectura del sistema, detectar redundancias, y aplicar principios de diseño como la cohesión y el bajo acoplamiento.]

      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left") Por otro lado, el diagrama de secuencia se enfoca en el comportamiento dinámico del sistema. A través de una representación cronológica, muestra cómo los objetos interactúan entre sí mediante el envío de mensajes a lo largo del tiempo. Cada mensaje indica una invocación de método y permite visualizar el flujo de control durante un escenario específico (Conesa Caralt & Casas Roma, 2014). 
      
          .bg-color-5.p-4(data-aos="fade-left")
            p.mb-0 En conjunto, ambos diagramas aportan una visión complementaria del sistema: el diagrama de clases establece el marco estructural sobre el cual se apoya la lógica del software, mientras que el diagrama de secuencia detalla los procesos que ocurren dentro de ese marco. Su uso combinado favorece un diseño más sólido y coherente, previene ambigüedades en la interpretación de los requerimientos y facilita la implementación conforme a los principios de la ingeniería de software.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")


      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] Introducción al modelado estructural y de comportamiento en UML

      .bg-color-2.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema3/5.png', alt='')
          .col-lg.text-white
            .p-4
              p.mb-0(data-aos="fade-up") El modelado estructural y de comportamiento en UML, permite representar con claridad los distintos aspectos de un sistema de software desde su concepción hasta su implementación. Mientras el modelado estructural se enfoca en la organización estática del sistema, mediante elementos como clases, objetos, componentes o paquetes, el modelado de comportamiento se encarga de capturar la dinámica del sistema, incluyendo interacciones, procesos y flujos de eventos.

      p(data-aos="fade-up").mb-4 Esta dualidad ofrece una visión completa y equilibrada del sistema, facilitando la comunicación entre los miembros del equipo de desarrollo, la detección temprana de errores conceptuales y la toma de decisiones fundamentadas en etapas tempranas del ciclo de vida del software.

      #t_3_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.2] Elementos básicos de un diagrama de clases

      p(data-aos="fade-up").mb-4 El diagrama de clases es una herramienta central en el modelado estructural dentro de UML, dado que permite representar de manera clara y precisa la arquitectura estática de un sistema orientado a objetos (Teniente López et al., 2015). Sus elementos fundamentales permiten identificar las entidades claves del sistema, sus atributos, comportamientos y las relaciones que existen entre ellas.

      .bg-full-width.bg-color-8.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8.text-white
              h2.mb-4(data-aos="flip-up") Elementos básicos de un diagrama de clases
              p.mb-4(data-aos="fade-right") En el PDF Elementos básicos de un diagrama de clases, se describen con claridad los componentes esenciales de esta notación UML, como clases, atributos, operaciones, relaciones, interfaces y clases abstractas, ilustrando su aplicación mediante ejemplos prácticos. Esta representación facilita el análisis y la planificación del software, promoviendo un diseño coherente, reutilizable y comprensible para todos los involucrados en el proceso de desarrollo.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_8.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Elementos básicos de un diagrama de clases
      
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/6.png', alt='')


      #t_3_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.3] Construcción e interpretación de diagramas de clases


      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/7.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/8.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 La construcción e interpretación de diagramas de clases en UML representa una etapa esencial en el diseño orientado a objetos, puesto que permite visualizar y analizar la estructura estática del sistema antes de su implementación. Esta herramienta facilita la comprensión del dominio del problema y permite establecer claramente las entidades principales, sus atributos, comportamientos y relaciones.

          h3 Proceso de construcción
      
          p(data-aos="fade-left").mb-4 La construcción de un diagrama de clases inicia con la identificación de las entidades principales del sistema, conocidas como clases (Conesa Caralt & Casas Roma, 2014). Estas se derivan del análisis de requerimientos, documentos funcionales o historias de usuario. Una vez determinadas, se siguen los siguientes pasos claves:

      .row.align-items-start.mb-5
        .col-lg-8
      
          AcordionA(tipo="b")
            .div(titulo="Identificación de clases")
              p Se detectan objetos significativos dentro del dominio. Por ejemplo, en un sistema universitario podrían identificarse las clases Estudiante, Curso, Profesor y Matrícula.
      
            .div(titulo="Definición de atributos y métodos")
              p Cada clase se define con propiedades relevantes (atributos) y funciones específicas (métodos). Por ejemplo, el Estudiante podría tener nombre, código, carrera y métodos como matricularCurso() o consultarNotas().
      
            .div(titulo="Establecimiento de relaciones")
              p Se determinan las interacciones entre clases, como asociaciones, herencia, agregaciones o composiciones. Estas relaciones se representan mediante conectores que incluyen multiplicidades, nombres de roles y navegabilidad.
      
            .div(titulo="Inclusión de visibilidad y tipos")
              p Los elementos deben indicar su nivel de acceso (+ público, - privado, # protegido) y tipo de dato (por ejemplo, String, int, boolean).
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/9.png", alt="").mb-4.mb-lg-0

      h2 Ejemplo práctico

      p(data-aos="fade-left").mb-4 A continuación, se muestra una representación gráfica de un ejemplo simple para un sistema de matrícula universitaria:

      
      figure.bg-color-info.p-4.p-md-5.mb-5
        img(src="@/assets/curso/tema3/f2.svg", data-aos="zoom-in", style="max-width: 734px").mx-auto


      h2 Relación: Estudiante ---* Matrícula *--- Curso

      p(data-aos="fade-left").mb-4 En este ejemplo, la clase Matrícula funciona como una entidad intermedia que vincula a Estudiante con Curso, lo cual refleja una relación de muchos a muchos. Las flechas y multiplicidades ayudan a interpretar que un estudiante puede estar inscrito en varios cursos, y un curso puede tener múltiples estudiantes.


      .bg-full-width.bg-color-11
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.mb-5.align-items-center
            .col-lg-4
              figure
                img(src='@/assets/curso/tema3/10.png', alt='')
            .col-lg-8
      
              SlyderF(columnas="col-12 col-lg-6")
                .custom-image-card-2.h-100
                  img.custom-image-card__image(src="@/assets/curso/tema3/icono-1.png" alt="")
                  .custom-image-card__text.p-4
                    p.mb-0 Los nombres de clases y su jerarquía, para identificar si existen clases padres o interfaces.

                .custom-image-card-2.h-100
                  img.custom-image-card__image(src="@/assets/curso/tema3/icono-2.png" alt="")
                  .custom-image-card__text.p-4
                    p.mb-0 Los atributos y métodos, para comprender qué datos maneja cada clase y cómo se comporta.

                .custom-image-card-2.h-100
                  img.custom-image-card__image(src="@/assets/curso/tema3/icono-3.png" alt="")
                  .custom-image-card__text.p-4
                    p.mb-0 Las relaciones, para entender cómo interactúan los objetos y qué dependencias existen entre ellos.

                .custom-image-card-2.h-100
                  img.custom-image-card__image(src="@/assets/curso/tema3/icono-4.png" alt="")
                  .custom-image-card__text.p-4
                    p.mb-0 Las multiplicidades, que indican la cantidad de instancias involucradas en la relación.

                .custom-image-card-2.h-100
                  img.custom-image-card__image(src="@/assets/curso/tema3/icono-5.png" alt="")
                  .custom-image-card__text.p-4
                    p.mb-0 La visibilidad, que revela qué elementos son accesibles desde otras clases.

      
      .bg-color-4.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg
            .p-4
              p.mb-4(data-aos="fade-up") Esta interpretación es útil tanto en la fase de diseño como en la de revisión, y también sirve como guía para la codificación del sistema.
              p.mb-0 El dominio de la construcción e interpretación de diagramas de clases permite a los desarrolladores estructurar sus aplicaciones de manera coherente y reutilizable. Además, actúa como una herramienta de comunicación clara entre analistas, diseñadores y programadores, promoviendo el desarrollo de sistemas más robustos y organizados.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema3/11.svg', alt='')

      #t_3_4.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.4] Elementos fundamentales de un diagrama de secuencia

      p.mb-4 El diagrama de secuencia es una herramienta esencial en el modelado dinámico de sistemas orientados a objetos, ya que permite representar cómo interactúan los objetos entre sí a lo largo del tiempo para cumplir una funcionalidad específica.

      .bg-full-width.bg-color-8.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/12.png', alt='')
      
            .col-lg-8.text-white
              h2.mb-4(data-aos="flip-up") Elementos fundamentales de un diagrama de secuencia 
              p.mb-4(data-aos="fade-right") En el PDF Elementos fundamentales de un diagrama de secuencia, se explican con detalle los componentes clave de esta notación, como objetos, líneas de vida, activaciones, mensajes y bloques de control. Este enfoque facilita la comprensión del flujo de información y del comportamiento del sistema, promoviendo un diseño más claro, estructurado y coherente.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_9.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Elementos fundamentales de un diagrama de secuencia 

      #t_3_5.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.5] Construcción e interpretación de diagramas de secuencia

      p(data-aos="fade-up").mb-4 El proceso de construcción e interpretación de diagramas de secuencia permite representar de forma precisa cómo interactúan los objetos de un sistema en un orden temporal específico. Esta representación facilita la comprensión del comportamiento dinámico de un caso de uso, identificando claramente qué objetos se comunican, qué mensajes se intercambian y cuándo lo hacen (Teniente López et al., 2015).

      .bg-full-width.bg-color-8.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8.text-white
              h2.mb-4(data-aos="flip-up") Construcción e interpretación de diagramas de secuencia 
              p.mb-4(data-aos="fade-right") En el PDF Construcción e interpretación de diagramas de secuencia, se exponen los pasos clave para diseñar correctamente este tipo de diagramas, desde la identificación de participantes hasta la inclusión de condiciones y estructuras de control. Esta herramienta resulta fundamental para validar la lógica del sistema, comunicar su funcionamiento y orientar una implementación precisa y coherente.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_10.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Construcción e interpretación de diagramas de secuencia 
      
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/13.png', alt='')


      #t_3_6.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.6] Relación entre diagramas de clases y de secuencia


      .bg-full-width.bg-color-11.mb-5
        .p-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src="@/assets/curso/tema3/14.svg", data-aos="zoom-in", style="max-width: 610px")
            .col-lg
              p(data-aos="fade-left").mb-4 Para conocer sobre esta temática, lo invitamos a escuchar el siguiente podcast.
              
              TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                texto="Relación entre diagramas de clases y de secuencia"
                tiempo
                :audio="require('../../assets/curso/podcast/podcast1.mp3')"
              )
      p(data-aos="fade-left").mb-4 Para finalizar, lo invitamos a ver el siguiente video, el cual presenta la herramienta StarUML, la cual permite construir los diferentes diagramas UML.

      .bg-full-width.bg-fondo-slider.mb-0
        .p-4.p-md-5
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/r547Ppw446Q?si=2zCQvMUQQ5-pB13h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/106466" target="_blank" rel="noopener noreferrer") Jiménez de Parga, C. (2014). UML Aplicaciones en Java y C++: ( ed.). RA-MA Editorial.  
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=vSx30CDT4i4" target="_blank" rel="noopener noreferrer") videosdeinformatica. [@Videosdeinformatica] (2021, 7 de marzo). UML - Cómo diseñar diagramas de secuencia. [Video]. YouTube. 
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Diseño orientado a objetos y patrones de diseño',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste sobre principios SOLID, patrones de diseño y UML en esta unidad.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de los siguientes principios SOLID promueve la separación de responsabilidades en una clase?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Principio de Inversión de Dependencias (Dependency Inversion Principle)',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Principio de Sustitución de Liskov (Liskov Substitution Principle)',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Principio de Responsabilidad Única (Single Responsibility Principle)',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Principio de Abierto/Cerrado (Open/Closed Principle)',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál es el objetivo principal del patrón de diseño Singleton?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Crear múltiples instancias de una clase para mejorar el rendimiento',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Garantizar que una clase tenga una única instancia accesible globalmente',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Delegar la creación de objetos a una subclase',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Evitar el uso de interfaces',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué característica distingue al patrón Factory Method de otros patrones creacionales?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Proporciona una instancia única',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Permite a las subclases decidir qué objeto instanciar',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Reemplaza las relaciones entre objetos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Define objetos como estructuras planas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué elemento de un diagrama de clases representa una relación de herencia?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Línea continua con rombo',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Línea discontinua con flecha',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Línea con triángulo blanco apuntando hacia la superclase',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Línea curva con punto',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué describe principalmente un diagrama de secuencia en UML?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La estructura estática del sistema',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'El ciclo de vida de una clase',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'La interacción temporal entre objetos',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'La relación entre módulos físicos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
