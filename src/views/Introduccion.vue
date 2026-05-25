<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/intro/img1.jpg', alt='').m-auto
            .col-xl.fit___box_container
              p.mb-0 La atención de requerimientos del usuario no concluye con la emisión de una respuesta, sino que exige revisar si dicha respuesta fue #[b oportuna, suficiente y coherente] con la necesidad planteada. En el ámbito de los servicios, la calidad se relaciona tanto con el #[b resultado – entregado]  como con la forma en que se desarrolla la atención, por lo que su análisis requiere considerar #[b tiempos, cumplimiento, claridad y experiencia del usuario] como parte del desempeño organizacional.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/intro/img2.png', alt='').m-auto
    .row.justify-content-center.align-items-center
      .col-xl.mb-4.mb-lg-0
        .box___style_2(data-aos="fade-right")
          p.mb-0 Su aplicabilidad es amplia en organizaciones que necesitan controlar la calidad de la atención, identificar fallas recurrentes y fortalecer la relación con el usuario a partir de procesos más consistentes. En este sentido, el seguimiento del servicio permite #[b reconocer debilidades, revisar el comportamiento de la atención y orientar decisiones de mejora] sobre procedimientos, canales y formas de interacción, con impacto en la competitividad y en la satisfacción del cliente.
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/intro/img3.jpg', alt='').m-auto
      .col-xl
        figure.d-none.d-xl-block(data-aos="fade-left")
          img(src='@/assets/curso/intro/img4.svg', alt='' style="width: 90px")
        p.mb-0 Desde esta perspectiva, el estudio del #[b seguimiento, la calidad y la mejora continua] en la atención de requerimientos permite comprender que evaluar e intervenir el servicio son procesos complementarios. La revisión de resultados, la identificación de desviaciones y la implementación de ajustes contribuyen a fortalecer la #[b consistencia del servicio] y a mejorar la experiencia del usuario, especialmente en escenarios donde la atención debe sostenerse con #[b criterios técnicos] y con orientación permanente al mejoramiento.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
