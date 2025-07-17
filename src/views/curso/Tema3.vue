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
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
                span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.
  
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
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes es una característica fundamental de los derechos humanos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Son temporales y cambiantes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Son universales y aplican a todas las personas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Son exclusivos de ciertos grupos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Son opcionales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes afirmaciones sobre la diversidad cultural es correcta?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fomenta la homogeneización cultural',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Promueve el respeto y la aceptación de las diferencias',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Debilita la identidad cultural de los pueblos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Limita las oportunidades de interacción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La mediación en un conflicto tiene como objetivo principal:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Imponer una solución rápida',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Facilitar el diálogo entre las partes',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Determinar la culpabilidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar las preocupaciones de una parte',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'En un foro comunitario, es importante:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Escuchar solo a las autoridades',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Fomentar la participación de todos los miembros',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Decidir por votación sin consultar a los demás',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Excluir las opiniones de los más jóvenes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué busca la justicia restaurativa en el contexto de un conflicto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aplicar una sanción severa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reparar el daño y restablecer las relaciones',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Castigar a las partes involucradas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar el contexto del conflicto',
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
