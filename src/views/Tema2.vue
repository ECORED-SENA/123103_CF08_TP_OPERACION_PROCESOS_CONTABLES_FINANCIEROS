<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Análisis de resultados e identificación de oportunidades de mejora
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img46.jpg', alt='').m-auto
            .col-xl.fit___box_container.fit___box_1
              p.mb-0 El análisis de resultados en la atención de requerimientos permite interpretar la información obtenida durante la verificación del servicio y convertirla en un insumo para la #[b toma de decisiones]. Pérez Fernández de Velasco (1994) aborda la gestión de la calidad en los servicios como una práctica asociada al #[b control del desempeño] y al mejoramiento de la atención, mientras que Prieto Herrera (2018) insiste en que el servicio debe revisarse como una #[b experiencia integral] y no como una suma de acciones aisladas. Desde esa perspectiva, analizar resultados significa observar qué ocurrió, por qué ocurrió y qué debe ajustarse para sostener una atención más consistente (Pérez Fernández de Velasco, 1994).
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img22.png', alt='').m-auto
    p.mb-0 En organizaciones que atienden requerimientos de usuarios, esta lectura resulta importante porque las desviaciones no siempre se manifiestan de forma directa en un solo indicador. Murillo Moreno (2018) muestra que la relación con el usuario exige #[b seguimiento] y comprensión del proceso de atención, y Zavala Choez y Vélez Moreira (2020) relacionan la #[b gestión de la calidad] del servicio con la competitividad de las empresas de servicios.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Lectura de indicadores y análisis de desviaciones
    p.mb-5 A continuación, se presenta un pódcast sobre la lectura de indicadores y el análisis de desviaciones, orientado a comprender cómo interpretar el desempeño del servicio y detectar oportunidades de mejora en la atención de requerimientos.
    .row.align-items-center.m-0.mb-5
      .col-xl
        .row.align-items-center.justify-content-center.box___podcast(data-aos="zoom-in")
          .col-auto.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src="@/assets/curso/temas/img47.svg" style="max-width: 220px").m-auto
          .col
            h4.mb-4 Pódcast
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Lectura de indicadores y análisis de desviaciones"
              :audio="require('@/assets/componentes/audios/Lectura_indicadores_analisis_desviaciones.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto.d-none.d-xl-block
        figure(data-aos="fade-left")
          img(src="@/assets/curso/temas/img48.jpg" ).m-auto
    p.mb-5 Esta tabla presenta una guía práctica para interpretar indicadores de atención y relacionarlos con posibles desviaciones. Su finalidad es apoyar la #[b lectura técnica] de resultados antes de formular propuestas de mejora.
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 1.
          span Lectura básica de indicadores y análisis de desviaciones
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Indicador
                th.ajuste-border-tabla.texto-left Resultado esperado
                th.ajuste-border-tabla.texto-left Resultado observado
                th.ajuste-border-tabla.texto-left Posible desviación
                th.texto-left Pregunta de análisis
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Requerimientos atendidos en plazo
                td.ajuste-border-tabla.texto-left 95 %
                td.ajuste-border-tabla.texto-left 88 %
                td.ajuste-border-tabla.texto-left Incumplimiento del tiempo objetivo
                td.texto-left ¿Qué factores están retrasando la atención?
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold  Requerimientos reabiertos
                td.ajuste-border-tabla.texto-left 3 %
                td.ajuste-border-tabla.texto-left 9 %
                td.ajuste-border-tabla.texto-left Cierre insuficiente o respuesta poco clara
                td.texto-left ¿La respuesta resolvió realmente el caso?
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold  Satisfacción con claridad de la respuesta
                td.ajuste-border-tabla.texto-left 90 %
                td.ajuste-border-tabla.texto-left 72 %
                td.ajuste-border-tabla.texto-left Debilidad comunicativa
                td.texto-left ¿La información fue comprensible para el usuario?
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold  Respuestas corregidas
                td.ajuste-border-tabla.texto-left 2 %
                td.ajuste-border-tabla.texto-left 8 %
                td.ajuste-border-tabla.texto-left Fallas de exactitud o completitud
                td.texto-left ¿Se está verificando bien la información antes de responder?
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold  Solicitudes reiteradas por el mismo tema
                td.ajuste-border-tabla.texto-left Baja frecuencia
                td.ajuste-border-tabla.texto-left Alta frecuencia
                td.ajuste-border-tabla.texto-left Persistencia del problema o respuesta insuficiente
                td.texto-left ¿La atención está resolviendo la causa o solo repitiendo respuestas?
    .row.justify-content-center.align-items-center.mb-0
      .col-xl.mb-4.mb-lg-0
        p A partir de esta matriz, el análisis deja de ser puramente descriptivo y comienza a orientarse hacia la comprensión de causas y relaciones entre variables del servicio. Esto permite que la organización identifique no solo qué indicador está desviado, sino también qué aspectos del proceso podrían estar explicando esa situación.
        .box___style_7.p-4(data-aos="zoom-in")
          p La siguiente secuencia representa el proceso de análisis que parte de la observación del indicador, continúa con la identificación de la desviación, avanza hacia la revisión de causas y finaliza en la formulación de oportunidades de mejora.
          ol.lista-ol--cuadro.mb-0
            li
              .lista-ol--cuadro__vineta
                span A
              | 
              p.mb-0 Observación del indicador. 
            li 
              .lista-ol--cuadro__vineta
                span B
              | 
              p.mb-0 Identificación de la desviación. 
            li 
              .lista-ol--cuadro__vineta
                span C
              | 
              p.mb-0 Revisión de causas. 
            li 
              .lista-ol--cuadro__vineta
                span D
              | 
              p.mb-0 Interpretación del hallazgo. 
            li 
              .lista-ol--cuadro__vineta
                span E
              | 
              p.mb-0 Definición de oportunidad de mejora.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img49.png', alt='').m-auto
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Análisis de frecuencia, causas raíz, patrones e impacto de incidencias y no conformidades
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_2.fit___box_2_3(data-aos="fade-right")
          p.mb-0 El #[b registro de incidencias y no conformidades] solo adquiere verdadero valor cuando la información recopilada se analiza de manera sistemática. En la atención de requerimientos, no basta con anotar que ocurrió un error, una demora o una respuesta insuficiente; es necesario revisar #[b con qué frecuencia se presenta, cómo puede clasificarse, qué patrones revela y qué impacto genera] sobre la calidad del servicio.
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img50.jpg', alt='').m-auto
      .col-xl
        figure.d-none.d-xl-block(data-aos="fade-left")
          img(src='@/assets/curso/intro/img4.svg', alt='' style="width: 90px")
        p.mb-0 Este análisis permite pasar del #[b dato aislado] a una comprensión más completa del problema, lo cual facilita la toma de decisiones orientadas al mejoramiento. La #[b clasificación de incidencias y no conformidades] ayuda a ordenar la información según su naturaleza. 
    .row.justify-content-center.mb-5
      .col-xl-10
        .box___style_4(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1.fit___box_container
              p.mb-0 Por ejemplo, una organización puede agrupar hallazgos asociados a #[b demoras en la respuesta, errores en la información entregada, cierres insuficientes, problemas de comunicación o fallas en el uso del canal].
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img10.svg', alt='').m-auto
    p.mb-5 Esta clasificación permite observar si un mismo tipo de situación se repite con frecuencia o si ciertos problemas se concentran en etapas específicas del proceso. Cuando esa repetición se mantiene en el tiempo, deja de ser una eventualidad y empieza a constituirse en un #[b patrón de afectación del servicio].
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p El #[b análisis de frecuencia] permite determinar cuántas veces aparece una incidencia en un período determinado, mientras que la revisión de patrones muestra si existe relación entre esas repeticiones y variables como el #[b tipo de requerimiento, el canal utilizado, el responsable de la atención o el momento en que se presenta la falla].
        p.mb-0 A su vez, el #[b análisis de causas raíz] busca identificar el origen del problema y no solo su manifestación visible. En este punto, no es suficiente afirmar que hubo demora o que la respuesta fue poco clara; es necesario establecer si ello obedece a #[b sobrecarga operativa, debilidad en los procedimientos, ausencia de revisión previa, uso inadecuado de formatos o deficiencias en la comunicación técnica].
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img51.png', alt='').m-auto
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img52.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Desde la gestión de la calidad en servicios, Pérez Fernández de Velasco (1994) aporta una base útil para comprender que la mejora del servicio exige #[b control, análisis y corrección del desempeño]. De manera complementaria, Prieto Herrera (2018) permite entender que la gerencia del servicio debe sostenerse en la #[b observación continua de la experiencia del usuario] y del funcionamiento del proceso.
    p En consecuencia, analizar incidencias y no conformidades no es una actividad accesoria, sino una condición necesaria para reconocer dónde se concentra la #[b afectación del servicio] y qué acciones conviene recomendar.
    p.mb-5 Esta tabla organiza un esquema práctico para analizar incidencias y no conformidades registradas en la atención. Su propósito es facilitar la #[b interpretación de la información] y orientar #[b recomendaciones de mejora] más precisas:
    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Tabla 2.
      span Matriz para análisis de frecuencia, causas raíz, patrones e impacto de incidencias y no conformidades
    .tabla-a(data-aos="zoom-in").mb-5
      table
        thead
          tr
            th.ajuste-border-tabla.texto-left Incidencia o no conformidad
            th.ajuste-border-tabla.texto-left Clasificación
            th.ajuste-border-tabla.texto-left Frecuencia observada
            th.ajuste-border-tabla.texto-left Posible causa raíz
            th.ajuste-border-tabla.texto-left Patrón identificado
            th.ajuste-border-tabla.texto-left Impacto en el servicio
            th.texto-left Recomendación inicial
        tbody
          tr.ajuste-color-tabla
            td.ajuste-border-tabla.texto-left.text-weight-bold  Respuesta fuera de tiempo
            td.ajuste-border-tabla.texto-left Oportunidad
            td.ajuste-border-tabla.texto-left Alta
            td.ajuste-border-tabla.texto-left Sobrecarga de trabajo
            td.ajuste-border-tabla.texto-left Se presenta en cierres mensuales
            td.ajuste-border-tabla.texto-left Afecta cumplimiento y percepción del usuario
            td.texto-left Revisar distribución de casos
          tr
            td.ajuste-border-tabla.texto-left.text-weight-bold  Respuesta corregida posteriormente
            td.ajuste-border-tabla.texto-left Exactitud
            td.ajuste-border-tabla.texto-left Media
            td.ajuste-border-tabla.texto-left Falta de verificación previa
            td.ajuste-border-tabla.texto-left Más frecuente en casos complejos
            td.ajuste-border-tabla.texto-left Genera reproceso y pérdida de confianza
            td.texto-left Implementar revisión antes del envío
          tr.ajuste-color-tabla
            td.ajuste-border-tabla.texto-left.text-weight-bold  Caso reabierto por inconformidad
            td.ajuste-border-tabla.texto-left Suficiencia
            td.ajuste-border-tabla.texto-left Alta
            td.ajuste-border-tabla.texto-left Respuesta incompleta
            td.ajuste-border-tabla.texto-left Repetido en solicitudes de validación
            td.ajuste-border-tabla.texto-left Debilita el cierre del trámite
            td.texto-left Ajustar contenido de las respuestas
          tr
            td.ajuste-border-tabla.texto-left.text-weight-bold  Queja por falta de claridad
            td.ajuste-border-tabla.texto-left Comunicación
            td.ajuste-border-tabla.texto-left Media
            td.ajuste-border-tabla.texto-left Lenguaje técnico excesivo
            td.ajuste-border-tabla.texto-left Asociado a respuestas estandarizadas
            td.ajuste-border-tabla.texto-left Disminuye satisfacción del usuario
            td.texto-left Simplificar modelos de mensaje
          tr.ajuste-color-tabla
            td.ajuste-border-tabla.texto-left.text-weight-bold  Error en soporte entregado
            td.ajuste-border-tabla.texto-left Documentación
            td.ajuste-border-tabla.texto-left Baja
            td.ajuste-border-tabla.texto-left Falta de control documental
            td.ajuste-border-tabla.texto-left Concentrado en un canal específico
            td.ajuste-border-tabla.texto-left Afecta confiabilidad del servicio
            td.texto-left Fortalecer control de anexos
    p.mb-5 En términos prácticos, esta matriz permite reconocer que el problema no siempre está en una sola falla visible, sino en la relación entre #[b frecuencia], patrón e impacto. 
    .row.justify-content-center.mb-5
      .col-xl-10
        .box___style_4(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1.fit___box_container
              p.mb-0 Por ejemplo, una incidencia con frecuencia media puede tener un impacto alto si compromete la claridad de las respuestas o provoca reaperturas constantes.
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img10.svg', alt='').m-auto
    p.mb-0 Por ello, las recomendaciones no deben formularse únicamente con base en el número de veces que ocurre una falla, sino también en el efecto que esta tiene sobre la #[b calidad de la atención] y sobre la experiencia del usuario.
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Oportunidades de mejora en el servicio al usuario
    p.mb-5 La identificación de oportunidades de mejora en el servicio al usuario surge del análisis de los resultados obtenidos en la atención, pero no se limita a reconocer fallas. Su propósito es establecer qué aspectos del servicio pueden fortalecerse para ofrecer respuestas más claras, oportunas, útiles y coherentes con las necesidades del usuario. En este sentido, una oportunidad de mejora puede nacer de una desviación evidente, pero también de diferencias entre áreas, observaciones del usuario o prácticas internas que muestran mejores resultados que otras.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_2.fit___box_2_5(data-aos="fade-right")
          p.mb-0 La #[b retroalimentación del usuario] constituye una fuente directa para reconocer esas oportunidades, porque permite conocer cómo fue percibida la atención y qué dificultades persisten desde la experiencia de quien presenta el requerimiento.
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img53.jpg', alt='').m-auto
      .col-xl
        figure.d-none.d-xl-block(data-aos="fade-left")
          img(src='@/assets/curso/intro/img4.svg', alt='' style="width: 90px")
        p.mb-0 Esta retroalimentación puede recogerse mediante encuestas, quejas, reclamaciones, comentarios o reaperturas de casos. Su valor está en que aporta una visión que no siempre aparece con la misma claridad en los indicadores internos. Por ello, no debe leerse como una opinión aislada, sino como un insumo que, al relacionarse con tiempos, incidencias y calidad de la respuesta, ayuda a precisar dónde se concentra la #[b debilidad del servicio].
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img54.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 A esta lectura puede sumarse el benchmarking, entendido como una comparación orientada a reconocer prácticas de mejor desempeño. En la atención de requerimientos, este análisis permite contrastar resultados, tiempos, formatos de respuesta, canales de atención o formas de seguimiento entre áreas, períodos u organizaciones semejantes.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p Su utilidad no está en copiar mecánicamente lo que otros hacen, sino en identificar procedimientos o estrategias que podrían adaptarse para mejorar la atención propia. En esa misma línea, las #[b mejores prácticas] corresponden a formas de trabajo que han mostrado resultados favorables y que, por su efectividad, pueden convertirse en referentes para ajustar la gestión del servicio. Desde esta perspectiva, las oportunidades de mejora se identifican cuando la organización logra relacionar tres elementos: lo que muestran sus resultados, lo que expresa el usuario y lo que revelan las prácticas comparadas.
        p.mb-0 Así, el análisis no se reduce a detectar problemas, sino que permite reconocer qué conviene conservar, qué debe corregirse y qué ajustes pueden fortalecer la atención de requerimientos de manera realista y pertinente.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img55.png', alt='').m-auto
    p.mb-5 Esta lectura es coherente con la #[b gestión de la calidad] del servicio y con la necesidad de revisar continuamente la experiencia del usuario para orientar decisiones de mejora. Las siguientes fuentes permiten identificar oportunidades de mejora en el servicio al usuario y facilitan relacionar los hallazgos del análisis con posibles acciones de ajuste: 
    .row.justify-content-center.mb-5
      .col-xl-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
          .row(titulo="Encuestas de satisfacción").ajuste-cajaAcordion
            p.mb-3 Permiten conocer la percepción del usuario sobre claridad, oportunidad y utilidad. A partir de ello, pueden ajustarse mensajes, formatos o tiempos de respuesta.
          .row(titulo="Quejas y reclamaciones").ajuste-cajaAcordion
            p.mb-3 Permiten identificar situaciones de inconformidad explícita y facilitan la revisión de procedimientos o el fortalecimiento del canal de atención.
          .row(titulo="Casos reabiertos").ajuste-cajaAcordion
            p.mb-3 Evidencian insuficiencia en la respuesta o en el cierre del trámite. Esto puede orientar mejoras en el contenido de respuesta y en la revisión previa al cierre.
          .row(titulo="Comparación entre períodos").ajuste-cajaAcordion
            p.mb-3 Permite reconocer cambios en el comportamiento de la atención e identificar deterioro, estabilidad o avance del servicio.
          .row(titulo="Comparación con otras áreas o sedes").ajuste-cajaAcordion
            p.mb-3 Facilita reconocer diferencias en resultados y prácticas, lo que puede orientar la adopción de procedimientos más efectivos.
          .row(titulo="Revisión de respuestas exitosas").ajuste-cajaAcordion
            p.mb-3 Permite identificar ejemplos internos de buen desempeño y favorecer la estandarización de buenas prácticas.
    p.mb-5 En términos prácticos, este análisis permite que la organización deje de reaccionar únicamente frente a problemas visibles y comience a trabajar sobre #[b mejoras concretas] y justificadas.
    .row.justify-content-center.mb-0
      .col-xl-10
        .box___style_4(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1.fit___box_container
              p.mb-0 Por ejemplo, si la retroalimentación del usuario muestra baja claridad de la respuesta y, al mismo tiempo, otra área obtiene mejores resultados con mensajes más simples, ya existe una #[b oportunidad de mejora] claramente identificable. De este modo, el análisis del servicio no solo describe lo que ocurre, sino que orienta ajustes más pertinentes y aplicables.
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img10.svg', alt='').m-auto
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Priorización y viabilidad de acciones de mejora
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img56.png', alt='').m-auto
      .col-xl
        .row.mb-3
          .col-xl-auto
            figure.d-none.d-xl-block(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img57.svg', alt='' style="width: 90px")
          .col-xl
            p.mb-0 Después de identificar oportunidades de mejora, la organización debe #[b decidir cuáles atender primero y cuáles pueden esperar]. Esta priorización es necesaria porque no todas las situaciones detectadas tienen el mismo impacto sobre la atención, ni todas pueden resolverse con la misma rapidez o con los mismos recursos. En la práctica, una mejora debe analizarse no solo por lo deseable que parece, sino por la urgencia del problema que busca corregir, por el efecto que tiene sobre el usuario y por la posibilidad real de implementarla dentro de las condiciones de la organización.
        p.mb-0 La #[b priorización] permite ordenar las acciones de mejora según criterios como frecuencia del problema, afectación al servicio, riesgo de repetición, impacto en la satisfacción del usuario y relación con los objetivos de atención. 
    .row.justify-content-center.mb-5
      .col-xl-10
        .box___style_4(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1.fit___box_container
              p.mb-0 Por ejemplo, una deficiencia reiterada en la claridad de las respuestas puede requerir intervención inmediata si está generando reaperturas, inconformidades y pérdida de confianza. En cambio, una situación menos frecuente o de menor impacto puede programarse para una fase posterior sin comprometer de manera significativa la calidad del servicio.
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img10.svg', alt='').m-auto
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_2.fit___box_2_3(data-aos="fade-right")
          p.mb-0 Ahora bien, priorizar no es suficiente. También es necesario revisar la #[b viabilidad] de cada acción de mejora. Una medida puede ser muy pertinente, pero difícil de ejecutar si exige cambios tecnológicos, rediseño completo del proceso o recursos que no están disponibles en el corto plazo. Por eso, la organización debe valorar si la mejora puede aplicarse con los medios actuales, si requiere ajustes progresivos o si necesita una planificación más amplia.
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img58.jpg', alt='').m-auto
      .col-xl
        figure.d-none.d-xl-block(data-aos="fade-left")
          img(src='@/assets/curso/intro/img4.svg', alt='' style="width: 90px")
        p.mb-0 Desde la gestión de la calidad en servicios, Pérez Fernández de Velasco (1994) ofrece una base útil para comprender que la mejora debe orientarse de manera organizada y no por respuestas improvisadas. En esa misma línea, Prieto Herrera (2018) permite entender que el servicio requiere decisiones que articulen #[b satisfacción del usuario], efectividad operativa y capacidad de respuesta. Por ello, la priorización y la viabilidad de las acciones de mejora constituyen un puente entre el análisis de resultados y la implementación de ajustes reales en la atención.
    p.mb-5 Esta tabla presenta un esquema práctico para ordenar acciones de mejora según su impacto, urgencia y posibilidad de implementación. Su finalidad es apoyar decisiones más realistas y coherentes con las necesidades del servicio.
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 3.
          span Matriz de priorización y viabilidad de acciones de mejora
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Acción de mejora
                th.ajuste-border-tabla.texto-left Problema que atiende
                th.ajuste-border-tabla.texto-left Impacto esperado
                th.ajuste-border-tabla.texto-left Urgencia
                th.ajuste-border-tabla.texto-left Viabilidad
                th.texto-left Prioridad resultante
            tbody
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold  Ajustar plantillas de respuesta
                td.ajuste-border-tabla.texto-left Baja claridad en la comunicación
                td.ajuste-border-tabla.texto-left Alto
                td.ajuste-border-tabla.texto-left Alta
                td.ajuste-border-tabla.texto-left Alta
                td.texto-left Muy alta
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold  Incorporar revisión previa al cierre
                td.ajuste-border-tabla.texto-left Reapertura frecuente de casos
                td.ajuste-border-tabla.texto-left Alto
                td.ajuste-border-tabla.texto-left Alta
                td.ajuste-border-tabla.texto-left Alta
                td.texto-left Muy alta
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold  Reorganizar distribución de requerimientos
                td.ajuste-border-tabla.texto-left Demoras por sobrecarga operativa
                td.ajuste-border-tabla.texto-left Alto
                td.ajuste-border-tabla.texto-left Media
                td.ajuste-border-tabla.texto-left Media
                td.texto-left Alta
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold  Capacitar al equipo en redacción y servicio
                td.ajuste-border-tabla.texto-left Respuestas técnicas poco comprensibles
                td.ajuste-border-tabla.texto-left Media
                td.ajuste-border-tabla.texto-left Alta
                td.ajuste-border-tabla.texto-left Alta
                td.texto-left Alta
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold  Rediseñar completamente el canal de atención
                td.ajuste-border-tabla.texto-left Dificultades estructurales del medio usado
                td.ajuste-border-tabla.texto-left Muy alto
                td.ajuste-border-tabla.texto-left Media
                td.ajuste-border-tabla.texto-left Baja
                td.texto-left Media
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold  Implementar nueva plataforma de seguimiento
                td.ajuste-border-tabla.texto-left Limitaciones de control del proceso
                td.ajuste-border-tabla.texto-left Muy alto
                td.ajuste-border-tabla.texto-left Baja
                td.ajuste-border-tabla.texto-left Baja
                td.texto-left Media
    p.mb-0 En términos prácticos, esta matriz ayuda a evitar dos errores frecuentes: intentar resolver todo al mismo tiempo o concentrarse en acciones de gran tamaño que retrasan mejoras más inmediatas. Muchas veces, ajustes puntuales como revisar plantillas, reforzar la validación previa o redistribuir cargas producen resultados más rápidos y visibles que transformaciones muy amplias. Por ello, una buena priorización no se limita a ordenar problemas, sino que orienta la #[b secuencia más conveniente] para intervenir el servicio con mayor efectividad.
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5 Indicadores de seguimiento a acciones de mejora
    p.mb-5 A continuación, se presenta un video sobre los indicadores de seguimiento a acciones de mejora, enfocado en evaluar si las intervenciones implementadas generan cambios reales, medibles y sostenibles en la calidad de la atención y del servicio. 
    figure(data-aos="zoom-in").mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/cZ-SWqeYj_I" title="Indicadores de seguimiento a acciones de mejora" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.fit___figcaption-video #[b Video]. Indicadores de seguimiento a acciones de mejora.
    p En consecuencia, los indicadores de seguimiento cumplen una doble función: exponen si la mejora funcionó y, al mismo tiempo, ofrecen nueva información para decidir si el ajuste debe mantenerse, ampliarse, reformularse o complementarse con otras acciones.
    p.mb-5 Esta relación presenta algunos indicadores utilizados para verificar el efecto de las acciones de mejora implementadas en la atención de requerimientos.
    .row.align-items-center.mb-5
      .col-xl-4(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img4.png', alt='' style="max-width: 350px").m-auto
      .col-xl-8(data-aos="fade-left")
        SlyderF(columnas="col-lg-6 col-xl-6")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img59.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Ajuste de plantillas de respuesta
            p.mb-0.text-center Disminución de respuestas corregidas.
            p.mb-0.text-center Cambio esperado: mayor claridad y consistencia.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img60.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Revisión previa al cierre
            p.mb-0.text-center Reducción de requerimientos reabiertos.
            p.mb-0.text-center Cambio esperado: mejor suficiencia del cierre.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img61.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Redistribución de carga de trabajo
            p.mb-0.text-center Aumento de requerimientos atendidos en plazo.
            p.mb-0.text-center Cambio esperado: mejor oportunidad del servicio.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img62.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Capacitación en atención y redacción
            p.mb-0.text-center Mejora en satisfacción del usuario.
            p.mb-0.text-center Cambio esperado: mejor percepción del servicio.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img63.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Revisión del canal de atención
            p.mb-0.text-center Disminución de quejas asociadas al medio. Cambio esperado: mayor facilidad y mejor experiencia.
    p.mb-5 La utilidad de estos indicadores se aprecia mejor cuando se comparan resultados antes y después de la intervención. Si, por ejemplo, la organización implementa una revisión previa al cierre y en el período siguiente disminuyen los casos reabiertos, existe una #[b señal de mejora]. Sin embargo, si la reducción es mínima o temporal, el análisis deberá revisar si la acción aplicada fue insuficiente, si se ejecutó de manera parcial o si el problema original tenía una causa distinta a la inicialmente identificada. De esta manera, el seguimiento no se limita a validar que “se hizo algo”, sino que permite establecer si la mejora produjo un efecto verificable y sostenible en la atención (Ortiz, 2020).
    .box___style_6.mb-0(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img45.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Ejercicio aplicado 2
          p.mb-0 Se invita a leer el documento #[b “Ejercicio aplicado 2. Análisis de resultados e identificación de oportunidades de mejora”], donde se aborda la interpretación de indicadores de desempeño, desviaciones del servicio y oportunidades de mejora en la atención de requerimientos.
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexo_Ejercicio_aplicado_2.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema2',
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
