export default {
  global: {
    Name:
      'Seguimiento, calidad y mejora continua en la atención de requerimientos del usuario',
    Description:
      'El seguimiento, la calidad y la mejora continua en la atención de requerimientos del usuario permiten evaluar el desempeño del servicio mediante tiempos, exactitud, satisfacción y hallazgos para identificar desviaciones y orientar ajustes en procesos, canales, respuestas y prácticas institucionales. Su estudio fortalece el control, la oportunidad, la consistencia y la efectividad de la atención con resultados verificables y medibles.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Verificación de la calidad en la atención de requerimientos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Indicadores de calidad del servicio y tiempos de respuesta',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Exactitud, completitud y coherencia de la información entregada',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Instrumentos de medición de satisfacción del usuario',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Registro de incidencias, no conformidades y hallazgos de calidad',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Reportes de seguimiento e indicadores de atención',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Análisis de resultados e identificación de oportunidades de mejora',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Lectura de indicadores y análisis de desviaciones',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Análisis de frecuencia, causas raíz, patrones e impacto de incidencias y no conformidades',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Oportunidades de mejora en el servicio al usuario',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Priorización y viabilidad de acciones de mejora',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Indicadores de seguimiento a acciones de mejora',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Diseño de ajustes en procesos, tiempos y canales de atención',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Criterios institucionales para la modificación de procesos y tiempos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Ajustes en procesos, tiempos y canales',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Modelos de mensajes y guías de comunicación',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Validación y documentación de los ajustes',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Integración de mejoras al servicio',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Mejora continua en el servicio	28',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Ciclo PHVA aplicado a la atención de requerimientos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Implementación de acciones de mejora',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Seguimiento y evaluación de las mejoras',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Estandarización de prácticas mejoradas',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Trabajo colaborativo para sostener la mejora',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Sistemas de gestión de calidad aplicables al servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Normas aplicables, certificaciones y estándares',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Auditorías y documentación de calidad',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Indicadores de control del servicio	37',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Mejora continua y seguimiento del sistema',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Sostenibilidad de las mejoras implementadas',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Acción de mejora',
      significado:
        'medida concreta que se diseña e implementa para corregir una falla, fortalecer un proceso o aumentar la calidad de la atención.',
    },
    {
      termino: 'Auditoría',
      significado:
        'revisión sistemática de procesos, registros y evidencias para verificar si el servicio se presta conforme a criterios definidos y para identificar oportunidades de mejora.',
    },
    {
      termino: '<em>Benchmarking</em>',
      significado:
        'comparación de prácticas, resultados o procesos con referentes internos o externos para identificar formas más efectivas de prestar el servicio.',
    },
    {
      termino: 'Calidad del servicio',
      significado:
        'grado en que la atención prestada satisface las necesidades y expectativas del usuario en términos de oportunidad, claridad, utilidad y consistencia.',
    },
    {
      termino: 'Causa raíz',
      significado:
        'origen principal de un problema o desviación en el servicio, cuya identificación permite plantear acciones de mejora más efectivas.',
    },
    {
      termino: 'Ciclo PHVA',
      significado:
        'método de mejora continua basado en las fases planear, hacer, verificar y actuar, aplicado para ordenar y evaluar cambios en el servicio.',
    },
    {
      termino: 'Estandarización',
      significado:
        'incorporación de una mejora al funcionamiento habitual del servicio mediante guías, formatos, procedimientos o prácticas compartidas.',
    },
    {
      termino: 'Hallazgo',
      significado:
        'situación identificada durante la revisión o evaluación del servicio que evidencia una fortaleza, una debilidad o una necesidad de ajuste.',
    },
    {
      termino: 'Incidencia',
      significado:
        'evento o situación que afecta el desarrollo normal de la atención y que debe registrarse para su análisis y seguimiento.',
    },
    {
      termino: 'Indicador',
      significado:
        'medida utilizada para evaluar el comportamiento del servicio, comparar resultados y apoyar decisiones de mejora.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'proceso permanente de revisión, ajuste y fortalecimiento del servicio para aumentar su efectividad y responder mejor a las necesidades del usuario.',
    },
    {
      termino: 'No conformidad',
      significado:
        'incumplimiento de un criterio, procedimiento o condición esperada en la prestación del servicio.',
    },
    {
      termino: 'Retroalimentación',
      significado:
        'información proveniente del usuario, del equipo o del seguimiento del servicio que permite valorar resultados e identificar oportunidades de mejora.',
    },
    {
      termino: 'Seguimiento',
      significado:
        'observación y control periódico del comportamiento del servicio o de una acción de mejora para verificar su cumplimiento y su efecto.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'capacidad de una mejora para mantenerse en el tiempo y consolidarse dentro de la operación habitual del servicio.',
    },
  ],
  referencias: [
    {
      referencia: 'Cifuentes, B. P. (2014). Auditoría del servicio. Dialnet. ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=5204436',
    },
    {
      referencia:
        'Herrera, J. E. (2018). Gerencia del servicio: La clave para ganar todos (4.ª ed.). ECOE Ediciones.',
      link: '',
    },
    {
      referencia:
        'ICONTEC. (2020). Certificación ISO 9001. Sistema de gestión de calidad. ',
      link:
        'https://www.icontec.org/eval-conformidad/certificacion-iso-9001-sistema-de-gestion-de-calidad/',
    },
    {
      referencia: 'ISO. (2017, enero 13). Retroalimentación del cliente. ',
      link:
        'https://www.icontec.org/wp-content/uploads/2019/08/36.-Retroalimentacio%CC%81n-del-cliente.pdf',
    },
    {
      referencia:
        'ISO. (s.f.). Gestión de la calidad: El camino hacia la mejora continua. ',
      link: '',
    },
    {
      referencia:
        'ISO. (s.f.). ISO 9001:2015 sistemas de gestión de calidad - Requisitos. ',
      link: 'https://www.iso.org/obp/ui/es/#iso:std:iso:9001:ed-5:v1:es',
    },
    {
      referencia:
        'ISO. (s.f.). Principios de gestión de la calidad: La base del éxito. ',
      link: '',
    },
    {
      referencia:
        'ISO. (s.f.). Sistemas de gestión de la calidad: Introducción. ',
      link: '',
    },
    {
      referencia:
        'Murillo Moreno, L. (2018). Fundamentos de servicio al cliente. Fundación Universitaria del Área Andina.',
      link: '',
    },
    {
      referencia:
        'Ordóñez Vélez, K. F. (2020). La calidad del servicio al cliente como ventaja competitiva en las microempresas de servicio. 593 Digital Publisher CEIT, 5(5-1), 4–15. ',
      link: 'https://doi.org/10.33386/593dp.2020.5-1.310',
    },
    {
      referencia:
        'Ortiz, Ó. C. (2020). Teoría y práctica bajo la norma ISO. ECOE Ediciones.',
      link: '',
    },
    {
      referencia:
        'Pérez Fernández de Velasco, J. A. (1994). Gestión de la calidad empresarial: Calidad en los servicios y atención al cliente. ESIC Editorial.',
      link: '',
    },
    {
      referencia:
        'Tello Condor, A. M. (2023). Metodología Deming (PHVA) en el mejoramiento de procesos productivos en la Empresa “Inoxidables Élite” de la ciudad de Riobamba – Ecuador. Latam Revista Latinoamericana de Ciencias Sociales y Humanidades, 4(3), 943–953. ',
      link: 'https://revistalatam.redilat.org/index.php/lt/article/view/1124',
    },
    {
      referencia:
        'Uribe Macías, M. (2013). Modelo de gestión de la calidad en el servicio al cliente: propuesta para las grandes superficies. Revista Lebret, 5, 333–354.',
      link: '',
    },
    {
      referencia:
        'Vega, M. E. (2014). Calidad y servicio: Conceptos y herramientas (3.ª ed.). ',
      link: 'https://books.google.com.co/books?id=cM-iDwAAQBAJ',
    },
    {
      referencia:
        'Zavala Choez, F. N. (2020). La gestión de la calidad y el servicio al cliente como factor de competitividad en las empresas de servicios - Ecuador. Dominio de las Ciencias, 6(3), 264–281.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del ecosistema virtual de recuersos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Andrea Tello Zambrano',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Jose Calderon Gutierrez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
