<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Cuestionario de verificación sobre seguimiento, calidad y mejora continua en la atención de requerimientos del usuario',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión del proceso de verificación de la calidad en la atención de requerimientos, el análisis de resultados, la identificación de oportunidades de mejora, el diseño e implementación de ajustes y la aplicación de criterios de mejora continua y sistemas de gestión de calidad en contextos de servicio.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            'En una empresa, el tiempo objetivo de respuesta para requerimientos de validación documental es de 2 días hábiles. En el último mes, el tiempo promedio ejecutado fue de 3,4 días, pero la satisfacción del usuario en claridad subió de 78 % a 90 %. ¿Cuál es la interpretación más adecuada?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El servicio mejoró totalmente porque aumentó la satisfacción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Existe una desviación negativa en oportunidad, aunque la claridad de la respuesta mejoró.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'No existe desviación porque el promedio no se aplica a todos los casos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La mejora en claridad elimina la necesidad de revisar los tiempos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Una empresa compara dos periodos. En el primero atendió 95 % de casos en plazo; en el segundo, 87 %. Sin embargo, en el segundo periodo aumentó la complejidad de los requerimientos y se incorporó un control adicional antes del cierre. ¿Qué debe hacer primero el analista?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Concluir que el servicio empeoró sin necesidad de más revisión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar el control adicional para recuperar rapidez.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Analizar si la variación se explica por la complejidad de los casos y el cambio del proceso.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Mantener el mismo estándar de tiempo sin revisar contexto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Un usuario recibe una respuesta en la que el valor informado coincide con el soporte enviado, pero no coincide con el registro actualizado del sistema. ¿Qué criterio debe primar en la verificación de calidad de la información?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Exactitud y coherencia frente a los registros del sistema.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Claridad, porque el usuario entendió la respuesta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Amabilidad del mensaje, porque mejora la percepción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tiempo de emisión, porque la respuesta fue oportuna.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Una respuesta contiene todos los documentos solicitados, pero presenta fechas contradictorias entre el texto del mensaje y el soporte adjunto. ¿Qué evaluación corresponde?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La respuesta es completa, exacta y coherente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La respuesta es clara, por lo tanto suficiente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La respuesta debe considerarse correcta porque incluye soportes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La respuesta puede ser completa, pero no es coherente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál instrumento de medición de satisfacción es más pertinente para evaluar la atención de requerimientos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una pregunta abierta única sobre la imagen general de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un cuestionario centrado únicamente en la cordialidad del funcionario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una encuesta sobre preferencia de marca y precio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una encuesta breve que mida claridad, oportunidad, utilidad, trato y facilidad del canal.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'Una empresa aplica encuestas de satisfacción, pero solo guarda el porcentaje total de respuestas positivas y no registra el canal, el tipo de requerimiento ni la fecha. ¿Cuál es la principal debilidad de este procedimiento?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La información no permite análisis suficientemente trazable ni comparación útil.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El resultado no sirve porque solo debería aplicarse entrevista presencial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La encuesta debió tener únicamente preguntas abiertas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'No existe debilidad, porque el promedio general es suficiente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'Una organización debe consolidar tiempos de atención, satisfacción del usuario, incidencias y hallazgos de calidad del mes. ¿Cuál formato resulta más adecuado?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una carta individual a cada usuario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un reporte de seguimiento que integre indicadores, incidencias, interpretación y recomendaciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una lista de correos enviados por el equipo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un resumen verbal en reunión sin soporte documental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'En un dashboard mensual aparecen estos datos: tiempos dentro de plazo 91 %, satisfacción en claridad 68 %, reaperturas 12 %, incidencias documentales 3. ¿Qué hallazgo tiene mayor peso para la mejora inmediata?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El tiempo en plazo, porque es el indicador más alto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Las incidencias documentales, porque el número 3 es exacto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La combinación entre baja claridad y alta reapertura.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Ninguno, porque el dashboard solo sirve para presentar datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Una empresa detecta que los casos reabiertos se concentran en respuestas de validación tributaria. Las encuestas muestran baja utilidad de la respuesta y el listado de incidencias repite “información incompleta”. ¿Cuál es la oportunidad de mejora más consistente?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar el número de requerimientos recibidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cambiar toda la plataforma tecnológica de inmediato.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar las encuestas de satisfacción porque generan sesgo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Rediseñar las plantillas y la revisión previa para ese tipo de respuesta.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál situación describe mejor una causa raíz y no solo un síntoma?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los usuarios reportan que las respuestas son poco claras.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Hay más casos reabiertos este mes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'No existe revisión previa obligatoria antes del cierre en casos complejos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La satisfacción cayó 10 puntos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Si la principal falla del servicio está en la baja claridad de las respuestas y en el aumento de reaperturas, ¿qué acción debería priorizarse?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambiar completamente el canal de atención.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumentar el número total de requerimientos atendidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Suspender la medición de satisfacción del usuario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ajustar plantillas de respuesta y reforzar la revisión previa al cierre.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Una organización detecta retrasos frecuentes porque todos los requerimientos pasan por una sola persona antes del cierre. ¿Qué tipo de ajuste corresponde primero?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ajuste de satisfacción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ajuste del proceso y de la asignación de responsabilidades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ajuste exclusivo del lenguaje del mensaje.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ajuste de imagen corporativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál propuesta es más coherente con criterios institucionales para modificar tiempos de atención?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir todos los plazos sin revisar capacidad operativa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mantener los plazos históricos aunque el servicio cambió.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Diferenciar tiempos según complejidad del requerimiento y capacidad del proceso.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Dejar que cada analista defina su propio plazo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Cuál modelo de mensaje mejora de manera más directa la claridad de la respuesta al usuario?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un mensaje estructurado por asunto, verificación realizada, resultado, soporte y paso siguiente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Un mensaje largo con todos los antecedentes normativos posibles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un mensaje con lenguaje técnico especializado para demostrar rigor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un mensaje breve que solo diga “su caso fue atendido”.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Un caso aún no puede cerrarse porque falta validar un soporte adicional. ¿Cuál respuesta es más adecuada según una guía de comunicación clara?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '“Espere, todavía no se sabe”.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '“Su requerimiento está pendiente por razones internas”.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '“No es posible atender su solicitud por ahora”.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                '“Se realizó revisión inicial y está en validación complementaria; el resultado se comunicará una vez se contraste el soporte faltante”.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Cuál evidencia documenta mejor la implementación de una acción de mejora?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un instructivo actualizado, fecha de aplicación, responsables definidos y registro de seguimiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El comentario informal de un coordinador.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La impresión general del equipo sobre que “parece funcionar”.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un correo sin anexo ni control posterior.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            'Una empresa ajustó sus plantillas de respuesta para mejorar claridad. ¿Cuál indicador es más pertinente para verificar el impacto de esa mejora?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Número total de usuarios registrados en la base de datos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducción de respuestas corregidas y aumento de satisfacción con claridad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cantidad de reuniones del equipo realizadas al mes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Número de correos enviados por el área.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'Una mejora fue diseñada, aplicada en piloto y luego comparada con los resultados previos para decidir si debía mantenerse o ajustarse. ¿Qué lógica de mejora se está utilizando?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Clasificación documental.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Benchmarking externo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ciclo PHVA.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Muestreo aleatorio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Una acción de mejora mostró buenos resultados durante dos semanas, pero luego dejó de aplicarse porque solo una persona conocía el nuevo procedimiento. ¿Qué faltó principalmente?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mayor volumen de requerimientos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar el seguimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cambiar el nombre del procedimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estandarización y sostenibilidad de la mejora.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cuál situación refleja mejor un sistema de gestión de calidad aplicado a la atención de requerimientos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La empresa tiene indicadores, auditorías, documentación, seguimiento y revisión de mejoras sobre la atención.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La empresa responde casos según el criterio personal de cada funcionario experimentado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La empresa responde rápido, aunque no registre incidencias ni hallazgos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La empresa se enfoca solo en obtener satisfacción alta sin revisar exactitud ni tiempos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
