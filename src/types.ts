export type ServiceCategory = 
  | "monitoreo_ambiental"
  | "monitoreo_biologico"
  | "monitoreos_ocupacionales"
  | "estudios_ambientales";

export interface ServiceItem {
  id: string;
  number: string;
  category: ServiceCategory;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  secondaryImage?: string;
  imageLabels?: { primary: string; secondary: string };
  iconName: string;
  subservices: string[];
  parametersSample: string[];
  normativaReferencia: string;
  deliverables: string[];
}

export interface SectorItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  keyServices: string[];
  regulations: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  sector: "Energía" | "Minería" | "Infraestructura" | "Industria";
  location: string;
  service: string;
  year: string;
  description: string;
  image: string;
  metrics: { label: string; value: string }[];
  isSamplePlaceholder: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  actionWord: string;
  description: string;
  technicalDetails: string[];
  badge: string;
}

export interface EnvironmentalStudyInstrument {
  id: string;
  code: string;
  name: string;
  category: "Declaración" | "Estudio Detallado" | "Modificación" | "Cierre" | "Evaluación Preliminar";
  level: string;
  purpose: string;
  applicability: string;
  typicalAuthority: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: "Monitoreo Ambiental" | "Estudios Ambientales" | "Monitoreo Biológico" | "Seguridad y Salud Ocupacional" | "Normativa" | "Gestión Ambiental";
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
  author: {
    name: string;
    role: string;
  };
  image: string;
  tags: string[];
}

export interface QuoteFormData {
  nombre: string;
  empresa: string;
  cargo: string;
  correo: string;
  telefono: string;
  ubicacion: string;
  sector: string;
  servicio: string;
  mensaje: string;
}

export interface ServiceFinderAnswer {
  needType?: string;
  projectStage?: string;
  urgency?: string;
  region?: string;
}

export interface ServiceRecommendation {
  recommendedServiceId: string;
  title: string;
  category: string;
  justification: string;
  recommendedScope: string[];
  regulatoryBasis: string;
}
