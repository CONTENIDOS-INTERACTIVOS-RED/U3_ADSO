<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'7. Principios SOLID'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .bg-color-2.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema7/1.png', alt='')
          .col-lg
            .p-4
              p.mb-0.text-white(data-aos="fade-up") Los principios SOLID constituyen un conjunto de buenas prácticas en el diseño de <em>Software</em> orientado a objetos. Su propósito principal es aumentar la calidad, mantenibilidad, flexibilidad y escalabilidad, del código fuente. Estos principios fueron popularizados por Robert C. Martin (Uncle Bob) y han sido adoptados ampliamente en la ingeniería de <em>Software</em> profesional, como fundamentos claves del diseño limpio (clean code).
      
      p.mb-5 La sigla SOLID corresponde a las iniciales de cinco principios fundamentales: Single Responsibility Principle, Open/Closed Principle, Liskov Substitution Principle, <em>Interface Segregation Principle</em> y Dependency Inversion Principle (García Carmona, 2012).
    
  
      #t_1_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.1] Introducción al diseño, orientado a los objetos y principios SOLID
      
      .row.mb-5
        .col-lg-4.order-lg-2.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema7/2.png", data-aos="zoom-in")
        .col-lg-8.order-lg-1
          p.mb-5(data-aos="fade-left") El diseño orientado a objetos (OO), es una metodología de desarrollo de <em>Software</em> que se centra en la creación de sistemas utilizando entidades llamadas objetos, los cuales representan elementos del mundo real o conceptos abstractos. 
      
          .bg-color-4.p-4.mb-3(data-aos="fade-left")
            p Cada objeto combina estado (datos) y comportamiento (métodos o funciones), promoviendo así una representación más natural e intuitiva de los problemas computacionales.
            p.mb-0 En este enfoque, el <em>Software</em> se estructura a partir de clases, que actúan como plantillas para crear objetos. Las clases definen las propiedades (atributos) y las operaciones (métodos) que los objetos pueden tener. A través de este modelo, se facilita la reutilización del código, la escalabilidad de los sistemas y la organización modular de las funcionalidades (García Carmona, 2012).
          p Los cuatro pilares fundamentales del paradigma orientado a objetos, son:
      
      .bg-full-width.bg-color-3
        .p-4.p-md-5
          div.row.justify-content-center.align-items-stretch
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(src="@/assets/curso/tema7/3.svg" alt="" style="width: 90px")
                h5.text-center Abstracción
                p.mb-0.text-center Permite ocultar los detalles internos y mostrar solo lo esencial del objeto.
          
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(src="@/assets/curso/tema7/4.svg" alt="" style="width: 90px")
                h5.text-center Encapsulamiento
                p.mb-0.text-center Protege los datos internos del objeto, restringiendo el acceso directo desde el exterior.
          
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(src="@/assets/curso/tema7/5.svg" alt="" style="width: 90px")
                h5.text-center Herencia
                p.mb-0.text-center Facilita la creación de nuevas clases basadas en clases existentes, promoviendo la reutilización.
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(src="@/assets/curso/tema7/6.svg" alt="" style="width: 90px")
                h5.text-center Polimorfismo
                p.mb-0.text-center Permite que distintos objetos respondan de manera diferente al mismo mensaje, aumentando la flexibilidad del código.
      
      .bg-full-width.bg-color-2.mb-5
        .px-4.px-md-5.py-4
          p.mb-0.text-white El diseño OO no se limita a representar entidades, sino que también busca organizar la lógica del sistema de forma coherente y mantenible, favoreciendo la evolución del <em>Software</em> a lo largo del tiempo.
      
      h2(data-aos="fade-left") Problemáticas comunes en el diseño sin principios sólidos
      p.mb-5 A pesar de sus ventajas, un mal uso del diseño orientado a objetos, puede generar sistemas acoplados, frágiles y difíciles de mantener. Entre los errores frecuentes se encuentran:
  
      .bg-full-width.bg-color-9
        .px-4.px-md-5
          .row.justify-content-center.align-items-center
            .col-lg-12
              .row.justify-content-center.align-items-center
                .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
                  ul.lista-ul--color.mb-0
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Clases que asumen múltiples responsabilidades.
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Código rígido, difícil de extender sin modificar componentes existentes.
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Jerarquías de herencia mal definidas.
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Interfaces sobrecargadas con métodos innecesarios.
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Dependencias directas entre módulos que impiden la reutilización o las pruebas automatizadas.
                
                .col-lg-5(data-aos="zoom-in")
                  img.img-fluid(src='@/assets/curso/tema7/7.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
      
      .bg-full-width.bg-color-10.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema7/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Para contrarrestar estas debilidades, han surgido buenas prácticas y principios que guían a los desarrolladores en la creación de sistemas más robustos y flexibles. Entre estos principios, los denominados SOLID, ocupan un lugar central.
      
      #t_1_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.2] Principio de Responsabilidad Única (SRP)
      
      p.mb-5 El Principio de Responsabilidad Única (SRP) es una de las bases del diseño orientado a objetos y una herramienta clave para lograr un código modular, limpio y mantenible.
  
      .bg-full-width.bg-color-8.mb-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8.order-2.text-white
              h2.mb-4(data-aos="flip-up") Principio de Responsabilidad Única (SRP)
              p.mb-4(data-aos="fade-right") En el PDF <b>Principio de Responsabilidad Única</b>, se estudia cómo una clase debe tener una sola razón para cambiar, evitando que asuma múltiples responsabilidades que dificulten su reutilización, prueba y comprensión. A través de ejemplos ilustrativos y recomendaciones prácticas, se muestra cómo aplicar este principio mejora la cohesión, facilita el trabajo colaborativo y fortalece la arquitectura del sistema.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Principio de Responsabilidad Única (SRP).
      
            .col-lg-4.order-1.mb-3.mb-lg-0
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema7/9.png', alt='')
      
      #t_1_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.3] Principio de Abierto/Cerrado (OCP)
      
      .row.mb-5
        .col-lg-4.order-lg-2.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema7/10.png", data-aos="zoom-in")
        .col-lg-8.order-lg-1
          p.mb-5(data-aos="fade-left") El Principio de Abierto/Cerrado (OCP) establece que las entidades de <em>Software</em> (como clases, módulos o funciones), deben estar abiertas para su extensión, pero cerradas para su modificación. Esto significa que el comportamiento de una clase puede ser extendido, sin necesidad de alterar su código fuente original (García Carmona, 2012). 
      
          .bg-color-6.p-4.mb-3(data-aos="fade-left")
            p.mb-0 El objetivo central del OCP es proteger la estabilidad del sistema ante cambios constantes, fomentando la reutilización del código existente y reduciendo el riesgo de errores al modificar componentes ya probados. Se trata de un principio esencial en el desarrollo evolutivo de <em>Software</em>, donde las funcionalidades crecen sin comprometer lo que ya funciona.
      
      h2(data-aos="fade-left") Problemática cuando se viola el OCP
      p.mb-5 En muchos sistemas, los cambios de requerimientos implican modificar directamente clases ya existentes. Este enfoque puede traer consecuencias negativas:
  
      .row.justify-content-center.align-items-stretch.mb-4
        .col-lg-4.mb-3.mb-lg-0
          .bg-color-8.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema7/11.svg", style="max-width: 90px").mx-auto
              .col-lg.text-white
                h5.mb-2 Fragilidad del código
                p.mb-0 Cualquier modificación en una clase estable puede introducir errores no previstos.
  
        .col-lg-4.mb-3.mb-lg-0
          .bg-color-8.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema7/12.svg", style="max-width: 90px").mx-auto
              .col-lg.text-white
                h5.mb-2 Dificultad para escalar
                p.mb-0 El sistema se vuelve menos flexible y más costoso de mantener.
        .col-lg-4.mb-3.mb-lg-0
          .bg-color-8.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema7/13.svg", style="max-width: 90px").mx-auto
              .col-lg.text-white
                h5.mb-2 Dependencia innecesaria
                p.mb-0 Múltiples partes del sistema pueden verse afectadas por el cambio de una sola clase.
      
      h2(data-aos="fade-left") Ejemplo de violación al OCP
      p.mb-5 Considérese el siguiente ejemplo en Java, donde una clase calcula el salario, según el tipo de empleado:
  
      .bg-color-9.p-5
        .row.justify-content-center
          .col-lg-5
            figure
              img(src="@/assets/curso/tema7/14.png", data-aos="zoom-in")
      
      .bg-color-10.mb-5
        .px-4.px-md-5.py-4
          p.mb-0 Cada vez que se introduce un nuevo tipo de empleado, es necesario modificar la clase CalculadoraSalario, lo cual viola el principio de OCP, puesto que la clase no está cerrada a cambios.
  
      h2(data-aos="fade-left") Aplicación del OCP con herencia y polimorfismo
      p.mb-5 Una forma efectiva de aplicar el OCP es mediante el uso de interfaces o clases abstractas, lo que permite extender funcionalidades sin modificar las clases existentes:
  
      .bg-color-9.p-5
        .row.justify-content-center
          .col-lg-5
            figure
              img(src="@/assets/curso/tema7/15.png", data-aos="zoom-in")
          .col-lg-7
            figure
              img(src="@/assets/curso/tema7/16.png", data-aos="zoom-in")
            .bg-color-2.mb-5.text-white.p-4
                p.mb-0 En este diseño, la clase CalculadoraSalario, no necesita cambiar si se agrega un nuevo tipo de empleado, porque basta con crear una nueva clase que implemente la interfaz, Empleado. Así se extiende el comportamiento sin modificar el código original, cumpliendo el OCP.
  
      .bg-full-width.bg-color-11
        .p-4.p-md-5
          p.mb-5 Los beneficios de aplicar el OCP, son:
          .row.justify-content-center.align-items-stretch
            .col-lg-3.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema7/17.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Estabilidad del código
                  p.mb-0 Se evitan errores al no tocar código previamente probado.
            .col-lg-3.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema7/18.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Escalabilidad
                  p.mb-0 El sistema puede crecer sin afectar las funcionalidades ya implementadas.
            .col-lg-3.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema7/19.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Mantenibilidad
                  p.mb-0 Los cambios se concentran en nuevas clases o módulos.
            .col-lg-3.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema7/20.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Reutilización y claridad
                  p.mb-0 Cada entidad tiene un propósito definido y es fácilmente ampliable.
      
      #t_1_4.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.4] Principio de Sustitución de Liskov (LSP)
      
      p.mb-5 El Principio de Sustitución de Liskov es un pilar esencial en el diseño orientado a objetos, ya que asegura que las clases derivadas mantengan un comportamiento coherente con sus clases base, favoreciendo así la reutilización y mantenibilidad del código.
  
      .bg-full-width.bg-color-8.mb-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8.order-2.text-white
              h2.mb-4(data-aos="flip-up") Principio de Sustitución de Liskov (LSP)
              p.mb-4(data-aos="fade-right") En el PDF <b>Principio de Sustitución de Liskov</b>, se presentan ejemplos prácticos que permiten identificar cuándo se cumple o se infringe este principio, destacando su impacto en la estructura lógica del <em>Software</em> y ofreciendo pautas claras para implementar jerarquías de clases correctas y funcionales.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Principio de Sustitución de Liskov (LSP).
      
            .col-lg-4.order-1.mb-3.mb-lg-0
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema7/21.png', alt='')
      
      #t_1_5.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.5] Principio de Segregación de Interfaces (ISP)
      
      .row.mb-5
        .col-lg-5.order-lg-2.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema7/22.png", data-aos="zoom-in")
        .col-lg-7.order-lg-1
          .bg-color-4.p-4.mb-3(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema7/23.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 El Principio de Segregación de Interfaces (<em>Interface Segregation Principle</em> - ISP), establece que ningún cliente debe verse obligado a depender de métodos que no utiliza. En otras palabras, las interfaces deben ser específicas y pequeñas, orientadas a roles bien definidos, evitando la creación de interfaces generales que obliguen a implementar funcionalidades innecesarias (Leiva, 2021).
          p(data-aos="fade-left") Este principio busca evitar el acoplamiento innecesario entre las clases y los módulos del <em>Software</em>, favoreciendo un diseño más flexible, fácil de mantener y de escalar.
      
      h2(data-aos="fade-left") Problema común: una interfaz demasiado grande
      p Cuando una interfaz abarca demasiadas responsabilidades, los clientes que la implementan pueden verse forzados a proporcionar definiciones para métodos que no tienen sentido en su contexto (Leiva, 2021). Esto genera código redundante o vacío, dificulta el mantenimiento y rompe con los principios de diseño limpio.
      p.mb-5 Ejemplo de violación del ISP:
  
      .bg-color-9.p-5
        .row.justify-content-around.align-items-center
          .col-lg-3
            figure
              img(src="@/assets/curso/tema7/24.png", data-aos="zoom-in")
          .col-lg-5
            figure
              img(src="@/assets/curso/tema7/25.png", data-aos="zoom-in")
      
      .bg-color-10.mb-5
        .px-4.px-md-5.py-4
          p.mb-0 En este caso, la clase ImpresoraBasica solo necesita imprimir, pero se ve forzada a implementar métodos que no son parte de su funcionalidad, lo que viola el principio ISP.
  
      h2(data-aos="fade-left") Solución adecuada: interfaces segregadas
      p Una mejor estrategia consiste en dividir la interfaz grande en varias interfaces más pequeñas, cada una específica para una funcionalidad. Esto permite que las clases solo implementen aquello que necesitan.
      p.mb-5 Ejemplo de cumplimiento del ISP:
  
      .bg-color-9.p-5.mb-5
        .row.justify-content-center
          .col-lg-6
            figure
              img(src="@/assets/curso/tema7/26.png", data-aos="zoom-in")
          .col-lg-6
            figure
              img(src="@/assets/curso/tema7/27.png", data-aos="zoom-in")
            .bg-color-2.mb-5.text-white.p-4
                p.mb-0 Con este enfoque, cada clase solo depende de las interfaces que le son útiles, cumpliendo así con el ISP y favoreciendo la modularidad y el principio de mínima responsabilidad.
      
      .bg-color-1.mb-5(data-aos="fade-left")
        .row.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            img(src="@/assets/curso/tema7/28.svg").mx-auto
          .col-lg-8.p-5
            p Los beneficios del ISP, son:
            ul.lista-ul--color
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Mejora la cohesión del código, debido a que las clases solo se relacionan con funcionalidades relevantes.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Facilita la reutilización y el mantenimiento del <em>Software</em>.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Reduce el impacto de los cambios, dado que las modificaciones en una interfaz no afectan a clases que no la usan.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Simplifica las pruebas unitarias, permitiendo aislar los comportamientos fácilmente.
      
      #t_1_6.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.6] Principio de Inversión de Dependencias (DIP)
      
      p.mb-5 El Principio de Inversión de Dependencias (DIP) es fundamental en el diseño de sistemas flexibles y escalables, ya que promueve la separación entre abstracción y detalle, evitando la dependencia directa de implementaciones concretas.
  
      .bg-full-width.bg-color-8.mb-0
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8.text-white
              h2.mb-4(data-aos="flip-up") Principio de Inversión de Dependencias (DIP)
              p.mb-4(data-aos="fade-right") En el PDF <b>Principio de Inversión de Dependencias</b>, se exponen ejemplos prácticos y soluciones estructuradas que ilustran cómo aplicar este principio correctamente, integrando técnicas como la inyección de dependencias para lograr sistemas más mantenibles, adaptables y fáciles de probar en entornos reales de desarrollo.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Principio de Inversión de Dependencias (DIP).
      
            .col-lg-4.mb-3.mb-lg-0
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema7/29.png', alt='')
  

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://cs.uns.edu.ar/~ece/ads/downloads/Clases/2019%2003%20AyDS%20-%20Principios%20SOLID.pdf" target="_blank" rel="noopener noreferrer") Universidad Nacional del Sur. (2019). Principios de diseño SOLID. 
  
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=E_mSr-VFd3g " target="_blank" rel="noopener noreferrer") DevExpert. [@devexpert_io] (2021, 13 de mayo). Principios SOLID - 5 + 1 Reglas que CAMBIARÁN tu forma de PROGRAMAR. [Video]. YouTube. 
  
  
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>
