<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Diseño de ajustes en procesos, tiempos y canales de atención
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img64.png', alt='').m-auto
      .col-xl
        .row.mb-3
          .col-xl-auto
            figure.d-none.d-xl-block(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img57.svg', alt='' style="width: 90px")
          .col-xl
            p.mb-0 Diseñar ajustes en procesos, tiempos y canales de atención implica pasar del #[b análisis de resultados a la formulación de cambios concretos] sobre la forma en que se presta el servicio. En esta fase ya no basta con identificar fallas, desviaciones o insatisfacción del usuario; ahora se requiere decidir qué modificar, sobre qué parte del proceso intervenir y cómo hacerlo sin afectar la #[b coherencia general] de la atención. Por ello, el diseño de ajustes debe responder a necesidades verificadas del servicio y no a decisiones improvisadas o aisladas.
        p.mb-0 En la atención de requerimientos, los ajustes suelen concentrarse en tres dimensiones: el proceso, cuando se modifican actividades, responsabilidades o secuencias; el tiempo, cuando se revisan plazos, alertas o momentos de control; y el canal, cuando se redefine la forma de interacción con el usuario o la ruta por la que ingresan y se gestionan las solicitudes. La #[b calidad del servicio] mejora cuando estos cambios se diseñan con criterio y se articulan con la operación real, con la experiencia del usuario y con la capacidad de la organización para aplicarlos y sostenerlos.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Criterios institucionales para la modificación de procesos y tiempo
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img65.jpg', alt='').m-auto
            .col-xl.fit___box_container.fit___box_1
              p.mb-0 Modificar un proceso de atención exige partir de criterios claros que permitan #[b justificar por qué conviene intervenir y qué parte debe ajustarse]. Entre esos criterios se encuentran la frecuencia de la falla, el impacto sobre el usuario, la desviación frente al estándar de atención, la viabilidad operativa del cambio y la relación del ajuste con hallazgos previamente verificados. Esto es importante porque no toda dificultad observada requiere transformar el proceso completo; en muchos casos basta con ajustar una actividad, reforzar un control previo o redefinir un tiempo interno (Herrera, 2018).
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img22.png', alt='').m-auto
    p En términos prácticos, estos criterios ayudan a diferenciar entre #[b síntomas y causas]. Si un requerimiento se responde fuera de tiempo, el problema puede estar en la distribución de la carga, en la validación previa, en la dependencia de otra área o en el canal utilizado. Por ello, antes de modificar el proceso, conviene precisar qué se quiere corregir, qué evidencia lo respalda y qué efecto se espera obtener con el ajuste. Ese análisis evita cambios innecesarios y favorece intervenciones más focalizadas y útiles para la atención.
    p.mb-5 Los siguientes criterios permiten orientar decisiones relacionadas con la modificación de procesos y tiempos de atención, a partir de situaciones verificadas dentro del servicio.
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Frecuencia del problema")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img66.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Frecuencia del problema
            p.mb-0 ¿La situación se repite de manera constante? Prioriza ajustes sobre fallas recurrentes.
      .py-3.py-md-4(titulo="Impacto en el usuario")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img67.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Impacto en el usuario
            p.mb-0 ¿La falla afecta claridad, oportunidad o satisfacción? Orienta cambios con efecto directo en el servicio.
      .py-3.py-md-4(titulo="Desviación frente al estándar")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img68.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Desviación frente al estándar
            p.mb-0 ¿El proceso no cumple tiempos o condiciones esperadas? Justifica modificación del procedimiento o del plazo.
      .py-3.py-md-4(titulo="Viabilidad operativa")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img69.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Viabilidad operativa
            p.mb-0 ¿La organización puede aplicar el cambio con sus recursos actuales? Permite definir ajustes realistas.
      .py-3.py-md-4(titulo="Relación con hallazgos previos")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img70.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Relación con hallazgos previos
            p.mb-0 ¿El cambio responde a incidencias o resultados verificados? Evita decisiones sin sustento.
    p.mb-0 Aplicados al servicio, estos criterios permiten decidir si conviene intervenir el tiempo de respuesta, la secuencia del trámite, la asignación de tareas o la forma de comunicación con el usuario. Así, la modificación del proceso deja de ser una reacción general frente al problema y se convierte en una #[b decisión técnica] orientada por evidencia.
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Ajustes en procesos, tiempos y canales
    p.mb-5 Los ajustes en procesos se orientan a #[b modificar la secuencia de actividades, la asignación de responsabilidades o los puntos de control que intervienen en la atención del requerimiento]. En muchos casos, un servicio presenta problemas no porque falten recursos, sino porque el proceso tiene #[b pasos poco claros], revisiones insuficientes o acumulación de actividades en una sola etapa. Por ello, rediseñar el proceso implica revisar dónde se generan las demoras, los reprocesos o las respuestas insuficientes, y decidir qué cambio puede reducir esas afectaciones.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img71.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los ajustes en tiempos y canales responden a una lógica similar. Un plazo interno puede ser inadecuado si no corresponde con la complejidad real del trámite, y un canal puede volverse ineficiente si concentra demoras, errores de registro o poca claridad en la interacción. En este punto, ajustar no significa necesariamente cambiarlo todo; a veces basta con diferenciar tiempos por tipo de requerimiento, establecer #[b alertas previas], fortalecer un canal ya existente o combinar medios para que el usuario reciba una atención más oportuna y comprensible.
    p.mb-5 La siguiente ruta organiza las etapas básicas para diseñar ajustes en procesos, tiempos y canales de atención a partir de situaciones identificadas en el servicio.
    .row.justify-content-center.mb-5
      .col-lg-10
        PasosA.color-acento-contenido(tipo="n")
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Paso 1. Identificación del problema
              p.mb-0 Reconocer la situación que afecta la calidad del servicio a partir de indicadores, incidencias, retroalimentación del usuario o revisión de casos.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img72.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img73.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Paso 2. Análisis del hallazgo
              p.mb-0 Determinar la causa principal del problema, los efectos que genera y el componente del servicio donde se origina (proceso, tiempo o canal).
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Paso 3. Selección del tipo de ajuste
              p.mb-0 Definir si el ajuste corresponde al proceso (actividades, responsables o controles), al tiempo (plazos, alertas o momentos de revisión) o al canal (medio de atención o ruta).
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img74.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img75.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Paso 4. Validación de viabilidad
              p.mb-0 Revisar si el ajuste es viable con los recursos, la capacidad operativa y la normativa vigente, y si responde al problema identificado sin generar impactos negativos.
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Paso 5. Definición de la acción de mejora
              p.mb-0 Establecer el ajuste concreto, los responsables, los recursos necesarios y el criterio de evaluación para medir su efecto en el servicio.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img76.png', alt='' style="width: 300px").m-auto
    p.mb-0 En la práctica, esta ruta ayuda a que la organización no confunda el #[b síntoma] con la solución. Si el problema visible es el aumento de casos reabiertos, el ajuste no debería definirse automáticamente sobre el canal, sino sobre aquello que está originando la reapertura: respuestas incompletas, falta de revisión previa o deficiencias en la información entregada. Esa lectura permite que el cambio sea más pertinente y con mayor probabilidad de producir #[b resultados útiles].
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Modelos de mensajes y guías de comunicación
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_2(data-aos="fade-right")
          p.mb-0 En la atención de requerimientos, una parte importante de la calidad del servicio depende de cómo se comunica la respuesta al usuario. Por ello, además de ajustar procesos y tiempos, resulta necesario revisar los #[b modelos de mensajes] y las guías de comunicación utilizadas en la atención. Un mensaje mal estructurado puede generar confusión, reiteración de solicitudes, reaperturas o inconformidad, incluso cuando la información técnica que lo sustenta es correcta. En cambio, una comunicación clara, ordenada y pertinente fortalece la comprensión del usuario y aporta mayor consistencia al servicio.
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img77.jpg', alt='').m-auto
      .col-xl
        figure.d-none.d-xl-block(data-aos="fade-left")
          img(src='@/assets/curso/intro/img4.svg', alt='' style="width: 90px")
        p.mb-0 Los modelos de mensajes permiten estandarizar la respuesta en situaciones frecuentes, mientras que las guías de comunicación orientan el tono, la estructura y el contenido que debe incluirse según el tipo de requerimiento. Esto no significa convertir todas las respuestas en textos rígidos o idénticos, sino establecer criterios mínimos para asegurar claridad, suficiencia y coherencia. Murillo Moreno (2018) y Denton (1991) permiten respaldar la idea de que la #[b calidad del servicio] también se expresa en la manera en que la organización interactúa con el usuario y responde a sus necesidades.
    p.mb-5 Los siguientes elementos permiten orientar el diseño de modelos de mensajes y guías de comunicación en la atención de requerimientos.
    .fondo___carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img22.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img78.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Inicio del mensaje
                p.mb-0.text-center Ubicar el requerimiento y el propósito de la respuesta.
                p.mb-0.text-center Ejemplo de ajuste: incorporar referencia clara al asunto atendido.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img79.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Lenguaje empleado
                p.mb-0.text-center Facilitar comprensión del usuario. 
                p.mb-0.text-center Ejemplo de ajuste: reducir tecnicismos innecesarios.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img80.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Información principal
                p.mb-0.text-center Responder de forma suficiente al caso. 
                p.mb-0.text-center Ejemplo de ajuste: ordenar la respuesta por puntos.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img81.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Cierre del mensaje
                p.mb-0.text-center Indicar estado final o paso siguiente. 
                p.mb-0.text-center Ejemplo de ajuste: precisar si el caso queda cerrado o en seguimiento.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img82.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Tono de comunicación
                p.mb-0.text-center Mantener trato profesional y respetuoso. 
                p.mb-0.text-center  Ejemplo de ajuste: evitar expresiones ambiguas o defensivas.
        p.mb-0 Un ajuste en los mensajes puede parecer menor frente a cambios de proceso o de canal, pero en muchos casos produce efectos inmediatos sobre la percepción del usuario y sobre la reducción de correcciones o reaperturas. Por eso, revisar las #[b guías de comunicación] debe entenderse como una acción de mejora del servicio y no solo como una tarea de redacción.
        <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
        Separador
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.4 Validación y documentación de los ajustes
    p.mb-5 Todo ajuste diseñado para mejorar la atención debe validarse antes de consolidarse como práctica habitual. Validar significa comprobar si el cambio propuesto realmente responde al problema identificado, si puede aplicarse sin afectar otras etapas del proceso y si resulta comprensible para quienes deben ejecutarlo. Un ajuste no validado puede generar nuevos errores, desplazar el problema a otra fase del servicio o producir efectos no previstos sobre la atención.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img83.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La #[b documentación de los ajustes] cumple una función complementaria. Cuando el cambio queda registrado de forma clara, la organización puede comunicarlo mejor, aplicarlo de manera más uniforme y hacer seguimiento a sus resultados. Ortiz Carrillo, Gómez Flórez y Villarreal Trujillo (2017) permiten respaldar esta necesidad desde la lógica de los sistemas de gestión de calidad, en la que la documentación resulta necesaria para controlar procesos y sostener mejoras. De la misma manera, Prieto Herrera (2018) aporta una visión útil sobre la importancia de ordenar las decisiones de servicio para que puedan mantenerse en el tiempo.
    p.mb-5 Los siguientes elementos permiten validar y documentar los ajustes aplicados en la atención de requerimientos:
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img84.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Problema que se corrige").ajuste-cajaAcordion
            p.mb-3 ¿El ajuste responde a un hallazgo real del servicio? Evidencia esperada: relación con indicador, incidencia o hallazgo.
          .row(titulo="Viabilidad del ajuste").ajuste-cajaAcordion
            p.mb-3 ¿Puede aplicarse con los recursos disponibles? Evidencia esperada: revisión operativa o técnica.
          .row(titulo="Responsable de aplicación").ajuste-cajaAcordion
            p.mb-3 ¿Quién ejecutará o supervisará el cambio? Evidencia esperada: asignación clara de responsabilidad.
          .row(titulo="Forma de documentación").ajuste-cajaAcordion
            p.mb-3 ¿Dónde quedará registrado el ajuste? Evidencia esperada: instructivo, formato, acta o guía.
          .row(titulo="Criterio de evaluación").ajuste-cajaAcordion
            p.mb-3 ¿Cómo se verificará si el ajuste funcionó? Evidencia esperada: indicador o evidencia de seguimiento.
    p.mb-0 En términos prácticos, validar y documentar evita que las mejoras dependan exclusivamente de la memoria o del criterio individual de quien atiende. Así, el ajuste deja de ser una decisión informal y se convierte en una #[b intervención organizada], verificable y comunicable dentro del servicio.
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5 Integración de mejoras al servicio
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p El diseño de ajustes solo adquiere sentido cuando las modificaciones propuestas logran integrarse al funcionamiento real de la atención. Integrar mejoras al servicio significa incorporar los cambios aprobados al proceso cotidiano, de manera que no queden como acciones aisladas, ensayos temporales o decisiones sin continuidad. En este punto, la organización debe procurar que los ajustes en procesos, tiempos, canales o mensajes se articulen con la operación del servicio y con la forma en que el equipo atiende los requerimientos.
        p.mb-0 La integración también exige coherencia entre las distintas acciones de mejora. No sería adecuado, por ejemplo, ajustar los modelos de respuesta para hacerlos más claros si al mismo tiempo no se revisa la validación previa que garantiza la exactitud de la información entregada. De manera similar, un cambio en los tiempos de atención puede perder efectividad si no se acompaña de redistribución de actividades o fortalecimiento del canal. Por eso, integrar mejoras supone revisar cómo se relacionan entre sí los cambios y cómo afectan la #[b experiencia del usuario] de manera conjunta.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img85.png', alt='').m-auto
    p.mb-5 Los siguientes criterios permiten orientar la integración de mejoras al servicio de atención y favorecer su permanencia dentro de la operación cotidiana.
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Coherencia con el proceso
                p.mb-0 Asegurar que el ajuste no contradiga otras etapas del servicio. Aplicación práctica: revisar relación con recepción, respuesta y cierre.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img86.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Articulación con el equipo
                p.mb-0 Facilitar aplicación uniforme del cambio. Aplicación práctica: comunicar y socializar el ajuste.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img87.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Correspondencia con el problema identificado
                p.mb-0 Mantener el foco de la mejora. Aplicación práctica: verificar que la acción responde al hallazgo original.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img88.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Posibilidad de seguimiento
                p.mb-0 Permitir evaluación posterior. Aplicación práctica: relacionar el ajuste con un indicador.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img89.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Sostenibilidad
                p.mb-0 Favorecer permanencia del cambio. Aplicación práctica: incorporar el ajuste a guías o prácticas habituales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img90.png', alt='' style="max-width: 500px").m-auto
    p.mb-5 En términos prácticos, esta integración permite que la mejora se mantenga más allá del momento inicial de implementación. Así, el servicio no solo cambia en el papel, sino que incorpora nuevas formas de atención que pueden sostenerse, evaluarse y convertirse en parte de la práctica habitual. 
    .box___style_6.mb-0(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img45.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Ejercicio aplicado 3
          p.mb-0 Se invita a leer el documento #[b Ejercicio aplicado 3. Diseño de ajustes en procesos, tiempos y canales de atención], donde se aborda la formulación de mejoras orientadas a fortalecer la calidad en la atención de requerimientos dentro de un servicio contable.
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexo_Ejercicio_aplicado_3.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema3',
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
