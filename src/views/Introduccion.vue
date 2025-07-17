<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          p.mb-0 En el desarrollo de software, el diseño orientado a objetos es un enfoque clave que permite construir sistemas modulares, escalables, y fácilmente mantenibles. Esta unidad se centra en los principios fundamentales que guían el diseño eficiente de software, así como en las herramientas y técnicas que ayudan a estructurar y organizar el código, de manera efectiva. El objetivo principal es proporcionar a los estudiantes las habilidades necesarias para diseñar aplicaciones robustas, mediante la aplicación de buenas prácticas y patrones establecidos.
    
        p(data-aos="fade-left").mb-4 A lo largo de la unidad, se explorarán los principios SOLID, que constituyen un conjunto de directrices para escribir código más limpio, flexible y menos propenso a errores. Además, se estudiarán patrones de diseño como el Factory y el Singleton, que ofrecen soluciones reutilizables a problemas comunes, en la creación de software. Estos patrones permiten a los diseñadores abordar situaciones de manera estructurada y eficiente, favoreciendo la reutilización del código y mejorando la consistencia del sistema.

    .bg-color-5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-4(data-aos="fade-up") Asimismo, se abordará el modelado de sistemas, utilizando diagramas de clases y secuencias, herramientas esenciales para representar la estructura y el comportamiento de los objetos dentro de un sistema.
            p.mb-0 A través de estos diagramas, los estudiantes aprenderán a visualizar las relaciones entre los objetos, la interacción entre ellos y el flujo de datos, lo que facilita la comprensión y la comunicación de ideas dentro de un equipo de desarrollo. 
        .col-lg-auto
          figure
            img(src='@/assets/curso/intro/2.svg', alt='')

    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/3.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Al finalizar esta unidad, los estudiantes estarán capacitados para aplicar los principios SOLID y los patrones de diseño en sus proyectos, mejorar la calidad del código y utilizar diagramas UML para representar de forma clara y precisa, el diseño del sistema. Estas habilidades son cruciales para construir soluciones de software de alta calidad y contribuir al éxito de proyectos tecnológicos en la industria.
    
</template>
