import { 
  ServiceItem, 
  SectorItem, 
  ProjectItem, 
  ProcessStep, 
  EnvironmentalStudyInstrument, 
  BlogPost 
} from '../types';

export const TRUST_INDICATORS = [
  {
    id: "trust-1",
    title: "Conocimiento técnico",
    description: "Equipo multidisciplinario de ingenieros ambientales, químicos, biólogos y especialistas en higiene ocupacional.",
    icon: "GraduationCap"
  },
  {
    id: "trust-2",
    title: "Soluciones integrales",
    description: "Acompañamos desde la línea base y diseño ambiental hasta el monitoreo operativo y cumplimiento ante fiscalizadores.",
    icon: "Boxes"
  },
  {
    id: "trust-3",
    title: "Información confiable",
    description: "Protocolos validados, equipos calibrados y análisis con laboratorios acreditados para datos de máxima certeza legal.",
    icon: "ShieldCheck"
  },
  {
    id: "trust-4",
    title: "Atención personalizada",
    description: "Enfoque adaptado a la geografía, sector productivo y cronograma operativo específico de cada cliente.",
    icon: "Handshake"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "monitoreo-ambiental",
    number: "01",
    category: "monitoreo_ambiental",
    title: "MONITOREO AMBIENTAL",
    shortDescription: "Evaluación cuantitativa y cualitativa de componentes físicos con instrumentación calibrada y metodologías normadas.",
    fullDescription: "Realizamos programas de monitoreo ambiental sistemático para verificar el cumplimiento de los Estándares de Calidad Ambiental (ECA) y Límites Máximos Permisibles (LMP) en matrices de aire, agua superficial y subterránea, suelo y ruido ambiental.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80", // Scientific water/field sample analysis
    iconName: "Activity",
    subservices: [
      "Aire (PM10, PM2.5, PTS, gases CO, SO2, NO2, O3, COVs)",
      "Agua superficial, subterránea, marina y efluentes industriales",
      "Suelo (metales pesados, hidrocarburos TPH, plaguicidas)",
      "Ruido ambiental continuo diurno y nocturno, vibraciones"
    ],
    parametersSample: [
      "Material particulado PM10 / PM2.5 con muestreadores de alto y bajo volumen",
      "Multiparámetro in-situ: pH, conductividad, oxígeno disuelto, turbidez, ORP",
      "Monitoreo sonométrico Tipo 1 calibrado con bandas de octava",
      "Cromatografía de gases y espectrometría ICP-MS"
    ],
    normativaReferencia: "D.S. 003-2017-MINAM (ECA Aire), D.S. 004-2017-MINAM (ECA Agua), D.S. 011-2017-MINAM (ECA Suelo), D.S. 085-2003-PCM (ECA Ruido).",
    deliverables: [
      "Informe técnico con interpretación estadística y mapas de dispersión",
      "Certificados de calibración de equipos de campo",
      "Informes de ensayo de laboratorio acreditado ante INACAL",
      "Comparativa contra líneas base e historial de tendencias"
    ]
  },
  {
    id: "monitoreo-biologico",
    number: "02",
    category: "monitoreo_biologico",
    title: "MONITOREO BIOLÓGICO",
    shortDescription: "Caracterización de biodiversidad en flora y fauna silvestre para la conservación y cumplimiento de compromisos ambientales.",
    fullDescription: "Diseñamos e implementamos inventarios y monitoreos biológicos estacionales (época húmeda y época seca) en ecosistemas terrestres y acuáticos, registrando especies endémicas, protegidas o bajo categoría de amenaza.",
    image: "/images/gallito_de_las_rocas_peru.jpg",
    secondaryImage: "/images/orquideas_peru_flora.jpg",
    imageLabels: {
      primary: "Gallito de las Rocas",
      secondary: "Orquídea Peruana"
    },
    iconName: "Trees",
    subservices: [
      "Flora y vegetación (transectos, parcelas de evaluación, cactáceas, orquídeas)",
      "Fauna silvestre (mastofauna, ornitofauna, herpetofauna)",
      "Hidrobiología (perifiton, macroinvertebrados bentónicos, fitoplancton, ictiofauna)",
      "Evaluación de hábitats críticos y planes de rescate biológico"
    ],
    parametersSample: [
      "Redes de niebla para aves y murciélagos con protocolos SERFOR",
      "Trampas Tomahawk, Sherman y cámaras trampa nocturnas",
      "Índices de diversidad (Shannon-Wiener, Simpson, riqueza de Margalef)",
      "Identificación taxonómica botánica con claves especializadas"
    ],
    normativaReferencia: "D.S. 004-2014-MINAGRI (Especies amenazadas de fauna), D.S. 043-2006-AG (Flora silvestre amenazada), Guías SERFOR y convenios CITES.",
    deliverables: [
      "Línea base biológica detallada con cartografía georreferenciada",
      "Catálogo fotográfico de especies y fichas de avistamiento",
      "Mapa de sensibilidad biológica del área de influencia",
      "Medidas de mitigación y plan de manejo de hábitats"
    ]
  },
  {
    id: "monitoreos-ocupacionales",
    number: "03",
    category: "monitoreos_ocupacionales",
    title: "MONITOREOS OCUPACIONALES",
    shortDescription: "Evaluación integral de agentes de riesgo en el entorno de trabajo para la salud del colaborador y cumplimiento legal.",
    fullDescription: "Cuantificamos la exposición de los colaboradores a agentes físicos, químicos, biológicos, ergonómicos y factores psicosociales en cumplimiento de la Ley N° 29783 de Seguridad y Salud en el Trabajo y la R.M. 375-2008-TR.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80", // Technical engineer with measuring instruments
    iconName: "HardHat",
    subservices: [
      "Agentes físicos (ruido dosimétrico y sonométrico, vibración mano-brazo y cuerpo entero, iluminación, estrés térmico)",
      "Agentes químicos (polvo respirable e inhalable, humos metálicos, gases, vapores orgánicos)",
      "Agentes biológicos (bacterias, hongos, levaduras en ambientes laborales cerrados)",
      "Evaluación disergonómica (métodos REBA, RULA, OWAS, NIOSH, manipulación de cargas)",
      "Evaluación psicosocial (método CoPsoQ-istas21 o SUSESO-ISTAS)"
    ],
    parametersSample: [
      "Dosímetros de ruido con ponderación A y C integrados por jornada",
      "Luxómetros digitales calibrados según niveles mínimos por tarea visual",
      "Medidor de estrés térmico TGBH (temperatura de globo y bulbo húmedo)",
      "Trenes de muestreo personal con bombas gravimétricas de flujo constante"
    ],
    normativaReferencia: "Ley N° 29783, D.S. 005-2012-TR, R.M. 375-2008-TR (Norma básica de ergonomía y de procedimiento de evaluación de riesgo disergonómico).",
    deliverables: [
      "Informe técnico de higiene y ergonomía ocupacional firmado por especialista",
      "Matriz de evaluación de riesgos por puesto de trabajo",
      "Recomendaciones de control en la fuente, medio y receptor",
      "Sustento para auditorías de SUNAFIL y fiscalizaciones del sector"
    ]
  },
  {
    id: "estudios-ambientales",
    number: "04",
    category: "estudios_ambientales",
    title: "ESTUDIOS AMBIENTALES",
    shortDescription: "Elaboración de instrumentos de gestión ambiental para viabilizar la certificación de proyectos ante las autoridades competentes.",
    fullDescription: "Desarrollamos instrumentos de gestión ambiental preventivos, correctivos y complementarios (SEIA) conforme a los términos de referencia vigentes ante Senace, Ministerios (Minem, Produce, MTC, Minam, Vivienda) y entidades competentes.",
    image: "/images/estudios_ambientales_peru.jpg", // Estudios ambientales e ingeniería en el Perú
    iconName: "FileCheck",
    subservices: [
      "Evaluación Preliminar (EVAP) y solicitud de clasificación",
      "Declaración de Impacto Ambiental (DIA - Categoría I)",
      "Estudio de Impacto Ambiental Semidetallado (EIA-sd - Categoría II)",
      "Estudio de Impacto Ambiental Detallado (EIA-d - Categoría III)",
      "Informe Técnico Sustentatorio (ITS) para modificaciones no significativas",
      "Ficha Técnica Socioambiental (FITSA) para sectores aplicables",
      "Planes de Cierre de Minas, Canteras e Instalaciones Industriales"
    ],
    parametersSample: [
      "Modelamiento de calidad de aire (AERMOD, CALPUFF)",
      "Modelamiento acústico ambiental (SoundPLAN / CadnaA)",
      "Zonificación ecológica y análisis multicriterio SIG",
      "Estrategias de manejo ambiental (PMA) y planes de contingencia"
    ],
    normativaReferencia: "Ley del SEIA N° 27446, D.S. 019-2009-MINAM, reglamentos de protección ambiental sectoriales (D.S. 040-2014-EM, D.S. 017-2015-PRODUCE, etc.).",
    deliverables: [
      "Expediente técnico completo físico y digital para mesa de partes",
      "Mapas temáticos en alta resolución con estándares IGN / WGS84",
      "Plan de Participación Ciudadana y talleres informativos",
      "Acompañamiento técnico hasta la obtención de la Certificación Ambiental"
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "MEDIR",
    subtitle: "Rigor en campo",
    actionWord: "Adquisición directa",
    description: "Capturamos variables ambientales y ocupacionales in-situ utilizando sensores de alta fidelidad, muestreadores certificados y protocolos estandarizados.",
    technicalDetails: [
      "Calibración diaria previa y posterior con patrones trazables",
      "Cadena de custodia estricta bajo estándares ISO 17025",
      "Georreferenciación diferencial submétrica de cada estación",
      "Condiciones meteorológicas sincrónicas registradas en tiempo real"
    ],
    badge: "Precisión de campo"
  },
  {
    number: "02",
    title: "ANALIZAR",
    subtitle: "Certeza analítica",
    actionWord: "Procesamiento",
    description: "Examinamos las muestras en laboratorios con acreditación INACAL mediante espectrometría, cromatografía y análisis estadístico robusto.",
    technicalDetails: [
      "Ensayos bajo métodos normalizados (EPA, Standard Methods, ASTM)",
      "Verificación de duplicados, blancos de campo y de viaje",
      "Tratamiento estadístico multivariado y límites de detección",
      "Consistencia fisicoquímica de balances iónicos"
    ],
    badge: "Acreditación INACAL"
  },
  {
    number: "03",
    title: "INTERPRETAR",
    subtitle: "Modelamiento científico",
    actionWord: "Contextualización",
    description: "Cruzamos los resultados con la normativa aplicable (ECA, LMP, normas técnicas), líneas base históricas y modelos de dispersión tridimensionales.",
    technicalDetails: [
      "Modelos de pluma de dispersión atmosférica y acústica",
      "Evaluación de estacionalidad climática (húmeda / seca)",
      "Identificación de anomalías geogénicas vs. aportes antrópicos",
      "Evaluación de riesgo acumulativo y sinérgico"
    ],
    badge: "Análisis Normativo"
  },
  {
    number: "04",
    title: "DECIDIR",
    subtitle: "Estrategia corporativa",
    actionWord: "Solución técnica",
    description: "Transformamos los hallazgos técnicos en planes de acción ejecutables, mitigación de riesgos y respaldo legal ante entidades fiscalizadoras.",
    technicalDetails: [
      "Sustento técnico concluyente para OEFA, Senace, Sunafil y ministerios",
      "Optimización de costos en medidas de control preventivo",
      "Prevención de sanciones administrativas y paralizaciones de obra",
      "Garantía de licencia social y sostenibilidad operativa"
    ],
    badge: "Certeza Gerencial"
  }
];

export const SECTORS_DATA: SectorItem[] = [
  {
    id: "energia",
    name: "ENERGÍA",
    slug: "energia",
    description: "Proyectos de generación eólica, solar, hidroeléctrica y líneas de transmisión eléctrica de alta tensión.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80", // Wind turbines
    keyServices: ["Monitoreo de ornitofauna y quirópteros", "Estudios de Impacto Ambiental (DIA / EIA-sd)", "Monitoreo de ruido ambiental y campos electromagnéticos"],
    regulations: "Reglamento para la Protección Ambiental en las Actividades Eléctricas (D.S. 014-2019-EM)."
  },
  {
    id: "mineria",
    name: "MINERÍA",
    slug: "mineria",
    description: "Exploración minera, operaciones a tajo abierto, subterráneas, plantas de beneficio y monitoreo participativo comunitario.",
    image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80", // Large scale infrastructure/quarry
    keyServices: ["Línea base ambiental física y biológica", "Monitoreo de calidad de agua y efluentes", "Monitoreo de vibraciones por voladura y polvo respirable"],
    regulations: "Reglamento de Protección y Gestión Ambiental para Exploración (D.S. 042-2017-EM) y Explotación (D.S. 040-2014-EM)."
  },
  {
    id: "construccion",
    name: "CONSTRUCCIÓN",
    slug: "construccion",
    description: "Obras civiles de gran envergadura, complejos comerciales, urbanizaciones y edificaciones sostenibles.",
    image: "/images/sector_construccion.jpg", // Modern construction engineering site in Peru
    keyServices: ["Planes de Manejo Ambiental de obra", "Monitoreo sonométrico y control de emisiones", "Monitoreo ocupacional de ruido y polvo para cuadrillas"],
    regulations: "Reglamento de Protección Ambiental en el Sector Vivienda, Construcción y Saneamiento (D.S. 015-2012-VIVIENDA)."
  },
  {
    id: "industria",
    name: "INDUSTRIA",
    slug: "industria",
    description: "Plantas de manufactura, siderurgia, procesamiento de alimentos, bebidas, química y bienes intermedios.",
    image: "/images/sector_industria.jpg", // Industrial plant and manufacturing facility
    keyServices: ["Diagnóstico Ambiental Preliminar (DAP) y DIA", "Monitoreo de efluentes industriales y emisiones de chimenea", "Evaluación integral de ergonomía y agentes químicos"],
    regulations: "Reglamento de Gestión Ambiental para la Industria Manufacturera y Comercio Interno (D.S. 017-2015-PRODUCE)."
  },
  {
    id: "hidrocarburos",
    name: "HIDROCARBUROS",
    slug: "hidrocarburos",
    description: "Transporte por ductos, plantas de almacenamiento de combustibles, terminales marinos y estaciones de servicio.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80", // Energy pipeline infrastructure
    keyServices: ["Informes Técnicos Sustentatorios (ITS) para modificaciones", "Monitoreo de hidrocarburos en agua y suelo (TPH, BTEX)", "Planes de abandono y contingencias"],
    regulations: "Reglamento para la Protección Ambiental en las Actividades de Hidrocarburos (D.S. 039-2014-EM)."
  },
  {
    id: "sector-publico",
    name: "SECTOR PÚBLICO",
    slug: "sector-publico",
    description: "Gobiernos regionales, municipalidades provinciales y distritales, entidades gestoras y empresas prestadoras públicas.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80", // Modern municipal/corporate hall
    keyServices: ["Evaluaciones ambientales estratégicas", "Líneas de base para proyectos de inversión pública (Invierte.pe)", "Monitoreos de calidad ambiental en cuencas prioritarias"],
    regulations: "Ley General del Ambiente N° 28611 y Sistema Nacional de Gestión Ambiental (Ley N° 28245)."
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Monitoreo de Calidad de Aire y Ruido en Parque Eólico Costa Sur",
    sector: "Energía",
    location: "Ica, Perú",
    service: "Monitoreo Ambiental",
    year: "2025",
    description: "Campaña estacional integral de monitoreo de partículas en suspensión (PM10 y PM2.5) y niveles de presión sonora diurna y nocturna en el área de influencia directa e indirecta del parque eólico.",
    image: "/images/monitoreo_aire_desierto.jpg",
    metrics: [
      { label: "Estaciones evaluadas", value: "12 puntos" },
      { label: "Cumplimiento normativo", value: "100% ECA" },
      { label: "Periodo", value: "Bimestral" }
    ],
    isSamplePlaceholder: true
  },
  {
    id: "proj-2",
    title: "Monitoreo Biológico Estacional y Plan de Manejo de Fauna en Unidad Minera",
    sector: "Minería",
    location: "Moquegua, Perú",
    service: "Monitoreo Biológico",
    year: "2025",
    description: "Evaluación de comunidades de aves altoandinas, micromamíferos y formaciones vegetales de bofedal en época húmeda y seca para la actualización del Plan de Manejo Ambiental ante Senace.",
    image: "/images/vizcacha_andina.jpg",
    metrics: [
      { label: "Transectos de flora", value: "24 transectos" },
      { label: "Cámaras trampa", value: "18 unidades" },
      { label: "Altitud de operación", value: "4,200 msnm" }
    ],
    isSamplePlaceholder: true
  },
  {
    id: "proj-3",
    title: "Monitoreo de Higiene Ocupacional y Ergonomía en Planta de Ensamblaje",
    sector: "Industria",
    location: "Lima, Perú",
    service: "Monitoreos Ocupacionales",
    year: "2024",
    description: "Monitoreo dosimétrico de ruido por puesto de trabajo, estrés térmico, partículas respirables y evaluación disergonómica mediante método REBA en líneas de producción continua.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    metrics: [
      { label: "Puestos monitoreados", value: "45 puestos" },
      { label: "Agentes evaluados", value: "5 tipos" },
      { label: "Auditoría SUNAFIL", value: "Conforme" }
    ],
    isSamplePlaceholder: true
  },
  {
    id: "proj-4",
    title: "Informe Técnico Sustentatorio (ITS) para Optimización de Ruta de Transporte",
    sector: "Infraestructura",
    location: "Arequipa, Perú",
    service: "Estudios Ambientales",
    year: "2024",
    description: "Desarrollo del expediente técnico y modelamiento acústico para la modificación no significativa de trazado de accesos viales y canteras auxiliares en proyecto vial interdepartamental.",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80",
    metrics: [
      { label: "Longitud de variante", value: "18.4 km" },
      { label: "Aprobación técnica", value: "Sector MTC" },
      { label: "Tiempo de trámite", value: "Optimizado" }
    ],
    isSamplePlaceholder: true
  },
  {
    id: "proj-5",
    title: "Monitoreo Hidrobiológico y Calidad de Agua en Cuenca Hidrográfica Sur",
    sector: "Minería",
    location: "Arequipa / Moquegua, Perú",
    service: "Monitoreo Ambiental",
    year: "2024",
    description: "Muestreo periódico de agua superficial en 16 estaciones de control cuenca arriba y cuenca abajo, evaluando macroinvertebrados bentónicos e índices bióticos de calidad de ribera.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
    metrics: [
      { label: "Puntos de muestreo", value: "16 estaciones" },
      { label: "Parámetros fisicoquímicos", value: "48 parámetros" },
      { label: "Acreditación", value: "INACAL" }
    ],
    isSamplePlaceholder: true
  },
  {
    id: "proj-6",
    title: "Declaración de Impacto Ambiental (DIA) para Central Solar Fotovoltaica 80MW",
    sector: "Energía",
    location: "Moquegua, Perú",
    service: "Estudios Ambientales",
    year: "2025",
    description: "Elaboración integral del instrumento de gestión ambiental que incluyó línea base física, biológica y social, plan de contingencias y talleres participativos presenciales.",
    image: "/images/solar_fotovoltaica.jpg",
    metrics: [
      { label: "Área de concesión", value: "140 hectáreas" },
      { label: "Capacidad proyectada", value: "80 MW" },
      { label: "Estado", value: "Aprobado" }
    ],
    isSamplePlaceholder: true
  }
];

export const ENVIRONMENTAL_INSTRUMENTS: EnvironmentalStudyInstrument[] = [
  {
    id: "evap",
    code: "EVAP",
    name: "Evaluación Preliminar",
    category: "Evaluación Preliminar",
    level: "Fase Inicial de Clasificación",
    purpose: "Determina la categoría de riesgo ambiental que corresponde a un nuevo proyecto de inversión pública o privada.",
    applicability: "Aplica a proyectos no clasificados anticipadamente en los listados de inclusión del SEIA.",
    typicalAuthority: "Senace / Ministerio del Sector correspondiente"
  },
  {
    id: "dia",
    code: "DIA",
    name: "Declaración de Impacto Ambiental",
    category: "Declaración",
    level: "Categoría I - Impactos Leves",
    purpose: "Certifica proyectos cuya ejecución no genera impactos ambientales negativos de significación.",
    applicability: "Instalaciones comerciales medianas, pequeñas centrales, almacenes, obras de mantenimiento o mejora menor.",
    typicalAuthority: "Produce, MTC, Minem, Vivienda, Gobiernos Regionales"
  },
  {
    id: "eia-sd",
    code: "EIA-sd",
    name: "Estudio de Impacto Ambiental Semidetallado",
    category: "Estudio Detallado",
    level: "Categoría II - Impactos Moderados",
    purpose: "Establece medidas de mitigación para impactos ambientales moderados que pueden ser prevenidos o controlados fácilmente.",
    applicability: "Líneas de transmisión eléctrica, carreteras de mediana escala, ampliaciones industriales moderadas.",
    typicalAuthority: "Senace / Direcciones Generales de Asuntos Ambientales"
  },
  {
    id: "eia-d",
    code: "EIA-d",
    name: "Estudio de Impacto Ambiental Detallado",
    category: "Estudio Detallado",
    level: "Categoría III - Impactos Significativos",
    purpose: "Evaluación exhaustiva multidisciplinaria para proyectos de gran envergadura con impactos cuantitativos y cualitativos significativos.",
    applicability: "Grandes proyectos mineros, refinerías, autopistas de primer orden, hidroeléctricas de gran potencia, puertos internacionales.",
    typicalAuthority: "Senace (Servicio Nacional de Certificación Ambiental)"
  },
  {
    id: "its",
    code: "ITS",
    name: "Informe Técnico Sustentatorio",
    category: "Modificación",
    level: "Modificación No Significativa",
    purpose: "Permite aprobar mejoras tecnológicas, reubicación de componentes o variaciones auxiliares sin alterar los impactos del IGA principal.",
    applicability: "Aplica a proyectos que ya cuentan con certificación ambiental aprobada y requieren modificaciones no sustanciales.",
    typicalAuthority: "Senace / Autoridad sectorial correspondiente"
  },
  {
    id: "fitsa",
    code: "FITSA",
    name: "Ficha Técnica Socioambiental",
    category: "Evaluación Preliminar",
    level: "Instrumento Complementario Simplificado",
    purpose: "Instrumento ágil para proyectos de infraestructura básica y de intervención inmediata que no están en el SEIA estricto.",
    applicability: "Mantenimiento periódico de vías, defensas ribereñas, obras de contingencia y servicios básicos menores.",
    typicalAuthority: "MTC / Ministerios sectoriales"
  },
  {
    id: "plan-cierre",
    code: "Plan de Cierre",
    name: "Plan de Cierre / Abandono",
    category: "Cierre",
    level: "Post-Operación y Cese",
    purpose: "Garantiza la estabilidad física, química e hidrológica del área intervenida al finalizar la vida útil de las instalaciones.",
    applicability: "Exigible en minería, hidrocarburos, industria y rellenos de seguridad antes del cese de actividades.",
    typicalAuthority: "OEFA / Minem / Produce / Osinergmin"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    title: "Actualización de Estándares de Calidad Ambiental (ECA): Consideraciones para el cumplimiento en 2026",
    slug: "actualizacion-estandares-calidad-ambiental-2026",
    category: "Normativa",
    readTime: "5 min de lectura",
    date: "18 Feb 2026",
    excerpt: "Análisis comparativo de las obligaciones de fiscalización ambiental de OEFA y criterios para la selección adecuada de puntos de control en aire, agua y suelo.",
    content: [
      "El cumplimiento de los Estándares de Calidad Ambiental (ECA) representa uno de los mayores desafíos técnicos para los titulares de proyectos de inversión en el Perú.",
      "A diferencia de los Límites Máximos Permisibles (LMP), que miden la concentración de sustancias en la fuente o efluente directo, los ECA miden la calidad del cuerpo receptor en el ambiente general.",
      "Para garantizar que los resultados tengan validez ante inspecciones de OEFA, es imprescindible utilizar laboratorios acreditados ante INACAL bajo la norma ISO/IEC 17025 y seguir los protocolos de muestreo oficiales vigentes."
    ],
    author: {
      name: "Ing. Carlos Mendoza",
      role: "Especialista Senior en Calidad Ambiental"
    },
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
    tags: ["ECA", "OEFA", "Monitoreo", "Normativa Ambiental"]
  },
  {
    id: "post-2",
    title: "Informe Técnico Sustentatorio (ITS) vs. Modificación del EIA: Criterios técnicos de decisión",
    slug: "informe-tecnico-sustentatorio-its-vs-modificacion-eia",
    category: "Estudios Ambientales",
    readTime: "7 min de lectura",
    date: "04 Feb 2026",
    excerpt: "Cuándo es viable tramitar un ITS de 30 a 45 días y cuándo la autoridad exigirá una Modificación del Estudio de Impacto Ambiental (MEIA).",
    content: [
      "Cuando una empresa operadora necesita realizar mejoras tecnológicas o incorporar componentes auxiliares a sus operaciones, surge la pregunta crítica: ¿tramitamos un ITS o una Modificación del EIA?",
      "El Informe Técnico Sustentatorio (ITS) fue concebido por el D.S. 054-2013-PCM como un mecanismo célere para cambios que generen impactos ambientales negativos no significativos.",
      "Para que un proyecto califique a un ITS, los componentes propuestos no deben ubicarse sobre ecosistemas frágiles, no deben demandar un incremento sustancial en el uso de recursos hídricos y no deben exceder las capacidades de mitigación aprobadas."
    ],
    author: {
      name: "Dra. Sofía Alarcón",
      role: "Consultora en Instrumentos de Gestión Ambiental"
    },
    image: "/images/estudios_ambientales_peru.jpg",
    tags: ["ITS", "Senace", "Certificación Ambiental", "EIA"]
  },
  {
    id: "post-3",
    title: "Monitoreo Biológico Estacional: Importancia de la representatividad en épocas húmeda y seca",
    slug: "monitoreo-biologico-estacional-epoca-humeda-seca",
    category: "Monitoreo Biológico",
    readTime: "6 min de lectura",
    date: "22 Ene 2026",
    excerpt: "Cómo la estacionalidad climática en los Andes y la costa peruana condiciona los patrones migratorios y la fenología de la vegetación silvestre.",
    content: [
      "La biodiversidad en los ecosistemas peruanos presenta una marcada dinámica estacional. Realizar evaluaciones biológicas en un único periodo del año conduce frecuentemente a subestimar la riqueza y composición comunitaria.",
      "En época de lluvias (húmeda), se incrementa la disponibilidad de recursos tróficos, florecen especies anuales y se activan poblaciones de anfibios y reptiles.",
      "En contraste, durante la época seca se revelan los refugios clave y las especies residentes adaptadas a condiciones de aridez extrema. Senace y SERFOR exigen ambas ventanas temporales para líneas base confiables."
    ],
    author: {
      name: "Biol. Fernando Quispe",
      role: "Jefe de Biodiversidad y Ecología de Campo"
    },
    image: "/images/peru_biodiversidad_monitoreo.jpg",
    tags: ["Biodiversidad", "Flora y Fauna", "SERFOR", "Línea Base"]
  },
  {
    id: "post-4",
    title: "Agentes Ocupacionales Críticos: Estructura de un programa anual según la R.M. 375-2008-TR",
    slug: "agentes-ocupacionales-criticos-programa-anual",
    category: "Seguridad y Salud Ocupacional",
    readTime: "5 min de lectura",
    date: "12 Ene 2026",
    excerpt: "Directrices para la medición de ruido dosimétrico, iluminación en puestos de trabajo, vibraciones mecánicas y evaluaciones ergonómicas.",
    content: [
      "La Ley N° 29783 obliga a todos los empleadores a realizar monitoreos de agentes físicos, químicos, biológicos, ergonómicos y psicosociales al menos una vez al año.",
      "El error más común es contratar mediciones puntuales sin haber elaborado previamente una Matriz IPERC que priorice los grupos de exposición similar (GES).",
      "Un programa exitoso no solo entrega datos numéricos, sino que jerarquiza las medidas de control en la ingeniería de procesos, protegiendo la salud del trabajador y blindando a la compañía ante fiscalizaciones de SUNAFIL."
    ],
    author: {
      name: "Ing. Mariana Paredes",
      role: "Especialista en Higiene y Ergonomía Industrial"
    },
    image: "/images/monitoreo_ocupacional_higiene.jpg",
    tags: ["Higiene Ocupacional", "Ergonomía", "SUNAFIL", "Salud en el Trabajo"]
  }
];
