<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Sistemas de gestión de calidad aplicables al servicio
    p.mb-5 Un sistema de gestión de calidad aplicado al servicio permite organizar la atención de requerimientos a partir de criterios, procedimientos, registros, controles y revisiones que ayudan a mantener la consistencia del proceso. En el entorno empresarial, esto significa que la calidad de la atención no queda sujeta únicamente a la experiencia individual de quien responde, sino que se apoya en una estructura que orienta cómo se presta el servicio, cómo se controla su desempeño y cómo se corrigen las fallas detectadas.
    .box___style_3.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img114.png', alt='').m-auto
        .col-xl.fit___box_container
          p.mb-0 En esa lógica, un sistema de gestión no se limita a documentar actividades; su utilidad real está en ordenar el trabajo, sostener la mejora y dar confianza sobre la forma en que la organización responde al usuario (Ortiz, 2020).
    p.mb-0 En la atención de requerimientos, este enfoque resulta especialmente útil porque integra varios elementos que ya se han trabajado en capítulos anteriores: tiempos de respuesta, calidad de la información, satisfacción del usuario, incidencias, acciones de mejora y seguimiento. La diferencia es que ahora esos elementos dejan de verse como piezas separadas y pasan a entenderse como parte de un #[b sistema integrado] que debe mantenerse, evaluarse y ajustarse de manera continua.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Normas aplicables, certificaciones y estándares
    p.mb-5 Las normas, certificaciones y estándares permiten dar un marco más estable a la gestión del servicio. En una empresa, su función no es solo #[b “cumplir un requisito”], sino orientar la manera en que se organiza el trabajo, se documentan los procesos, se controlan los resultados y se demuestra el compromiso con la calidad.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img115.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En este sentido, la atención de requerimientos puede fortalecerse cuando la organización define criterios formales sobre cómo recibe, tramita, responde, registra, revisa y mejora su servicio. Una norma ayuda a fijar esos referentes; un estándar permite comparar el desempeño frente a una expectativa definida; y una certificación da cuenta de que el sistema ha sido evaluado frente a requisitos reconocidos (ISO, s.f.; ICONTEC, 2020).
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p En el ámbito de la calidad, la #[b ISO 9001] es uno de los referentes más conocidos porque establece requisitos para diseñar, implementar, mantener y mejorar un sistema de gestión de calidad. Su interés para la atención de requerimientos radica en que promueve una organización orientada al cliente, basada en procesos y comprometida con la mejora continua.
        .box___style_1(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img116.jpg', alt='').m-auto
            .col-xl.fit___box_container
              p.mb-0 Además, la propia ISO señala que los principios de gestión de la calidad son adaptables a organizaciones de distintos tamaños y sectores, lo que permite entender que su lógica no es exclusiva de grandes empresas ni de contextos industriales, sino también aplicable a servicios y a operaciones administrativas donde la experiencia del usuario depende de la consistencia del proceso (ISO, s.f.).
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img22.png', alt='').m-auto
    p Ahora bien, conviene aclarar que una empresa puede mejorar su atención sin estar certificada. La certificación puede fortalecer la disciplina del sistema, aportar confianza externa y favorecer el control del proceso, pero la calidad del servicio no depende únicamente de obtener un sello.
    p En la cotidianidad empresarial, lo más importante es que existan #[b procesos definidos], responsabilidades claras, criterios de seguimiento y capacidad real para corregir fallas y sostener mejoras. Si la organización solo busca la certificación como un fin formal, sin traducirla en prácticas de servicio, el sistema pierde valor operativo (Ortiz, 2020).
    p.mb-5 La siguiente relación presenta la función de las normas, los estándares y la certificación dentro de la gestión del servicio y su aplicación en la atención de requerimientos:
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Norma")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img117.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Norma
            p.mb-0 Define requisitos o lineamientos de calidad. Aplicación: orientar cómo estructurar procesos, controles y mejora.
      .py-3.py-md-4(titulo="Estándar")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img118.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Estándar
            p.mb-0 Sirve como referencia de desempeño esperado. Aplicación: comparar tiempos, calidad de respuesta y satisfacción.
      .py-3.py-md-4(titulo="Certificación")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img119.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Certificación
            p.mb-0 Verifica conformidad del sistema frente a una norma. Aplicación: aportar evidencia externa sobre el funcionamiento del sistema.
    p.mb-0 Cuando la empresa comprende esta diferencia, puede usar mejor cada elemento. La norma orienta, el estándar ayuda a medir y la certificación verifica. En la práctica, esto permite que la atención de requerimientos se gestione con mayor criterio y no solo con respuestas improvisadas o basadas en hábitos que cambian según la persona que atiende.
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Auditorías y documentación de calidad
    p.mb-5 Las auditorías de calidad cumplen una función de revisión y aprendizaje dentro del sistema de servicio. En la atención de requerimientos, auditar no consiste en buscar culpables, sino en comparar lo planificado con lo ejecutado, revisar evidencias, identificar incumplimientos y reconocer #[b oportunidades de mejora]. Por ello, una auditoría bien orientada ayuda a responder preguntas como estas: ¿el proceso se está aplicando como fue definido?, ¿los registros permiten reconstruir la atención?, ¿las respuestas cumplen criterios de suficiencia y claridad?, ¿las acciones de mejora se están verificando?
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_2.fit___box_2_7(data-aos="fade-right")
          p.mb-0 Desde esta perspectiva, la auditoría es un instrumento de control, pero también una fuente de retroalimentación para fortalecer la #[b calidad del servicio] (Cifuentes, 2014).
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img120.jpg', alt='').m-auto
      .col-xl
        figure.d-none.d-xl-block(data-aos="fade-left")
          img(src='@/assets/curso/intro/img4.svg', alt='' style="width: 90px")
        p.mb-0 En las organizaciones de servicio, #[b la auditoría] necesita atender particularidades que no siempre aparecen con la misma fuerza en procesos productivos. #[b La orientación ISO] sobre organizaciones de servicio señala que este tipo de entidades presentan características específicas en la forma de #[b entregar y controlar su prestación], lo que exige observar cómo se gestionan los procesos de interacción con el cliente, la documentación asociada y la consistencia en la respuesta.
    p.mb-5 Esto es especialmente relevante cuando la calidad del servicio depende de la información suministrada, de la oportunidad y de la forma en que se maneja la retroalimentación del usuario (ISO, 2017).
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img121.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La documentación de calidad complementa esta auditoría porque convierte la atención en un proceso visible y verificable. Documentar no significa llenar la empresa de papeles o archivos innecesarios, sino registrar lo que realmente permite controlar el servicio: procedimientos, formatos, instructivos, criterios de revisión, reportes, hallazgos y evidencias de mejora.
    p.mb-5 Cuando la documentación es clara y útil, facilita la formación del equipo, reduce variaciones innecesarias y permite sostener el servicio aun cuando cambien las personas responsables. En cambio, cuando la documentación es ambigua o desactualizada, el proceso se vuelve más dependiente de interpretaciones individuales y más difícil de controlar (Ortiz, 2020; Vega, 2014). Los siguientes documentos permiten apoyar el control de calidad en la atención de requerimientos y facilitar el seguimiento del servicio: 
    .fondo___carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img122.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Procedimiento de atención
            p.mb-0.text-center Define la secuencia general del trámite. 
            p.mb-0.text-center Ejemplo de uso: recepción, validación, respuesta y cierre.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img123.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Instructivo de revisión
            p.mb-0.text-center Precisa cómo verificar calidad antes del envío. 
            p.mb-0.text-center Ejemplo de uso: control previo de soportes y claridad.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img124.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Formato de incidencias
            p.mb-0.text-center Registra fallas, no conformidades y hallazgos. 
            p.mb-0.text-center Ejemplo de uso: demoras, errores y reaperturas.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img125.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Reporte de indicadores
            p.mb-0.text-center Consolida resultados de seguimiento. 
            p.mb-0.text-center Ejemplo de uso: tiempos, satisfacción y correcciones.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img126.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Registro de acciones de mejora
            p.mb-0.text-center Documenta cambios aplicados y su seguimiento.
            p.mb-0.text-center Ejemplo de uso: ajuste de plantillas, revisión previa y capacitación.
        p En la vida diaria de una empresa, esta documentación debería ser lo bastante sencilla para usarse y lo bastante clara para orientar el trabajo. Si el procedimiento de atención no explica de manera comprensible quién responde, quién revisa y qué evidencia debe quedar, el documento existe, pero no controla realmente el servicio. Por eso, la documentación de calidad debe diseñarse pensando en la #[b operación real] y no solo en el archivo.
        p.mb-5 Esta figura representa la relación entre la documentación del proceso, la revisión por auditoría y los indicadores de seguimiento como elementos que permiten controlar y mejorar la atención de requerimientos.
        .row.justify-content-center.mb-0
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 2.
              span Articulación entre auditoría, documentación e indicadores en el control del servicio
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img127.png', alt='Diagrama sobre gestión y mejora continua del servicio, con etapas de documentación, auditoría e indicadores, conectadas desde una entrada de requerimientos y registros hasta una salida con decisiones informadas y mejora del servicio, además de un bloque de retroalimentación y mejora continua.').m-auto
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.3 Indicadores de control del servicio
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_2(data-aos="fade-right")
          p.mb-0 #[b Los indicadores de control del servicio], en el marco de un sistema de gestión de calidad, no cumplen exactamente la misma función que en el análisis puntual de un periodo. En este capítulo, su papel es más estructural: sirven para monitorear si el sistema está funcionando de manera estable, si los procesos se cumplen y si las mejoras se sostienen. Por eso, además de medir resultados como tiempos o satisfacción, deben permitir identificar tendencias, alertar sobre desviaciones importantes y apoyar decisiones de corrección, ajuste o estandarización (Uribe Macías, 2013).
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img128.jpg', alt='').m-auto
      .col-xl
        figure.d-none.d-xl-block(data-aos="fade-left")
          img(src='@/assets/curso/intro/img4.svg', alt='' style="width: 90px")
        p.mb-0 En #[b la cotidianidad empresarial], esto significa que los indicadores no deberían verse solo como cifras para presentar al final del mes. Su verdadero valor está en orientar el control del servicio. Un indicador de reaperturas.
    .row.justify-content-center.mb-5
      .col-xl-10
        .box___style_4(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1.fit___box_container
              p.mb-0 Por ejemplo, no solo muestra cuántos casos volvieron a activarse, sino también si el cierre está siendo suficientemente sólido. Un indicador de satisfacción en claridad no solo expresa una percepción, sino que puede advertir problemas en la forma de responder. Y un indicador de incidencias repetidas puede señalar que una falla operativa sigue viva aunque ya se haya diseñado una mejora.
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img10.svg', alt='').m-auto
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p Para que estos #[b indicadores sirvan al sistema de calidad], deben tener propósito, frecuencia de medición, responsable de revisión y criterio de interpretación. Si solo se reportan números sin contexto, el control del servicio se debilita. En cambio, cuando cada indicador está asociado a una meta, a una fuente de datos y a una decisión posible, el sistema gana capacidad para reaccionar a tiempo y sostener el mejoramiento. Esta relación entre indicador, control y decisión es una de las condiciones que hacen útil un sistema de gestión en la atención de requerimientos (ISO, s.f.).
        p.mb-0 Esta tabla presenta indicadores que pueden utilizarse para controlar la atención de requerimientos desde una perspectiva sistémica. Su finalidad es mostrar que el control del servicio exige observar tanto resultados como estabilidad del proceso: 
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img129.png', alt='').m-auto
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 4.
          span Indicadores de control del servicio en un sistema de gestión de calidad
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Indicador
                th.ajuste-border-tabla.texto-left Qué controla
                th.ajuste-border-tabla.texto-left Frecuencia sugerida
                th.texto-left Decisión que puede orientar
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Requerimientos atendidos en plazo
                td.ajuste-border-tabla.texto-left Oportunidad del servicio
                td.ajuste-border-tabla.texto-left Semanal o mensual
                td.texto-left Ajuste de tiempos o distribución de carga
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Respuestas corregidas
                td.ajuste-border-tabla.texto-left Exactitud y suficiencia
                td.ajuste-border-tabla.texto-left Semanal o mensual
                td.texto-left Refuerzo de revisión previa o formación
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Casos reabiertos
                td.ajuste-border-tabla.texto-left Solidez del cierre
                td.ajuste-border-tabla.texto-left Mensual
                td.texto-left Revisión del proceso de respuesta
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Satisfacción con claridad
                td.ajuste-border-tabla.texto-left Comprensión del usuario
                td.ajuste-border-tabla.texto-left Mensual o bimestral
                td.texto-left Ajuste de mensajes y guías
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Incidencias reiteradas
                td.ajuste-border-tabla.texto-left Estabilidad del proceso
                td.ajuste-border-tabla.texto-left Mensual
                td.texto-left Acción correctiva sobre proceso o canal
    p.mb-0 En la práctica, estos indicadores ayudan a que la empresa no dependa de la intuición para valorar su servicio. Si un gerente o responsable de área percibe que “todo va mejor”, pero el indicador de respuestas corregidas sigue creciendo, el sistema muestra una realidad distinta. Por eso, los indicadores de control funcionan como una base objetiva para revisar el servicio y no solo como un soporte administrativo.
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.4 Mejora continua y seguimiento del sistema
    p.mb-5 En el marco de un sistema de gestión de calidad, la mejora continua no debe entenderse como una reacción ocasional frente a un problema, sino como una forma permanente de revisar, aprender y ajustar el servicio. A diferencia del capítulo anterior, donde la mejora se trabajó desde la lógica operativa de implementación, aquí interesa su lugar dentro del sistema: cómo se recoge la información, cómo se integra al control del proceso y cómo se usa para sostener el desempeño del servicio en el tiempo. En ese sentido, la mejora continua depende de la capacidad de la organización para enlazar indicadores, auditorías, quejas, incidencias, revisión de procesos y decisiones de ajuste (ISO, s.f.).
    .box___style_3.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img130.png', alt='').m-auto
        .col-xl.fit___box_container
          p.mb-0 #[b El seguimiento del sistema] cumple #[b un papel central] porque evita que la mejora quede reducida a iniciativas aisladas. En una empresa, este seguimiento puede expresarse en #[b reuniones periódicas de revisión, análisis comparativos entre períodos, control del cumplimiento de acciones correctivas y revisión del comportamiento de indicadores]. Así, el sistema no solo registra problemas, sino que crea una ruta para verificar si las respuestas adoptadas produjeron cambios reales. Cuando esta revisión falta, las mejoras tienden a perder continuidad y el servicio vuelve con facilidad a sus fallas anteriores.
    p.mb-5 En la cotidianidad empresarial, este seguimiento ayuda a responder preguntas muy concretas: 
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img13.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center ¿La mejora aplicada redujo la causa del problema o solo su efecto visible?
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img13.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center ¿Las quejas por claridad disminuyeron de forma sostenida?
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img13.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center ¿El procedimiento ajustado se está cumpliendo realmente?
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .box___style_5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img13.svg', alt="" style="max-width: 90px").m-auto
            p.mb-0.text-center ¿Los nuevos tiempos de atención están produciendo mejor servicio o solo más presión sobre el equipo? 
    p.mb-0 Estas preguntas muestran que la mejora continua dentro del sistema no es un discurso general, sino una práctica de control y aprendizaje sobre la atención de requerimientos (Ortiz, 2020).
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.5 Sostenibilidad de las mejoras implementadas
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img131.png', alt='').m-auto
      .col-xl
        .row.mb-3
          .col-xl-auto
            figure.d-none.d-xl-block(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img57.svg', alt='' style="width: 90px")
          .col-xl
            p.mb-0 Sostener una mejora significa lograr que el cambio no desaparezca cuando pasa la urgencia inicial. En el servicio, esta sostenibilidad depende de varios factores: #[b que el ajuste haya sido documentado, que el equipo lo conozca, que existan indicadores para seguirlo, que la dirección le dé continuidad y que se mantenga una revisión periódica de su efecto]. Si alguno de estos elementos falla, la mejora puede funcionar al inicio y luego diluirse, especialmente cuando cambia el volumen de trabajo, se incorpora nuevo personal o aparecen presiones operativas distintas (Ortiz, 2020).
        p.mb-0 La sostenibilidad también depende de convertir la mejora en parte de la rutina y no en excepción. En la atención de requerimientos, esto significa que el ajuste debe integrarse a guías, formatos, criterios de revisión, espacios de seguimiento y prácticas del equipo. Si la nueva plantilla solo la usa una persona, si el control previo al cierre se hace cuando #[b “hay tiempo”] o si el reporte de indicadores no se revisa con frecuencia, la mejora queda frágil. En cambio, cuando el ajuste se incorpora a la forma normal de atender, gana estabilidad y puede seguir perfeccionándose con base en nuevos hallazgos (ISO, s.f.).
    p.mb-5 Los siguientes factores permiten sostener las mejoras dentro del sistema de calidad y fortalecer la continuidad de los cambios aplicados en el servicio.
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img84.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Documentación actualizada").ajuste-cajaAcordion
            p.mb-0 Riesgo: el cambio depende de la memoria del equipo. 
            p.mb-3 Acción: registrar la mejora en guías o procedimientos.
          .row(titulo="Capacitación del personal").ajuste-cajaAcordion
            p.mb-0 Riesgo: uso desigual o parcial del ajuste. 
            p.mb-3 Acción: socializar y formar sobre la mejora.
          .row(titulo="Revisión periódica").ajuste-cajaAcordion
            p.mb-0 Riesgo: la mejora se abandona con el tiempo. 
            p.mb-3 Acción: programar seguimiento e indicadores.
          .row(titulo="Apoyo de la dirección").ajuste-cajaAcordion
            p.mb-0 Riesgo: falta de continuidad o prioridad. 
            p.mb-3 Acción: incluir la mejora en decisiones y revisión de gestión.
          .row(titulo="Integración al proceso").ajuste-cajaAcordion
            p.mb-0 Riesgo: el cambio se aplica como excepción. 
            p.mb-3 Acción: incorporarlo a la rutina normal del servicio.
    p.mb-5 En la práctica, sostener mejoras es una prueba de madurez del sistema de calidad. Una empresa puede diseñar buenas acciones, ejecutar auditorías y definir indicadores, pero si esos elementos no se convierten en hábitos organizacionales, la calidad del servicio seguirá dependiendo de esfuerzos puntuales. La sostenibilidad, entonces, no es el final del proceso, sino la condición que permite que la mejora continua siga teniendo efecto sobre la #[b atención al usuario] (ISO, s.f.).
    .box___style_6.mb-0(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img45.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Ejercicio aplicado 5
          p.mb-0 Se invita a leer el documento #[b Ejercicio aplicado 5. Sistema de gestión de calidad y control del servicio], donde se aborda el fortalecimiento de los sistemas de gestión de calidad en la atención de requerimientos dentro de una empresa de servicios contables.
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexo_Ejercicio_aplicado_5.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema5',
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
