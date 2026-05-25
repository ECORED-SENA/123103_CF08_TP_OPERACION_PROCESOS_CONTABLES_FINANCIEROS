<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Verificación de la calidad en la atención de requerimientos
    .box___style_3.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img1.png', alt='').m-auto
        .col-xl.fit___box_container
          p.mb-0 La #[b verificación de la calidad] en la atención de requerimientos permite valorar si el servicio ofrecido cumple condiciones de #[b oportunidad, claridad, suficiencia y coherencia] frente a lo solicitado por el usuario. Pérez Fernández de Velasco, en su obra sobre gestión de la calidad empresarial aplicada a los servicios y a la atención al cliente, ofrece un marco útil para comprender que la calidad no depende únicamente del resultado final, sino también de la manera en que se desarrolla la relación de servicio. En esa lógica, verificar la calidad implica analizar el #[b comportamiento real de la atención] y no limitarse a constatar que una respuesta fue emitida (Pérez Fernández de Velasco, 1994).
    p.mn-0 Murillo Moreno (2018), al desarrollar fundamentos de servicio al cliente desde un enfoque formativo, refuerza esta idea al plantear que la atención debe entenderse como un #[b proceso organizado] que puede revisarse, compararse y mejorarse. En contextos contables y tributarios, esta verificación adquiere especial relevancia porque los requerimientos suelen involucrar #[b tiempos de respuesta, soportes documentales, validación de datos y respuestas técnicas] que deben sostenerse con precisión.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Indicadores de calidad del servicio y tiempos de respuesta
    p.mb-5 Los #[b indicadores de calidad del servicio] son medidas que permiten analizar el comportamiento de la atención y compararlo con los parámetros esperados por la organización. Pérez Fernández de Velasco (1994) aporta una base pertinente para comprender que la gestión de calidad en servicios requiere #[b medición, control y revisión de resultados], mientras que Zavala Choez y Vélez Moreira (2020) relacionan la gestión de la calidad y el servicio al cliente con la competitividad de las empresas de servicios. Esto refuerza la necesidad de verificar el desempeño de la atención mediante #[b datos observables].
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_2.fit___box_2(data-aos="fade-right")
          p.mb-0 Desde esta perspectiva, un indicador no es un dato aislado, sino una herramienta que permite interpretar si el servicio se comporta de manera consistente o si presenta desviaciones (Pérez Fernández de Velasco, 1994; Zavala Choez y Vélez Moreira, 2020).
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img2.jpg', alt='').m-auto
      .col-xl
        figure.d-none.d-xl-block(data-aos="fade-left")
          img(src='@/assets/curso/intro/img4.svg', alt='' style="width: 90px")
        p.mb-0 Los #[b tiempos de respuesta] constituyen uno de los referentes más visibles de la calidad de la atención; sin embargo, no deberían analizarse de forma aislada. Ordóñez Vélez y Zaldumbide Peralvo (2020), al estudiar la calidad del servicio al cliente como ventaja competitiva en microempresas de servicio, plantean que la percepción de calidad se relaciona con múltiples factores y no únicamente con la rapidez.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img3.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En consecuencia, una respuesta rápida no siempre equivale a una respuesta adecuada, y una respuesta técnicamente correcta, pero tardía, también puede afectar negativamente la percepción del usuario. Por ello, la verificación de tiempos debe relacionarse con la #[b naturaleza del requerimiento, su complejidad y la suficiencia real de la solución entregada] (Ordóñez Vélez y Zaldumbide Peralvo, 2020).
    p.mb-5 Para valorar la calidad de la atención de requerimientos, es necesario integrar indicadores relacionados con #[b oportunidad, exactitud, suficiencia y satisfacción del usuario]. Los siguientes indicadores permiten identificar fortalezas, debilidades y posibles desviaciones en la prestación del servicio:
    .row.align-items-center.mb-5
      .col-xl-4(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img4.png', alt='' style="max-width: 350px").m-auto
      .col-xl-8(data-aos="fade-left")
        SlyderF(columnas="col-lg-6 col-xl-6")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img5.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Tiempo promedio de respuesta
            p.mb-0.text-center Mide la duración media de atención de los requerimientos y permite evaluar la oportunidad del servicio.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img6.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Porcentaje de requerimientos atendidos en plazo
            p.mb-0.text-center Identifica los casos resueltos dentro del tiempo objetivo y ayuda a establecer niveles de cumplimiento o desviación.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img7.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Requerimientos reabiertos
            p.mb-0.text-center Registra casos cerrados que vuelven a activarse y evidencia debilidades en la suficiencia de la respuesta entregada.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img8.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Respuestas con devolución o corrección
            p.mb-0.text-center Identifica casos que requieren ajustes posteriores y permite reconocer fallas de exactitud o claridad.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img9.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Nivel de satisfacción del usuario
            p.mb-0.text-center Valora la percepción del usuario sobre la atención recibida y relaciona el desempeño técnico con la experiencia del servicio.
    p.mb-5 En la práctica, estos indicadores adquieren mayor valor cuando se interpretan de manera #[b integrada]. 
    .row.justify-content-center.mb-5
      .col-xl-10
        .box___style_4(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1.fit___box_container
              p.mb-0 Por ejemplo, si un área resuelve la mayoría de los casos dentro del plazo establecido, pero mantiene un número alto de #[b devoluciones o reaperturas], la oportunidad aparenta ser positiva, aunque la calidad de la respuesta continúa siendo deficiente.
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img10.svg', alt='').m-auto
    p De ahí que la verificación no deba centrarse únicamente en la #[b velocidad], sino en la relación entre #[b tiempo, contenido y utilidad de la atención]. Esa lectura analítica es la que convierte los indicadores en insumos reales para mejorar el servicio (Zavala Choez y Vélez Moreira, 2020).
    p.mb-5 A continuación, se presenta una figura orientada a representar la comparación entre el tiempo esperado de respuesta y el tiempo realmente ejecutado, junto con la necesidad de valorar si la atención, además de oportuna, fue suficiente, clara y útil para el usuario.
    .row.justify-content-center.mb-0
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 1.
          span Relación entre tiempo objetivo, tiempo ejecutado y calidad de la atención
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img11.png', alt='Diagrama sobre evaluación del tiempo de respuesta y calidad de la atención, con bloques de tiempo objetivo y tiempo ejecutado, comparación del plazo, resultados dentro o fuera del plazo, criterios de calidad de atención y clasificación de atención en categorías A, B y C según cumplimiento del tiempo y criterios.').m-auto
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Exactitud, completitud y coherencia de la información entregada
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p La #[b verificación de la calidad] no puede limitarse únicamente al tiempo de atención. También es necesario examinar la #[b exactitud, la completitud y la coherencia] de la información entregada al usuario. Pérez Fernández de Velasco (1994) permite sostener que la calidad en los servicios exige consistencia entre lo que se promete, lo que se ejecuta y lo que se comunica, mientras que Murillo Moreno (2018) refuerza la necesidad de que la atención responda realmente a la #[b necesidad del usuario].
        p.mb-0 En consecuencia, una respuesta puede haber sido oportuna y, aun así, resultar deficiente si no coincide con los #[b soportes], si omite información importante o si presenta #[b contradicciones] frente al caso atendido (Pérez Fernández de Velasco, 1994). En términos prácticos: 
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img12.png', alt='').m-auto
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img13.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center La exactitud 
            p.mb-0.text-center Se relaciona con la correspondencia entre la respuesta y los registros o documentos consultados.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img13.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center La completitud
            p.mb-0.text-center Con la cobertura de todos los puntos relevantes del requerimiento.
      .col-xl-4.col-md-9(data-aos="zoom-in")
        .box___style_5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img13.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center La coherencia
            p.mb-0.text-center Con la relación lógica entre el mensaje emitido, el trámite realizado y la evidencia que lo respalda.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_2.fit___box_2_1(data-aos="fade-right")
          p.mb-0 Ordóñez Vélez y Zaldumbide Peralvo (2020) permiten fortalecer esta interpretación al relacionar la calidad del servicio con la #[b percepción del usuario] y con el valor competitivo del servicio prestado. Por ello, una respuesta aparentemente técnica puede resultar insuficiente si no resuelve de forma integral la necesidad planteada.
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img14.jpg', alt='').m-auto
      .col-xl
        figure.d-none.d-xl-block(data-aos="fade-left")
          img(src='@/assets/curso/intro/img4.svg', alt='' style="width: 90px")
        p.mb-0 Para verificar la calidad de la información entregada, es necesario revisar criterios que permitan valorar no solo el #[b contenido de la respuesta], sino también su #[b utilidad y correspondencia] con el requerimiento presentado por el usuario: 
    .fondo___carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img16.png').m-auto
            h4.mb-3.estilo-text Exactitud
            p.mb-0.text-center Verifica si la información coincide con los registros y soportes consultados. Su falta puede generar entrega de datos erróneos.
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img17.png').m-auto
            h4.mb-3.estilo-text Completitud
            p.mb-0.text-center Determina si la respuesta cubre todos los puntos del requerimiento. Su ausencia puede ocasionar respuestas parciales o insuficientes.
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img18.png').m-auto
            h4.mb-3.estilo-text Coherencia
            p.mb-0.text-center Evalúa si la respuesta mantiene relación lógica con el trámite y las evidencias disponibles. La falta de coherencia puede producir contradicciones o ambigüedad.
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img19.png').m-auto
            h4.mb-3.estilo-text Claridad
            p.mb-0.text-center Permite establecer si el usuario puede comprender la información entregada. La falta de claridad puede generar confusión o reiteración de solicitudes.
          .tarjeta.color-acento-botones.fit___card-sinbordes
            .row.justify-content-center.mb-4
              .col-12
                img(src='@/assets/curso/temas/img20.png').m-auto
            h4.mb-3.estilo-text Pertinencia
            p.mb-0.text-center Revisa si la respuesta se ajusta realmente a lo solicitado por el usuario. Su ausencia puede derivar en información irrelevante o desbordada.
        .row.justify-content-center.mb-5
          .col-xl-10
            .box___style_4(data-aos="zoom-in")
              .row.align-items-center
                .col-xl.order-2.order-lg-1.fit___box_container
                  p.mb-0 Un ejemplo permite comprender mejor esta revisión. Si un usuario solicita la validación de un pago y la organización responde únicamente con el valor registrado, pero omite la fecha, el soporte y la aclaración sobre una diferencia detectada, la respuesta puede ser exacta en un dato puntual, aunque incompleta e insuficiente.
                .col-xl-auto.order-1.order-lg-2
                  figure
                    img(src='@/assets/curso/temas/img10.svg', alt='').m-auto
    p.mb-0 Del mismo modo, una respuesta extensa que incluya información no relacionada con la solicitud puede parecer detallada, pero no necesariamente pertinente. Por ello, la calidad de la información entregada debe valorarse desde la utilidad real que tiene para resolver el requerimiento (Murillo Moreno, 2018).
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Instrumentos de medición de satisfacción del usuario
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img21.jpg', alt='').m-auto
            .col-xl.fit___box_container
              p.mb-0 La #[b satisfacción del usuario] constituye un insumo importante para verificar la calidad de la atención, porque permite conocer cómo fue percibido el servicio desde la experiencia de quien recibió la respuesta. Murillo Moreno (2018) ofrece una base útil para comprender que el servicio al cliente debe orientarse a la relación entre organización y usuario, mientras que Zavala Choez y Vélez Moreira (2020) vinculan #[b calidad del servicio y competitividad]. Esto demuestra que la percepción del usuario no es un dato accesorio, sino una #[b fuente de información relevante] para valorar el desempeño del servicio.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img22.png', alt='').m-auto
    p En esa lógica, medir satisfacción implica recopilar información útil sobre la #[b experiencia de atención] y no limitarse a obtener una opinión general al final del trámite. Sin embargo, medir satisfacción no equivale a preguntar de manera genérica si el usuario quedó conforme. Un instrumento útil debe centrarse en aspectos observables, como #[b claridad de la respuesta, oportunidad, utilidad de la solución, trato recibido y facilidad del canal utilizado]. Esta precisión resulta importante porque permite relacionar la experiencia del usuario con #[b fallas o fortalezas concretas] del proceso de atención. De lo contrario, la medición se vuelve demasiado general y aporta poco valor para el análisis y la mejora.
    p.mb-5 Para fortalecer el proceso de verificación, los instrumentos de satisfacción deben estructurarse a partir de criterios específicos que permitan interpretar la experiencia del usuario de manera objetiva y útil para la mejora del servicio: 
    SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img23.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Oportunidad
        p.mb-0.text-center ¿La respuesta fue entregada en un tiempo adecuado?
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img23.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Claridad
        p.mb-0.text-center ¿La información comunicada fue comprensible?
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img23.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Utilidad
        p.mb-0.text-center ¿La respuesta ayudó a resolver o aclarar su solicitud?
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img23.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Trato recibido
        p.mb-0.text-center ¿La atención fue respetuosa y profesional?
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img23.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Canal de atención
        p.mb-0.text-center ¿El medio utilizado facilitó la gestión del requerimiento?
    p.mb-0 En la práctica, estos instrumentos pueden aplicarse mediante encuestas breves al cierre del trámite, formularios digitales o llamadas de verificación. Lo importante es que sus resultados no queden aislados en una cifra, sino que se relacionen con otros datos del proceso, como tiempos de respuesta, devoluciones, reaperturas o reiteración de solicitudes. De esta manera, la satisfacción del usuario deja de ser un dato decorativo y se convierte en un criterio real de verificación de la calidad del servicio.
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Registro de incidencias, no conformidades y hallazgos de calidad
    p.mb-5 La #[b verificación de la calidad] también exige registrar situaciones que evidencian desviaciones, fallas o comportamientos problemáticos en la atención. Pérez Fernández de Velasco (1994), al abordar la gestión de calidad en servicios, sustenta la necesidad de #[b controlar procesos y revisar resultados], mientras que Murillo Moreno (2018) aporta una perspectiva formativa sobre el seguimiento del servicio.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_2.fit___box_2_2(data-aos="fade-right")
          p.mb-0 Desde esta perspectiva, las #[b incidencias] corresponden a eventos que afectan el desarrollo normal de la atención; las #[b no conformidades], a incumplimientos frente a criterios o parámetros definidos; y los #[b hallazgos], a observaciones relevantes que pueden evidenciar fortalezas o debilidades del servicio.
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img24.jpg', alt='').m-auto
      .col-xl
        figure.d-none.d-xl-block(data-aos="fade-left")
          img(src='@/assets/curso/intro/img4.svg', alt='' style="width: 90px")
        p.mb-0 En muchos entornos de atención, los problemas se repiten porque no quedan documentados de manera organizada. Si una organización detecta errores frecuentes en la #[b claridad de sus respuestas], pero no registra esas situaciones, difícilmente podrá analizarlas y corregirlas. Por ello, el registro de incidencias y hallazgos no debe entenderse como una carga administrativa adicional, sino como una herramienta que permite hacer visible la #[b calidad real de la atención] y respaldar decisiones de mejora posteriores.
    p.mb-5 Para garantizar #[b trazabilidad] y facilitar el análisis de la información, el registro de incidencias, no conformidades y hallazgos debe contener elementos básicos que permitan identificar el problema, su contexto y las acciones adoptadas frente a la situación detectada:
    .row.justify-content-center.mb-5
      .col-xl-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
          .row(titulo="Fecha del hallazgo").ajuste-cajaAcordion
            p.mb-3 Permite ubicar temporalmente la situación identificada.
          .row(titulo="Tipo de incidencia o no conformidad").ajuste-cajaAcordion
            p.mb-3 Facilita clasificar la naturaleza del problema detectado.
          .row(titulo="Descripción del hecho").ajuste-cajaAcordion
            p.mb-3 Precisa qué ocurrió durante la atención o el trámite.
          .row(titulo="Requerimiento afectado").ajuste-cajaAcordion
            p.mb-3 Relaciona el hallazgo con el caso correspondiente.
          .row(titulo="Posible causa").ajuste-cajaAcordion
            p.mb-3 Orienta el análisis posterior de la situación identificada.
          .row(titulo="Acción inmediata adoptada").ajuste-cajaAcordion
            p.mb-3 Registra la respuesta inicial implementada frente al hallazgo.
          .row(titulo="Responsable del registro").ajuste-cajaAcordion
            p.mb-3 Garantiza trazabilidad y control interno de la información.
    p.mb-5 Cuando este registro se realiza de manera #[b consistente], la organización puede reconocer #[b patrones de comportamiento]. 
    .row.justify-content-center.mb-5
      .col-xl-10
        .box___style_4(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1.fit___box_container
              p.mb-0 Por ejemplo, si una misma no conformidad aparece repetidamente en un canal específico o en un tipo particular de requerimiento, deja de tratarse de un hecho aislado y se convierte en una señal que exige revisión del proceso.
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img10.svg', alt='').m-auto
    .row.justify-content-center.align-items-center.mb-0
      .col-xl.mb-4.mb-lg-0
        p De este modo, la #[b verificación de la calidad] adquiere mayor utilidad porque conecta los hallazgos con decisiones concretas de análisis y mejora. El registro de incidencias, no conformidades y hallazgos permite identificar situaciones relevantes en la atención; sin embargo, esa información solo adquiere mayor valor cuando se #[b organiza y consolida] en formatos que faciliten su lectura, comparación e interpretación.
        p.mb-0 Por ello, la verificación de la calidad no se agota en registrar eventos del servicio, sino que exige estructurar #[b reportes] que integren indicadores, resultados de satisfacción, tiempos de respuesta, tendencias e incidencias, de modo que la organización disponga de una base más clara para el #[b seguimiento de la atención y la toma de decisiones].
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img25.png', alt='').m-auto
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Reportes de seguimiento e indicadores de atención
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_2.fit___box_2_3(data-aos="fade-right")
          p.mb-0 La #[b verificación de la calidad] en la atención de requerimientos necesita traducirse en #[b reportes] que permitan organizar, interpretar y comunicar los resultados obtenidos. En este punto, el interés ya no se centra únicamente en conocer un dato aislado, sino en consolidar información útil sobre #[b tiempos de respuesta, exactitud de la información entregada, satisfacción del usuario, incidencias registradas y comportamientos recurrentes del servicio].
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img26.jpg', alt='').m-auto
      .col-xl
        figure.d-none.d-xl-block(data-aos="fade-left")
          img(src='@/assets/curso/intro/img4.svg', alt='' style="width: 90px")
        p.mb-0 Un #[b reporte de atención] cumple precisamente esa función: convertir la información dispersa del proceso en una lectura estructurada del desempeño. Desde la gestión de la calidad, Pérez Fernández de Velasco (1994) permite comprender que el control del servicio requiere #[b datos organizados] para respaldar decisiones de mejora, mientras que Ortiz Carrillo, Gómez Flórez y Villarreal Trujillo (2017) refuerzan la importancia de la #[b documentación y del seguimiento] dentro de los sistemas de gestión de calidad.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img27.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la atención de requerimientos, estos reportes pueden adoptar distintos formatos según la necesidad de análisis. No todos cumplen la misma finalidad. Algunos permiten analizar el #[b comportamiento general del servicio]; otros facilitan el seguimiento de aspectos específicos, como la #[b satisfacción del usuario] o los #[b tiempos de respuesta]; y otros ayudan a sintetizar hallazgos para la #[b toma de decisiones].
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p Por ello, la organización debe seleccionar el formato de reporte según el tipo de información que desea revisar, el nivel de detalle requerido y el uso que se dará al resultado. Un error frecuente consiste en concentrar toda la información en un único informe extenso, cuando en realidad resulta más útil trabajar con formatos #[b diferenciados y complementarios].
        p.mb-0 Entre los formatos más utilizados se encuentran el #[b #[i dashboard] de indicadores, la matriz de satisfacción del usuario, el informe de tiempos de atención], el #[b listado de incidencias y no conformidades, el análisis de tendencias], el #[b reporte ejecutivo] y los #[b comparativos por períodos]. Cada uno cumple una función específica dentro del proceso de seguimiento y facilita diferentes niveles de análisis del servicio.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img28.png', alt='').m-auto
    p.mb-5 Para comprender la utilidad de estos formatos, es importante relacionar el tipo de reporte con la información que organiza y el aporte que realiza al seguimiento de la atención:
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 #[i Dashboard] de indicadores
                p.mb-0 Integra tiempos de respuesta, cumplimiento, reaperturas, correcciones y satisfacción. Permite una lectura rápida del desempeño general del servicio.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img30.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Matriz de satisfacción
                p.mb-0 Organiza resultados relacionados con claridad, oportunidad, utilidad, trato y canal de atención. Facilita analizar la percepción del usuario.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img31.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Informe de tiempos
                p.mb-0 Consolida tiempo objetivo, tiempo ejecutado, casos fuera de plazo y desviaciones. Permite revisar oportunidad y cumplimiento.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img32.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Listado de incidencias
                p.mb-0 Registra incidencias, no conformidades, hallazgos, frecuencia y responsables. Ayuda a identificar problemas recurrentes.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img33.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Análisis de tendencias
                p.mb-0 Presenta el comportamiento de los indicadores en diferentes períodos. Permite reconocer mejora, estabilidad o deterioro del servicio.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img34.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Reporte ejecutivo
                p.mb-0 Resume hallazgos principales, interpretaciones, alertas y recomendaciones. Apoya la toma de decisiones por parte de los responsables.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img35.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Comparativo por períodos
                p.mb-0 Contrasta resultados entre semanas, meses o trimestres. Facilita identificar avances, retrocesos o estancamientos en la atención.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img36.png', alt='' style="max-width: 500px").m-auto
    .row.justify-content-center.mb-5
      .col-xl-10
        .box___style_4(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1.fit___box_container
              p.mb-0 Por ejemplo, el #[i dashboard] resulta útil cuando se requiere una visión rápida y sintética del comportamiento del servicio, mientras que el informe de tiempos permite profundizar en la oportunidad de la atención y en las desviaciones frente a los plazos establecidos.
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img10.svg', alt='').m-auto
    p.mb-5 De manera similar, la matriz de satisfacción resulta pertinente cuando se busca comprender la experiencia del usuario, y el listado de incidencias permite rastrear fallas recurrentes que afectan la calidad del servicio. Por ello, la organización no debería elegir un único formato de reporte de manera rígida, sino combinar aquellos que mejor respondan a sus necesidades de análisis. Además de seleccionar el formato adecuado, los reportes de seguimiento deben estructurarse con componentes mínimos que faciliten la interpretación de los resultados y orienten la toma de decisiones posteriores:
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
                    img(src='@/assets/curso/temas/img37.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Periodo evaluado
                p.mb-0.text-center Semana, mes o trimestre analizado.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img38.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Indicadores revisados
                p.mb-0.text-center Tiempos, cumplimiento, reaperturas, satisfacción e incidencias.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img39.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Resultados observados
                p.mb-0.text-center Valores obtenidos durante el período evaluado.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img40.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Comparación con objetivo o período anterior
                p.mb-0.text-center Desviaciones, mejoras o retrocesos identificados.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img41.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Hallazgos relevantes
                p.mb-0.text-center Situaciones destacadas relacionadas con el servicio.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img42.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Interpretación
                p.mb-0.text-center Lectura breve sobre el significado de los resultados obtenidos.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img43.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Recomendaciones iniciales
                p.mb-0.text-center Orientaciones para análisis posteriores o ajustes del proceso.
        p.mb-5 En términos prácticos, un reporte bien elaborado permite responder preguntas como las siguientes: 
    SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img23.svg' style="max-width: 90px").m-auto
        p.mb-0.text-center ¿Se están cumpliendo los tiempos objetivo?
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img23.svg' style="max-width: 90px").m-auto
        p.mb-0.text-center ¿Qué aspecto genera mayor inconformidad en los usuarios?
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img23.svg' style="max-width: 90px").m-auto
        p.mb-0.text-center ¿Qué incidencias aparecen con mayor frecuencia?
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img23.svg' style="max-width: 90px").m-auto
        p.mb-0.text-center ¿Existen mejoras respecto al período anterior?
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/img23.svg' style="max-width: 90px").m-auto
        p.mb-0.text-center ¿Qué hallazgos requieren análisis prioritario?
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_2.fit___box_2_4(data-aos="fade-right")
          p.mb-0 Estas preguntas evidencian que el reporte no debe limitarse a enumerar datos, sino facilitar la comprensión del comportamiento del servicio y orientar el siguiente nivel del proceso: el análisis de resultados y la identificación de oportunidades de mejora.
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img44.jpg', alt='').m-auto
      .col-xl
        figure.d-none.d-xl-block(data-aos="fade-left")
          img(src='@/assets/curso/intro/img4.svg', alt='' style="width: 90px")
        p.mb-0 Así, el seguimiento mediante indicadores y reportes se convierte en una herramienta de control y aprendizaje para la organización. No solo permite verificar cómo se está prestando la atención, sino también reconocer dónde se concentran las debilidades y qué información resulta más útil para sustentar decisiones de ajuste. Desde esta perspectiva, los formatos de reporte constituyen una parte importante de la evaluación del servicio, porque articulan medición, interpretación y base documental para la mejora continua.
    .box___style_6.mb-0(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img45.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Ejercicio aplicado 1
          p.mb-0 Se invita a leer el documento #[b Ejercicio aplicado 1. Verificación de la calidad en la atención de requerimientos], donde se aborda el análisis de indicadores, hallazgos y mecanismos de seguimiento relacionados con la calidad en la atención de servicios.
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexo_Ejercicio_aplicado_1.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
