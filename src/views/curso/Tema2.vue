<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Patrones de diseño (Factory, Singleton)'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-5.justify-content-center.align-items-center
        .col-lg-10
          p.mb-4 Los patrones de diseño, como #[b Factory] y #[b Singleton], representan soluciones reutilizables y comprobadas para problemas comunes en el desarrollo de <em>software</em> orientado a objetos.

          .bg-color-9.mb-0(data-aos="fade-up")
            .row.justify-content-center.align-items-center
              .col-lg-auto
                figure
                  img(src='@/assets/curso/tema2/1.svg', alt='')
              .col-lg
                .p-4
                  p.mb-0(data-aos="fade-up") El patrón #[b Factory] permite delegar la creación de objetos a una clase especializada, lo cual promueve el principio de abstracción y facilita la incorporación de nuevas clases sin alterar el código existente.
          
          .bg-color-10.mb-0(data-aos="fade-up")
            .row.justify-content-center.align-items-center
              .col-lg
                .p-4
                  p.mb-0(data-aos="fade-up") Por otro lado, el patrón #[b Singleton] garantiza que una clase tenga una única instancia accesible globalmente, asegurando un punto de control centralizado, útil en casos como la gestión de configuraciones o conexiones compartidas.
              .col-lg-auto
                figure
                  img(src='@/assets/curso/tema2/2.svg', alt='')


      p(data-aos="fade-up").mb-5 Ambos patrones contribuyen a la creación de arquitecturas más modulares, escalables y fáciles de mantener, al separar claramente la lógica de creación de objetos del resto de la aplicación (Sampedro Hernández, 2011).

      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Introducción a los patrones de diseño

      p(data-aos="fade-up").mb-5 Los patrones de diseño constituyen una herramienta clave en la ingeniería de <em>software</em>, ya que ofrecen soluciones probadas a problemas comunes en el diseño de sistemas orientados a objetos.


      .bg-full-width.bg-color-8.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/3.png', alt='')
      
            .col-lg-8.text-white
              h2.mb-4(data-aos="flip-up") Introducción a los patrones de diseño
              p.mb-4(data-aos="fade-right") En el PDF Introducción a los patrones de diseño, se explican los orígenes, propósitos y clasificaciones fundamentales de estos patrones, destacando su utilidad para crear <em>software</em> más robusto, reutilizable y fácil de mantener. A través de ejemplos claros, se muestra cómo aplicar patrones creacionales, estructurales y de comportamiento en contextos reales de programación.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Introducción a los patrones de diseño


      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Patrones creacionales: visión general

      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 Los patrones creacionales constituyen una categoría esencial dentro del conjunto de patrones de diseño orientados a objetos, puesto que abordan la forma en que los objetos son creados en el <em>software</em>. Su propósito principal es abstraer el proceso de instanciación, de modo que el código cliente no dependa directamente de las clases concretas, sino que trabaje con interfaces o clases abstractas. Esto promueve la flexibilidad, reutilización y mantenimiento del sistema (Piattini & Garzás, 2015).
      
          .bg-color-4.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 En lugar de crear objetos directamente con la instrucción new, los patrones creacionales proporcionan mecanismos que permiten delegar esa responsabilidad, asegurando que la creación sea controlada, centralizada y adaptable, según el contexto de ejecución.
      
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")

      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
        .col-lg-8
          h5(data-aos="fade-left").mb-4 Principales patrones creacionales
          p(data-aos="fade-left").mb-4 Existen cinco patrones creacionales reconocidos ampliamente:

      
          #bg-icono.bg-color-1.p-4.bg-icono-fondo(data-aos="fade-left").mb-4
            p.mb-0 1. Singleton.
            p.mb-0 2. Factory Method.
            p.mb-0 3. Abstract Factory.
            p.mb-0 4. Builder.
            p.mb-0 5. Prototype.

          p.mb-0 Cada uno resuelve un problema particular relacionado con la creación de objetos:

      .row.align-items-start.mb-5
        .col-lg-8
      
          AcordionA(tipo="b")
            .div(titulo="Singleton")
              p Este patrón garantiza que una clase solo tenga una instancia en todo el sistema, y proporciona un punto de acceso global a ella. Es útil cuando se necesita controlar el acceso a recursos compartidos, como archivos de configuración, conexiones a bases de datos o servicios globales.
      
            .div(titulo="Factory Method")
              p Permite delegar la creación de objetos a subclases que deciden qué clase concreta instanciar. Es útil cuando se desea desacoplar el código cliente del tipo exacto del objeto que necesita.
      
            .div(titulo="Abstract Factory")
              p Este patrón permite crear familias de objetos relacionados sin especificar sus clases concretas. Es ideal para sistemas que requieren garantizar la compatibilidad entre múltiples productos o componentes (Piattini & Garzás, 2015).
      
            .div(titulo="Builder")
              p Este patrón se aplica cuando se requiere construir objetos complejos paso a paso, permitiendo distintas representaciones del mismo producto final. Resulta útil en casos donde la construcción requiere muchos parámetros opcionales.

            .div(titulo="Prototype")
              p Este patrón se utiliza para clonar objetos ya existentes, especialmente cuando la creación de un objeto es costosa en términos de tiempo o recursos.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/8.png", alt="").mb-4.mb-lg-0

      #t_2_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.3] Patrón Singleton: concepto y fundamentos

      
      p(data-aos="fade-up").mb-5 El control de instancias en el diseño de <em>software</em> es clave para asegurar la coherencia del comportamiento del sistema, especialmente cuando se trata de recursos compartidos.

      .bg-full-width.bg-color-8.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/9.png', alt='')
      
            .col-lg-8.text-white
              h2.mb-4(data-aos="flip-up") Patrón Singleton: concepto y fundamentos 

              p.mb-4(data-aos="fade-right") En el PDF Patrón Singleton, se analiza cómo este patrón creacional permite restringir la creación de objetos a una sola instancia por clase, proporcionando un punto de acceso global. A través de ejemplos prácticos, se ilustra su estructura, ventajas, limitaciones y aplicaciones comunes, como el manejo de configuraciones, logs o conexiones a bases de datos.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Patrón Singleton: concepto y fundamentos 


      #t_2_4.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.4] Implementación del patrón Singleton


      p(data-aos="fade-up").mb-5 La implementación técnica del patrón Singleton permite controlar eficazmente la creación de instancias dentro de una aplicación, asegurando que una clase solo tenga un único objeto activo a lo largo de su ciclo de vida.

      .bg-full-width.bg-color-8.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8.text-white
              h2.mb-4(data-aos="flip-up") Implementación del patrón Singleton 
              p.mb-4(data-aos="fade-right") En el PDF Implementación del patrón Singleton, se presentan las principales estructuras de codificación, incluyendo ejemplos clásicos y versiones adaptadas a entornos multihilo. Asimismo, se exponen variaciones comunes, aplicaciones prácticas y recomendaciones para su correcta utilización en el desarrollo de software profesional.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Implementación del patrón Singleton 
      
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/10.png', alt='')

      #t_2_5.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.5] Patrón Factory Method: concepto y fundamento

      
      figure.bg-color-info.p-4.p-md-5.mb-5
        img(src="@/assets/curso/tema2/f1.svg", data-aos="zoom-in", style="max-width: 644px").mx-auto


      p(data-aos="fade-up").mb-4 El patrón Factory Method, también conocido como método fábrica, es un patrón creacional que permite delegar la creación de objetos a subclases, promoviendo así la flexibilidad y extensibilidad del código sin comprometer su estructura. En lugar de instanciar directamente una clase concreta, el patrón define una interfaz para la creación de objetos, dejando que las subclases decidan qué clase instanciar (Piattini & Garzás, 2015).

      p(data-aos="fade-up").mb-5 Este enfoque resulta especialmente útil en situaciones donde el código debe trabajar con objetos cuyo tipo exacto se desconoce hasta el tiempo de ejecución, o cuando se desea desacoplar el proceso de creación del uso concreto del objeto.

      h2 Fundamentos del patrón Factory Method

      p(data-aos="fade-up").mb-4 La estructura del patrón se basa en tres componentes principales:

      .row.justify-content-center.align-items-stretch.mb-4
        .col-lg-4
          .bg-color-8.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/11.svg", style="max-width: 80px").mx-auto
              .col-lg.text-white
                h5.mb-2 Producto (Product)
                p.mb-0 Define la interfaz común de los objetos que se crean.
      
        .col-lg-4
          .bg-color-8.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/12.svg", style="max-width: 80px").mx-auto
              .col-lg.text-white
                h5.mb-2 Creador (Creator)
                p.mb-0 Declara el método fábrica que devuelve objetos de tipo Producto.
      
        .col-lg-4
          .bg-color-8.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/13.svg", style="max-width: 80px").mx-auto
              .col-lg.text-white
                h5.mb-2 Creador Concreto (ConcreteCreator)
                p.mb-0 Implementa el método fábrica y decide qué objeto crear.


      p(data-aos="fade-up").mb-4 Este patrón promueve el principio de abierto/cerrado, dado que permite extender la creación de nuevos productos sin modificar el código existente del creador.

      #t_2_6.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.6] Implementación del patrón Factory Method


      .bg-full-width.bg-color-11
        .px-4.px-md-5.py-4


          .row.mb-4
            .col-lg-9
              p(data-aos="fade-left") La implementación del patrón Factory Method se basa en la creación de una jerarquía de clases en la que las subclases determinan la instancia concreta que se debe generar. El propósito fundamental es encapsular la lógica de creación de objetos en un método especializado, conocido como “fábrica”, permitiendo que el código cliente opere con abstracciones sin conocer las clases específicas involucradas.
          
              .bg-color-4.p-4(data-aos="fade-left").bordes-3
                p.mb-0 Este patrón proporciona una solución efectiva cuando se necesita crear objetos que comparten una interfaz común, pero tienen comportamientos diferentes, dependiendo del contexto en el que se utilicen. Su implementación sigue una estructura bien definida que facilita la reutilización, la extensibilidad y el bajo acoplamiento entre componentes (Piattini & Garzás, 2015).
          
            .col-lg-3
              figure
                img(src="@/assets/curso/tema2/14.svg", data-aos="zoom-in")

          h2.mb-5 Estructura de implementación


          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-3.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/15.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Interfaz Producto
                  p.mb-0.text-center Define el contrato que todas las clases concretas deben seguir.
            .col-lg-3.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/16.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Clases Producto Concreto
                  p.mb-0.text-center Implementan el comportamiento específico del producto.
            .col-lg-3.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/17.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Clase Creadora (abstracta o interfaz)
                  p.mb-0.text-center Declara el método fábrica (factoryMethod) y posiblemente métodos adicionales que utilizan el producto.
            .col-lg-3.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/18.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Clases Creadoras Concretas
                  p.mb-0.text-center Sobrescriben el método fábrica para instanciar productos específicos.


          p Los pasos para implementar patrón de diseño Factory, son:

      .bg-full-width.bg-color-info.mb-5
        .p-4.p-md-5
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-10
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema2/info1.svg', alt='', style="max-width: 1050px;").mx-auto
      
                .bg-color-white.box-shadow.p-3(x="9%" y="30%" numero="+")
                  h5 Identificar la necesidad de crear objetos de forma flexible
                  p Primero se debe reconocer que se tiene una lógica en la aplicación que crea objetos de una clase determinada, pero se desea desacoplar la creación del objeto de su uso. Esto ocurre, por ejemplo, cuando no se sabe de antemano qué clase exacta se necesitará instanciar.
      
                .bg-color-white.box-shadow.p-3(x="25.7%" y="18%" numero="+")
                  h5 Definir una interfaz o clase abstracta común
                  p Crear una interfaz o clase base que defina los métodos que todas las clases concretas deben implementar. Esto permite que las clases creadas por la fábrica sean tratadas de manera uniforme.
                  figure
                    img(src="@/assets/curso/tema2/19.svg", alt='', style="max-width: 350px;").mx-auto
      
                .bg-color-white.box-shadow.p-3(x="58%" y="12%" numero="+")
                  h5 Crear las clases concretas que implementan la interfaz
                  p Desarrollar una o más clases que implementen la interfaz definida. Estas serán las posibles variantes de objetos que el Factory podrá crear.
                  figure
                    img(src="@/assets/curso/tema2/20.svg", alt='', style="max-width: 350px;").mx-auto
      
                .bg-color-white.box-shadow.p-3(x="74.5%" y="31%" numero="+")
                  h5 Crear la clase Factory
                  p Esta clase será la encargada de decidir qué objeto concreto instanciar, según parámetros dados (por ejemplo, un string o un enum).
                  figure
                    img(src="@/assets/curso/tema2/21.svg", alt='', style="max-width: 350px;").mx-auto
      
                .bg-color-white.box-shadow.p-3(x="91%" y="38%" numero="+")
                  h5 Utilizar la fábrica desde el código cliente
                  p En el código donde se necesita crear un producto, simplemente se llama al método de la fábrica, evitando la creación directa de objetos concretos.
                  figure
                    img(src="@/assets/curso/tema2/22.svg", alt='', style="max-width: 350px;").mx-auto

      h2 Ejemplo práctico en Java: creación de notificaciones

      p(data-aos="fade-up").mb-4 Supóngase que una aplicación permite enviar notificaciones por distintos canales, como correo electrónico o SMS. Se desea que el cliente no conozca cómo se crea cada tipo de notificación.

      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg
                h4.mb-4.text-center Interfaz Producto
                figure
                  img(src="@/assets/curso/tema2/slide-1.svg", style="max-width: 670px;").mx-auto

            .row.align-items-center.p-4.p-md-5
              .col-lg
                h4.mb-4.text-center Productos Concretos
                figure
                  img(src="@/assets/curso/tema2/slide-2.svg", style="max-width: 670px;").mx-auto

            .row.align-items-center.p-4.p-md-5
              .col-lg
                h4.mb-4.text-center Creador abstracto
                figure
                  img(src="@/assets/curso/tema2/slide-3.svg", style="max-width: 670px;").mx-auto

            .row.align-items-center.p-4.p-md-5
              .col-lg
                h4.mb-4.text-center Creadores concretos
                figure
                  img(src="@/assets/curso/tema2/slide-4.svg", style="max-width: 670px;").mx-auto

            .row.align-items-center.p-4.p-md-5
              .col-lg
                h4.mb-4.text-center Uso desde el cliente
                figure
                  img(src="@/assets/curso/tema2/slide-5.svg", style="max-width: 670px;").mx-auto


      
      .bg-full-width.bg-color-3.mb-0
        .p-4.p-md-5
          h2.mb-5 Aspectos claves de la implementación
          div.row.justify-content-center.align-items-stretch.mb-0
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/23.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.mb-2.text-center Flexibilidad
                p.mb-0.text-center La lógica de creación está aislada, lo que permite modificar los productos sin cambiar el código cliente.
          
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/24.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.mb-2.text-center Reusabilidad
                p.mb-0.text-center El método notificar() funciona independientemente del tipo de notificación que se cree.
          
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/25.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.mb-2.text-center Extensibilidad
                p.mb-0.text-center Agregar un nuevo canal de notificación (por ejemplo, push) solo implica crear una nueva clase concreta y una nueva fábrica.


      h2.mb-5 Aplicación en otros lenguajes

      p(data-aos="fade-up").mb-5 Este patrón puede implementarse con facilidad en otros lenguajes como Python, C#, Kotlin o JavaScript, adaptando la sintaxis, pero manteniendo la estructura conceptual. Por ejemplo, en Python se puede utilizar herencia y clases abstractas con abc.ABC, y en JavaScript, funciones constructoras o clases ES6 para lograr una implementación funcional equivalente.


      #t_2_7.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.7] Beneficios de implementar patrones de diseño

      p(data-aos="fade-up").mb-4 La implementación de patrones de diseño en el desarrollo de software representa una estrategia clave para mejorar la organización, la eficiencia y la calidad del código.


      .bg-full-width.bg-color-8.mb-lg-0
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/26.png', alt='')
      
            .col-lg-8.text-white
              h2.mb-4(data-aos="flip-up") Beneficios de implementar patrones de diseño 

              p.mb-4(data-aos="fade-right") En el PDF Beneficios de implementar patrones de diseño, se describen las ventajas que estos aportan al promover soluciones reutilizables, facilitar la comunicación entre desarrolladores y reducir el acoplamiento entre componentes. Se destaca cómo los patrones contribuyen a construir sistemas más mantenibles, escalables y alineados con los principios de la programación orientada a objetos.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_7.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Beneficios de implementar patrones de diseño 
      
      
          
          
          

      
      
      
      

      
      
      

      
      


      
      

      
      
      



















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
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
